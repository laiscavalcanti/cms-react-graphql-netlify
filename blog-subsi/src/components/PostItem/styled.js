import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem;
`
export const PostItemWrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100px;
    padding: 1rem 3rem;
    background-color: lightgreen;
    color: white; 
`
export const PostItemTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: blue;
    background: ${props => props.background ? props.background : 'pink'};
`
export const PostItemInfo = styled.div`
    display: flex;
    flex-direction: column;
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