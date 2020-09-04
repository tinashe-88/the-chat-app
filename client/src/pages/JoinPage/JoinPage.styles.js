import styled from 'styled-components'

export const JoinPageContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`

export const InnerContainer = styled.div`
  width: 20%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }
  
`

export const TitleContainer = styled.h2`
  color: #111;
  font-size: 2.5em;
  padding-bottom: 10px;
  border-bottom: 2px solid #111;
`

export const InputContainer = styled.div`

`

const InputStyles = styled.input`
  border-radius: 0;
  padding: 15px 20px;
  width: 100%;
`

export const NameInput = styled(InputStyles)`
  
`

export const NameTitle = styled.h3`

`

export const RoomInput = styled(InputStyles)`
  
`

export const RoomTitle = styled.h3`
  
`

export const ButtonContainer = styled.div`
  margin-top: 20px;
`

export const CustomButton = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979FF;
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  width: 100%;
`