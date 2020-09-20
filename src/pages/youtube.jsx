import { useTranslation } from 'react-i18next';
import React from 'react';
import styled from '@emotion/styled';
import { Heading2, Paragraph } from '../components/typography';
import { Wrapper } from './home';
import { Columns, Items } from '../utils/flex';

const CenteredTextWrapper = styled(Wrapper)`
  text-align: center;
`;

const Youtube = () => {
  const { t } = useTranslation();

  return (
    <CenteredTextWrapper>
      <Paragraph>
        {t('youtube.intro')}
      </Paragraph>
      <Columns>
        <Items>
          <Heading2>{t('youtube.women')}</Heading2>
          <Paragraph>{t('youtube.womenDetails')}</Paragraph>
        </Items>
        <Items>
          <Heading2>{t('youtube.men')}</Heading2>
          <Paragraph>{t('youtube.menDetails')}</Paragraph>
        </Items>
      </Columns>
    </CenteredTextWrapper>
  );
};

export default Youtube;
