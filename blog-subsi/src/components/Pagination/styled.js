import styled from 'styled-components'

export const PaginationWrapper = styled.section`
    display: flex;
    height: 2rem;
    align-items: end;
    justify-content: space-between;
    border-top: 1px solid white;
    color: white;
    padding: 1.5rem 3rem;

    a{
        color: white;
        transition: color 0.5s;
        
        &:hover{
            color: orange;
        }
    }
`