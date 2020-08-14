import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/skills.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail, Post } from "./styles";

export const Skills = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<Wrapper id="writing">
			<SkillsWrapper as={Container}>
				<Details theme={theme} style={{ display: "inline-block" }}>
					<h1>Top Blog Posts</h1>
					<p>
						Read my thoughts on what I've learned, I'm currently learning, or
						just stuff I find interesting.
					</p>
					<Button as={AnchorLink} href="/">
						Go to blog
					</Button>
				</Details>
			</SkillsWrapper>
			<SkillsWrapper as={Container}>
				<Details theme={theme}>
					<Thumbnail>
						<img src={dev} alt="Post1" />
					</Thumbnail>
					<Post>
						<h2>
							<a href="/">Post Title</a>
						</h2>
						<p style={{ fontSize: "1rem" }}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
							excepturi a est rerum, mollitia autem laudantium. In eligendi
							nesciunt incidunt placeat! Vel dicta beatae necessitatibus,
							voluptatem ipsa officiis eligendi sint.
						</p>
					</Post>
				</Details>
			</SkillsWrapper>
			<SkillsWrapper as={Container}>
				<Details theme={theme}>
					<Thumbnail>
						<img src={dev} alt="Post1" />
					</Thumbnail>
					<Post>
						<h2>
							<a href="/">Post Title</a>
						</h2>
						<p style={{ fontSize: "1rem" }}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
							veritatis reprehenderit recusandae accusantium corporis earum
							atque et hic dolorem beatae inventore, dolores consectetur enim ab
							optio saepe dignissimos. Dicta commodi assumenda eligendi aut id a
							quo et. Temporibus consequatur, enim dolor asperiores porro,
							voluptatum accusantium, reiciendis impedit quasi nemo ipsam?
						</p>
					</Post>
				</Details>
			</SkillsWrapper>
			<SkillsWrapper as={Container}>
				<Details theme={theme}>
					<Thumbnail>
						<img src={dev} alt="Post1" />
					</Thumbnail>
					<Post>
						<h2>
							<a href="/">Post Title</a>
						</h2>
						<p style={{ fontSize: "1rem" }}>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
							assumenda, dolores mollitia necessitatibus in sunt.
						</p>
					</Post>
				</Details>
			</SkillsWrapper>
		</Wrapper>
	);
};
