import React from "react";
import "./style.css";

function Bio({ userData }) {
	return (
		<div>
			{userData && (
				<>
					<h2 id="user-name">{userData.name}</h2>
					<div id="bio-info">
						<img src={userData.avatar_url} />
						<ul id="bio-list">
							<li key="repos">Repositories: {userData.public_repos} </li>
							<li key="followers">Followers: {userData.followers} </li>
							<li key="following">Following: {userData.following} </li>
						</ul>
					</div>
				</>
			)}
		</div>
	);
}

export default Bio;
