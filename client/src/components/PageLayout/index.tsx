import * as S from "@/components/PageLayout/PageLayout.styled";
import { WrapperProps } from "@/interfaces/wrapper";

export const PageLayout = (props: WrapperProps) => {
  return (
    <S.Wrapper gap={props.gap} justify={props.justify}>
      {props.children}
    </S.Wrapper>
  );
};
