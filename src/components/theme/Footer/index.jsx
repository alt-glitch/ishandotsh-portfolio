import React from "react";
import { Container } from "components/common";
import { Wrapper, Flex, Links, Details } from "./styles";
import social from "./social.json";

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Ishan Sharma</h2>
				<span>
					<a href="/">ishan.sh</a>
				</span>
			</Details>
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
		</Flex>
	</Wrapper>
);
