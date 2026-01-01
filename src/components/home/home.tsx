import CommentsSection from "./comments-section/comments-section";
import Header from "./header/header";
import Hero from "./hero/hero";
import SocialSection from "./social-section/social-section";

function Home() {
	return (
		<div className="w-full flex flex-col gap-5">
			<Header />
			<Hero />
			<SocialSection />
			<CommentsSection />
		</div>
	);
}

export default Home;
