export const fetchData = async()=>{
    const [topRes, seasonRes, mangaRes] = await Promise.all([
        fetch(`https://api.jikan.moe/v4/seasons/now`), 
        fetch(`https://api.jikan.moe/v4/top/anime`),
        fetch(`https://api.jikan.moe/v4/top/manga`)
      ]);
      const [top, season, manga] = await Promise.all([
        topRes.json(), 
        seasonRes.json(),
        mangaRes.json()
      ]);
      return { props: {season,top,manga} };
}