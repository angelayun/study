const fs = require('fs');
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const { transformFromAst } = require('@babel/core')
// 找到入口文件  如果有依赖的话找到依赖路径
const entry = (entryFile) => {
    const content = fs.readFileSync(entryFile, 'utf-8')
    const ast = parser.parse(content, {
        sourceType: 'module'
    })
    const dependencies = {}
    traverse(ast, {
        ImportDeclaration ({ node }) {
            const dirname = path.dirname(entryFile)
            const newPath = './' + path.join(dirname, node.source.value)
            dependencies[node.source.value] = newPath
        }
    })
    // console.log(dependencies)
    const { code } = transformFromAst(ast, null, {
        presets: ["@babel/preset-env"]
    })
    return {
        code,
        entryFile,
        dependencies,
    }
}


// 分析出所有依赖
const getDependencies = (entryFile) => {
    const info = entry(entryFile)
    const modules = []
    modules.push(info);
    for (let i = 0; i < modules.length; i++) {
        const item = modules[i];
        const { dependencies } = item
        if (dependencies) {
            for (const j in dependencies) {
                modules.push(entry(dependencies[j]))
            }
        }

    }

    const obj = {}
    modules.forEach((item) => {
        obj[item.entryFile] = {
            code: item.code,
            dependencies: item.dependencies,
        };
    })
    return obj;
}

// 生成代码
const genCode = (entryFile) => {
    const obj = getDependencies(entryFile)
    const graph = JSON.stringify(obj);
    const bundle = `(function(graph){
        
        function require(module){
            function localRequire(relativePath){
                return require(graph[module].dependencies[relativePath])
            }
            var exports={};
            (function(require,exports,code){
                eval(code)
            })(localRequire,exports,graph[module].code)
            return exports;
        }
        require('${entryFile}')
    })(${graph})`
    fs.writeFileSync(path.resolve(__dirname, './dist/main.js'), bundle, 'utf-8')

}
genCode('./src/index.js')