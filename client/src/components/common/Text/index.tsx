import * as S from "./Text.styled";
import { TextProps } from "@/interfaces/text";

export const Text = (props: TextProps) => {
  return (
    <S.Text size={props.size} color={props.color} decoration={props.decoration}>
      {props.children}
    </S.Text>
  );
};