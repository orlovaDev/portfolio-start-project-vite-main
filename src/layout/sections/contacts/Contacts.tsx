import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Slogan} from "../../../components/slogan/Slogan.tsx";

export const Contacts = (props: { id: string }) => {
  return (
    <StyledContacts id={props.id}>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <FlexWrapper  justify={"space-between"} gap={"40px"}>
        <Slogan/>
        <StyledForm>

          <StyledLabel>Name
            <Field placeholder="Name" />
          </StyledLabel>

          <StyledLabel>Email
            <Field
              placeholder="Email"
              required
            />
          </StyledLabel>

          <StyledLabel>Message
            <Field
              as={"textarea"}
              placeholder="Hi, i will..."
            />
          </StyledLabel>

          <Button type={"submit"}>Submit</Button>
        </StyledForm>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      flex-direction: column;
      align-items: center; 
      text-align: center;
    }
  }
  
`

const StyledForm = styled.form`
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

const StyledLabel = styled.label`
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



