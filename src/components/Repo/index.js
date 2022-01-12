import React, { useState } from "react";

function Repo({ data }) {
	const [seeMore, setSeeMore] = useState(false);
	const lastUpdate = data.updated_at.split("T")[0] + data.updated_at.split("T")[1].substring(0, 4);
	return (
		<div>
			<h3>
				<a href={data.url} target="_blank">
					{data.name}
				</a>
			</h3>
			<p>{data.description ? data.description : ""}</p>
			<button onClick={() => setSeeMore(!seeMore)}>See {seeMore ? "less" : "more"}</button>
			{seeMore && (
				<div>
					<p>Stargazers: {data.stargazers_count}</p>
					<p>Forks: {data.forks_count}</p>
					<p>Open issues: {data.open_issues_count}</p>
					<p>Last updated: {lastUpdate}</p>
				</div>
			)}
		</div>
	);
}

export default Repo;
