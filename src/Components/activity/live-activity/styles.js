import styled from "styled-components";

const Style = styled.div `
.image {
    width: 48%;
    display: block;
    margin: 0;
    img {
      width: 100%;
      object-fit: contain;
      display: block;
    }
}
.box{
    width: 55%;
    height: 400px;
    background-color: rgb(155,174,226);
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    text-align: center;
    position: relative;
    
    &-title{
        color: darkblue;
        font-size: 27px;
    }
    &-text{
        font-size: 22px;
        margin: 43px 65px;
        padding: 0px 23px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: left;

        p{
           margin: 0;
           padding: 5px 34px;
            
        }
        &>div{
            text-align: left;
        }
        .block{
            &>div{
                font-size: 22px;
                font-weight: 600;
                padding: 5px 34px;
            }
        }
        
    }
    .absolute{
        position: absolute;
        top: 19%;
        left: 7%;
    }

}
  
`;
export default Style;