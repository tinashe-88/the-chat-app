import React from 'react'

import {
  OnlineIcon,
  CloseIcon
} from '../Icons/Icons'

import {
  InfoBarContainer,
  LeftSideContainer,
  RightSideContainer,
} from './InfoBar.styles'

const InfoBar = ({ room }) => (
  <InfoBarContainer>
    <LeftSideContainer>
      <OnlineIcon />
      <h3>{room}</h3>
    </LeftSideContainer>
    <RightSideContainer>
      <a 
        href="/"
        rel="noopener noreferrer"
      >
        <CloseIcon />
      </a>
    </RightSideContainer>
  </InfoBarContainer>
)

export default InfoBar