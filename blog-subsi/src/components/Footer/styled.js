import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    right: 0;
    
    height: 12rem;
    &:hover{
    opacity: 0.5;
    transition: opacity 0.1s, transform 0.3s;
    background: #fff8dc;
    }
`