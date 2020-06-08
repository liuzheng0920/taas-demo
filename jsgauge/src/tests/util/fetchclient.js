import fetch from 'node-fetch';

const fetchclient = async function  (url,data,method){
    const response = await fetch(url,{
        body:JSON.stringify(data),
        cache:"no-cache",
        headers:{
            'content-type': 'application/json'
        },
        mode:"cors",
        method:method
    })

    return await response.json()
}

export  default fetchclient