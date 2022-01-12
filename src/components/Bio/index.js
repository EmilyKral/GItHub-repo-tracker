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
						<ul>
							<li key="repos">No. of repositories: {userData.public_repos} </li>
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
