// import logo from './logo.svg';
import styled from "styled-components";
import "./App.css";
import {ThemeProvider} from "styled-components";
import { Globalstyle } from "./styles/Globalstyle";


// const Wrapper = styled.section`
//   button {
//     background: #bf4f74;
//     border-radius: 3px;
//     border: none;
//     color: white;
//   }
//   p {
//     color: red;
//   }
// `;

function App() {
const theme={
  color:{
    textColor:"black",
    bg:"lightcyan",
  }
}

  let favcolor="grey";
  const Button = styled.button`
  /* background: #bf4f74; */
  background-color: ${({bg})=>bg};
  /* background-color: ${({theme})=>theme.color.bg}; */
  border-radius: 3px;
  border: none;
  /* color: white; */
  color: ${({theme})=>theme.color.textColor};

  &:hover {
    background-color: green;
  }
  &:active {
    background-color: yellow;
  }
  span{
    color: blue;
    b{
      color:${favcolor};
      /* color: orangered; */
    }
    &:hover{
      /* color: green; */
      color:${favcolor};
    }
  }
`;
const Para = styled.p`
//passing properties by using props
  color: ${({color})=>color};
`;
  return (
    <>
      {/* <Wrapper> */}
      <ThemeProvider theme={theme}>
        <Globalstyle/>
      <Button className="btn" bg="purple">
        Subscribe 
        <span> Arham Ramay
          <b> comments</b>
        </span>
        </Button>
      <Para color="green ">Arham ramay</Para>
      </ThemeProvider>
      {/* </Wrapper> */}
    </>
  );
}

export default App;
