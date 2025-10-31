const isTouchScreen = () => window.matchMedia("(hover: none)").matches;

export default isTouchScreen;