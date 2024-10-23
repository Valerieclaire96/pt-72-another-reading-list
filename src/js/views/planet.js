import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Planet = () => {
	const { id } = useParams();
	const [planet, setPlanet] = useState({});

	useEffect(() => {
		async function getPlanet() {
			let response = await fetch("https://dragonball-api.com/api/planets/" + id)
			let data = await response.json()
			setPlanet(data)
		}
		getPlanet()
	}, [])

	return (
		<>
			<img src={planet.image} />
			<div>{planet.name}</div>
		</>
	);
};