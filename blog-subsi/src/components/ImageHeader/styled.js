import styled from 'styled-components'
import Img from "gatsby-image"

export const ImgWrapperHeader = styled(Img) `
    display: flex;
    max: 940px;
    min-height: 20rem;
    width: 100%;
    &:hover{
    opacity: 0.5;
    transition: opacity 0.1s, transform 0.3s;
    background: #fff8dc;
}
`

