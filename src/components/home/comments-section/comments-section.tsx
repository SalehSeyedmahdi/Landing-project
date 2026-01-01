import Comments from "./comments";

function CommentsSection() {
	return (
		<div className="flex flex-col justify-center items-center gap-5 md:flex-row p-10">
			<Comments name={"Sara"} />
			<Comments name={"Daniel"} />
			<Comments name={"Arman"} />
		</div>
	);
}

export default CommentsSection;
