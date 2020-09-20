import React from 'react';
import styled from '@emotion/styled';
import { Trans, useTranslation } from 'react-i18next';
import { Heading1, Heading2, Paragraph } from '../components/typography';
import beli from '../assets/Beli.jpg';
import piano from '../assets/piano.jpg';
import Quote from '../components/quote';
import { Columns, Items } from '../utils/flex';

export const Wrapper = styled('div')`
  width: 80%;
  margin: auto;
`;

const Title = styled(Heading1)`
  margin: 0 0;
  font-style: normal;
  font-size: 3rem;
`;

const UnderTitle = styled(Heading1)`
  color: lightgray;
  font-size: 5rem;
  margin: 0.5rem;
  z-index: -1;
`;

const Img = styled('img')`
  box-shadow: 0 0 10px lightgray;
`;

const FirstWrapper = styled('div')`
  height: calc(100vh - 13rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-style: italic;
`;

export default () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Columns>
        <Items>
          <FirstWrapper>
            <Title>Belinda</Title>
            <UnderTitle>Sans Tabous</UnderTitle>
            <Img src={beli} alt="Belinda" style={{ margin: 'auto' }} />
            <Quote author="Alfred de Musset">
              {t('home.quote')}
            </Quote>
          </FirstWrapper>
          <img src={piano} alt="Piano" width="100%" />
        </Items>
        <Items>
          <FirstWrapper>
            <Paragraph>
              <Trans t={t} i18nKey="home.captionText" />
            </Paragraph>
          </FirstWrapper>
          <Heading2>
            {t('home.firstTitle')}
          </Heading2>
          <Paragraph>
            <Trans i18nKey="home.firstParagraph" />
          </Paragraph>
          <Heading2>{t('home.secondTitle')}</Heading2>
          <Paragraph>
            <Trans i18nKey="home.secondParagraph" />
          </Paragraph>
          <Heading2>{t('home.thirdTitle')}</Heading2>
          <Paragraph>
            <Trans i18nKey="home.thirdParagraph" />
          </Paragraph>
          <Heading2>{t('home.fourthTitle')}</Heading2>
          <Paragraph>
            <Trans i18nKey="home.fourthParagraph" />
          </Paragraph>
          <Heading2>{t('home.fifthTitle')}</Heading2>
          <Paragraph>
            <Trans i18nKey="home.fifthParagraph" />
          </Paragraph>
          <Heading2>{t('home.sixthTitle')}</Heading2>
          <Paragraph>
            <Trans i18nKey="home.sixthParagraph" />
          </Paragraph>
        </Items>
      </Columns>
    </Wrapper>
  );
};
