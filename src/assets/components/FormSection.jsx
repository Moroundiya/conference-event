/* eslint-disable no-unused-vars */
import uploadIcon from "../images/icon-upload.svg";
import infoIcon from "../images/icon-info.svg";
import { Form } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const FormSection = ({
	setGenerateTicket,
	generateTicket,
	setDetails,
	details,
	setSubmit,
	submit,
}) => {
	const handleGenerateTicket = (e) => {
		e.preventDefault();
		let data = new FormData(e.target);
		setDetails(Object.fromEntries(data.entries()));
		const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		let emailInfo = data.get("email");
		// console.log(data.get("image"));

		// // if (data) {
		if (data.get("image").size / 1024 > 500 || data.get("image").name === "") {
			setImg(true);
		} else {
			setImg(false);
		}

		if (data.get("name") === "") {
			setName(true);
		} else {
			setName(false);
		}

		if (!regex.test(emailInfo) || emailInfo === "") {
			setEmail(true);
		} else {
			setEmail(false);
		}

		if (data.get("username") === "") {
			setUsername(true);
		} else {
			setUsername(false);
		}
	};

	const [validation, setValidation] = useState({
		img: false,
		name: false,
		email: false,
		username: false,
		details: "",
		submit: false,
	});

	const [value, setValue] = useState("");
	const [email, setEmail] = useState(false);
	const [img, setImg] = useState(false);
	const [name, setName] = useState(false);
	const [username, setUsername] = useState(false);
	const [correct, setCorrect] = useState(false);

	useEffect(() => {
		setValidation({
			img,
			name,
			email,
			username,
		});
	}, [
		value,
		details,
		submit,
		generateTicket,
		// validation,
		email,
		name,
		username,
		img,
		correct,
	]);

	useEffect(() => {
		console.log(validation);

		if (
			validation.name ||
			validation.email ||
			validation.username ||
			validation.img
		) {
			return;
		} else {
			if (submit) {
				setTimeout(() => {
					// alert("Successful");
					setGenerateTicket(true);
				}, 500);
			}
		}
	}, [validation]);

	return (
		<form
			onSubmit={(e) => {
				handleGenerateTicket(e), setSubmit(true);
			}}
			className="w-full md:w-3/5 xl:w-2/6 my-14 space-y-7 lg:space-y-5">
			<div>
				<label
					htmlFor="avatar"
					className="text-lg lg:text-xl text-white">
					Upload Avatar
				</label>
				<div className="w-full lg:h-[200px] py-8 relative rounded-xl mt-3 lg:mt-2 border-2 border-dashed cursor-pointer border-[#757199] bg-[#1b163e8e] flex flex-col justify-center items-center">
					<input
						type="file"
						className="w-full h-full absolute top-0 left-0 z-10 opacity-0 cursor-pointer"
						name="image"
						accept="image/*"
						onChange={(e) => setValue(e.target.value)}
						// required
					/>

					<div className="bg-[#332E50] rounded-lg border border-[#7571999c] p-2">
						<img
							src={uploadIcon}
							alt=""
							className="lg:w-8"
						/>
					</div>
					<p className="text-sm w-full px-4 text-center lg:w-3/4 h-auto overflow-hidden flex justify-center items-center lg:text-lg text-[#757199] mt-3">
						<span className="w-full break-all break-words">
							{value ? value : "Drag and drop or click to upload"}
						</span>
					</p>
				</div>
				<p
					className={`${
						validation.img ? "text-red-600" : "text-[#757199]"
					} text-[13px] lg:text-sm mt-2 flex items-center space-x-1`}>
					<iconify-icon icon="fluent:info-16-regular"></iconify-icon>
					<span>
						{validation.img
							? "Please upload a photo under 500KB."
							: "Upload your photo (JPG or PNG, max size: 500KB)."}
					</span>
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
					name="name"
					className="w-full py-2.5 px-2 text-white outline-none rounded-lg mt-2 border border-double border-[#757199] bg-[#1b163e8e] focus:bg-[#1b163e8e] focus-within:bg-[#1b163e8e]"
					// required
				/>

				<p
					className={`${
						validation.name ? "text-red-600" : "text-[#757199]"
					} text-[13px] lg:text-sm mt-2 flex items-center space-x-1`}>
					{validation.name ? (
						<>
							<iconify-icon icon="fluent:info-16-regular"></iconify-icon>
							<span>Please enter a valid name.</span>
						</>
					) : null}
				</p>
			</div>

			<div>
				<label
					htmlFor="email"
					className="text-lg lg:text-xl text-white">
					Email Address
				</label>
				<input
					type="text"
					placeholder="example@email.com"
					name="email"
					className="w-full py-2.5 px-2 text-white outline-none rounded-lg mt-2 border border-double border-[#757199] bg-[#1b163e8e] focus:bg-[#1b163e8e] focus-within:bg-[#1b163e8e]"
				/>

				<p
					className={`${
						validation.email ? "text-red-600" : "text-[#757199]"
					} text-[13px] lg:text-sm mt-2 flex items-center space-x-1`}>
					{validation.email ? (
						<>
							<iconify-icon icon="fluent:info-16-regular"></iconify-icon>
							<span>Please enter a valid email address.</span>
						</>
					) : null}
				</p>
			</div>

			<div>
				<label
					htmlFor="username"
					className="text-lg lg:text-xl text-white">
					Github Username
				</label>
				<input
					type="text"
					placeholder="yourusername"
					name="username"
					className="w-full py-2.5 px-2 text-white outline-none rounded-lg my-2 border border-double border-[#757199] bg-[#1b163e8e] flex flex-col justify-center items-center focus:bg-[#1b163e8e] focus-within:bg-[#1b163e8e]"
					// required
				/>
				<p
					className={`${
						validation.username ? "text-red-600" : "text-[#757199]"
					} text-[13px] lg:text-sm mt-2 flex items-center space-x-1`}>
					{validation.username ? (
						<>
							<iconify-icon icon="fluent:info-16-regular"></iconify-icon>
							<span>Please enter a valid username.</span>
						</>
					) : null}
				</p>
			</div>

			<button
				type="submit"
				placeholder="example@email.com"
				className="w-full py-3 px-2 text-[#04011B] capitalize outline-none rounded-lg text-lg font-bold border-double bg-[#F67464]">
				Generate my ticket
			</button>
		</form>
	);
};

// export const submitTicket = (request) => {
// 	let data = request.FormData();
// 	console.log(data);
// };
