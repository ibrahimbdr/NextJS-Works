import React from 'react'
import { useRouter } from "next/router";

const index = () => {
    const router = useRouter()
  
    React.useEffect(() => {
        router.push('/register/step/1')
    }, )
  return (
    <h2>Redirecting to registering form...</h2>
  )
}

export default index