import "./App.css";
import patternLines from "./assets/images/pattern-lines.svg";
import lineTop from "./assets/images/pattern-squiggly-line-top.svg";
import lineBottom from "./assets/images/pattern-squiggly-line-bottom.svg";
import logo from "./assets/images/logo-full.svg";

function App() {
	return (
		<div className="w-full h-full bg-desktop-bg bg-cover bg-no-repeat bg-center relative">
			<div
				className="w-full h-full bg-center bg-cover bg-no-repeat relative py-12 flex items-center flex-col"
				style={{ backgroundImage: `url(${patternLines})` }}>
				<img
					src={lineBottom}
					alt=""
					className="pointer-events-none absolute bottom-0 left-0"
				/>
				<img
					src={lineTop}
					alt=""
					className="pointer-events-none absolute top-10 right-0"
				/>

				<>
					<img
						src={logo}
						alt=""
					/>

					<p className="pt-20 text-6xl text-white capitalize flex flex-col items-center font-bold ">
						<span>Your Journey to Coding Conf </span>{" "}
						<span>2025 Starts Here!</span>
					</p>
					<p className="text-white text-2xl mt-5">
						Secure your spot at next year's biggest coding conference.
					</p>

					<form
						action=""
						className="w-2/6 my-14">
						<div>
							<label
								htmlFor="avatar"
								className="text-xl text-white">
								Upload Avatar
							</label>
							<div className="w-full h-[100px] rounded-xl bg-green-600 mt-5"></div>
							<input type="file" />
						</div>
					</form>
				</>
			</div>
		</div>
	);
}

export default App;
