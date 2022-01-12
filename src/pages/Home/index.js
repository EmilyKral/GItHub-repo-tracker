import React, { useContext, useEffect, useState } from "react";
import { InputForm, Bio, RepoList } from "../../components";
import { Username } from "../../contexts";

import axios from "axios";

function Home({ updateUsername }) {
	const username = useContext(Username);
	const [repoData, setRepoData] = useState();
	const [userData, setUserData] = useState();

	useEffect(() => {
		async function getRepoData() {
			// setStatusMessage("Retrieving Data");
			try {
				let uData = await axios.get(`https://api.github.com/users/${username}`);
				console.log("uData", uData.data.name);
				setUserData(uData.data);
				console.log("user", userData);
				let rData = await axios.get(`https://api.github.com/users/${username}/repos`);
				setRepoData(rData.data);
				console.log("repo", repoData);
			} catch (err) {
				console.warn(err);
				// setStatusMessage(`Oops there\'s been an issue! ${err.message}`);
			}
		}
		getRepoData();
	}, [username]);

	console.log("user data before return", userData);
	return (
		<>
			<InputForm updateUsername={updateUsername} />
			{username && (
				<>
					<Bio userData={userData} />
					<RepoList repoData={repoData} />
				</>
			)}
		</>
	);
}

export default Home;
