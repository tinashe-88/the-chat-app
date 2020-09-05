import React from 'react'

import {
  MessageBoxContainer,
  MessageContainerDark,
  MessageContainerLight,
  SentTextRight,
  SentTextLeft,
  MessageTextDark,
  MessageTextLight
} from './MessageText.styles'

import ReactEmoji from 'react-emoji'

const Message = ({ message: { text, user }, username }) => {
  let isSentByCurrentUser = false

  const trimmedName = username.trim().toLowerCase()

  if(user === trimmedName) {
    isSentByCurrentUser = true
  }

  return (
    isSentByCurrentUser
      ? (
        <MessageBoxContainer className="justifyEnd">
          <SentTextRight>{trimmedName}</SentTextRight>
          <MessageContainerDark className="backgroundBlue">
            <MessageTextLight>{ReactEmoji.emojify(text)}</MessageTextLight>
          </MessageContainerDark>
        </MessageBoxContainer>
        )
        : (
          <MessageBoxContainer className="justifyStart">
            <MessageContainerLight className="backgroundLight">
              <MessageTextDark>{ReactEmoji.emojify(text)}</MessageTextDark>
            </MessageContainerLight>
            <SentTextLeft>{user}</SentTextLeft>
          </MessageBoxContainer>
        )
  )
}

export default Message