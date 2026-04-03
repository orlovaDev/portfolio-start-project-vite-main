import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Slogan} from "./slogan/Slogan.tsx";
import {S} from "./Contact_Styles.ts";
import React, {ElementRef, useRef, useState} from "react";
import emailjs from '@emailjs/browser';

const Contacts: React.FC<{ id: string }> = (props: { id: string }) => {
  const form = useRef<ElementRef<'form'>>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_crzx4kx', 'template_bqdfg1x', form.current, {
        publicKey: 'ThsVtM2Q2YFbT1d9F',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSent(true); // Показываем сообщение
          form.current?.reset();

          // Скрываем сообщение через 3 секунды
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Ошибка при отправке, попробуйте снова");
        },
      );
  };

  return (
    <S.Contacts id={props.id}>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <FlexWrapper  justify={"space-between"} gap={"40px"}>
        <Slogan/>
        <S.Form ref={form} onSubmit={sendEmail}>

          <S.Label>Name
            <S.Field
              placeholder="Name"
              required
              name={'name'}
            />
          </S.Label>

          <S.Label>Email
            <S.Field
              placeholder="Email"
              required
              name={'email'}
            />
          </S.Label>

          <S.Label>Message
            <S.Field
              as={"textarea"}
              placeholder="Hi, i will..."
              required
              name={'message'}
            />
          </S.Label>

          {isSent && <div style={{ color: "5DC2F8FF", textAlign: "center" }}>Успешно отправлено!</div>}

          <Button type={"submit"}>Submit</Button>
        </S.Form>
        </FlexWrapper>
      </Container>
    </S.Contacts>
  );
};
export default Contacts




