import ticketBox from "../images/pattern-ticket.svg";
import logo from "../images/logo-full.svg";
import avatar from "../images/image-avatar.jpg";
import github from "../images/icon-github.svg";
// eslint-disable-next-line react/prop-types
export const Ticket = ({ setSubmit }) => {
	return (
		<>
			<div className="w-full md:w-3/5 xl:w-2/6 my-14 space-y-7 lg:space-y-5">
				<div className="w-full h-[230px] relative p-5 mb-5 lg:mb-10">
					<img
						src={ticketBox}
						className="absolute top-0 left-0"
						alt=""
					/>

					<div className="relative top-0 left-0 z-10 space-y-7">
						<div className="">
							<img
								src={logo}
								alt=""
								className="w-[180px] lg:auto"
							/>
							<p className="text-[#757199] font-bold text-sm lg:text-lg ms-10">
								Jan 31, 2025 / Austin, TX
							</p>
						</div>
						<div className="flex space-x-4 lg:space-x-5 items-center">
							<img
								src={avatar}
								alt=""
								className="w-11 lg:w-14 rounded-lg"
							/>
							<div className="">
								<p className="text-white text-xl lg:text-2xl font-bold ">Quadri Ayodele</p>
								<p className="flex items-center">
									<img
										src={github}
										alt=""
									/>
									<p className="text-[#757199] font-bold text-sm lg:text-lg">
										Devmoroundiya
									</p>
								</p>
							</div>
						</div>
					</div>
				</div>
				<button
					type="email"
					placeholder="example@email.com"
					onClick={() => setSubmit(false)}
					className="w-full py-3 px-2 text-[#04011B] capitalize outline-none rounded-lg text-lg font-bold border-double bg-[#F67464]">
					Book another ticket
				</button>
			</div>
		</>
	);
};
