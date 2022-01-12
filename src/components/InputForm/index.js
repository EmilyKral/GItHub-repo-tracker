import React, { useState } from "react";

function InputForm() {
	const [username, setUsername] = useState("");
	const [nameInput, setNameInput] = useState("");

	const handleInput = e => setNameInput(e.target.value);

	const handleFormSubmit = e => {
		e.preventDefault();
		setUsername(nameInput);
		setNameInput("");
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<label htmlFor="username">Username</label>
			<input
				type="text"
				id="username"
				name="username"
				placeholder="Type GitHub username"
				value={nameInput}
				onChange={handleInput}
			/>
			<input type="submit" value="submit" />
		</form>
	);
}

export default InputForm;
