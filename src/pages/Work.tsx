import Navigation from "../components/Navigation";

import AnimatedCards from "../components/AnimatedCards";
import AnimatedCardsMobile from "../components/AnimatedCardsMobile";

const Work = () => {
	return (
		<div style={{ background: "#0b0b0b" }} className="w-full h-screen ">
			<Navigation />

			<div className="flex items-center justify-center h-full">
				<div className="hidden xl:block">
					<AnimatedCards />
				</div>
				<div className="xl:hidden">
					<AnimatedCardsMobile />
				</div>
			</div>
		</div>
	);
};

export default Work;
