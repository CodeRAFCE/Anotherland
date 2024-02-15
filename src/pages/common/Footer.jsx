import AnotherLand from "../../components/AnotherLand";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";

const Footer = () => {
	return (
		<MaxWidthWrapper>
			<div className="flex flex-col space-y-4 pt-20 md:pt-40 pb-6">
				<div className="flex flex-col space-y-2 md:space-y-0.5 text-center font-maisonMono text-[15px] md:text-[24px] pb-2 md:pb-0">
					<span>Interested?</span>
					<span>
						Email us at <a href="mailto:">hello@anotherland.com</a>
					</span>
				</div>

				<AnotherLand isFooter />
			</div>
		</MaxWidthWrapper>
	);
};

export default Footer;
