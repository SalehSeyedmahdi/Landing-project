function HeroForm() {
	return (
		<div className="w-full md:w-1/2 p-10">
			<form className="flex flex-col justify-center items-center gap-3 shadow-2xl p-10 pt-20 pb-20 rounded-md">
				<p className="font-bold text-center text-lg mb-5">
					To receive advice, please complete the form below.
				</p>
				<input
					type="text"
					className="w-full border border-gray-400 rounded-md p-2"
					placeholder="FullName"
				/>
				<input
					type="text"
					className="w-full border border-gray-400 rounded-md p-2"
					placeholder="Phone Number"
				/>
				<button className="font-bold text-white bg-purple-900 p-2 rounded-md cursor-pointer">
					Send Information
				</button>
			</form>
		</div>
	);
}

export default HeroForm;
