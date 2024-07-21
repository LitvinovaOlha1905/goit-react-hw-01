import React from "react"
import styles from "./Profile.module.css"

function Profile({ name, tag, location, image, stats }) {
	return (
		<div className='container'>
			<div className={styles.profileCard}>
				<div>
					<img src={image} alt='User avatar' className={styles.profileImg} />
					<p className={styles.profileName}>{name}</p>
					<p className={styles.profileTag}>@{tag}</p>
					<p className={styles.profileLocation}>{location}</p>
				</div>

				<ul className={styles.profileList}>
					<li className={styles.profileItem}>
						<span>Followers</span>
						<span>{stats.followers}</span>
					</li>
					<li className={styles.profileItem}>
						<span>Views</span>
						<span>{stats.views}</span>
					</li>
					<li className={styles.profileItem}>
						<span>Likes</span>
						<span>{stats.likes}</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Profile
