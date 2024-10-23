import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetCards = () => {
	const [planets, setPlanets] = useState([])
	useEffect(() => {
		async function getPlanets() {
			let response = await fetch("https://dragonball-api.com/api/planets");
			let data = await response.json();
			setPlanets(data.items)
		}
		getPlanets()
	}, [])

	return (
		<div className="d-flex col-10 overflow-auto mx-auto">
			{planets?.map((planet, index) => {
				return (
					<div key={index} className="card" style={{ "minWidth": "18rem" }}>
						<img src={planet.image} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{planet.name}</h5>
							<Link to={"/planet/" + planet.id} className="btn btn-primary">Learn More</Link>
						</div>
					</div>
				)
			})
			}
		</div>
	);
};