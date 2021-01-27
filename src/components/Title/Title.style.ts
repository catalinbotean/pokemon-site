import styled from "styled-components";
import {Colors} from '../../environment';

export const StyledDiv = styled.div`
  background-color: ${Colors.dark_blue};
  font-size: 36px;
  text-align: center;
  font-family: OCR A Std, monospace;
  font-weight: bold;
  padding: 12px;
  position: fixed;
  width: 100%;
  color: ${Colors.yellow};
  z-index: 1;
  border-bottom: 4px solid ${Colors.cyan};
`;
