import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Character = () => {
	const { id } = useParams();
	const [character, setCharacter] = useState({});

	useEffect(() => {
		async function getCharacter() {
			let response = await fetch("https://dragonball-api.com/api/characters/" + id)
			let data = await response.json()
			setCharacter(data)
		}
		getCharacter()
	}, [])
	console.log(character)
	return (
		<>
			<img src={character.image} />
			<div>{character.name}</div>
		</>
	);
};