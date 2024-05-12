import styled from "styled-components";
import { WrapperProps } from "@/interfaces/wrapper";

export const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => `${props.height}`};
  padding: ${(props) => (props.padding ? `${props.padding}` : 0)};
  margin: ${(props) => (props.margin ? `${props.margin}` : 0)};
  row-gap: ${(props) => (props.gap ? `${props.gap}` : 0)};
`;