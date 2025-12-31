import Header from "../header/header";
import Hero from "../hero/hero";

function Home() {
	return (
		<div className="w-full flex flex-col gap-5">
			<Header />
			<Hero />
		</div>
	);
}

export default Home;
