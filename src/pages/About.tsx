
import Navigation from "../components/Navigation";
import Tech from "../components/Tech";
import transition from "../components/transition";

const About = () => {
	return (
		<div>
			<Navigation />
			<Tech />
			
		</div>
	);
};

export default transition(About);
