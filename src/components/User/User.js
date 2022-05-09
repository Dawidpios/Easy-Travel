import React from 'react'
import UserPlayground from './UserPlayground'
import style from './User.module.css'

const User = () => {
	return (
		<>
			<section className={style.UserProfile__Container}>
			
				<UserPlayground></UserPlayground>
			</section>
		</>
	)
}

export default User
