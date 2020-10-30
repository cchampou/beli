import { useTranslation } from 'react-i18next';
import React from 'react';
import styled from '@emotion/styled';

import { Wrapper } from './home';
import { Heading1 } from '../components/typography';
import { Rows, Items } from '../utils/flex';
import { Button, Input, TextArea } from '../components/forms';
import book from '../assets/book.png';

const ShadowedImage = styled('img')`
  filter: drop-shadow(5px 5px 5px black);
  width: 20rem;
  transform: rotateZ(3deg);
  margin: 5rem;
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Rows>
        <Items>
          <Heading1>{t('contact.contactMe')}</Heading1>
          <Input type="text" name="name" placeholder="Nom et prénom" />
          <Input type="text" name="name" placeholder="Adresse email" />
          <TextArea placeholder="Message" rows="5" />
          <Button type="submit">Envoyer</Button>
        </Items>
        <Items>
          <Heading1>{t('contact.contactInfo')}</Heading1>
          <a href={`mailto:${t('contact.email')}`}>{t('contact.email')}</a>
          <ShadowedImage src={book} alt="Book" />
        </Items>
      </Rows>
    </Wrapper>
  );
};

export default Contact;
