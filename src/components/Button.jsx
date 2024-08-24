import PropTypes from "prop-types";

const Button = ({ text, handleClick }) => {
  return (
    <>
      <a
        data-testid="button"
        className="relative rounded px-5 py-2.5 overflow-hidden group bg-gray-900 relative hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-all ease-out duration-300"
        onClick={handleClick}
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">{text}</span>
      </a>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
