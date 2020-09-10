import React from 'react'

import ScrollToBottom from 'react-scroll-to-bottom'

import MessageText from '../MessageText/MessageText'

import {
  MessageBoxContainer
} from './MessageBox.styles'

const MessageBox = ({ messages, username }) => (
  <ScrollToBottom>
    {messages.map(
      (message, index) => (
        <MessageBoxContainer key={index}>
          <MessageText message={message} username={username}/>
        </MessageBoxContainer>
      ))}
  </ScrollToBottom>
)

export default MessageBox