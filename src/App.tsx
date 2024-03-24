
import { useState } from "react"
import Gneres from "./components/genres"
import { useGames } from './hooks/useGames'
import Header from "./components/header"
import GamesPlatforms from './components/platforms'
import LikesLogo from '../public/like.svg'
import TargetLogo from '../public/target-logo.png'


const App = () => {

const [selectId, setSelectId] = useState<number | null>(null)
const [searchTitle, setSearchTitle] = useState<string | null>(null)
const [platforms, setPlatforms] = useState<number | null>(null)


  
  const {games, error} = useGames(selectId, searchTitle, platforms)

  // console.log(games?.results);
  

  if(error instanceof Error) return <p>{error.message}</p>


  return (
    <div className="w-full px-16 pt-4">
      <Header onSearch={(title:string) => setSearchTitle(title)}  />
      <main>
          <div className="flex gap-4">
            <Gneres onSelect={(id: number) => setSelectId(id)} />
           <div className="w-full max-w-[85%]">
            <GamesPlatforms onPlatforms={(pIndex:(number | null)) => setPlatforms(pIndex)} />
            <h1 className="text-4xl font-bold mb-7 text-white">Games</h1>

           <ul className='w-full grid grid-cols-4 gap-4'>
              
              {games?.results.map(game =>(
                <li className='mb-3 shadow-md pb-6 bg-slate-900 text-white' key={game.id}>
                  <img className='w-full h-[220px] object-cover rounded-t-md mb-5' src={game.background_image} alt="" />
                  <span className="flex items-center justify-between px-4 mb-5">
                    <img className="w-full max-w-[30px]" src={Number(game.rating) > 4 ? LikesLogo : TargetLogo } alt="" />
                    <p className="bg-[#42af7e] text-white px-2 py-1 rounded-md">{game.metacritic}</p>
                  </span>
                  <h2 className='text-xl font-bold px-4'>{game.name}</h2>
                </li>
              ))}
            </ul>

           </div>
          </div>
      </main>
    </div>
  )
}

export default App