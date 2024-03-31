"use client"
import {useState, useEffect } from 'react'
import axios from 'axios'
import { log } from 'console'

const useUserData = () => {
  const [userData, setUserData] = useState<any>(null)
  useEffect(()=>{
    const fetchData = async() => {
        try{
            const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
            setUserData(response.data.user)

        } catch(err) {
            console.log(err);
        }
    }
    fetchData();

  },[])
  return { userData }
}

export default useUserData
