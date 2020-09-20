import React from 'react';
import styled from '@emotion/styled';
import {
  faFacebook, faInstagram, faTwitter, faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './socialIcon';

const Wrapper = styled('div')`
  position: fixed;
  bottom: 100px;
  right: 50px;
  display: flex;
  flex-direction: column;
`;

const SocialBar = () => (
  <Wrapper>
    <SocialIcon icon={faFacebook} link="https://www.facebook.com/belindasanstabous/" color="#3b5998" />
    <SocialIcon icon={faTwitter} link="https://twitter.com/BTabous" color="#1da1f2" />
    <SocialIcon icon={faInstagram} link="https://www.instagram.com/belinda.sanstabous/" color="#bc2a8d" />
    <SocialIcon icon={faYoutube} link="https://www.youtube.com/c/BelindaSANSTABOUS" color="#c4302b" />
    <SocialIcon icon={faYoutube} link="https://www.youtube.com/channel/UCfLHC1KJrnCeh1zb5hSHJEQ" color="#c4302b" />
  </Wrapper>
);

export default SocialBar;
