import styled from 'styled-components'

export const PaginationWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid red;
    color: pink;
    padding: 1.5rem 3rem;

    a{
        color: blue;
        transition: color 0.5s;
        
        &:hover{
            color: orange;
        }
    }
`