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
  height: 380px;
  padding: 60px 3.4px;
  margin: 80px -115px;
  background-color: #F9F0E8;
  display: flex;
  .title{
    margin: 40px 110px;
    width: 40%;
    font-size: 21px;
  }
  .icons{
    display: flex;
    width: 64%;
    margin: 60px auto;
    flex-wrap: wrap;
    .cards{
      width: 25%;
      margin: -20px 0px -40px 80px;
      display: flex; 
      height: 100px;
    .img-icon{
      height: 60px;
      width: 60px;
    }
    .title{
      font-size: 27px;
      font-weight: bolder;
      margin: -4px 20px;
      span{
        font-size: 24px;
        font-weight: normal;
        color: gray;
      }
    }
    }
  }
`;

export const Cards = styled.div`
  width: 100%;
  margin: -107px 0;
  display: flex;
  color: white;
  background-color: #494949;
  .card{
    width: 50%;
    margin: 30px  100px auto;
    .title{
      font-weight: bolder;
      font-size: 36px;
    }
    .about{
font-size: 22px;
    }
    .textt{
      outline: none;
      margin: 20px 0px;
      width: 180px;
      height:65px;
      font-size: 18px;
      color: #494949;
      font-weight: 700;
      border:none;
      background-color: orange;
      border-radius: 40px;
    }
    .textt:hover{
      opacity: 0.7;
    }
  }
.img{
  margin: 90px 70px;
}
`;