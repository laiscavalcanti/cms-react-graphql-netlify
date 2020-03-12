import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemLink = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: red;
`
export const PostItemWrapper = styled(Link)`
   
    background-color: lightgreen;
    color: white;
    margin: 10px;
`
export const PostItemTag = styled.div`
    color: blue;
    background: ${props => props.background ? props.background : 'pink'};
`
export const PostItemInfo = styled.div`
    background-color: lightskyblue;
`
export const PostItemDate = styled.div`
    background-color: tomato;
`
export const PostItemTitle = styled.h1`
    background-color: lightpink;
`
export const PostItemDescription = styled.p`
    
    background-color:lightsteelblue;
`