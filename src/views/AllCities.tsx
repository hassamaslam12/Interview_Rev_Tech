import axios from 'axios'
import React, { useEffect } from 'react'

const AllCities = () => {

    const getApiData = async()=>{
        const response = await axios.get('https://phplaravel-917399-4846074.cloudwaysapps.com/api/city')
        console.log('response of all cities', response);
        
    }

    useEffect(()=>{
        getApiData();
    },[])

  return (
    <div>
      All Cities
    </div>
  )
}

export default AllCities
