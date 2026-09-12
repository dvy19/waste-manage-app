import { LoginReq, RegisterReq, RegisterRes } from "@/models/AuthModels";

import api from '../api/axios'
import { endpoints } from "@/api/endpoints";
import { LocationDetails, LocationResponse  , UserProfileRes} from "@/models/UserModels";

import { tokenStorage } from "./tokenStorage";

export const authService={

    register:async(req:RegisterReq) :Promise<RegisterRes>=>{

        const data= await api.post(endpoints.REGISTER , req)

        return data.data

    },

    login:async(req:LoginReq):Promise<RegisterRes>=>{
        
        const login=await  api.post(endpoints.LOGIN,req)

        return login.data
    },

    createProfile:async(req:LocationDetails):Promise<LocationResponse>=>{

        const token=await tokenStorage.getAccessToken()

        const data=await api.post(endpoints.CREATE_PROFILE , req)

        return data.data
    },

    getUser:async():Promise<UserProfileRes>=>{
        
        const prof=await api.get(endpoints.GET_USER_PROF)
        return prof.data

    }


}