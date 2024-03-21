import { ApiClient } from "../services/api-clients";
import  { useQuery } from "react-query";

interface Ganre {
    id: number;
    name: string;
    image_background: string;
}


const apiClient = new ApiClient<Ganre>("/genres")


const useGenres = () => {
   
  const {data: genres, error, isLoading} = useQuery({
    queryKey: ['genres'],
    queryFn:() => apiClient.getAll(),
  })

  return {genres, error, isLoading}

}

export {useGenres}

