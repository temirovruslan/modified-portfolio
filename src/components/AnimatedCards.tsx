// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
// import { projects } from "../constants";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const AnimatedCards = () => {
// 	const [expandedCards, setExpandedCards] = useState<boolean[]>([]);
// 	const maxCharacters = 200; // Maximum number of characters for description

// 	const toggleReadMore = (index: number) => {
// 		setExpandedCards((prevExpandedCards) => {
// 			const newExpandedCards = [...prevExpandedCards];
// 			newExpandedCards[index] = !newExpandedCards[index];
// 			return newExpandedCards;
// 		});
// 	};

// 	const renderDescription = (description: string, index: number) => {
// 		const isExpanded = expandedCards[index] || false;
// 		const shouldShowReadMore = description.length > maxCharacters;

// 		const truncatedDescription = isExpanded
// 			? description
// 			: shouldShowReadMore
// 			? `${description.slice(0, maxCharacters)}...`
// 			: description;

// 		return (
// 			<div className="info text-md">
// 				<p>{truncatedDescription}</p>
// 				{shouldShowReadMore && !isExpanded && (
// 					<button onClick={() => toggleReadMore(index)}>
// 						Read More
// 					</button>
// 				)}
// 			</div>
// 		);
// 	};

// 	const navigationPrevRef = useRef(null);
// 	const navigationNextRef = useRef(null);

// 	return (
// 		<Swiper
// 			slidesPerView={2}
// 			spaceBetween={30}
// 			navigation={{
// 				prevEl: navigationPrevRef.current,
// 				nextEl: navigationNextRef.current,
// 			}}
// 			onBeforeInit={(swiper) => {
// 				swiper.params.navigation.prevEl = navigationPrevRef.current;
// 				swiper.params.navigation.nextEl = navigationNextRef.current;
// 			}}
// 			mousewheel={true}
// 			keyboard={true}
// 			modules={[Navigation, Mousewheel, Keyboard]}
// 			className="mySwiper w-4/6"
// 		>
// 			{projects.map((project, index) => (
// 				<SwiperSlide
// 					style={{ width: "350px" }}
// 					key={index}
// 					className="card"
// 				>
// 					<div className={`poster ${project.className}`}>
// 						<img src={project.img} alt="dsda" />
// 					</div>
// 					<div
// 						className={
// 							expandedCards[index] ? "expanded" : "details"
// 						}
// 					>
// 						<button
// 							style={{
// 								background: project.btnColor,
// 								fontFamily: "Ubuntu",
// 								fontWeight: 500,
// 							}}
// 							className={`cssbuttons-io-button bg-[${project.btnColor}]`}
// 						>
// 							Visit
// 							<div className="icon">
// 								<svg
// 									style={{ color: project.btnColor }}
// 									height="24"
// 									width="24"
// 									viewBox="0 0 24 24"
// 									xmlns="http://www.w3.org/2000/svg"
// 								>
// 									<path d="M0 0h24v24H0z" fill="none"></path>
// 									<path
// 										d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
// 										fill="currentColor"
// 									></path>
// 								</svg>
// 							</div>
// 						</button>

// 						<h3
// 							style={{
// 								color: "white",
// 								fontFamily: "Roboto+Mono",
// 							}}
// 							className="text-2xl"
// 						>
// 							{project.title}
// 						</h3>

// 						{renderDescription(project.description, index)}

// 						<div className="cast">
// 							<ul className="text-sm">
// 								{project.tags.map((tag, i) => (
// 									<li key={i}>{tag}</li>
// 								))}
// 							</ul>
// 						</div>
// 					</div>
// 				</SwiperSlide>
// 			))}

// 			<div className="center mt-10 pb-4">
// 				<button
// 					ref={navigationPrevRef}
// 					className="btn-class-name mr-6 "
// 				>
// 					<span className="back"></span>
// 					<span className="front relative">
// 						<span className="absolute">
// 							<ArrowLeft className="z-50 text-white" />
// 						</span>
// 					</span>
// 				</button>
// 				<button ref={navigationNextRef} className="btn-class-name blue">
// 					<span className="back"></span>
// 					<span className="front relative">
// 						<span className="absolute">
// 							<ArrowRight className="z-50 text-white" />
// 						</span>
// 					</span>
// 				</button>
// 			</div>
// 		</Swiper>
// 	);
// };

// export default AnimatedCards;
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { projects } from "../constants";
import { ArrowLeft, ArrowRight } from "lucide-react";

const AnimatedCards = () => {
	const [expandedCards, setExpandedCards] = useState<boolean[]>([]);
	const maxChar = 250;
	const toggleReadMore = (index: number) => {
		setExpandedCards((prevExpandedCards) => {
			const newExpandedCards = [...prevExpandedCards];
			newExpandedCards[index] = !newExpandedCards[index];
			return newExpandedCards;
		});
	};
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);
	const swiper = useSwiper();
	return (
		<Swiper
			slidesPerView={2}
			spaceBetween={30}
			// cssMode={true}
			navigation={{
				prevEl: navigationPrevRef.current,
				nextEl: navigationNextRef.current,
			}}
			onBeforeInit={(swiper) => {
				swiper.params.navigation.prevEl = navigationPrevRef.current;
				swiper.params.navigation.nextEl = navigationNextRef.current;
			}}
			mousewheel={true}
			keyboard={true}
			modules={[Navigation, Mousewheel, Keyboard]}
			className="mySwiper w-4/6"
		>
			{projects.map((project, index) => {
				const isExpanded = expandedCards[index] || false;
				return (
					<SwiperSlide
						style={{ width: "350px" }}
						key={index}
						className="card"
					>
						<div className={`poster ${project.className}`}>
							<img src={project.img} alt="dsda" />
						</div>
						<div className={isExpanded ? "expanded" : "details"}>
							<button
								style={{
									background: project.btnColor,
									fontFamily: "Ubuntu",
									fontWeight: 500,
								}}
								className={`cssbuttons-io-button bg-[${project.btnColor}]`}
							>
								Visit
								<div className="icon">
									<svg
										style={{ color: project.btnColor }}
										height="24"
										width="24"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0 0h24v24H0z"
											fill="none"
										></path>
										<path
											d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
											fill="currentColor"
										></path>
									</svg>
								</div>
							</button>

							<h3
								style={{
									color: "white",
									fontFamily: "Roboto+Mono",
								}}
								className="text-2xl"
							>
								{project.title}
							</h3>
							<div className="info text-md ">
								<p>{project.description}</p>
							</div>
							{project.description.length >= maxChar &&
								!isExpanded && (
									<button
										onClick={() => toggleReadMore(index)}
									>
										Read More
									</button>
								)}
							{/* {!isExpanded && (
								<button onClick={() => toggleReadMore(index)}>
									Read More
								</button>
							)} */}
							<div className="cast">
								<ul className="text-sm">
									{project.tags.map((tag, i) => {
										return <li key={i}>{tag}</li>;
									})}
								</ul>
							</div>
						</div>
					</SwiperSlide>
				);
			})}
			<div className="center mt-10 pb-4">
				<button
					ref={navigationPrevRef}
					className="btn-class-name mr-6 "
				>
					<span className="back"></span>
					<span className="front relative">
						<span className="absolute">
							<ArrowLeft className="z-50 text-white" />
						</span>
					</span>
				</button>
				<button ref={navigationNextRef} className="btn-class-name blue">
					<span className="back"></span>
					<span className="front relative">
						<span className="absolute">
							<ArrowRight className="z-50 text-white" />
						</span>
					</span>
				</button>
			</div>
		</Swiper>
	);
};

export default AnimatedCards;
