import React from 'react'
import styles from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'

function FriendList({ friends }) {
	return (
		<div className='container'>
			<ul className={styles.friendsList}>
				{friends.map(el => (
						<FriendListItem key={el.id} {...el} />
				))}
			</ul>
		</div>
	)
}

export default FriendList