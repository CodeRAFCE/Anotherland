import AnotherLand from "../../../components/AnotherLand";
import MaxWidthWrapper from "../../../components/MaxWidthWrapper";

const Hero = () => {
	return (
		<MaxWidthWrapper>
			<div className="relative flex flex-col space-y-1 md:space-y-4 items-center md:pt-[62px] pt-[85px] ">
				<AnotherLand />

				<div className="relative flex flex-col">
					<div className="max-w-full w-full h-full items-center justify-center hidden xl:flex">
						<video
							autoPlay
							loop
							className="w-full h-full"
							preload="auto"
							poster="/assets/images/thumbnail.webp"
							muted
							playsInline
						>
							<source src="/assets/hero.mp4" type="video/mp4" />
							<img
								src=""
								alt="image_01"
								loading="lazy"
								className="object-fill object-center md:-m-3"
							/>
						</video>
					</div>

					<div className="container w-full h-full flex items-center justify-center xl:hidden">
						<video
							autoPlay
							loop
							className="w-full h-full"
							poster="/assets/images/thumbnail.webp"
							preload="auto"
							muted="true"
							playsInline
						>
							<source src="/assets/hero.mp4" type="video/mp4" />
							<img
								src=""
								alt="image_01"
								loading="lazy"
								className="object-fill object-center md:-m-3"
							/>
						</video>
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	);
};

export default Hero;
