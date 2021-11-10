import styled from "styled-components";

export const MainPages = styled.div`
  width: 100%;
`;

export const About = styled.div`
width: 84%;
margin: 110px auto;
.hrr{
  width: 120px;
  background-color: orange;
  border: 4px solid orange;
  border-radius: 40px;
}
.about{
  width: 60%;
  .abouts{
    font-size: 22px;
  }
}
.global{
  position: absolute;
  left: 990px;
  top: 210px;
}
.buttons{
  width: 300px;
  height: 54px;
  font-size: 22px;
  border-radius: 35px;
  font-weight: 600;
  border: 2px solid black;
background-color: #fff;
}
.buttons:hover{
  background-color: black;
  color: white;
  transition-duration: 0.5s;

}
`;

export const Title = styled.p`
  font-size: 38px;
  font-weight:  bolder;
  width: 56%;
`;
export const Country = styled.div`
  width:118%;
  padding: 30px 3.4px;
  margin: 80px -115px;
  background-color: #F9F0E8;
  .title{
    margin: 40px 110px;
    width: 40%;
    font-size: 21px;
  }
`;