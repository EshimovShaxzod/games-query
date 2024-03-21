import {usePlatforms} from '../hooks/usePlatforms'


const gamePlatforms= ({onPlatforms} : { onPlatforms: (pIndex:(number | null)) => void}) => {
    const {platforms, error} = usePlatforms();
    
    if(error instanceof Error) return <p>{error.message}</p>

    const select = document.querySelector(".select")

    const handleSelect = (evt: any) => {
        
        
        select?.childNodes.forEach((b, index) => {

            if(evt.target.value === b.value){
                onPlatforms(index)
            }
        })
    }

    return (
        <select onChange={handleSelect} className='px-5 py-3 mb-5 select rounded-md'>
            <option hidden defaultValue="Platforms">Platforms</option>
            {platforms?.results.slice(0,14).map((platform) => (
                <option key={platform.id} defaultValue={platform.name}>{platform.name}</option>
            ))}
        </select>
    )

}

export default gamePlatforms