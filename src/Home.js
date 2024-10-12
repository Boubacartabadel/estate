import axios from 'axios'
import React, { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    axios.get('http://localhost:8081/')
    .then(res => console.log(res))
    .catch(err => console.log(err));

  }, [])

  return (
    <div>Home</div>
  )

}
