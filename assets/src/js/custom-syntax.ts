(() => {
	window['$docsify'].plugins = [].concat(
		[
			// Restores initial <title>
			(hook: any, vm: any): void => {
				var titleElm = document.querySelector("title");
				var rootTitle = titleElm && titleElm.textContent;
				var pageTitlePrefix = window['$docsify'].name
					? window['$docsify'].name + " - "
					: "";

				if (rootTitle) {
					hook.doneEach((): void => {
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
			(hook: any, vm: any): void => {
				let config = {
					"<span class='btn'>$1</span>": /\#b\ ?(.*?)\#/g,
					"<span class='badge'>$1</span>": /\#d\ ?(.*?)\#/g,
					"<img src='$1' class='inline-img' alt='$1'/>": /\#i\ ?(.*?)\#/g,
					"---\n**本章主笔**：$1": /\#s\ ?(.*?)\#/g,
				};
				hook.beforeEach((html: string): string => {
					for (let i in config) html = html.replace(config[i], i);
					return html;
				});
			},
		],
		window['$docsify'].plugins
	);
})();