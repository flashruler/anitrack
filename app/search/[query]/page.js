import {fetchData} from "../../components/getAnimeQueries"
import { Dash } from "../../components/dashAnime";
export default async function Page(params){
    const data = await fetchData(params.params.query)
    console.log(data)
    return(
        <div className="flex flex-col items-center p-2">
            {data.map((anime) => (               
                <div className="flex flex-row justify-center w-3/4 bg-white rounded-md my-2">
                <div className="p-5">
                  <img className="h-auto" src={anime.images.jpg.image_url}></img>
                </div>
                <div className="flex flex-col w-3/4 h-auto text-3xl font-light p-5">
                  <div className="flex flex-row justify-between">
                    <h1 className="text-2xl">{anime.title}</h1>
                    <div className="bg-blue-200 p-2 rounded-md m-1"><h1 className="text-lg">Add To List</h1></div>
                  </div>
                  <div className="flex flex-row">
                      <div className="bg-blue-200 p-2 rounded-md m-1">
                        <h1 className="text-sm">{anime.status}</h1>
                      </div>
                      <div className="bg-blue-300 p-2 rounded-md m-1">
                        <h1 className="text-sm">{anime.year}</h1>
                      </div>
                    </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl">Synopsis</h1>
                    <p className="text-sm my-2s">{anime.synopsis}</p>
                  </div>
                  <Dash
                    score={anime.score}
                    rank={anime.rank}
                    episodes={anime.episodes}
                    genres={anime.genres}
                  />
                </div>
              </div>
              ))}
        </div>
    )
}