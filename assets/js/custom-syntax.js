(function () {
    window['$docsify'].plugins = [].concat([
        // Restores initial <title>
        function (hook, vm) {
            var titleElm = document.querySelector("title");
            var rootTitle = titleElm && titleElm.textContent;
            var pageTitlePrefix = window['$docsify'].name
                ? window['$docsify'].name + " - "
                : "";
            if (rootTitle) {
                hook.doneEach(function () {
                    var currentTitle = titleElm.textContent;
                    var isRoot = !/\/[a-z]/.test(location.hash);
                    var newTitle = isRoot
                        ? rootTitle
                        : pageTitlePrefix + currentTitle;
                    titleElm.textContent = newTitle;
                });
            }
        },
        // btn和badge渲染
        function (hook, vm) {
            var config = {
                "<span class='btn'>$1</span>": /\#b\ ?(.*?)\#/g,
                "<span class='badge'>$1</span>": /\#d\ ?(.*?)\#/g,
                "---\n**本章主笔**：$1": /\#s\ ?(.*?)\#/g,
            };
            hook.beforeEach(function (html) {
                for (var i in config)
                    html = html.replace(config[i], i);
                return html;
            });
        },
    ], window['$docsify'].plugins);
})();
