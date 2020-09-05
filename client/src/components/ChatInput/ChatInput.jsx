import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'

import InfoBar from '../../components/InfoBar/InfoBar.jsx'

import {
  FormContainer,
  InputStyles,
  ButtonStyles
} from './ChatInput.styles'

const ChatInput = ({ setMessageText, sendMessage, messageText}) => {
  
  return (
    <React.Fragment>
      <form action="">
        <InputStyles
          type="text"
          placeholder="Type your message..."
          value={messageText}
          onChange={event => setMessageText(event.target.value)}
          onKeyPress={event => 
            event.key === 'Enter' ? sendMessage(event) : null
          } 
        />
        <ButtonStyles 
          type="button"
          onClick={e => sendMessage(e)}
        >
          Send
        </ButtonStyles>
      </form>
    </React.Fragment>
  )
}

export default ChatInput