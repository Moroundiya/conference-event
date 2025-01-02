import "./App.css";
import patternLines from "./assets/images/pattern-lines.svg";
import lineTop from "./assets/images/pattern-squiggly-line-top.svg";
import patternCircle from "./assets/images/pattern-circle.svg";
import lineBottom from "./assets/images/pattern-squiggly-line-bottom.svg";
import logo from "./assets/images/logo-full.svg";
import uploadIcon from "./assets/images/icon-upload.svg";
import infoIcon from "./assets/images/icon-info.svg";

function App() {
	return (
		<div className="w-full h-auto bg-desktop-bg bg-cover bg-no-repeat bg-center relative">
			<div
				className="w-full h-[1500px] bg-center bg-cover bg-no-repeat relative py-12 flex items-center flex-col"
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
					src={patternCircle}
					alt=""
					className="pointer-events-none absolute right-[18%] top-[55%]"
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
							<div className="w-full py-8 relative rounded-xl mt-3 border-2 border-dashed border-[#757199] bg-[#1b163ecb] flex flex-col justify-center items-center">
								<input
									type="file"
									className="w-full h-full absolute top-0 left-0 z-10 opacity-0"
								/>

								<div className="bg-[#332E50] rounded-lg border border-[#7571999c] p-2 cursor-pointer">
									<img
										src={uploadIcon}
										alt=""
										className="w-8"
									/>
								</div>
								<p className="text-lg text-[#757199] mt-3">
									Drag and drop or click to upload
								</p>
							</div>
							<p className="text-[#757199] text-sm mt-2 flex items-center space-x-1">
								<img
									src={infoIcon}
									alt=""
								/>
								<span>Upload your photo (JPG or PNG, max size: 500KB).</span>
							</p>
						</div>

						<div></div>
					</form>
				</>
			</div>
		</div>
	);
}

export default App;
