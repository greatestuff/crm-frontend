import { getUserPending, getUserSuccess, getUserFail } from './userSlice';
import { getUser } from "../../api/userApi"


export const getUserProfile = () => async(dispatch) =>{
    dispatch(getUserPending())

    try {
        const data = await getUser()
        dispatch(getUserSuccess(data.user))
        
        } catch (error) {
        dispatch(getUserFail(error))
    }
}

