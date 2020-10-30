import styled from '@emotion/styled';

import { breakpoints } from '../../config/theme.json';

export const Columns = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Rows = styled('div')`
  display: flex;
  flex-direction: row;
`;

export const Items = styled('div')`
  flex: 1;
  padding: 3rem;
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.5rem;
  }
`;

export const WrappedRows = styled(Rows)`
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  justify-content: center;
`;
