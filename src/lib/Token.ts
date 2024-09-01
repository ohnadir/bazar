import Cookies from "js-cookie";

export const setToken =(name:string, value: string)=>{
    Cookies.set(name, JSON.stringify(value), { expires: 7 })
}

export const getToken =(name:string)=>{
    return Cookies.get(name)
}

export const removeToken =()=>{
    Cookies.remove('token')
}

/* export const Token = {
    setToken,
    getToken,
    removeToken
} */