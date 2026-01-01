import HeroForm from "./hero-form";
import HeroImage from "./hero-image";

function Hero() {
	return (
		<div className="w-full flex flex-col justify-around md:flex-row">
			<HeroImage />
			<HeroForm />
		</div>
	);
}

export default Hero;
