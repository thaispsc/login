import axios, { AxiosError } from "axios";

interface SignIn {
    email: string,
    password: string
}


interface User extends SignIn {
    id: number,
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    age: number
}

const baseUrl = axios.create ({
    baseURL: "http://localhost:3333"
});

export const postUser = async (user: Omit<User, "id">) => {
    try {
        const response =  await baseUrl.post("/register", user);
        return response.data;
    } catch(error: any) {
        alert (`Error: ${error.response.data}`)
    }
}

export const postSignIn = async (signIn: SignIn) => {
    try {
        const response =  await baseUrl.post("/signin", signIn);
        return response.data;
    } catch(error: any) {
        alert (`Error: ${error.response.data}`)
    }
}