import React, {useEffect, useState} from 'react'

const BASE_URL = 'https://api.harvardartmuseums.org';
const KEY = 'apikey=cb5e16a7-60b7-4781-9d3f-c901d476aff0';
const OBJ_URL = `${BASE_URL}/object?${KEY}`


function SearchBar() {

    const [art, setArt] = useState(null)

    useEffect(() => {
        fetch(OBJ_URL)
            .then(res => res.json())
            .then(data => setArt(data.records))
            .catch(err => console.log(err))
    },[])

    console.log(art)

  return (
    <div>
        {art && art.map(x => <h2 key={x.id}>{x.title}</h2>)}
    </div>
  )
}

export default SearchBar