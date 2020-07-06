/********************** 数据存储 **********************/

// localStorage
export const setLocal = (key, value) => {
    if (key && value) {
        const val = JSON.stringify(value)
        localStorage.setItem(key, val)
    } else {
        throw new Error(`Missing 'key' or 'value'`)
    }
}
export const getLocal = key => JSON.parse(localStorage.getItem(key))
export const RemoveLocal = key => { localStorage.removeItem(key) }

// sessionStorage
export const setSession = (key, value) => {
    if (key && value) {
        const val = JSON.stringify(value)
        sessionStorage.setItem(key, val)
    } else {
        throw new Error(`Missing 'key' or 'value'`)
    }
}
export const getSession = key => JSON.parse(sessionStorage.getItem(key))
export const RemoveSession = key => { sessionStorage.removeItem(key) }

/********************** 数据存储 end **********************/

/********************** 判断数据类型 **********************/

export const isObj = obj => Object.prototype.toString.call(obj) === "[object Object]"

export const isArr = obj => Object.prototype.toString.call(obj) === "[object Array]"

export const isNull = obj => Object.prototype.toString.call(obj) === "[object Null]"

export const isUndefined = obj => Object.prototype.toString.call(obj) === "[object Undefined]"

/********************** 判断数据类型 END **********************/