import { BlueText, Container, FlexContainer, PaddingContainer } from "../../styles/Globals"
import { Logo, MenuIcon, NavBarContainer } from "./styles"
import { theme } from "../../utils/Theme"
import { GiHamburgerMenu } from "react-icons/gi"
import { useEffect, useState } from "react"
import { NavMenu } from "./NavMenu"
import { motion, AnimatePresence } from "framer-motion"

export const NavBar = () =>{
    
    const [openMenu,setOpenMenu] = useState(false)
    const [sticky,setSticky] = useState(false)

    useEffect(() =>{
        const onScroll = () =>{
            window.scrollY > 10 ? setSticky(true) : setSticky(false)
        }
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    },[])
    
    return(
        <NavBarContainer bgColor={sticky ? theme.colors.primary : 'transparent'}>
            <PaddingContainer
                top="1.2rem"
                bottom="1.2rem"
                responsiveLeft="1rem"
                responsiveRight="1rem"
            >
                <Container>
                    <FlexContainer justify="space-between" responsiveFlex>

                        {/*---left-logo---*/}
                        <Logo>
                            De<BlueText>VNS</BlueText>
                        </Logo>

                        <MenuIcon
                            as={motion.a}
                            whileHover={{scale:1.3}}
                        >
                            <GiHamburgerMenu onClick={() => setOpenMenu(true)}/>
                        </MenuIcon>
                    </FlexContainer>
                </Container>
                
                <AnimatePresence>
                {openMenu && <NavMenu setOpenMenu= {setOpenMenu}/>}
                </AnimatePresence>
                
            </PaddingContainer>
        </NavBarContainer>
    )
}