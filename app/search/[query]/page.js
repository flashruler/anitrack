import {fetchData} from "../../components/getAnimeQueries"
export default async function Page(params){
    const data = fetchData(params.params.query)
    console.log(data)
    return(
        <div>{params.params.query}</div>
    )
}