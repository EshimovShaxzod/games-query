import {usePlatforms} from '../hooks/usePlatforms'


const gamePlatforms= ({onPlatforms} : { onPlatforms: (pIndex:(number | null)) => void}) => {
    const {platforms, error} = usePlatforms();
    
    if(error instanceof Error) return <p>{error.message}</p>

    const select = document.querySelector(".select")

    const handleSelect = (evt: any) => {
        
        select?.childNodes.forEach((item, index) => {

            if(evt.target.value === item.textContent){
                onPlatforms(index)
            }
        })
    }

    return (
        <select onChange={handleSelect} className='px-5 py-3 mb-5 select rounded-md bg-slate-800 text-white'>
            <option hidden defaultValue="Platforms">Platforms</option>
            {platforms?.results.slice(0,10).map((platform) => (
                <option id={String(platform.id)} key={platform.id} defaultValue={platform.name}>{platform.name}</option>
            ))}
        </select>
    )

}

export default gamePlatforms