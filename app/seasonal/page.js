import {fetchData} from '../components/getSeasonals'
import Link from 'next/link'
export default async function(){
    const data = await fetchData()
return(<div>
    {console.log(data.data)}
<div className="flex flex-row overflow-auto h-96">
              {data.data.map((anime) => (
                <Link href={'/seasonal/'+anime.mal_id} className="w-full">                
                <img
                key={anime.mal_id}
                src={anime.images.jpg.image_url}
                width="800"
                height="auto"
                className="rounded-md p-0 object-contain lg:mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
              ></img>
              </Link>

              ))}
            </div>
</div>);

}