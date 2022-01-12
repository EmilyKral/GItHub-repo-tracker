import React, { useContext, useEffect, useState } from "react";
import { InputForm, Bio, RepoList } from "../../components";
import { Username } from "../../contexts";

import axios from "axios";

function Home({ updateUsername }) {
	const username = useContext(Username);
	const [repoData, setRepoData] = useState();
	const [userData, setUserData] = useState();
	const [error, setError] = useState(false);

	useEffect(() => {
		async function getRepoData() {
			try {
				console.log("REQUEST");
				let uData = await axios.get(`https://api.github.com/users/${username}`);
				setUserData(uData.data);
				let rData = await axios.get(`https://api.github.com/users/${username}/repos`);
				setRepoData(rData.data);
				setError(false);
			} catch (err) {
				console.warn(err);
				setError(true);
				updateUsername("");
			}
		}
		if (username) {
			getRepoData();
		}
	}, [username]);

	return (
		<main>
			<InputForm updateUsername={updateUsername} />
			{error && <p>Something went wrong! Are you sure you entered the username correctly?</p>}
			{username && (
				<>
					<Bio userData={userData} />
					<RepoList repoData={repoData} />
				</>
			)}
		</main>
	);
}

export default Home;
