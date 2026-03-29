import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Container} from "../../../components/Container.ts";
import React from "react";
import {S} from "./About_Styles.ts"

export const About: React.FC<{ id: string }> = (props: { id: string }) => {
  return (
    <S.About id={props.id}>
      <Container>
          <SectionTitle>About me</SectionTitle>
          <S.Text>The long barrow was built on land previously inhabited in
            the
            Mesolithic period. It consisted of a sub-rectangular earthen
            tumulus,
            estimated to have been 15 metres (50 feet) in length, with a chamber
            built from sarsen megaliths on its eastern end. Both inhumed and
            cremated human remains were placed within this chamber during the
            Neolithic period, representing at least nine or ten
            individuals.</S.Text>
      </Container>
    </S.About>
  );
};




