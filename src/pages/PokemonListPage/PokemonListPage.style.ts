import styled from "styled-components";
import image from "../../environment/assets/backgrounds.jpg";
import { Colors } from '../../environment';

export const StyledDiv = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
`;

export const DivParent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10%;
  margin-right: 10%;
`;

export const DivChild = styled.div`
  flex: 1 0 21%;
  text-align: center;
  margin: 20px;
  height: 150px;
  max-width: 21%;
  align-self: flex-start;
  border: 4px solid ${Colors.cyan};
  border-radius: 25%;
  background-color: ${Colors.dark_blue};
  &:hover {
    opacity: 0.5;
    border: 4px solid ${Colors.yellow};
  }
`;
