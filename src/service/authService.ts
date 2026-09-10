import { LoginReq, RegisterReq, RegisterRes } from "@/models/AuthModels";

import api from '../api/axios'
import { endpoints } from "@/api/endpoints";
import { LocationDetails, LocationResponse } from "@/models/UserModels";

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

        const data=await api.post(endpoints.CREATE_PROFILE , req)

        return data.data
    }

}