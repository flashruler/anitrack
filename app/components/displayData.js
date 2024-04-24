import { Dash } from "../components/dashAnime";
export const DisplayDash = async (props) => {
  return (
    <div className="flex flex-row justify-center w-3/4 bg-white rounded-md">
      <div className="p-5">
        <img className="h-auto" src={props.data.images.jpg.image_url}></img>
      </div>
      <div className="flex flex-col w-3/4 h-auto text-3xl font-light p-5">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl">{props.data.title}</h1>
          <div className="bg-blue-200 p-2 rounded-md m-1">
            <h1 className="text-lg">Add To List</h1>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="bg-blue-200 p-2 rounded-md m-1">
            <h1 className="text-sm">{props.data.status}</h1>
          </div>
          <div className="bg-blue-300 p-2 rounded-md m-1">
            <h1 className="text-sm">{props.data.year}</h1>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl">Synopsis</h1>
          <p className="text-sm my-2s">{props.data.synopsis}</p>
        </div>
        <Dash
          score={props.data.score}
          rank={props.data.rank}
          episodes={props.data.episodes}
          genres={props.data.genres}
        />
      </div>
    </div>
  );
};
