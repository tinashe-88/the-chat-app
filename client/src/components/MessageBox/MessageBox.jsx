import React from 'react'

import ScrollToBottom from 'react-scroll-to-bottom'

import MessageText from '../MessageText/MessageText'

import {
  MessageBoxContainer
} from './MessageBox.styles'

const MessageBox = ({ messages, username }) => (
  <ScrollToBottom className="messages">
    {messages.map(
      (message, i) => (
        <MessageBoxContainer key={message.id}>
          <MessageText message={message} username={username}/>
        </MessageBoxContainer>
      ))}
  </ScrollToBottom>
)

export default MessageBox