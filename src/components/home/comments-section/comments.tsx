import logo from "../../../assets/images/profile.png";

type Profile = {
	name: string;
};

function Comments({ name }: Profile) {
	return (
		<div className="flex flex-col justify-center items-center gap-5 rounded-lg shadow-2xl p-5">
			<img src={logo} className="w-20 h-20" />
			<p className="text-center">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam officia
				dicta, id magnam saepe doloribus delectus vel autem tempore numquam?
			</p>
			<p className="font-bold text-lg">{name}</p>
		</div>
	);
}

export default Comments;
