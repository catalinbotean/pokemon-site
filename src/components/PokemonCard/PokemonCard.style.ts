import styled from "styled-components/macro";
import { Colors } from "../../environment/Colors";
export const StyledDiv = styled.div`
  text-transform: uppercase;
  color: ${Colors.cyan};
  &:hover {
    color: ${Colors.yellow};
  }
`;
