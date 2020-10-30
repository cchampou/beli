import styled from '@emotion/styled';

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
`;

export const WrappedRows = styled(Rows)`
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  justify-content: center;
`;
