import hero from "../../assets/images/hero.png";

function HeroImage() {
	return (
		<div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4 p-10">
			<img
				src={hero}
				className="w-full h-[333px] md:w-[396.5px] md:h-[321.2px]"
			/>
			<p className="w-full font-bold text-center text-purple-950 md:text-2xl md:w-[385px]">
				From the beginning of programming training, to the end of employment,
				with Maktab Sharif.
			</p>
		</div>
	);
}

export default HeroImage;
