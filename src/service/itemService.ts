import { ItemReq, ItemResponse, TrackItemRes, UserStats } from '@/models/ItemModels'
import api from '../api/axios'
import { endpoints } from '@/api/endpoints'


export const itemService={

    createItem:async(req:ItemReq):Promise<ItemResponse>=>{

        const data=await api.post(endpoints.CREATE_ITEM,req)

        return data.data

    },

    trackItem:async(trackingId:string):Promise<TrackItemRes>=>{

        const data=await api.get(`${endpoints.TRACK_ITEM(trackingId)}`)

        return data.data

    },


    getUserStats:async():Promise<UserStats>=>{

        const stats=await api.get(endpoints.USER_STATS)
        return stats.data

    }
}