(function(graph){
        
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
        require('./src/index.js')
    })({"./src/index.js":{"code":"\"use strict\";\n\nvar _hello = require(\"./hello.js\");\n\ndocument.write((0, _hello.say)('webpack!!!'));","dependencies":{"./hello.js":"./src/hello.js"}},"./src/hello.js":{"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.say = say;\n\nvar _word = require(\"./word.js\");\n\nfunction say(name) {\n  return 'hello' + name + '---' + (0, _word.say2)();\n}","dependencies":{"./word.js":"./src/word.js"}},"./src/word.js":{"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.say2 = say2;\n\nfunction say2() {\n  return 'word';\n}","dependencies":{}}})