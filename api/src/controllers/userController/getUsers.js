const { user_data } = require('../../models/user_data')


const postUsers = async (full_name) => {
  const newUser = await user_data.create({
          full_name,
         
      })
    
      res.json(newUser);
  }

    
const getUsers = async (req, res) => {
  // try {
  //   const users = await user_data.findAll();
  //   res.json(users); 
  // } catch (error) {
  //   res.status(500).json({ error: 'Error al obtener los usuarios' });
  // }
}

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




// const postCont = async (name, apellido, email) => {
//   const newUser = await datos.create({
//       name,
//       apellido,
//       email
//   })

//   return newUser;
// }

// module.exports = {
//   getContacto: async (req, res) => {
//       const { name, apellido, email } = req.body;
//       try {
//           if (!name || !apellido || !email) throw Error('Falta informacion por rellenar.')

//           else {
//               const newUser = await postCont(name, apellido, email);

//               return res.status(200).json (`Datos enviados ${newUser.name}`)
//           }
//       } catch (error) {
//           return res.status(404).send({message:error.message});     
//       }
//   }
// }