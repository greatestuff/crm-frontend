import axios from "axios";
export const userLogin = async(frmData)=>{


    return new Promise(async(resolve, reject) =>{
        try {

            const result = await axios.post(
            'http://localhost:3001/v1/user/login',frmData)
            resolve(result.data)

            if(result.data.status === "success")
            {
                sessionStorage.setItem('accessJWT',result.data.accessJWT)
                localStorage.setItem('crmSite',JSON.stringify({refreshJWT : result.data.accessJWT}))
            }
            
        } catch (error) {
            reject(error)
        }
    })

}

export const getUser = async()=>{


    return new Promise(async(resolve, reject) =>{
        try {

            const accessJWT = sessionStorage.getItem('accessJWT') 
            if(!accessJWT) {reject("Token not found!")}
            const result = await axios.get(
            'http://localhost:3001/v1/user/',{
                headers:{
                    Authorization : accessJWT
                }
            })
            
            resolve(result.data)
            
        } catch (error) {
            reject(error.message)
        }
    })

}

export const userLogout = async()=>{


        try {

            const accessJWT = sessionStorage.getItem("accessJWT")
            const result = await axios.delete(
            'http://localhost:3001/v1/user/logout',{
                headers:{
                    Authorization : accessJWT
                }
            })

        } catch (error) {
        }
    

}