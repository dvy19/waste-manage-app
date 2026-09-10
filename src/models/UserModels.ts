export interface LocationDetails{

    pinCode:string,
    city:string,
    address:string,
    profile?: {
        uri: string;
        name: string;
        type: string;
    } | null;
    coordinates:[number, number]
}

export interface LocationResponse{

    message:string,
    data:LocationDetails
}

