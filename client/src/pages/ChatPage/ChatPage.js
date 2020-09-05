import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'

import InfoBar from '../../components/InfoBar/InfoBar'
import ChatInput from '../../components/ChatInput/ChatInput'
import MessageBox from '../../components/MessageBox/MessageBox'

import {
  Container,
  InnerContainer
} from './ChatPage.styles'

let socket

const ChatPage = ({ location: { search } }) => {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')
  const [messageText, setMessageText] = useState('')
  const [messages, setMessages] = useState([])
  const ENDPOINT = 'localhost:5000'
  
  useEffect(() => {
    const { username, room } = queryString.parse(search)

    socket = io(ENDPOINT)

    setRoom(room)
    setUsername(username)

    socket.emit('join', { username, room }, error => {
      if(error){
        alert(error)
      }
    })

    return () => {
      socket.emit('disconnect')

      socket.off()
    }
  }, [ENDPOINT, search])

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message])
    })
  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault()

    if(messageText) {
      socket.emit('sendMessage', messageText, () => setMessageText(''))
    }
  }

  console.log(messageText, messages)
  
  return (
    <React.Fragment>
      <Container>
        <InnerContainer>
          <InfoBar room={room}/>
          <MessageBox 
            messages={messages}
            username={username}
          />
          <ChatInput 
            setMessageText={setMessageText}
            messageText={messageText}
            sendMessage={sendMessage}
          />
        </InnerContainer>
      </Container>
    </React.Fragment>
  )
}

export default ChatPage