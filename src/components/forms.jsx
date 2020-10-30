import styled from '@emotion/styled';
import { css } from '@emotion/core';
import importedTheme from '../../config/theme.json';

const commonStyles = css`
  background-color: ${importedTheme.colors.light};
  border-style: solid;
  border-width: 1px;
  border-color: ${importedTheme.colors.tertiary};
  width: 100%;
  margin: 1rem 0;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  resize: none;
`;

export const Input = styled('input')`
  ${commonStyles}
`;

export const TextArea = styled('textarea')`
  ${commonStyles}
`;

export const Button = styled('button')`
  ${commonStyles}
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: auto;
`;
