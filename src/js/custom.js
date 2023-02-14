window.$docsify = Object.assign(
    window.$docsify,
    {
        name: "fx-991CN X",
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
            renderer: {}
        }
    }
);

window.$docsify.markdown["renderer"]["image"] = function (url, _a, alt) {
    // console.log(url);
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

    let classes = [];

    for (let i in opt) if (opt[i]) classes.push(i);

    // console.log(classes.join(" "));

    return `<div style="text-align:center"><img src="${url}" alt="${alt}" class="${classes.join(" ")}">` +
        ("" == alt ? "" : `<figcaption>${alt}</figcaption>`) + "</div>"
}