import React, { useEffect, useState } from "react";
import { Digit } from "./digit.jsx";

const Home = () => {
	const [timer, setTimer] = useState(0)

	useEffect(() => {
		setTimeout(() => {
			setTimer(value => value + 1)
		}, 1000)

	}, [timer])

	return (
		< main className="text-center" >
			<section className="time-counter">
				<Digit number={<span className="fa fa-clock"></span>} />
				<Digit number={Math.floor(timer / 100000) % 10} />
				<Digit number={Math.floor(timer / 10000) % 10} />
				<Digit number={Math.floor(timer / 1000) % 10} />
				<Digit number={Math.floor(timer / 100) % 10} />
				<Digit number={Math.floor(timer / 10) % 10} />
				<Digit number={Math.floor(timer % 10)} />
			</section>
		</main >
	);
}












export default Home;
