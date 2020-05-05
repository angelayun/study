const depsGraph = `alert('aaa')`;
(function (graph) {
    function require (file) {
        var exports = {};
        (function (code) {
            eval(code)
        })(graph[file].code)
        return exports
    }
    require('${file}')
})(depsGraph)