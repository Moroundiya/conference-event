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

				<img
					src={logo}
					alt=""
				/>
			</div>
		</div>
	);
}

export default App;
