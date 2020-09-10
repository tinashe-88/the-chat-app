import React from 'react'

import {
  FormContainer,
  InputStyles,
  ButtonStyles
} from './ChatInput.styles'

const ChatInput = ({ setMessageText, sendMessage, messageText}) => {
  
  return (
    <React.Fragment>
      <FormContainer>
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
      </FormContainer>
    </React.Fragment>
  )
}

export default ChatInput