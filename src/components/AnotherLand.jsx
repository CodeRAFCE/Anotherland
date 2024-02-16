import PropTypes from "prop-types";

const AnotherLand = ({isFooter}) => {
	return (
		<div className="relative text-center">
			{/* <h1 className="text-[100px] m-0 md:text-[350px] uppercase font-compacta tracking-wider leading-0">
				ANOTHERLAND
				{isFooter ? null : (
					<span className="uppercase text-[15px] md:text-[24px] font-maisonMono block tracking-normal">
						marketing and creative agency
					</span>
				)}
			</h1> */}
			<div className="flex flex-col items-center justify-center space-y-4 md:space-y-7">
				<img
					src={"/assets/svgs/ANOTHERLAND_V3.svg"}
					alt="ANOTHERLAND_LOGO"
					loading="lazy"
					className="md:h-full md:w-[85%] w-[90%]"
				/>

				{/* <h1 className="text-[100px] m-0 md:text-[72px] uppercase font-compactaLc">ANOTHERLAND</h1> */}

				{isFooter ? null : (
					<div className="uppercase text-[11px] md:text-[24px] font-maisonMono block tracking-normal">
						marketing and creative agency
					</div>
				)}
			</div>
		</div>
	);
};

AnotherLand.propTypes = {
	isFooter: PropTypes.bool,
};

export default AnotherLand;
