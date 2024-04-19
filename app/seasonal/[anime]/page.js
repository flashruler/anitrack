import { fetchData } from "../../components/getSeasonals";
import { Dash } from "../../components/dashAnime";
export default async function Page(params) {
  const data = await fetchData();
  const seasonal = data.data;
  const anime = seasonal.filter(function (el) {
    return el.mal_id == params.params.anime;
  });

  return (
    <div className="bg-gray-200  w-screen h-screen flex flex-col items-center p-5">
      <div className="flex flex-row justify-center w-3/4 bg-white rounded-md">
        <div className="p-5">
          <img className="h-auto" src={anime[0].images.jpg.image_url}></img>
        </div>
        <div className="flex flex-col w-3/4 h-auto text-3xl font-light p-5">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl">{anime[0].title}</h1>
            <div className="bg-blue-200 p-2 rounded-md m-1"><h1 className="text-lg">Add To List</h1></div>
          </div>
          <div className="flex flex-row">
              <div className="bg-blue-200 p-2 rounded-md m-1">
                <h1 className="text-sm">{anime[0].status}</h1>
              </div>
              <div className="bg-blue-300 p-2 rounded-md m-1">
                <h1 className="text-sm">{anime[0].year}</h1>
              </div>
            </div>
          <div className="flex flex-col">
            <h1 className="text-xl">Synopsis</h1>
            <p className="text-sm my-2s">{anime[0].synopsis}</p>
          </div>
          <Dash
            score={anime[0].score}
            rank={anime[0].rank}
            episodes={anime[0].episodes}
            genres={anime[0].genres}
          />
        </div>
      </div>
    </div>
  );
}
