module.exports = {
    plugins: [
        // 如果仅仅是下面这一行设置的话并不起作用，
        // require("autoprefixer")()
        // 需要下面这样配置多一点浏览器兼容才可能会生成对应的前缀
        require("autoprefixer")({
            overrideBrowserslist: ["last 2 versions", ">1%"]
            //autoprefixer新版本中browsers替换成overrideBrowserslist
        })
    ]

}