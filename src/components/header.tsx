import GameLogo from '../../public/game-logo.png'

const Header = ({onSearch} : {onSearch: (title:string) => void}) => {
  

  return (
    <div className='w-full mb-12 flex justify-around shadow-sm'>
        <img className='w-full max-w-[180px]' src={GameLogo} alt="" />
        <form className='flex items-center w-full max-w-[60%] gap-4'>
            <input onChange={(evt) => onSearch(evt.currentTarget.value)} className='w-full bg-[#ddd] px-4 py-2 rounded-md outline-none'  type="text" placeholder='Enter game name..' />
        </form>
    </div>
  )
}

export default Header