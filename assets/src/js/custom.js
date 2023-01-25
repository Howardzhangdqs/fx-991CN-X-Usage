window.$docsify = Object.assign({
    name: "fx-991CN X 简明使用说明",
    repo: "",
    search: {
        paths: ["/", "/docs", "/docs/methods"],
        placeholder: "搜索",
        noData: "找不到结果",
        depth: 3
    },
    sidebarDisplayLevel: 2,
    coverpage: "coverpage.md",
    homepage: "./docs/introduction.md",
    loadSidebar: "sidebar.md",
    markdown: {
        renderer: {
            image: function (url, _a, alt) {
                let match = /^_([a-z]+)(\ .+)?$/.exec(alt), arg;
                if (match) arg = match[1] || "", alt = alt.replace("_" + arg, "");

                let opt = {
                    wide: true,
                    pix: true,
                };

                if (arg) {
                    if (arg.indexOf("w") >= 0) opt.wide = false;
                    if (arg.indexOf("p") >= 0) opt.pix = false;
                }

                classes = [];

                for (let i in opt) if (opt[i]) classes.push(i);

                return `<div style="text-align:center"><img src="${url}" alt="${alt}" class="${classes.join(" ")}">` +
                    ("" == alt ? "" : `<figcaption>${alt}</figcaption>`) +
                    "</div>"
            }
        }
    },
},
    window.$docsify
);
