import { css } from '@emotion/core';

export const color = (name) => ({ theme }) => theme.colors[name];

export const scaleOnHover = css`
  transition: all 0.25s;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
    transform: scale(1.02);
  }
`;
