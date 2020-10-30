import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

import { breakpoints } from '../../config/theme.json';

import { Heading2, Paragraph } from '../components/typography';
import { Wrapper } from './home';
import miroir from '../assets/miroir.jpg';
import { Items, Rows } from '../utils/flex';
import { zoom } from '../animations/basics';

const Img = styled('img')`
  animation: ${zoom} 0.45s;
  @media (max-width: ${breakpoints.mobile}) {
    height: 25vh;
  }
`;

const CustomFlexContainer = styled('div')`
  display: flex;
  flex-direction: row;
  
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const About = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <CustomFlexContainer>
        <Items>
          <Img src={miroir} alt="Belinda devant un miroir" />
        </Items>
        <Items>
          <Heading2>{t('about.firstTitle')}</Heading2>
          <Paragraph>
            <Trans i18nKey="about.firstParagraph" />
          </Paragraph>
        </Items>
      </CustomFlexContainer>
      <Rows>
        <Items>
          <Paragraph>
            <Trans i18nKey="about.secondParagraph" />
          </Paragraph>
        </Items>
      </Rows>
    </Wrapper>
  );
};

export default About;
