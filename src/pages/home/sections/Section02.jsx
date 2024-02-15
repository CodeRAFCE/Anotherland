import MaxWidthWrapper from "../../../components/MaxWidthWrapper";

//py-20 md:py-40 md:pt-50
const Section02 = () => {
	return (
		<MaxWidthWrapper>
			<div className="relative flex flex-col justify-center space-y-12 max-w-xs md:max-w-3xl mx-auto pt-[140px] md:pt-[295px] pb-[200px] md:pb-[280px]  font-maisonMono">
				<div className="text-center text-[15px] md:text-[24px] leading-tight">
					Understanding what success looks like when it comes to strategy, creativity, and media is
					the future of every brand. The problem is most
					<br />
					<span className="text-[#FFD706]">brands don&apos;t have that answer.</span>
				</div>
				<div className="text-center text-[15px] md:text-[24px] leading-tight">
					We navigate the marketing and creative landscapes with a unique blend of experience and
					expertise, so every client has an experience that leaves them knowing they&apos;re in good
					hands.
				</div>
				<div className="text-center text-[15px] md:text-[24px] leading-tight">
					Anotherland offers a different way to succeed at marketing and creativity. And for the
					right brands, a better way.
				</div>
			</div>
		</MaxWidthWrapper>
	);
};

export default Section02;
