import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle `

*, 
*:after,
*:before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
}

body{
    font-size: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: #fff8dc;
}

}
  body {
    background: #16202c;
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  body.dark {
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #fff;
    --highlight: #1fa1f2;
    --mediumBackground: #192734;
    --background: #16202c;
    --white: #fff;
    --black: #222;
  }
  body.light {
    --borders: #dedede;
    --postColor: #111;
    --texts: #555555;
    --highlight: #1fa1f2;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
  }
`
export default GlobalStyles