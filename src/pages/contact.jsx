import { useTranslation } from 'react-i18next';
import React from 'react';
import { Wrapper } from './home';
import { Heading1 } from '../components/typography';
import { Columns, Items } from '../utils/flex';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Columns>
        <Items>
          <Heading1>Contactez-moi</Heading1>
          <input type="text" name="name" placeholder="Nom et prénom" />
          <input type="text" name="name" placeholder="Adresse email" />
          <textarea placeholder="Message" />
          <button type="submit">Envoyer</button>
        </Items>
        <Items>
          <Heading1>Mes coordonnées</Heading1>
          <a href="mailto:contact@belinda-sanstabous.com">contact@belinda-sanstabous.com</a>
        </Items>
      </Columns>
    </Wrapper>
  );
};

export default Contact;
