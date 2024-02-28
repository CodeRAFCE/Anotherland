import AnotherLand from "../../../components/AnotherLand";
import MaxWidthWrapper from "../../../components/MaxWidthWrapper";

const Hero = () => {
	return (
		<MaxWidthWrapper>
			<div className="relative flex flex-col space-y-1 md:space-y-4 items-center md:pt-[62px] pt-[85px] ">
				<AnotherLand />

				<div className="relative flex flex-col">
					<div className="container xl:max-w-full w-full h-full items-center justify-center flex">
						<video
							autoPlay
							loop
							className="w-full h-full"
							preload="auto"
							poster="/assets/images/fallback.webp"
							muted
							playsInline
						>
							<source src="/assets/hero.mp4" type="video/mp4" />
						</video>
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	);
};

export default Hero;
