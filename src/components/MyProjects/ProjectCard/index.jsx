import { FaGithub } from "react-icons/fa"
import { FlexContainer, Heading, IconContainer, PaddingContainer, ParaText, Link } from "../../../styles/Globals"
import { ProjectImage, ProjectImageContainer, TechStackCard } from "./styles"
import { motion } from "framer-motion"
import { fadeInLeftVariant, fadeInRightVariant } from "../../../utils/variants"

export const ProjectCard = ( {project})=>{
    return(
        <FlexContainer 
        direction={project.reverse ? 'row-reverse' : false}
        fullWidthChild>
            {/*--left-section--*/}
            <motion.div 
            variants={project.reverse ?fadeInRightVariant :fadeInLeftVariant }
            initial="hidden"
            whileInView="visible"
            id={project.id}>
                <FlexContainer align="center" gap="1rem">
                    <Heading as="h3" size="h3" bottom="1rem">
                       {project.name}
                    </Heading>

                    <IconContainer color="blue" size="2rem">
                        <FaGithub />
                    </IconContainer>
                </FlexContainer>

                <PaddingContainer top="1rem">
                    <FlexContainer gap="1.5rem">
                        {project.tech_stack.map((tech)=> (
                            <TechStackCard>{tech}</TechStackCard>
                        ))}
                    </FlexContainer>
                </PaddingContainer>

                <ParaText top="1.5rem" bottom="2rem">
                    {project.description}
                </ParaText>

                <Link>Visit Website</Link>
            </motion.div>
                {/*--right-section--*/}
            <ProjectImageContainer 
            as={motion.div}
            variants={project.reverse ?fadeInLeftVariant :fadeInRightVariant }
            initial="hidden"
            whileInView="visible"
            justify={project.reverse ? 'flex-start' : 'flex-end'}>
                <ProjectImage src={project.img}/>
            </ProjectImageContainer>
        </FlexContainer>
    )
}