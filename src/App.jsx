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

					<form
						action=""
						className="w-full md:w-3/5 xl:w-2/6 my-14 space-y-7 lg:space-y-5">
						<div>
							<label
								htmlFor="avatar"
								className="text-lg lg:text-xl text-white">
								Upload Avatar
							</label>
							<div className="w-full py-8 relative rounded-xl mt-3 lg:mt-2 border-2 border-dashed cursor-pointer border-[#757199] bg-[#1b163e8e] flex flex-col justify-center items-center">
								<input
									type="file"
									className="w-full h-full absolute top-0 left-0 z-10 opacity-0 cursor-pointer"
								/>

								<div className="bg-[#332E50] rounded-lg border border-[#7571999c] p-2">
									<img
										src={uploadIcon}
										alt=""
										className="lg:w-8"
									/>
								</div>
								<p className="text-sm lg:text-lg text-[#757199] mt-3">
									Drag and drop or click to upload
								</p>
							</div>
							<p className="text-[#757199] text-[13px] lg:text-sm mt-2 flex items-center space-x-1">
								<img
									src={infoIcon}
									alt=""
								/>
								<span>Upload your photo (JPG or PNG, max size: 500KB).</span>
							</p>
						</div>

						<div>
							<label
								htmlFor="name"
								className="text-lg lg:text-xl text-white">
								Full Name
							</label>
							<input
								type="text"
								placeholder="Adewunmi Quadri"
								className="w-full py-2.5 px-2 text-white outline-none rounded-lg mt-2 border border-double border-[#757199] bg-[#1b163e8e]"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="text-lg lg:text-xl text-white">
								Email Address
							</label>
							<input
								type="email"
								placeholder="example@email.com"
								className="w-full py-2.5 px-2 text-white outline-none rounded-lg mt-2 border border-double border-[#757199] bg-[#1b163e8e]"
							/>
						</div>
						<div>
							<label
								htmlFor="github"
								className="text-lg lg:text-xl text-white">
								Github Username
							</label>
							<input
								type="text"
								placeholder="@yourusername"
								className="w-full py-2.5 px-2 text-white outline-none rounded-lg my-2 border border-double border-[#757199] bg-[#1b163e8e] flex flex-col justify-center items-center"
							/>
						</div>

						<button
							type="email"
							placeholder="example@email.com"
							className="w-full py-3 px-2 text-[#04011B] capitalize outline-none rounded-lg text-lg font-bold border-double bg-[#F67464]">
							Generate my ticket{" "}
						</button>
					</form>
				</>
			</div>
		</div>
	);
}

export default App;
