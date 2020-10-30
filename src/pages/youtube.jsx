import { useTranslation } from 'react-i18next';
import React from 'react';
import styled from '@emotion/styled';
import { Heading2, Heading3, Paragraph } from '../components/typography';
import { Wrapper } from './home';
import bluePastel from '../assets/pastel-blue.jpg';
import pinkPastel from '../assets/pastel-pink.jpg';
import { scaleOnHover } from '../utils/styles';
import { breakpoints } from '../../config/theme.json';

const CenteredTextWrapper = styled(Wrapper)`
  text-align: center;
`;

const Tile = styled('a')`
  flex: 1;
  background-size: cover;
  background-image: url(${({ women }) => (women ? pinkPastel : bluePastel)});
  background-image: radial-gradient(rgba(255,255,255,0) 50%, #ffffff),
    url(${({ women }) => (women ? pinkPastel : bluePastel)});
  margin: 3rem;
  padding: 5rem;
  ${scaleOnHover};
  
  @media (max-width: ${breakpoints.mobile}) {
    margin: 0.5rem;
    padding: 2rem;
  }
`;

const FlexWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Youtube = () => {
  const { t } = useTranslation();

  return (
    <CenteredTextWrapper>
      <Heading3>
        {t('youtube.intro')}
      </Heading3>
      <FlexWrapper>
        <Tile women href="https://www.youtube.com/channel/UCmeyZ6s6mT4AXYrO9v4e30g" target="_blank" rel="noreferrer">
          <Heading2>{t('youtube.women')}</Heading2>
          <Paragraph>{t('youtube.womenDetails')}</Paragraph>
        </Tile>
        <Tile href="https://www.youtube.com/channel/UCfLHC1KJrnCeh1zb5hSHJEQ" target="_blank" rel="noreferrer">
          <Heading2>{t('youtube.men')}</Heading2>
          <Paragraph>{t('youtube.menDetails')}</Paragraph>
        </Tile>
      </FlexWrapper>
    </CenteredTextWrapper>
  );
};

export default Youtube;
