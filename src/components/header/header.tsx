import Logo from "./logo";
import Menu from "./menu";
import RegisterButton from "./register-button";

function Header() {
	return (
		<div className="w-full flex justify-between items-center bg-[#d4c8ef] p-3">
			<Logo />
			<Menu />
			<RegisterButton />
		</div>
	);
}

export default Header;
