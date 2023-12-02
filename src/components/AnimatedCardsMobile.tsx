import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { projects } from "../constants";
import { ArrowLeft, ArrowRight } from "lucide-react";

const AnimatedCardsMobile = () => {
	const [expandedCards, setExpandedCards] = useState<boolean[]>([]);
	const maxChar = 200;
	const toggleReadMore = (index: number) => {
		setExpandedCards((prevExpandedCards) => {
			const newExpandedCards = [...prevExpandedCards];
			newExpandedCards[index] = !newExpandedCards[index];
			return newExpandedCards;
		});
	};
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	const truncatedText = (text: string) =>
		text.length > maxChar ? `${text.slice(0, maxChar)}...` : text;

	return (
		<Swiper
			slidesPerView={1}
			loop={true}
			spaceBetween={5}
			navigation={{
				prevEl: navigationPrevRef.current,
				nextEl: navigationNextRef.current,
			}}
			onBeforeInit={(swiper: any) => {
				(swiper.params.navigation.prevEl = navigationPrevRef.current),
					(swiper.params.navigation.nextEl =
						navigationNextRef.current);
			}}
			mousewheel={true}
			keyboard={true}
			modules={[Navigation, Mousewheel, Keyboard]}
			className="mySwiper w-[500px] "
		>
			{projects.map((project, index) => {
				const isExpanded = expandedCards[index] || false;

				return (
					<SwiperSlide
						// style={{ width: "350px" }}
						key={index}
						className="card"
					>
						<div className={`poster ${project.className}`}>
							<img src={project.img} alt="dsda" />
						</div>
						<div className={isExpanded ? "expanded" : "details"}>
							{project.messageToUser && (
								<p className="text-[#1a1b36] italic text-base sm:text-sm font-bold">
									{project.messageToUser}
								</p>
							)}
							{project.link && (
								<a target="_blank" href={project.link}>
									<button
										style={{
											background: project.btnColor,
											fontFamily: "Ubuntu",
											fontWeight: 500,
										}}
										className={`cssbuttons-io-button sm:text-sm mb-2 bg-[${project.btnColor}]`}
									>
										Visit
										<div className="icon">
											<svg
												style={{ color: "black" }}
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
								</a>
							)}

							<h3
								style={{
									color: "white",
									fontFamily: "Roboto+Mono",
								}}
								className="text-2xl mb-2"
							>
								{project.title}
							</h3>

							{!isExpanded ? (
								<div className="info text-lg sm:text-sm">
									{project.description.length > maxChar ? (
										<p>
											{truncatedText(project.description)}
											...
										</p>
									) : (
										project.description
									)}
								</div>
							) : (
								<div className="info text-lg sm:text-sm">
									<p>{project.description}</p>
								</div>
							)}
							{project.description.length >= maxChar &&
								!isExpanded && (
									<button
										onClick={() => toggleReadMore(index)}
										className={`button my-2 ${project.readmebtncolor}`}
									>
										Read More
									</button>
								)}

							<div className="cast">
								<ul className="text-base sm:text-sm">
									{project.tags}
								</ul>
							</div>
						</div>
					</SwiperSlide>
				);
			})}

			<div className="center mt-10 pb-4 sm:pb-0 sm:mt-2">
				<button
					ref={navigationPrevRef}
					className="z-50 mr-3 text-[grey] bg-[white] w-12 h-7 rounded-md  duration-300 center hover:text-[black] "
				>
					<ArrowLeft />
				</button>
				<button
					ref={navigationNextRef}
					className="z-50 text-[grey] bg-[white] w-12 h-7 rounded-md  duration-300 center hover:text-[black] "
				>
					<ArrowRight />
				</button>
			</div>
		</Swiper>
	);
};

export default AnimatedCardsMobile;
