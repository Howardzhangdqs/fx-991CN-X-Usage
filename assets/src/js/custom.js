window.$docsify = Object.assign({
    name: "fx-991CN X 简明使用说明",
    repo: "",
    search: {
        paths: ["/", "/docs", "/docs/methods"],
        placeholder: "搜索",
        noData: "找不到结果",
        depth: 3
    },
    coverpage: "coverpage.md",
    homepage: "./docs/introduction.md",
    loadSidebar: "sidebar.md",
    markdown: {
        renderer: {
            image: function (url, _a, alt) {
                return `<div style="text-align:center"><img src="${url}" alt="${alt}">` +
                    ("" == alt ? "" : `<figcaption>${htmlcode.decode(alt)}</figcaption>`) +
                    "</div>"
            }
        }
    }
},
    window.$docsify
);
