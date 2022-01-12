import React from "react";

function Bio({ userData }) {
	console.log("userData", userData);
	return (
		<div>
			{userData && (
				<>
					<img src={userData.avatar_url} />
					<p>{userData.name}</p>
					<ul>
						<li>No. of repositories: {userData.public_repos} </li>
						<li>Followers: {userData.followers} </li>
						<li>Following: {userData.following} </li>
					</ul>
				</>
			)}
		</div>
	);
}

export default Bio;
