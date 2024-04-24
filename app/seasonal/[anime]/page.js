import { fetchData } from "../../components/getSeasonals";
import { Dash } from "../../components/dashAnime";
import {DisplayDash} from "../../components/displayData"
export default async function Page(params) {
  const data = await fetchData();
  const seasonal = data.data;
  const anime = seasonal.filter(function (el) {
    return el.mal_id == params.params.anime;
  });

  return (
    <div className="bg-gray-200  w-screen h-screen flex flex-col items-center p-5">
      <DisplayDash data={anime[0]}/>
    </div>
  );
}
