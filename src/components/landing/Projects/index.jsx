import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card } from "components/common";
import { Wrapper, Grid, Item, Content, Links, ProjectControl } from "./styles";
import proj01 from "../../../assets/projects/proj01.png";

export const Projects = () => {
	const { theme } = useContext(ThemeContext);
	const projects = [
		{
			id: 1,
			liveUrl: "https://minimaxttt.netlify.app",
			githubUrl: "https://github.com/ishandotsh/minimax-visualizer",
			name: "Minimax Visualizer",
			description:
				"A playable tic-tac-toe game that shows the decisions made by the minimax algorithm.",
		},
		{
			id: 2,
			liveUrl: "https://minimaxttt.netlify.app",
			githubUrl: "https://github.com/ishandotsh/minimax-visualizer",
			name: "Minimax Visualizer",
			description:
				"A playable tic-tac-toe game that shows the decisions made by the minimax algorithm.",
		},
		{
			id: 3,
			liveUrl: "https://minimaxttt.netlify.app",
			githubUrl: "https://github.com/ishandotsh/minimax-visualizer",
			name: "Minimax Visualizer",
			description:
				"A playable tic-tac-toe game that shows the decisions made by the minimax algorithm.",
		},
		{
			id: 4,
			liveUrl: "https://minimaxttt.netlify.app",
			githubUrl: "https://github.com/ishandotsh/minimax-visualizer",
			name: "Minimax Visualizer",
			description:
				"A playable tic-tac-toe game that shows the decisions made by the minimax algorithm.",
		},
		{
			id: 5,
			liveUrl: "https://minimaxttt.netlify.app",
			githubUrl: "https://github.com/ishandotsh/minimax-visualizer",
			name: "Minimax Visualizer",
			description:
				"A playable tic-tac-toe game that shows the decisions made by the minimax algorithm.",
		},
	];
	return (
		<Wrapper as={Container} id="projects">
			<h2>Projects</h2>
			<Grid>
				{projects.map((project) => (
					<Item
						key={project.id}
						as="div"
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						theme={theme}
					>
						<Card theme={theme}>
							<Content>
								<img src={proj01} />
							</Content>
							<Content>
								<ProjectControl>
									<h3 style={{ margin: 0 }}>{project.name}</h3>
									<Links>
										<a
											key={project.id}
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={"See github repo"}
										>
											<img width="22" src={"/icons/github.svg"} alt="github" />
										</a>
										<a
											key={project.id}
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={"See live demo"}
										>
											<img
												width="22"
												src={"/icons/extlink.svg"}
												alt="live demo"
											/>
										</a>
									</Links>
								</ProjectControl>

								<p>{project.description}</p>
							</Content>
						</Card>
					</Item>
				))}
			</Grid>
		</Wrapper>
	);
};
