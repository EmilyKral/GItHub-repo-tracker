import React, { useContext } from "react";
import { InputForm, Bio } from "../../components";

function Home({ updateUsername }) {
	return (
		<>
			<InputForm updateUsername={updateUsername} />
			<Bio />
		</>
	);
}

export default Home;
