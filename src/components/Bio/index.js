import React, { useState, useEffect, useContext } from "react";
import { Username } from "../../contexts";
import axios from "axios";

const Bio = () => {
	const [RepoData, setRepoData] = useState("");

	const username = useContext(Username);

	useEffect(() => {
		async function getRepoData() {
			// setStatusMessage("Retrieving Data");
			try {
				let data = await axios.get(`https://api.github.com/users/${username}/repos/`);
				setRepoData(data);
			} catch (err) {
				console.warn(err);
				// setStatusMessage(`Oops there\'s been an issue! ${err.message}`);
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
