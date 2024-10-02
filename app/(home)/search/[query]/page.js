

import {fetchData} from "../../../components/getAnimeQueries"
import {DisplayDash} from "../../../components/displayData"
import { getCookie } from "cookies-next"
export default async function Page(params){
    const data = await fetchData(params.params.query)
    console.log(data[0].title)
    const uid = getCookie("UID")
    return(
        <div className="flex flex-col items-center p-2">
        {data.map((anime) => (              
            <DisplayDash className="p-3" key={anime.mal_id} data={anime} uid={uid}/> 
          ))}
    </div>
    )
}