import styled from "styled-components";
import image from "../../environment/assets/backgrounds.jpg";

export const StyleDiv = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100%;
  min-width: 100%;
  position: absolute;

  ul li {
    text-align: left;
    margin-left: 42%;
  }
`;
