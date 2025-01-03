import uploadIcon from "../images/icon-upload.svg";
import infoIcon from "../images/icon-info.svg";

// eslint-disable-next-line react/prop-types
export const Form = ({ setSubmit }) => {
	return (
		<form
			onSubmit={() => setSubmit(true)}
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
                        required
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
                    required
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
                    required
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
                    required
				/>
			</div>

			<button
				type="email"
				placeholder="example@email.com"
				className="w-full py-3 px-2 text-[#04011B] capitalize outline-none rounded-lg text-lg font-bold border-double bg-[#F67464]">
				Generate my ticket
			</button>
		</form>
	);
};
