
import { useGenres } from '../hooks/useGenres'

const Gneres = ({onSelect} : {onSelect: (id:number) => void}) => {

    const { genres, error} = useGenres()

    if(error instanceof Error) return <p>{error.message}</p>


    const showGenres = ( id:number) => {
       onSelect(id)
    }

  return (
    <ul>
        <h2 className='text-2xl font-bold mb-4 text-white'>Genres</h2>
      {genres?.results.map((ganr => (
        <li className='flex items-center  mb-2 text-white hover:bg-slate-500 p-2 rounded-md' key={ganr.id}>
            <img className='w-full me-3 max-w-[50px] h-[50px] object-cover rounded-[50%]' src={ganr.image_background} alt="" />
            <button onClick={() => showGenres(ganr.id)}>{ganr.name}</button>
        </li>
      )))}
    </ul>
  )
}

export default Gneres