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
}) => {
	const handleGenerateTicket = (e) => {
		e.preventDefault();
		let data = new FormData(e.target);
		setDetails(Object.fromEntries(data.entries()));
		const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		let emailInfo = data.get("email");
		// console.log(data.get("image"));

		// if (data) {
		if (data.get("image").size / 1024 > 500 || data.get("image").name === "") {
			// alert("Image size must not exceed 500KB");
			setImg(true);
			// setEmail()
			// return;
		} else {
			setImg(false);
		}

		if (!regex.test(emailInfo) || email === "") {
			// console.log("Invalid Email");
			setEmail(true);
			// return;
		} else {
			setEmail(false);
		}

		if (data.get("name") === "") {
			setName(true);
		} else {
			setName(false);
		}

		if (data.get("username") === "") {
			setUsername(true);
		} else {
			setUsername(false);
		}

		// return;

		// console.log("CHeckForm is " + CheckForm());

		// if (username || name || email || img) {
		// 	alert("Incorrect");
		// } else {
		// 	alert("Correct");
		// }
		// console.log('Correct')

		// if (!email && !img) {
		// 	setFormInfo({
		// 		image: URL.createObjectURL(data.get("image")),
		// 		name: data.get("name"),
		// 		email: data.get("email"),
		// 		username: data.get("username"),
		// 	});
		// } else {
		// 	return;
		// }
	};

	const [validation, setValidation] = useState({
		name: false,
		img: false,
		username: false,
		details: "",
		submit: false,
	});

	const [value, setValue] = useState("");
	const [email, setEmail] = useState(false);
	const [img, setImg] = useState(false);
	const [name, setName] = useState(false);
	const [username, setUsername] = useState(false);
	const [submit, setSubmit] = useState(false);
	useEffect(() => {
		// console.log("img is " + img);
		// console.log("name is " + name);
		// console.log("email is " + email);
		// console.log("username is " + username);
		console.log("submit is " + submit);

		const CheckForm = () => {
			return username || email || img || name;
		};

		if (CheckForm()) {
			// alert("Successful");
			return;
		} else {
			// 	setFormInfo({
			// 	image: URL.createObjectURL(data.get("image")),
			// 	name: data.get("name"),
			// 	email: data.get("email"),
			// 	username: data.get("username"),
			// });
			if (submit) {
				setTimeout(() => {
					alert("Successful");
					console.log(details);
					setGenerateTicket(true);
				}, 500);
			}
		}

		// console.log("details is " + details);
	}, [value, email, img, name, username, details, submit, generateTicket, validation]);

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
						img ? "text-red-600" : "text-[#757199]"
					} text-[13px] lg:text-sm mt-2 flex items-center space-x-1`}>
					<iconify-icon icon="fluent:info-16-regular"></iconify-icon>
					<span>
						{img
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
						name ? "text-red-600" : "text-[#757199]"
					} text-[13px] lg:text-sm mt-2 flex items-center space-x-1`}>
					{name ? (
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
						email ? "text-red-600" : "text-[#757199]"
					} text-[13px] lg:text-sm mt-2 flex items-center space-x-1`}>
					{email ? (
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
					placeholder="@yourusername"
					name="username"
					className="w-full py-2.5 px-2 text-white outline-none rounded-lg my-2 border border-double border-[#757199] bg-[#1b163e8e] flex flex-col justify-center items-center focus:bg-[#1b163e8e] focus-within:bg-[#1b163e8e]"
					// required
				/>
				<p
					className={`${
						username ? "text-red-600" : "text-[#757199]"
					} text-[13px] lg:text-sm mt-2 flex items-center space-x-1`}>
					{username ? (
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
