import { Dash } from "../components/dashAnime";
import addData from "../../firebase/firestore/addData"
import getDocument from "../../firebase/firestore/getData"
import { getCookies } from "cookies-next";

export const DisplayDash = (props) => {
  const uid = getCookies("UID")
  const data = getDocument("users",uid)

  // function mergeList(list1,value){
  //   if (list1.includes(value))
  //     return list1
  //   else
  //     list1.push(value)
  //     return list1
  // }

  async function addList() {
    console.log("data = " + data)
    // let list = data.data.anime
    // console.log("list = " + data)
    // mergeList(list,mal_id)
    // addData("users", props.uid, list)
  }


  return (
    <div className="flex flex-row justify-center w-3/4 bg-white rounded-md">
      <div className="p-5">
        <img className="h-auto" src={props.data.images.jpg.image_url}></img>
      </div>
      <div className="flex flex-col w-3/4 h-auto text-3xl font-light p-5">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl">{props.data.title}</h1>
          <button className="bg-blue-200 p-2 rounded-md m-1 text-lg" onClick={() => console.log(data)}>Like</button>
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
