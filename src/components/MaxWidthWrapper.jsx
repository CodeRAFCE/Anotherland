import PropTypes from "prop-types";
import {cn} from "../lib/utils";

const MaxWidthWrapper = ({className, children}) => {
	return (
		<div className={cn("w-full px-4 md:px-0 md:max-w-[1440px] mx-auto", className)}>
			{children}
		</div>
	);
};

MaxWidthWrapper.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default MaxWidthWrapper;
