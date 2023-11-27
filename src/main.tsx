import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Router>
			<AnimatePresence mode="wait">
				<App />
			</AnimatePresence>
		</Router>
	</React.StrictMode>
);
