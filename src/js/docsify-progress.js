(() => {
    function plugin(hook, vm) {
        let marginTop
        hook.mounted(function () {
            const content = document.getElementsByClassName("content")[0]
            marginTop = parseFloat(
                window.getComputedStyle(content).paddingTop.replace("px", "")
            )

            let insertDOM = `
        <div style="position: fixed; width: 100%; z-index: 999; height: ${window.$docsify["progress"].height
                };
        ${window.$docsify["progress"].position === "top"
                    ? "top: 0;"
                    : "bottom: 0;"
                }">
            <div id="progress-display" style="background-color: ${window.$docsify["progress"].color
                }; width: 0; border-radius: 2px; height: ${window.$docsify["progress"].height
                }; transition: width 0.3s;"></div>
        </div>
        `
            const mainDOM = document.getElementsByTagName("body")[0]
            mainDOM.innerHTML = mainDOM.innerHTML + insertDOM

            function switcher() {
                const body = document.getElementsByTagName("body")[0]
                if (!body.classList.contains("close")) {
                    body.classList.add("close")
                } else {
                    body.classList.remove("close")
                }
            }

            const btn = document.querySelector("div.sidebar-toggle-button")
            btn.addEventListener("click", function (e) {
                e.stopPropagation()
                switcher()
            })
        })
        let recall = () => {
            let screenHeight = parseFloat(
                window.getComputedStyle(document.getElementsByClassName("sidebar")[0])
                    .height.replace("px", "")
            )
            let scrollTop = document.body.scrollTop + document.documentElement.scrollTop
            document.getElementById("progress-display").style.width =
                Math.ceil((scrollTop / (document.body.offsetHeight - screenHeight)) * 100) + "%"
        }
        hook.ready(function () {
            window.addEventListener("scroll", recall);
            window.addEventListener("resize", recall);
        })
        hook.afterEach(() => {
            document.getElementById("progress-display").style.width = "0%"
        })
    }

    // Docsify plugin options
    window.$docsify["progress"] = Object.assign(
        {
            position: "top",
            color: "var(--theme-color,#42b983)",
            height: "3px",
        },
        window.$docsify["progress"]
    )
    window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins)
})();