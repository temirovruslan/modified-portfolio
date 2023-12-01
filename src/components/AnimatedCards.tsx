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

const AnimatedCards = () => {
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
			spaceBetween={0}
			breakpoints={{
				1200: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			}}
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
			className="mySwiper w-[1000px]"
		>
			{projects.map((project, index) => {
				const isExpanded = expandedCards[index] || false;

				return (
					<SwiperSlide key={index} className="card">
						<div className={`poster ${project.className}`}>
							<img src={project.img} alt="dsda" />
						</div>
						<div className={isExpanded ? "expanded" : "details"}>
							{project.messageToUser && (
								<p className="text-[#1a1b36] italic text-base font-bold">
									{project.messageToUser}
								</p>
							)}
							{project.link && (
								<button
									style={{
										background: project.btnColor,
										fontFamily: "Ubuntu",
										fontWeight: 500,
									}}
									className={`cssbuttons-io-button mb-2 bg-[${project.btnColor}]`}
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
								<div className="info text-lg">
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
								<div className="info text-lg">
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
								<ul className="text-base">{project.tags}</ul>
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
