import styled from "styled-components";

export const TechStackCard = styled.div`
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    padding: 0.3rem 1rem;
    border-radius: 5px;

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}){
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
`
export const ProjectImageContainer = styled.div`
    display: flex;
    justify-content: ${({justify}) => justify};
`

export const ProjectImage = styled.img`
    border: 1px solid #fff;
    width: 80%;
    height: 300px;
    object-fit: 300px;
    border-radius: 10px;

    @media(max-width: ${({theme}) => theme.breakpoints.mobile}){
        width: 100%;
        margin-top: 2rem;
    }
`