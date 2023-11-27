import { motion } from "framer-motion";

const transition = (OGComponent: any) => {
	return () => (
		<>
			<OGComponent />
			<motion.div
				transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
				exit={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				initial={{ scaleY: 0 }}
				className="slide-in"
			/>

			<motion.div
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
				exit={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				initial={{ scaleY: 1 }}
				className="slide-out"
			/>
		</>
	);
};

export default transition;
