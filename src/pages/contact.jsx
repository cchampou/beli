import { useTranslation } from 'react-i18next';
import React from 'react';
import { Wrapper } from './home';
import { Heading1 } from '../components/typography';
import { Columns, Items } from '../utils/flex';
import { Button, Input, TextArea } from '../components/forms';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Columns>
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
        </Items>
      </Columns>
    </Wrapper>
  );
};

export default Contact;
