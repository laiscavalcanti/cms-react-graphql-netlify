import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemLink = styled.section`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 1rem;
    width: 100%;
    color: white;
    background-color: lightslategray;
    &:nth-child(odd){
        background: black;
    }
`
export const PostItemWrapper = styled(Link)`
    display: grid;
    background-color: lightgoldenrodyellow;
    color: white;
    margin: 10px;
`
export const PostItemTag = styled.div`
    font-size: 1rem;
    color: orange;
    background: lightsalmon;
`
   
export const PostItemInfo = styled.div`
    background-color: lightskyblue;
`

export const PostItemDate = styled.time`
    background-color: tomato;
`

export const PostItemTitle = styled.h1`
    background-color: lightpink;
`

export const PostItemDescription = styled.p`
    background-color:lightsteelblue;
`