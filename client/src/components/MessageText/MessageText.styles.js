import styled from 'styled-components'

export const MessageBoxContainer = styled.div`
  background: #F3F3F3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;

  .justifyEnd {
    justify-content: flex-end;
  }

  .justifyStart {
    justify-content: flex-start;
  }
`

const SentText = styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
`

export const SentTextRight = styled(SentText)`
  padding-right: 10px;
`

export const SentTextLeft = styled(SentText)`
  padding-left: 10px;
`

const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;
`

export const MessageContainerDark = styled(MessageContainer)`
  color: #353535;
  background: #2979FF;
`

export const MessageContainerLight = styled(MessageContainer)`
  color: white;
  background: #F3F3F3;
`

const MessageText = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
`

export const MessageTextDark = styled(MessageText)`

`

export const MessageTextLight = styled(MessageText)`

`