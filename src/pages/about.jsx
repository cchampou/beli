import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Heading2, Paragraph } from '../components/typography';
import { Wrapper } from './home';
import miroir from '../assets/miroir.jpg';
import { Items, Rows } from '../utils/flex';
import { zoom } from '../animations/basics';

const Img = styled('img')`
  animation: ${zoom} 0.45s;
`;

const About = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Rows>
        <Items>
          <Img src={miroir} alt="Belinda devant un miroir" />
        </Items>
        <Items>
          <Heading2>{t('about.firstTitle')}</Heading2>
          <Paragraph>
            <Trans i18nKey="about.firstParagraph" />
          </Paragraph>
        </Items>
      </Rows>
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
