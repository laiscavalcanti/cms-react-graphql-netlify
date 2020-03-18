import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem;
`
export const PostItemWrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100px;
    padding: 1rem 3rem;
    background-color: lightgreen;
    color: white; 
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