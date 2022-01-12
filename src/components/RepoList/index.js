import React from "react";
import { Repo } from "..";
import "./style.css";

function RepoList({ repoData }) {
	const repoList = repoData ? repoData.map(repo => <Repo data={repo} key={repo.id} />) : "";
	return (
		<>
			{repoData && (
				<>
					<h2 id="repos-header">Repositories</h2>
					<section id="repo-list">{repoList}</section>
				</>
			)}
		</>
	);
}

export default RepoList;
