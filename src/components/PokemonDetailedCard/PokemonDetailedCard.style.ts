import styled from "styled-components";
import { Colors } from "../../environment/Colors";

interface Props {
  type: string;
}

export const NameDiv = styled.div`
  padding-top: 80px;
  color: ${Colors.dark_blue};
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
  background-color: ${Colors.cyan};
  border-radius: 25%;
  width: 30%;
  margin-left: 35%;
`;

export const DataDiv = styled.div`
  background-color: ${Colors.white};
  text-align: center;
  width: 40%;
  border: 4px solid ${Colors.cyan};
  border-radius: 25%;
  margin-top: 3%;
  margin-left: 30%;
  margin-right: 30%;
  overflow: hidden;
`;

export const LabelDiv = styled.div`
  color: ${Colors.white};
  background-color: ${Colors.dark_blue};
`;

export const TypeBadge = styled.div`
  border-radius: 50px 50px 50px 50px;
  margin-left: 40%;
  width: 20%;
  padding-top: 3%;
  padding-bottom: 3%;
  margin-top: 1%;
  margin-bottom: 1%;
  ${(props: Props) =>
    (props.type === "water" && `color:${Colors.white}; background-color:${Colors.dark_blue};`) ||
    (props.type === "rock" && `color:${Colors.white};background-color:${Colors.brown}`) ||
    (props.type === "psychic" && `color:${Colors.white};background-color:${Colors.brown}`) ||
    (props.type === "poison" && `color:${Colors.white};background-color:${Colors.purple}`) ||
    (props.type === "normal" && `color:${Colors.black};background-color:${Colors.beige}`) ||
    (props.type === "ice" && `color:${Colors.black};background-color:${Colors.cyan}`) ||
    (props.type === "ground" && `color:${Colors.black};background-color:${Colors.green}`) ||
    (props.type === "grass" && `color:${Colors.black};background-color:${Colors.lime}`) ||
    (props.type === "ghost" && `color:${Colors.white};background-color:black`) ||
    (props.type === "flying" && `color:${Colors.black};background-color:${Colors.cyan}`) ||
    (props.type === "fire" && `color:${Colors.white};background-color:${Colors.red}`) ||
    (props.type === "fighting" && `color:${Colors.white};background-color:${Colors.cyan}`) ||
    (props.type === "dragon" && `color:${Colors.white};background-color:${Colors.red}`) ||
    (props.type === "bug" && `color:${Colors.white};background-color:${Colors.beige}`)}
`;

export const ButtonStyled = styled.div`
  background: ${Colors.cyan};
  color: ${Colors.black};
  border: none;
  border-radius: 50px 50px 50px 50px;
  padding: 3%;
  margin: 1%;
  width: 25%;
  margin-left: 35%;
  &:hover {
    color: ${Colors.white};
    background-color: ${Colors.dark_blue};
  }
`;
