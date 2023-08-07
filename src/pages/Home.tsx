// import corneLeft from "../assets/corne_left.png";
// import corneRight from "../assets/corne_right.png";
// import video from "../assets/home_video.webm";
import CardStack from "../components/CardStack";

export function Home() {
	return (
		<div className="grid md:grid-cols-2 h-full md:w-4/5 gap-10">
			{/* <div
				className="left w-96 h-96"
				style={{
					backgroundImage: `url(${corneLeft})`,
					backgroundSize: "100%",
					backgroundRepeat: "no-repeat",
					opacity: 0.2,
				}}
			></div>
			<div
				className="right w-96 h-96"
				style={{
					backgroundImage: `url(${corneRight})`,
					backgroundSize: "100%",
					backgroundRepeat: "no-repeat",
				}}
			></div> */}
			{/* <video src={video} autoPlay muted loop></video> */}
			<div className="flex flex-col gap-5 items-center w-4/5 mx-auto md:w-2/3">
				<h1 className="text-6xl font-bold">LOREM IPSUM</h1>
				<p className="text-lg">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
					deserunt veniam id alias quas eligendi sint. Natus omnis tempora
					magnam autem recusandae, assumenda id ex distinctio? Eaque sit
					excepturi reiciendis.
				</p>
			</div>
			<CardStack />
		</div>
	);
}
