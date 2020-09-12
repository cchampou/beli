import React from 'react';
import styled from '@emotion/styled';
import { Heading1, Heading2, Paragraph } from '../components/typography';
import beli from '../assets/Beli.jpg';

const Wrapper = styled('div')`
  width: 80%;
  margin: auto;
`;

const Columns = styled('div')`
  display: flex;
`;

const Items = styled('div')`
  flex: 1;
  padding: 3rem;
`;

const Title = styled(Heading1)`
  margin: 3rem 0 0;
  text-align: center;
`;

const FirstWrapper = styled('div')`
  height: calc(100vh - 24rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-style: italic;
`;

export default () => (
  <Wrapper>
    <Title>Love Coach | Belinda Sans Tabous</Title>
    <Columns>
      <Items>
        <FirstWrapper>
          <img src={beli} alt="Belinda" style={{ margin: 'auto' }} />
          <Paragraph>
            « La vie est un sommeil, l’amour en est le rêve, et vous aurez vécu si vous avez aimé » Alfred de Musset
          </Paragraph>
        </FirstWrapper>
      </Items>
      <Items>
        <FirstWrapper>
          <Paragraph>
            Bienvenue sur
            {' '}
            <em>Belinda Sans Tabous</em>
            {' '}
            ! Je suis une
            {' '}
            <strong><em>Love Coach</em></strong>
            {' '}
            et
            {' '}
            <strong>conseillère sentimentale</strong>
            {' '}
            qui parle sans aucuns tabous de la vie amoureuse, du célibat, de l’estime de soi et de la sexualité. Vous désirez trouver l’amour, consolider votre couple ou améliorer votre vie sexuelle ? Laissez-vous guider pour changer de vie !
          </Paragraph>
        </FirstWrapper>
        <Heading2>
          Comment être heureux en amour ? Avec la méthode Piano !
        </Heading2>
        <Paragraph>

          Dans la vie, nous voulons aller à fond la caisse. Carpe Diem, vous connaissez ? Horace est un poète qui a écrit ce précepte qui signifie : « Cueille le jour ». Cela nous invite à profiter de la vie. Mais il ne faut pas aller trop haut trop hâtivement, quitte à se brûler les ailes ! En amour, il faut laisser le temps au temps, car les meilleures relations se construisent avec patience et respect. Il faut alors ralentir. Cela s’apprend, comme on apprend à faire du piano. Pourquoi cet instrument ? Car il symbolise l’élégance, la subtilité et l’harmonie. Cela tombe bien, car l’amour est une partition parmi laquelle le couple représente deux notes. Ces deux sons doivent s’aligner pour ne pas créer de dissonance !
          <br />
          <br />
          Comment trouver la bonne personne et la garder quand tout va si vite autour de soi ? Comment croire en l’amour solide et éternel quand à notre époque près d’un couple sur deux divorce ? Et si je vous disais que derrière le nom « piano » se dissimulait les clés de l’amour durable et authentique ?  Piano veut dire en italien « doucement ». Voyons ensemble ce qui se cache derrière chaque lettre !
        </Paragraph>
        <Heading2>Pas de masque : rester soi-même pour trouver l’amour véritable</Heading2>
        <Paragraph>
          Au début, lors d’une rencontre, il n’est pas rare de mettre inconsciemment un masque. Cela nous permet de dissimuler nos propres émotions pour en quelque sorte les déguiser. Nous nouons ainsi des liens plus facilement avec autrui.

          Cette attitude est adoptée en général car elle permet de combler un besoin comme le manque d’affection, la solitude, ou pour se sentir socialement “normal” et accepté. Il est vrai que c’est un bon moyen pour faire des connaissances. Malheureusement, c’est la meilleure façon à court terme de s’oublier soi même pour faire plaisir à l’autre. La personne que l’on aime ne nous connaît pas vraiment et finit par se sentir trahie.

          Rien n’est plus réconfortant de savoir que la personne en face de vous a envie de vous revoir pour qui vous êtes ! C’est la base pour faire durer une relation. Alors, bas les masques !
        </Paragraph>
        <Heading2>
          Ici et maintenant : se concentrer sur l’instant présent
        </Heading2>
        <Paragraph>
          Tout va si vite de nos jours ! Il n’est pas rare de voir les personnes se dépêcher pour obtenir un premier rendez-vous, un premier baiser, un premier rapport sexuel, etc. Tout cela pour se rassurer, d’autres fois pour combler un manque affectif.

          En réalité, le plus important reste la connexion entre les deux individus. C’est ce qui fait la différence. Comment vous sentez-vous en plongeant votre regard dans les yeux de l’autre ? Sa compagnie vous plaît-elle vraiment, ou bien comble-t-elle juste un manque ?

          Le bon rythme, le bon moment et le temps nécessaire ; voilà la formule qui vous aidera à vraiment connaître l’autre et à créer des sentiments sincères.
        </Paragraph>
        <Heading2>Accepter l’autre pour son authenticité</Heading2>
        <Paragraph>
          L’acceptation va dans les deux sens. Malgré notre similarité, nous sommes tous uniques et avons rarement les mêmes émotions au même moment.

          Connaître ses propres valeurs ainsi que celles de l’autre est fondamental. Or, ce qui est primordial pour l’un ne l’est pas forcément pour l’autre. Cela peut parfois mettre de la tension dans le couple. Alors, le meilleur choix que vous puissiez faire est d’accepter la différence de votre partenaire.
        </Paragraph>
        <Heading2>Nous : naviguer à deux sur les océans déchaînés et paisibles</Heading2>
        <Paragraph>Le couple est constitué de deux personnes qui forment le « nous ». J’aime dire qu’un couple est une équipe solide. Chacun équilibre l’autre et dispose de points forts et points faibles. C’est une symphonie sur le fil du rasoir, un encéphalogramme dont la stabilité est précaire si les deux personnes sont mal accordées. Cela passera par une communication efficace qui permettra de s’épauler mutuellement, comme de bons amis.</Paragraph>
        <Heading2>Oh oui : le bonheur au contact de la personne aimée</Heading2>
        <Paragraph>
          Cette petite phrase souvent dite dans le creux de l’oreille vous rappelle quelque chose ? Faire l’amour, se mélanger, se masser, s’embrasser, etc. Oui, vous l’avez entendu suffisamment : le sexe prend une grande place dans la réussite du couple. Il serait dommage de vous en priver, d’autant plus qu’il n’est jamais trop tard pour ça !

          Ces 5 clés vous aideront à ouvrir le coeur de la personne qui vous mérite. Gardez les précieusement !
        </Paragraph>
      </Items>
    </Columns>
  </Wrapper>
);
