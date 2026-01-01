import CommentsSection from "./comments-section/comments-section";
import Header from "./header/header";
import Hero from "./hero/hero";
import OfferSection from "./offer-section/offer-section";
import SocialSection from "./social-section/social-section";

function Home() {
	return (
		<div className="w-full flex flex-col gap-5">
			<Header />
			<Hero />
			<SocialSection />
			<CommentsSection />
			<OfferSection />
		</div>
	);
}

export default Home;
