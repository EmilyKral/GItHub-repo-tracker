import React from "react";
import { Repo } from "..";

function RepoList({ repoData }) {
	const repoList = repoData ? repoData.map(repo => <Repo data={repo} />) : "";
	console.log("repoList", repoList);
	return (
		<>
			<h2>Repositories</h2>
			<section>{repoList}</section>
		</>
	);
}

export default RepoList;
