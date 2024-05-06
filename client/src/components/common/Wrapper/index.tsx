import * as S from "./Wrapper.styled";
import { WrapperProps } from "@/interfaces/wrapper";

export const Wrapper = (props: WrapperProps) => {
  return (
    <S.Wrapper
      width={props.width}
      height={props.height}
      margin={props.margin}
      padding={props.padding}
      gap={props.gap}
    >
      {props.children}
    </S.Wrapper>
  );
};
