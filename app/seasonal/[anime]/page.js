import {fetchData} from '../../components/getSeasonals'
export default async function Page(params){
    const data = await fetchData()
    const seasonal=data.data
    const anime=seasonal.filter(function(el){
        return el.mal_id==params.params.anime;
    })


    return(<div>

        <h1>{params.params.anime}{console.log(anime)}</h1>

    </div>);
}