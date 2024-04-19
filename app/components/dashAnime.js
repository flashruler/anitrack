export const Dash = async (props) => {
  return (
    <div className="flex flex-row my-5">
      <div className="bg-blue-200 mx-1 p-1 rounded-md">
        {" "}
        <h1 className="text-lg">Score: {props.score}/10</h1>{" "}
      </div>
      <div className="bg-green-200 mx-1 p-1 rounded-md">
        {" "}
        <h1 className="text-lg">Rank: {props.rank}</h1>{" "}
      </div>
      <div className="bg-yellow-200 mx-1 p-1 rounded-md">
        {" "}
        <h1 className="text-lg">Episodes: {props.episodes}</h1>{" "}
      </div>
      {console.log(props.genres)}
      {props.genres.map((anime) => (
        <div key={anime.mal_id} className="bg-orange-300 mx-1 p-1 rounded-md">
          <h1 key={anime.mal_id} className="text-lg">
            {anime.name}
          </h1>
        </div>
      ))}
    </div>
  );
};
