import React from 'react';
import styled from '@emotion/styled';
import { Trans, useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@reach/router';

import { shop } from '../../config/routes.json';
import { breakpoints, colors } from '../../config/theme.json';

import { Heading1, Heading2, Paragraph } from '../components/typography';
import beli from '../assets/Beli.jpg';
import piano from '../assets/piano.jpg';
import Quote from '../components/quote';
import { Items, Rows } from '../utils/flex';
import { Button } from '../components/forms';
import { fromLeft } from '../animations/basics';

export const Wrapper = styled('div')`
  width: 80%;
  margin: auto;
`;

const Title = styled(Heading1)`
  margin: 0 0;
  font-style: normal;
  font-size: 3rem;
  color: ${colors.primary};
`;

const UnderTitle = styled(Heading1)`
  color: lightgray;
  font-size: 5rem;
  margin: 0.5rem;
  z-index: -1;
`;

const Img = styled('img')`
  box-shadow: 0 0 10px lightgray;
  margin: 1rem;
  animation: ${fromLeft} 1s;
`;

const FirstWrapper = styled('div')`
  height: calc(100vh - 13rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: ${breakpoints.mobile}) {
    height: calc(100vh - 7rem);
  }
`;

const CustomButton = styled(Button)`
  width: auto;
  margin: auto;
  display: block;
  margin: 3rem auto;
`;

const PianoBackground = styled('div')`
  background-image:     linear-gradient(to right bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1) 50%), url('${piano}');
  background-size: cover;
  width: 60vw;
  left: 0;
  height: 50rem;
  background-repeat: no-repeat;
  position: absolute;
  z-index: -1;
`;

const NoMobileItem = styled(Items)`
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export default () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Rows>
        <NoMobileItem>
          <FirstWrapper>
            <Title>Belinda</Title>
            <UnderTitle>Sans Tabous</UnderTitle>
            <Img src={beli} alt="Belinda" width="500" height="334" />
            <Quote author="Alfred de Musset">
              {t('home.quote')}
            </Quote>
          </FirstWrapper>
          <PianoBackground />
        </NoMobileItem>
        <Items>
          <FirstWrapper>
            <Paragraph>
              <Trans t={t} i18nKey="home.captionText" />
              <Link to={shop}>
                <CustomButton type="button">
                  <Trans t={t} i18nKey="home.cta" />
                &nbsp;&nbsp;
                  <FontAwesomeIcon icon={faHeartbeat} />
                </CustomButton>
              </Link>
            </Paragraph>
          </FirstWrapper>
          <Heading2>
            {t('home.firstTitle')}
          </Heading2>
          <Paragraph>
            <Trans i18nKey="home.firstParagraph" />
          </Paragraph>
        </Items>
      </Rows>
      <Rows>
        <Items>
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
      </Rows>
    </Wrapper>
  );
};
