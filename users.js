// Users helper function
const users = []

const addUser = ({ id, username, room }) => {
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  existingUser = users.find(user => user.room === room && user.username === username)

  if(existingUser){
    return { error: 'Username already taken!'}
  }

  const user = { id, username, room }

  users.push(user)

  return { user }
}

const removeUser = id => {
  const userId = users.findIndex(user => user.id === id)

  if(userId !== -1){
    return users.splice(userId, 1)[0]
  }
}

const getUser = id => {
  users.find(user => user.id === id)
}

const getUserInRoom = room => {
  users.filter(user => user.room === room)
}

module.exports = { addUser, removeUser, getUser, getUserInRoom }