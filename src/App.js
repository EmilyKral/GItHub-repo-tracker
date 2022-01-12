import React, { useState } from "react";
import { Home } from "./pages";
import { Header, Footer } from "./layout";
import { Username } from "./contexts";
// import "./App.css";

function App() {
	const [username, setUsername] = useState("");

	const updateUsername = name => setUsername(name);

	return (
		<Username.Provider value={username}>
			<Header />
			<Home updateUsername={updateUsername} />
			<Footer />
		</Username.Provider>
	);
}

export default App;
