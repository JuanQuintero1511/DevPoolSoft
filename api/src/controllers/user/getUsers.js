const {datos} = require('../../routes/db')


const postUsers = (req, res) => {
    res.send('post Funciona')
} 

const getUsers = (req, res) => {
    res.send('getUsers Funciona')
  };

const getUsersById = (req, res) => {
    res.send('getUsersById Funciona')
  };

const updateUsers = (req, res) => {
    res.send('updateUsers Funciona')
  };

const deleteUsers = (req, res) => {
    res.send('deleteUsers Funciona')
  };

module.exports = {postUsers, getUsers, getUsersById, updateUsers, deleteUsers}