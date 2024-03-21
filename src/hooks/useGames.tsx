import { ApiClient } from "../services/api-clients";
import { useQuery } from "react-query";


interface GameT {
    id: number;
    name: string;
    rating: string;
    metacritic: number;
    background_image: string;
}

const apiClient = new ApiClient<GameT>("/games")

const useGames = (id: (number | null), searchTitle: (string | null), platforms:(number | null)) => {
  
    const {data: games, error} = useQuery({
        queryKey: ['games', id, searchTitle, platforms],
        queryFn: () => apiClient.getAll({
            params: {
                genres: id,
                search: searchTitle,
                parent_platforms: platforms

            }
        })
    })

    return {games, error}
}

export {useGames}