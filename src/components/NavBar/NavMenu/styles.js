import styled from "styled-components";

export const NavMenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary_light};
    z-index: 1;
`
export const MenuItem = styled.a`
    color: #fff;
    font-size: 2.5rem;
    margin-top: 3rem;
    cursor: pointer;
    text-decoration: none;
`