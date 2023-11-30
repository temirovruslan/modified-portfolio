import Tilt from "react-parallax-tilt";

import phare from "../assets/phare.webp";

const Cards = () => {
	return (
		<>
			<Tilt>
				<div className="h-[500px] w-[500px] rounded-2xl relative overflow-hidden bg-[#45103E]">
					<div className="border-purple-500 border-solid border-5 absolute top-0 left-0 right-0 bottom-0"></div>
					<div className="relative z-10">
						<img
							src={phare}
							alt=""
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="text-white">dddsaf</div>
				</div>
			</Tilt>
		</>
	);
};

export default Cards;
