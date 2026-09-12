export interface RegisterReq{
    name:string,
    email:string,
    password:string,
    role:string
}

/*
{
    "message":"user registered successfully",
    "user":{
        "email":"rohan13@gmail.com",
        "role":"user",
        "id":"6aa075b1560bee8f4c052762",
        "name":"rohan"
    }
}
*/

export interface RegisterRes{
    message:string,
    user:{
        email:string,
        name:string,
        role:string,
        id:string
    },
    token:string
}

/*
{
    "message":"Login successful",
    "user":{
        "id":"6aa075b1560bee8f4c052762",
        "role":"user",
        "email":"rohan13@gmail.com"
        }
    }
*/

export interface LoginReq{
    email:string,
    password:string
}