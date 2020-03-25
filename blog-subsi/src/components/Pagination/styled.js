import styled from 'styled-components'

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid var(--borders);
  color: white;
  display: flex;
  padding: 1.5rem 2rem;
  background-color: tomato;
  justify-content: space-between;
  
    a{
        color: white;
        transition: color 0.5s;
        
        &:hover{
            color: orange;
        }
    }
`