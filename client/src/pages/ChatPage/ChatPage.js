import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import queryString from 'query-string'

import {
  
} from './ChatPage.styles'

let socket

const ChatPage = ({ location: { search } }) => {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')
  const ENDPOINT = 'localhost:5000'
  
  useEffect(() => {
    const { username, room } = queryString.parse(search)

    socket = io(ENDPOINT)

    setUsername(username)
    setRoom(room)

    socket.emit('join', { username, room }, () => {

    })

    return () => {
      socket.emit('disconnect')

      socket.off()
    }
  }, [ENDPOINT, search])
  return (
    <React.Fragment>
  
    </React.Fragment>
  )
}

export default ChatPage