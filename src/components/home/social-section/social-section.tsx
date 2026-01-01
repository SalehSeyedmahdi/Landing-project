import instagram from "../../../assets/images/instagram.png";
import telegram from "../../../assets/images/telegram.png";
import whatsapp from "../../../assets/images/whatsapp.png";

function SocialSection() {
	return (
		<div className="w-full flex items-center justify-center bg-[#d4c8ef] p-5">
			<img src={telegram} className="w-25 h-25" />
			<img src={instagram} className="w-25 h-25" />
			<img src={whatsapp} className="w-25 h-25" />
		</div>
	);
}

export default SocialSection;
