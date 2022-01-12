import React from "react";

const Bio = userData => {
	return (
		<div>
			<p>paragraph</p>
			<ul>
				<li>No. of repositories: {userData.public_repos} </li>
				<li>Followers: {userData.followers} </li>
				<li>Following: {userData.following} </li>
			</ul>
		</div>
	);
};

export default Bio;
