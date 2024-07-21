import React from 'react'
import styles from './FriendListItem.module.css'

function FriendListItem({ avatar, name, isOnline }) {
	return (
			<li className={styles.friendsItem}>
				<img src={avatar} alt='Avatar' width={48} />
				<p className={styles.friendsDescr}>{name}</p>
				<p className={isOnline ? styles.online : styles.offline}>
					{isOnline ? "Online" : "Offline"}
				</p>
			</li>
	)
}

export default FriendListItem