
import {fetchData} from './components/data'
export default async function Page(){
    const data = await fetchData()
    return(<div>Homepage{console.log(data.props.season)}</div>);
}

