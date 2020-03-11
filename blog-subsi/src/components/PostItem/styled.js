import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemLink = styled.section`
`
export const PostItemWrapper = styled(Link)`
   
    background-color: lightgreen;
    color: white;
    margin: 10px;
`
export const PostItemTag = styled.div`
    color: blue;
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