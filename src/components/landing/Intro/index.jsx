import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Header } from "components/theme";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/dev.svg";
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles";
import { Links } from "./../../theme/Footer/styles";
import social from "./../../theme/Footer/social.json";

export const Intro = () => {
	const { theme } = useContext(ThemeContext);
	const downloadResume = () => {
		console.log("download resume");
	};
	return (
		<Wrapper>
			<Header />
			<IntroWrapper as={Container}>
				<Details theme={theme}>
					<h1>Welcome!</h1>
					<h4>I’m Ishan and this is where my projects live.</h4>
					<Button onClick={downloadResume}>Resume</Button>
					<Links>
						{social.map(({ id, name, link, icon }) => (
							<a
								key={id}
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`follow me on ${name}`}
							>
								<img width="32" src={icon} alt={name} />
							</a>
						))}
					</Links>
				</Details>
			</IntroWrapper>
		</Wrapper>
	);
};
