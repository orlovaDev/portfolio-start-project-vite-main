import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Slogan} from "./slogan/Slogan.tsx";
import {S} from "./Contact_Styles.ts";
import React from "react";

export const Contacts: React.FC<{ id: string }> = (props: { id: string }) => {
  return (
    <S.Contacts id={props.id}>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <FlexWrapper  justify={"space-between"} gap={"40px"}>
        <Slogan/>
        <S.Form>

          <S.Label>Name
            <S.Field placeholder="Name" />
          </S.Label>

          <S.Label>Email
            <S.Field
              placeholder="Email"
              required
            />
          </S.Label>

          <S.Label>Message
            <S.Field
              as={"textarea"}
              placeholder="Hi, i will..."
            />
          </S.Label>

          <Button type={"submit"}>Submit</Button>
        </S.Form>
        </FlexWrapper>
      </Container>
    </S.Contacts>
  );
};




