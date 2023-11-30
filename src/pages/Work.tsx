import Navigation from "../components/Navigation";

import AnimatedCards from "../components/AnimatedCards";

const Work = () => {
	return (
		<div style={{ background: "#1d1b1b" }} className="w-full h-screen ">
			<Navigation />

			<div className="flex items-center justify-center h-screen">
				<AnimatedCards />
			</div>
		</div>
	);
};

export default Work;
