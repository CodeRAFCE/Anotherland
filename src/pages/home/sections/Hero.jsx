import AnotherLand from "../../../components/AnotherLand";
import MaxWidthWrapper from "../../../components/MaxWidthWrapper";

const Hero = () => {
	return (
		<MaxWidthWrapper>
			<div className="relative flex flex-col items-center pb-20 md:pb-40 md:pt-6 pt-20 overflow-hidden">
				<AnotherLand />

				<div className="relative flex flex-col">
					<div className="w-full md:h-[850px] h-[250px]">
						<img
							src="/assets/gifs/hero.gif"
							alt="image_01"
							loading="lazy"
							className="lg:max-w-[2000px] md:max-w-full max-w-[510px] object-cover md:-m-8"
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
