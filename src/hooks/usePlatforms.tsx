import { useQuery } from "react-query";
import { ApiClient } from "../services/api-clients";


interface PlatformT {
    id: number,
    name: string,
}

const apiClient = new ApiClient<PlatformT>("/platforms");

const usePlatforms = () => {
    const {data: platforms, error} = useQuery({
        queryKey: ["platforms"],
        queryFn: () => apiClient.getAll()
    })

    // console.log(platforms);
    
    

    return  {platforms, error}
}

export {usePlatforms}



