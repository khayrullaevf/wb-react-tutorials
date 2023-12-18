import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  background-color:coral;
  color:black;
  padding: 20px;
`;


const getSize=(props)=>{
  switch (props.type) {
    case "large":
      return "200px";
    case "medium":
      return "150px";
    case "small":
      return "100px";

    default:
      return'150px'
  }


}

export const Box = styled.div`
  width: ${getSize};
  height: ${getSize};
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Title = styled.h1`
  color: blue;
`;
export const Title2=styled.h1`
background:red
`;
