import React from 'react';
import { Heading1, Heading2, Heading3 } from '../typography';

export const Showcase = () => (
  <>
    <H1 />
    <H2 />
    <H3 />
  </>
);

export const H1 = () => (
  <Heading1>
    Love Coach | Belinda Sans Tabous
  </Heading1>
);

export const H2 = () => (
  <Heading2>
    Love Coach | Belinda Sans Tabous
  </Heading2>
);

export const H3 = () => (
  <Heading3>
    Love Coach | Belinda Sans Tabous
  </Heading3>
);

H1.storyName = 'Heading 1';
H2.storyName = 'Heading 2';
H3.storyName = 'Heading 3';

export default {
  title: 'Headings',
};
