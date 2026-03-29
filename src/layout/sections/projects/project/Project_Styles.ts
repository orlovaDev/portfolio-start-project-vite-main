import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";

const Project = styled.article`
  background-color: ${theme.colors.secondaryBg};
  max-width: 525px;
  width: 100%;
  border-radius: 6px;
  min-height: 640px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media screen and (max-width: 1135px) {
    width: calc(50% - 20px); // 50% ширины - 20px половина gap
    max-width: 100%;
    min-height: auto;
  }
  
  @media ${theme.media.tablet} {
    width: calc(50% - 10px); // 50% ширины - 10px оловина gap
    max-width: 100%;
    min-height: auto;
    padding-bottom: 25px;
  }

  @media ${theme.media.mobile} {
    width: 100%;
  }

  &:hover {
    background-color: #1c243c;
    box-shadow: 0 10px 25px rgba(74, 130, 218, 0.3);
  }
`

const Image = styled.img`
  width: 100%;
  height: 390px;
  object-fit: cover;
  margin-bottom: 30px;

  @media ${theme.media.tablet} {
    height: 300px;
  }

  @media ${theme.media.mobile} {
    height: 250px; 
    margin-bottom: 20px;
  }
`
const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  padding: 0 25px 30px;

  @media ${theme.media.mobile} {
  padding: 0 15px; 
}
`

const Title = styled.h3`
  color: #e1e8ff;;
  font-weight: 600;
  font-size: 20px;

  @media ${theme.media.mobile} {
    font-size: 15px;
  }
`


const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.04em;
  color: ${theme.colors.font};

  @media ${theme.media.mobile} {
    font-size: 14px;
  }
`

export const S = {
  Project,
  Image,
  WrapperContent,
  Title,
  Text,
}