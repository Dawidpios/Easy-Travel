import React from 'react';
import UserLogOut from './UserLogOut';
import UserPlayground from './UserPlayground';
import style from "./User.module.css"

const User = () => {
    return ( 
        <>
        <section className={style.UserProfile__Container}>
        <UserLogOut></UserLogOut>
        <UserPlayground></UserPlayground>
        </section>
        </>
     );
}
 
export default User;