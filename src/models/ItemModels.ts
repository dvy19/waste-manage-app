export interface ItemReq{
    name:string,
    quantity:number,
    weight:number,
    category:string

}

export interface ItemResponse{

    name:string,
    quantity:number,
    weight:number,
    category:string,
    trackingId:string,
    status:string,
    processingMethod:string,
    createdAt:string,
    updateAt:string

}

export interface UserStats{
    message:string,
    stats:{
        itemsAdded:number,
        points:number,
        user:string
    }

}


export interface TrackItemRes{
    message:string,
    item:ItemResponse
}