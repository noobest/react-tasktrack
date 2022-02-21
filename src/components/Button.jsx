import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
	return (
		<button
			className="btn"
			style={{ backgroundColor: text === "Add" ? color : "red" }}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: "green",
};

Button.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
