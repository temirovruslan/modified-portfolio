import { useTypingEffect } from "../hooks/useTypingEffect";
import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";
import clsx from "clsx";
import Navigation from "../components/Navigation";

import ParticlesContainer from "../components/ParticlesContainer";
import transition from "../components/transition";

function Home() {
	const text = useTypingEffect(
		"Hello! I'm Ruslan, transform ideas into reality",
		100
	);
	const [showUnderscore, setShowUnderscore] = useState<any>(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setShowUnderscore((prev: any) => !prev);
		}, 1000);

		return () => clearInterval(intervalId);
	}, []); // Runs once when component mounts

	const [isHovered, setIsHovered] = useState(false);
	// console.log("App ~ isHovered >", isHovered);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div className="min-h-screen w-full bg-black">
			<div className="z-10 relative">
				{" "}
				<ParticlesContainer />{" "}
			</div>

			<div className="center w-full h-full">
				<div className=" z-50 text-4xl font-bold text-[#f5d061] w-80 h-96 s">
					{text}
					{showUnderscore && "|"}
				</div>
			</div>

			<Navigation />
			<button
				className={clsx(
					"w-[200px] h-[180px] bg-black z-50 rounded-full center text-white relative transform transition-transform hover:scale-105"
				)}
				onMouseOver={handleHover}
				onMouseLeave={handleMouseLeave}
			>
				<img
					src="https://i.postimg.cc/vmCTj0V3/circle.webp"
					alt="circle"
				/>

				<div className="z-50 absolute">
					<MoveRight
						size={48}
						className={clsx(
							"rotate-[-35deg] transition-all duration-500",
							isHovered ? "rotate-[60] text-[#da4c82]" : ""
						)}
					/>
				</div>
				<img
					className="animate-spin-slow absolute"
					src="https://i.postimg.cc/4yyJxtVm/rounded-text.png"
					alt="circle"
				/>
			</button>
		</div>
	);
}

export default transition(Home);
