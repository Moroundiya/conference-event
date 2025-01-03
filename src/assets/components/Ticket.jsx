import ticketBox from "../images/pattern-ticket.svg";
import logo from "../images/logo-full.svg";
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

					<div className="relative top-0 left-0 z-10 space-y-10">
						<div className="">
							<img
								src={logo}
								alt=""
								className="w-[180px] lg:auto"
							/>
							<p className="text-[#757199] font-bold lg:text-xl ms-10">
								Jan 31, 2025 / Austin, TX
							</p>
						</div>
						<div></div>
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
