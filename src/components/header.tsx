import GameLogo from '../../public/games.png'

const Header = ({onSearch} : {onSearch: (title:string) => void}) => {
  

  return (
    <div className='w-full mb-12 flex justify-around items-center shadow-sm'>
        <img className='w-full max-w-[250px] mt-2' src={GameLogo} alt="" />
        <form className='flex items-center w-full max-w-[60%] gap-4'>
            <input onChange={(evt) => onSearch(evt.currentTarget.value)} className='w-full text-white px-4 py-2 rounded-md outline-none bg-slate-600'  type="text" placeholder='Enter game name..' />
        </form>
    </div>
  )
}

export default Header