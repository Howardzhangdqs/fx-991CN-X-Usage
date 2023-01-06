const htmlcode: object = ((): object => {
    const entityMap: any = {
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
    
    const entityReg: any = {
        escape: RegExp('[' + Object.keys(entityMap.escape).join('') + ']', 'g'),
        unescape: RegExp('(' + Object.keys(entityMap.unescape).join('|') + ')', 'g')
    };

    const encode = (html: string): string => {
        if (typeof html !== 'string') return ''
        return html.replace(entityReg.escape, (match) => {
            return entityMap.escape[match]
        })
    };
    
    const decode = (str: string): string => {
        if (typeof str !== 'string') return ''
        return str.replace(entityReg.unescape, (match) => {
            return entityMap.unescape[match]
        })
    };

    return { encode, decode };
})();