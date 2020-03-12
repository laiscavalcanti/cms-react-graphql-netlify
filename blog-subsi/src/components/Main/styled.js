import styled from 'styled-components'

export const LayoutWrapper = styled.section`
`
export const LayoutMain = styled.main`
  min-height: 100vh;
  width: 100%;
`
export const GridContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 33% 33% 33%;
`
export const GridArea =styled.div`
  grid-column: 2/4 ;
  grid-row: 2/4;  
  `