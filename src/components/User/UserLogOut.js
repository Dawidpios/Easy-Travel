import React from 'react';
import { useDispatch } from 'react-redux';
import { LOG_OUT } from '../../redux/appActions';
import { Link } from "react-router-dom"

const UserLogOut = () => {
    const dispatch = useDispatch()

    const logOut = (e) =>{
        e.preventDefault()
        dispatch({type:LOG_OUT})
    }
    return ( 
        <>
        <button onClick={logOut}><Link to="/">Wyloguj</Link></button>
        </>
     );
}
 
export default UserLogOut
