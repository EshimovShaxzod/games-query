import axios, {AxiosRequestConfig} from 'axios'

 interface IFetchResponse<T> {
    count: number;
    previous: string | null;
    next: string | null;
    results: T[]

}

const axiosInstance = axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: "d5ed10e722b743518f5524edc596955f"
    }

})

class ApiClient<T> {
    endpoint: string;

    constructor(endpoint:string){
        this.endpoint = endpoint
    }

    getAll = async (config?: AxiosRequestConfig) => {
        return axiosInstance.get<IFetchResponse<T>>(this.endpoint, config).then(res => res.data)
    }
}

export {ApiClient}
export default IFetchResponse