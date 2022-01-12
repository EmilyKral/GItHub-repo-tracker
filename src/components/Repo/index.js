import React, { useState } from "react";
import "./style.css";

function Repo({ data }) {
	const [seeMore, setSeeMore] = useState(false);
	const lastUpdate =
		data.updated_at.split("T")[0] + " at " + data.updated_at.split("T")[1].substring(0, 5);

	return (
		<div className="repo">
			<h3 className="repo-name">
				<a href={data.url} target="_blank">
					{data.name}
				</a>
			</h3>
			<p className="repo-description">{data.description ? data.description : ""}</p>
			<button onClick={() => setSeeMore(!seeMore)} className="see-more">
				See {seeMore ? "less" : "more"}
			</button>
			{seeMore && (
				<div className="more-info">
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
