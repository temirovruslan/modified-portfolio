interface Project {
	messageToUser?: string;
	img: string;
	link: string;
	className: string;
	title: string;
	description: string;
	tags: string;
	btnColor: string;
	readmebtncolor?: string;
}

export const projects: Project[] = [
	{
		img: "https://i.postimg.cc/3JvnwLxZ/30-2.png",
		link: "https://www.phare-ts.com",
		className: "milk",
		title: "Phare Technologies",
		description:
			"It is a website that i created for the company i work in.In this project i used sidebar, swiper-slider and other reusable components. Website is totally responsive. There can be some bags, still working on it.",
		tags: "nextjs#tailwind#javascript",
		btnColor: "#e4ff00",
		readmebtncolor: "yellow",
	},
	{
		img: "https://i.postimg.cc/Njd67rPn/apple.png",
		link: "https://apple-clone-gray.vercel.app",
		className: "white",
		title: "Apple shop",

		description:
			"Made an apple-clone website fully responsive in NextJS, where you can purchase apple devices throw Stripe API. Stored date in Sanity. Used Redux-Toolkit for state management. Dont purchase the selected items in the end😁",
		tags: "typescript#nextjs#tailwind#redux#stripe-payments#senety-io",

		// btnColor: "#284f87",
		btnColor: "#8e96a1",
	},
	{
		messageToUser: "Platform under development. No link available yet",
		img: "https://i.postimg.cc/9Fz1GRkf/magnus-Mobile.png",
		link: "",
		className: "blue",
		title: "Magnus Platform",

		description: `Our company began a new project from the beginning, and i build the platform from scratch as the only frontend developer. In this project, I learned how to fetch real-time data from the backend using server-sent events and connect it to individual users by their IDs. I also created charts using the Ant Charts library, and these charts would update as time passed. To build the UI, I used components from the Ant Design library and customized them to fit our requirements. For sate mangment was using Redux. We developed a weather app that fetched forecast data for specific locations and saved user's action history in their browser's storage. Additionally, I implemented sorting and filtering functionality. Worked with the Google Maps API to track user locations and movements. Platform was build using TypeScript.`,
		tags: "reactjs#typescript#tailwind#ant-charts#real-time-data",
		// btnColor: "#284f87",
		btnColor: "#8e96a1",
	},
];
