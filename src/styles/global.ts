import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  padding:0;
  margin: 0;
  outline:0;
  box-sizing: border-box;
}

body{
  background: #312e38;
  color:#fff;
  -webkit-font-smoothing: antialiased;
}

html, body, #root{
  height:100%;
}

body , input , button{
  font-family: 'Roboto Slab',Arial, Helvetica, sans-serif;
  font-size: 16px;
}

h1, h2,h3, h4, h5, h6, strong{
  font-weight: 500;
}

button{
  cursor: pointer;
}
`;
