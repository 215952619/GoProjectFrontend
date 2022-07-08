export const getBrowser = (): string => {
    let _userAgent = navigator.userAgent // 取得浏览器的_userAgent字符串
    let _isOpera = _userAgent.indexOf('Opera') > -1 // 判断是否Opera浏览器
    let _isIE = _userAgent.indexOf('compatible') > -1 && _userAgent.indexOf('MSIE') > -1 && !_isOpera // 判断是否IE浏览器
    let _isEdge = _userAgent.indexOf('Edge') > -1 // 判断是否IE的Edge浏览器
    let _isFF = _userAgent.indexOf('Firefox') > -1 // 判断是否Firefox浏览器
    let _isSafari = _userAgent.indexOf('Safari') > -1 && _userAgent.indexOf('Chrome') === -1 // 判断是否Safari浏览器
    let _isChrome = _userAgent.indexOf('Chrome') > -1 && _userAgent.indexOf('Safari') > -1 // 判断Chrome浏览器

    // 获取方法
    const _browserName = (() => {
        if (_isIE) {
            let reIE = new RegExp('MSIE (\\d+\\.\\d+);')
            reIE.test(_userAgent)
            let _fIEVersion = parseFloat(RegExp['$1'])
            if (_fIEVersion === 7) {
                return 'IE7'
            } else if (_fIEVersion === 8) {
                return 'IE8'
            } else if (_fIEVersion === 9) {
                return 'IE9'
            } else if (_fIEVersion === 10) {
                return 'IE10'
            } else if (_fIEVersion === 11) {
                return 'IE11'
            } else {
                // IE版本过低
                return 'IE6'
            }
        }
        if (_isOpera) {
            return 'Opera'
        }
        if (_isEdge) {
            return 'Edge'
        }
        if (_isFF) {
            return 'FF'
        }
        if (_isSafari) {
            return 'Safari'
        }
        if (_isChrome) {
            return 'Chrome'
        }
        // 无法检测都是IE
        return 'IE'
    })()

    return _browserName.toLowerCase()
}
