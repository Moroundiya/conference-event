import "./App.css";
import patternLines from "./assets/images/pattern-lines.svg";
import lineTop from "./assets/images/pattern-squiggly-line-top.svg";
import patternCircle from "./assets/images/pattern-circle.svg";
import lineBottom from "./assets/images/pattern-squiggly-line-bottom.svg";
import logo from "./assets/images/logo-full.svg";
import { useEffect, useState } from "react";
import { Form } from "./assets/components/Form";
import { Ticket } from "./assets/components/Ticket";

function App() {
	const [submit, setSubmit] = useState(false);

	useEffect(() => {}, [submit]);

	return (
		<div className="w-full h-auto bg-desktop-bg bg-cover bg-no-repeat bg-center relative">
			<div
				className="w-full h-auto px-4 bg-center bg-cover bg-no-repeat relative py-12 flex items-center flex-col"
				style={{ backgroundImage: `url(${patternLines})` }}>
				<p className="text-white absolute bottom-4 opacity-25 ">
					Designed by Moroundiya 😎
				</p>
				<img
					src={lineBottom}
					alt=""
					className="pointer-events-none absolute bottom-0 left-0 w-40 lg:w-auto"
				/>
				<img
					src={lineTop}
					alt=""
					className="pointer-events-none absolute top-10 right-0 w-40 lg:w-auto"
				/>
				<img
					src={patternCircle}
					alt=""
					className="pointer-events-none absolute lg:right-[18%] top-[55%] w-40 lg:w-auto"
				/>

				<>
					<img
						src={logo}
						alt=""
						className="w-[180px] lg:auto"
					/>

					<p className="pt-10 lg:pt-20 text-[1.52rem] lg:text-6xl text-white capitalize flex flex-col items-center font-bold ">
						<span>Your Journey to Coding Conf </span>{" "}
						<span>2025 Starts Here!</span>
					</p>
					<p className="text-[#757199] text-center text-lg lg:text-2xl mt-5">
						Secure your spot at next year&apos;s biggest coding conference.
					</p>

					{submit ? (
						<Ticket setSubmit={setSubmit} />
					) : (
						<Form setSubmit={setSubmit} />
					)}
				</>
			</div>
		</div>
	);
}

export default App;
