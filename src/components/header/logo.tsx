import logo from "../../assets/images/logo.png";

function Logo() {
	return (
		<div className="flex justify-center items-center gap-2 cursor-pointer">
			<img src={logo} />
			<div className="hidden md:flex md:flex-col md:items-center md:justify-center md:gap-1">
				<p className="font-extrabold text-lg text-purple-950">MAKTAB SHARIF</p>
				<p className="font-semibold text-purple-950">BOOTCAMP</p>
			</div>
		</div>
	);
}

export default Logo;
