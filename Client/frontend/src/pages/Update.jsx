import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { editUser } from '../RTK/slice/userSlice';

const Update = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(editUser())
    },[])

  return (
    <div>Update</div>
  )
}

export default Update