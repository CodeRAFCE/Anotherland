import AnotherLand from "../../components/AnotherLand";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";

const Footer = () => {
	return (
		<MaxWidthWrapper>
			<div className="flex flex-col space-y-13 pb-[30px] pt-[222px] md:pt-[300px] md:pd-[40px]">
				<div className="flex flex-col space-y-2 md:space-y-0.5 text-center font-maisonMono text-[15px] md:text-[24px] pb-[25px] md:pb-[52px]">
					<span>Interested?</span>
					<span>
						Email us at{" "}
						<a href="mailto:hello@anotherland.com" className="md:inline block">
							hello@anotherland.com
						</a>
					</span>
				</div>

				<AnotherLand isFooter />
			</div>
		</MaxWidthWrapper>
	);
};

export default Footer;
