import React, { useContext, useEffect } from "react";
import { InputForm, Bio, RepoList } from "../../components";
import { Username } from "../../contexts";

import axios from "axios";

function Home({ updateUsername }) {
	const username = useContext(Username);
	let repoData, userData;

	useEffect(() => {
		async function getRepoData() {
			// setStatusMessage("Retrieving Data");
			try {
				let uData = await axios.get(`https://api.github.com/users/${username}`);
				userData = uData.data;
				console.log("user", userData);
				let rData = await axios.get(`https://api.github.com/users/${username}/repos`);
				repoData = rData.data;
				console.log("repo", repoData);
			} catch (err) {
				console.warn(err);
				// setStatusMessage(`Oops there\'s been an issue! ${err.message}`);
			}
		}
		getRepoData();
	}, [username]);

	return (
		<>
			<InputForm updateUsername={updateUsername} />
			{/* <Bio userData={userData} /> */}
			<RepoList repoData={repoData} />
		</>
	);
}

export default Home;
