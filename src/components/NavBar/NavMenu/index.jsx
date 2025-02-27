import { AiOutlineClose } from "react-icons/ai"
import { FlexContainer, PaddingContainer } from "../../../styles/Globals"
import { MenuIcon } from "../styles"
import { MenuItem, NavMenuContainer } from "./styles"
import { navLinks } from "../../../utils/data"
import { motion } from "framer-motion"
import { slideInLeft } from "../../../utils/variants"

export const NavMenu = ({setOpenMenu}) =>{
    return (
      <NavMenuContainer
        as={motion.div}
        variants={slideInLeft}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <PaddingContainer left="5%" right="5%" top="2rem">
          <FlexContainer justify="flex-end" responsiveFlex>
            <MenuIcon as={motion.a} whileHover={{ scale: 1.3 }}>
              <AiOutlineClose onClick={() => setOpenMenu(false)} />
            </MenuIcon>
          </FlexContainer>
        </PaddingContainer>

        <PaddingContainer top="8%">
          <FlexContainer direction="column" align="center" responsiveFlex>
            {navLinks.map((link) => (
              <MenuItem
                as={motion.a}
                whileHover={{ scale: 1.3 }}
                key={link.id}
                href={`#${link.href}`}
                onClick={() => setOpenMenu(false)}
              >
                {link.name}
              </MenuItem>
            ))}
          </FlexContainer>
        </PaddingContainer>
      </NavMenuContainer>
    );
}