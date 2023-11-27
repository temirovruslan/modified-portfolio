// icons
import { Tooltip } from "antd";
import clsx from "clsx";
import {
	HiHome,
	HiUser,
	HiViewColumns,
	HiRectangleGroup,
	HiChatBubbleBottomCenterText,
	HiEnvelope,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

// nav data
export const navData = [
	{ name: "home", path: "/", icon: <HiHome /> },
	{
		name: "about",
		path: "/about",
		icon: <HiUser />,
	},
	{
		name: "services",
		path: "/services",
		icon: <HiRectangleGroup />,
	},
	{
		name: "work",
		path: "/work",
		icon: <HiViewColumns />,
	},
	{
		name: "testimonials",
		path: "/testimonials",
		icon: <HiChatBubbleBottomCenterText />,
	},
	{
		name: "contact",
		path: "/contact",
		icon: <HiEnvelope />,
	},
];

const Navigation = () => {
	const pathName = window.location.pathname;

	return (
		<nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
			<Tooltip placement="topLeft" title={"dasdadasda"}></Tooltip>
			<ul className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blue-sm text-3xl xl:text-xl xl:rounded-full">
				{navData.map((link, index) => (
					<li key={index}>
						<Tooltip
							placement="left"
							title={
								link.name.charAt(0).toUpperCase() +
								link.name.slice(1)
							}
							color="white"
							overlayInnerStyle={{
								color: "black",
								fontSize: "13px",
								fontWeight: 600,
							}}
						>
							<Link
								className={clsx(
									"relative flex items-center",
									pathName === link.path
										? "text-[#9a1515]"
										: "text-white"
								)}
								to={link.path}
								style={{
									transition: "color 0.3s ease",
								}}
								onMouseOver={(e) =>
									(e.currentTarget.style.color = "#9a1515")
								}
								onMouseOut={(e) =>
									(e.currentTarget.style.color =
										pathName === link.path
											? "#9a1515"
											: "white")
								}
							>
								<div className="absolute w-4 h-4 pr-14 right-0 hidden xl:group-hover:flex">
									<div className="bg-white relative flex text-primary items-center p-[6px]">
										<div className="text-[12px]">
											{link.name}
										</div>
									</div>
								</div>

								<p> {link.icon}</p>
							</Link>
						</Tooltip>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
