import ticketBox from "../images/pattern-ticket.png";
import logo from "../images/logo-full.svg";
import avatar from "../images/image-avatar.jpg";
import github from "../images/icon-github.svg";
import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types
export const Ticket = ({
	setGenerateTicket,
	details,
	generateTicket,
	setSubmit,
	submit,
}) => {
	// eslint-disable-next-line react/prop-types
	// console.log(formInfo.name);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 2000);
	}, [loading, generateTicket, submit]);

	return (
		<>
			{loading ? (
				<div className="w-full md:w-3/5 xl:w-2/6 my-14 space-y-7 lg:space-y-5">
					<div className="w-full h-[185px] lg:h-[230px] relative flex items-center px-5 mb-5 lg:mb-10">
						<img
							src={ticketBox}
							className="absolute top-0 left-0 h-full w-full"
							alt=""
						/>
						<p className="font-bold text-[#757199] uppercase rotate-90 text-lg absolute -right-3 lg:right-0">
							#{details.name}
						</p>

						<div className="relative top-0 left-0 z-10 space-y-7">
							<div className="">
								<img
									src={logo}
									alt=""
									className="w-[160px] lg:w-[180px]"
								/>
								<p className="text-[#757199] font-bold text-sm lg:text-lg ms-[37px]">
									Jan 31, 2025 / Austin, TX
								</p>
							</div>
							<div className="flex space-x-4 lg:space-x-5 items-center">
								<img
									src={URL.createObjectURL(details.image)}
									alt=""
									className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg"
								/>
								<div className="">
									<p className="text-white text-xl lg:text-2xl font-bold ">
										{details.name}
									</p>
									<p className="flex items-center">
										<img
											src={github}
											alt=""
										/>
										<p className="text-[#757199] font-bold text-sm lg:text-lg">
											{details.username}
										</p>
									</p>
								</div>
							</div>
						</div>
					</div>
					<button type="button"
						placeholder="example@email.com"
						onClick={() => {
							setGenerateTicket(false), setSubmit(false);
						}}
						className="w-full py-3 px-2 text-[#04011B] capitalize outline-none rounded-lg text-lg font-bold border-double bg-[#F67464]">
						Book another ticket
					</button>
				</div>
			) : (
				<div className="w-full h-[250px]  flex justify-center items-center">
					<div
						role="status"
						className=" w-full h-full flex flex-col justify-center items-center">
						<div>
							<svg
								aria-hidden="true"
								className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentFill"
								/>
							</svg>
						</div>
						<p className="text-center text-white mt-2">Generating ticket...</p>
					</div>
				</div>
			)}
		</>
	);
};
