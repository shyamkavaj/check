import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { checkUser } from '../RTK/slice/userSlice';
const Welcome = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkUser())
  },[])

  return (
    <div>
      hello
    </div>
  )
}

export default Welcome