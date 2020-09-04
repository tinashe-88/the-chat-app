import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  JoinPageContainer,
  InnerContainer,
  TitleContainer,
  InputContainer,
  NameInput,
  RoomInput,
  CustomButton,
  ButtonContainer,
  NameTitle,
  RoomTitle
} from './JoinPage.styles'

const JoinPage = () => {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')

  return (
    <React.Fragment>
      <JoinPageContainer>
        <InnerContainer>
          <TitleContainer>Join Room</TitleContainer>
          <InputContainer>
            <NameTitle>Enter your name:</NameTitle>
            <NameInput
              placeholder="Username"
              type="text"
              onChange={e => setUsername(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <RoomTitle>Room name:</RoomTitle>
            <RoomInput
              placeholder="Room"
              type="text"
              onChange={e => setRoom(e.target.value)}
            />
          </InputContainer>
          <ButtonContainer>
            <Link 
              to={`/chat?username=${username}&room=${room}`}
              onClick={
                e => (!username || !room) ? e.preventDefault() : null
              }
            >
              <CustomButton
                type="submit"
              >
                Sign In
              </CustomButton>
            </Link>
          </ButtonContainer>
        </InnerContainer>
      </JoinPageContainer>
    </React.Fragment>
  )
}


export default JoinPage