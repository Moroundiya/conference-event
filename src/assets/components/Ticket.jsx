// eslint-disable-next-line react/prop-types
export const Ticket = ({ setSubmit }) => {
	return (
		<>
			<div className="w-full md:w-3/5 xl:w-2/6 my-14 space-y-7 lg:space-y-5">
				<div>Ticket</div>
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
