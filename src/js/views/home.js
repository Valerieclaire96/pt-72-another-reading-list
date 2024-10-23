import React from "react";
import { CharacterCards } from "../component/characterCards";
import { PlanetCards } from "../component/planetCards";
import { TransformationCards } from "../component/transformationsCards";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<CharacterCards/>
		<PlanetCards/>
		<TransformationCards/>
	</div>
);
