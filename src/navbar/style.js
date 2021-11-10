import styled from "styled-components";

export const Navbars = styled.div`
  width: 100%;
  display: flex;
  .logo{
      margin: 5px 100px;
        height: 40px;
        width: 156px;
  }
 select{
      width: 120px;
      padding: 5px 20px 5px 20px;
      text-align: center;
      height: 40px;
      position: absolute;
      left: 890px;
      top: -2px;
      outline: none;
  }
  .contactss{
      display: flex;
      margin: -2px 800px;
      text-align: center;
      height: 40px;
      
      a{
          text-decoration: none;
        position: relative;
        top: 3px;
        text-transform: capitalize;
          color: white;
      }
      .abd{
          padding: 4px 30px 4px 30px;
         background-color: orange;
          margin: 0px 0px;
          width: 50px;
      
        border-bottom-left-radius:6px;
      }
      .abd1{
          background-color: black;
          color: white;
          width: 50px;
          padding: 4px 30px 4px 30px;
   border-bottom-right-radius: 6px;
  
        }
  }
  .navs{
      list-style: none;
      text-decoration: none;
display: flex;
position: absolute;
right: 190px;
text-transform: capitalize;
li{
        margin: 52px 20px;
a{
    color: black;
    font-weight: 600;
    font-size: 17px;
    text-decoration: none;
}
}
}
`;