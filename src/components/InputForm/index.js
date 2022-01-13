import React, { useState } from "react";
import "./style.css";

function InputForm({ updateUsername }) {
	const [nameInput, setNameInput] = useState("");
	const [searching, setSearching] = useState(true);

	const handleInput = e => setNameInput(e.target.value);

	const handleFormSubmit = e => {
		e.preventDefault();
		updateUsername(nameInput);
		if (nameInput) {
			setSearching(false);
		}
		setNameInput("");
	};

	return (
		<>
			{searching ? (
				<form onSubmit={handleFormSubmit}>
					<label htmlFor="username" id="username-label">
						Username:
					</label>
					<input
						type="text"
						id="username"
						name="username"
						placeholder="Type GitHub username"
						value={nameInput}
						onChange={handleInput}
						required
					/>
					<input type="submit" value="submit" id="submit" />
				</form>
			) : (
				<button
					onClick={() => {
						setSearching(true);
					}}
					id="search-again"
				>
					Search again
				</button>
			)}
		</>
	);
}

export default InputForm;
