import * as SecureStore from "expo-secure-store";

const ACCESS_TOKEN = "access_token";
const REFRESH_TOKEN = "refresh_token";

export const tokenStorage = {

    saveTokens: async (access: string) => {
        await SecureStore.setItemAsync(ACCESS_TOKEN, access);
    },

    getAccessToken: async () => {
        return await SecureStore.getItemAsync(ACCESS_TOKEN);
    },

    saveRole:async(role:string)=>{
        await SecureStore.setItemAsync("role",role)
    },

    getRole:async()=>{
        return await SecureStore.getItemAsync("role")
    },

    removeRole: async () => {
        await SecureStore.deleteItemAsync("role");
    },

    clearTokens: async () => {
        await SecureStore.deleteItemAsync(ACCESS_TOKEN);
    }
};