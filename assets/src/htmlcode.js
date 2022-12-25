var htmlcode = (function () {
    var entityMap = {
        escape: {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&apos;',
        },
        unescape: {
            '&amp;': "&",
            '&apos;': "'",
            '&gt;': ">",
            '&lt;': "<",
            '&quot;': '"',
            "&#39;": "'",
        }
    };
    var entityReg = {
        escape: RegExp('[' + Object.keys(entityMap.escape).join('') + ']', 'g'),
        unescape: RegExp('(' + Object.keys(entityMap.unescape).join('|') + ')', 'g')
    };
    var encode = function (html) {
        if (typeof html !== 'string')
            return '';
        return html.replace(entityReg.escape, function (match) {
            return entityMap.escape[match];
        });
    };
    var decode = function (str) {
        if (typeof str !== 'string')
            return '';
        return str.replace(entityReg.unescape, function (match) {
            return entityMap.unescape[match];
        });
    };
    return { encode: encode, decode: decode };
})();
