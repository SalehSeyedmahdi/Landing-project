function OfferSection() {
	return (
		<div className="w-full flex flex-col justify-center items-center bg-[#d4c8ef] p-10">
			<div className="w-full flex flex-col justify-center items-center relative shadow-2xl rounded-lg p-8 md:w-1/3">
				<div className="w-full flex justify-center items-center absolute top-0 left-0 right-0 font-bold text-center text-2xl text-white bg-purple-950 rounded-tl-lg rounded-tr-lg p-5">
					See the value for yourself
				</div>
				<div className="flex flex-col justify-center items-center gap-5 mt-16">
					<p className="text-center font-semibold text-xl">
						Review our offer again and move forward when you're ready.
					</p>
					<button className="bg-purple-950 text-white font-semibold rounded-lg p-3">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
}

export default OfferSection;
