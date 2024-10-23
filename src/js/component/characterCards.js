import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CharacterCards = () => {
	const [characters, setCharacters] = useState([])
	useEffect(() => {
		async function getCharacters() {
			let response = await fetch("https://dragonball-api.com/api/characters");
			let data = await response.json();
			setCharacters(data.items)
		}
		getCharacters()
	}, [])

	return (
		<div className="d-flex col-10 overflow-auto mx-auto">
			{characters?.map((character, index) => {
				return (
					<div key={index} className="card" style={{ "minWidth": "18rem" }}>
						<img src={character.image} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{character.name}</h5>
							<Link to={"/character/" + character.id} className="btn btn-primary">Learn More</Link>
						</div>
					</div>
				)
			})
			}
		</div>
	);
};