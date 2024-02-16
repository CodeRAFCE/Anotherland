import AnotherLand from "../../../components/AnotherLand";
import MaxWidthWrapper from "../../../components/MaxWidthWrapper";

const Hero = () => {
	return (
		<MaxWidthWrapper>
			<div className="relative flex flex-col items-center md:pt-6 pt-[85px] ">
				<AnotherLand />

				<div className="relative flex flex-col">
					<div className="container w-full h-full flex items-center justify-center">
						<img
							src="/assets/gifs/hero.gif"
							alt="image_01"
							loading="lazy"
							className="object-fill md:-m-6"
						/>
					</div>
					{/* <img
						src="/assets/images/anotherland_image_01.png"
						alt="image_01"
						loading="lazy"
						className=""
					/> */}
				</div>
			</div>
		</MaxWidthWrapper>
	);
};

export default Hero;
