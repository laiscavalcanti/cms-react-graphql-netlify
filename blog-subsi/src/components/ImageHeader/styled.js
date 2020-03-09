import styled from 'styled-components'
import Img from "gatsby-image"

export const ImgWrapperHeader = styled(Img) `
    display: flex;
    height: 20rem;
    width: 100%;
    &:hover{
    opacity: 0.5;
    transition: opacity 0.1s, transform 0.3s;
    background: #fff8dc;
}
`

