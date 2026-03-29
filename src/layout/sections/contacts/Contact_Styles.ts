import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";

const Contacts = styled.section`
  /*noinspection CssUnknownProperty*/

  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`
const Form = styled.form`
  max-width: 535px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 0 auto;
  box-sizing: border-box;
  
  textarea {
    box-sizing: border-box;
    max-width: 100%;
    width: 100%;
    height: 165px;
    resize: none;
    overflow: auto;
  }

  button {
    @media ${theme.media.mobile} {
      width: 100%; 
    }
  }
`

const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  color: ${theme.colors.font};
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media ${theme.media.mobile} {
    font-size: 12px;
    align-items: flex-start;
  }
`

const Field = styled.input`
  outline: none;
  max-width: 535px;
  width: 100%;
  height: 48px;
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 20px;
  color: ${theme.colors.font};
  border: 1px solid transparent;
  background-image: 
    linear-gradient(${theme.colors.primaryBg}, ${theme.colors.primaryBg}), 
    linear-gradient(135deg, #4a82da 0%, #bad1f7 50%, #2d507d 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  transition: all 0.3s ease;

  &:focus {
    filter: brightness(1.2);
    box-shadow: 0 10px 20px rgba(74, 130, 218, 0.3);
  }
  
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #919b9b;

    @media ${theme.media.mobile} {
      font-size: 12px;
    }
  }
`;

export const S = {
  Contacts,
  Form,
  Label,
  Field,
}