
import api from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { ReuseIdea, ReuseIdeaReq, WasteAnalysis } from "@/models/reuseIdeas";

export const aiService={

    reuseIdea:async(req:ReuseIdeaReq) : Promise<WasteAnalysis>=>{

        const data=new FormData();

        if (req.image) {
                        data.append("image", {
                                uri: req.image.uri,
                                name: req.image.name,
                                type: req.image.type,
                        } as any);
                    }   
        
        
        const item=await api.post(endpoints.REUSE_ITEMS,data)

        return item.data

    }
}