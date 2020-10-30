import { keyframes } from '@emotion/core';

export const zoom = keyframes`
  from {
    opacity: 0.7;
    transform: scale(0.9);
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const zoomHover = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
  }
`;

export const fromLeft = keyframes`
  from {
    transform: translateX(-50%);
    opacity: 0.7;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
