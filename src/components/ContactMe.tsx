import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const ContactMe = () => {
	const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
	const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
	const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

	const form = useRef<HTMLFormElement>(null);
	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const sendEmail = () => {
		if (form.current) {
			emailjs
				.sendForm(
					SERVICE_ID,
					TEMPLATE_ID,
					form.current,
					EMAIL_PUBLIC_KEY
				)
				.then(
					() => {
						toast.success(
							"Received your message! Quick reply coming your way soon. 👍"
						);
						reset();
					},
					(error) => {
						toast.error(
							"Oops! Something went wrong. 😟 You can give it another shot or reach out to me on LinkedIn for assistance. 🚀"
						);

						console.log(error.text);
					}
				);
		}
	};

	return (
		<form
			className="bg-white p-4 rounded-md shadow-md "
			style={{ maxWidth: "400px", margin: "auto" }}
			ref={form}
			onSubmit={handleSubmit(sendEmail)}
		>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="user_name"
				>
					Name
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					{...register("user_name", { required: true })}
					aria-invalid={errors.user_name ? "true" : "false"}
				/>
				{errors.user_name?.type === "required" && (
					<p className="text-red-500 text-xs italic" role="alert">
						First name is required
					</p>
				)}
			</div>

			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="user_email"
				>
					Email
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					{...register("user_email", { required: true })}
					aria-invalid={errors.user_email ? "true" : "false"}
				/>
				{errors.user_email?.type === "required" && (
					<p className="text-red-500 text-xs italic" role="alert">
						Email is required
					</p>
				)}
			</div>

			<div className="mb-6">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="message"
				>
					Message
				</label>
				<textarea
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					{...register("message", { required: true })}
					aria-invalid={errors.message ? "true" : "false"}
				/>
				{errors.message?.type === "required" && (
					<p className="text-red-500 text-xs italic" role="alert">
						Message is required
					</p>
				)}
			</div>

			<div className="flex items-center justify-center">
				<input
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
					value="Send"
				/>
			</div>
			<Toaster />
		</form>
	);
};

export default ContactMe;
