import React, { useState, useEffect } from "react";
import axios from "axios";

const Bio = username => {
	const [RepoData, setRepoData] = useState("");

	useEffect(() => {
		async function getRepoData() {
			setStatusMessage("Retrieving Data");
			try {
				let data = await axios.get(`https://api.github.com/users/${username}/repos/`);
				setRepoData(data);
			} catch (err) {
				console.warn(err);
				setStatusMessage(`Oops there\'s been an issue! ${err.message}`);
			}
		}
		getRepoData();
	}, [username]);

	return (
		<div>
			<p>{RepoData}</p>
		</div>
	);
};

export default Bio;
