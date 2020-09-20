import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Heading2, Paragraph } from '../components/typography';
import { Wrapper } from './home';
import miroir from '../assets/miroir.jpg';
import { Columns, Items } from '../utils/flex';

const About = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Columns>
        <Items>
          <img src={miroir} alt="Belinda devant un miroir" />
        </Items>
        <Items>
          <Heading2>{t('about.firstTitle')}</Heading2>
          <Paragraph>
            <Trans i18nKey="about.firstParagraph" />
          </Paragraph>
        </Items>
      </Columns>
    </Wrapper>
  );
};

export default About;
