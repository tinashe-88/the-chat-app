import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    background: #f4f4f4;
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
  }

  #root {
    height: 100vh;
  }
`
 
export default GlobalStyle