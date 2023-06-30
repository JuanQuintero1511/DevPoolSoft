const {
    createClient,
    setClientRol,
    setClientPremium,
    getAllClient,
    searchClientByName,
    getClientById,
    createclientUser, 
    setClientUsers,
    } = require('../../controllers/clientControllers/clientControllers');

const { searchUsersByUserName } = require('../../controllers/usersControllers/usersControllers');

const  { sendNotification }  = require('../../utils/sendEmail')

    const createClientHandler = async (req, res) => {       
          try {
            const {
              full_name,
              backup_email,
              description,
              date_birthday,
              address,
              phone_number,
              profile_image,
              authentication,
              image
            } = req.body;
            const rol = req.body.rol_type;
            const rol_type = req.body.rol_type;
            const userName = req.body.userName;
            const password = req.body.password;
            const email = req.body.email;
            const full_nameAux = req.body.full_name;      
                       
              await createClient(
                full_name,
                backup_email,
                description,
                date_birthday,
                address,
                phone_number,
                profile_image,
                authentication,
                rol,
                image                
              );
              await setClientUsers(userName, email, password, full_nameAux);
              await setClientRol(rol_type, full_nameAux);
                  
            const newUsers = await searchUsersByUserName(userName);
      
             sendNotification(email, full_name, rol);
            
            
            res.status(201).json(newUsers);
            

          } catch (error) {
            
            res.status(400).json({ error: error.message});
          }
        }
       
      
      
//*Trae empresa por nombre o todas si no tiene nombre
const getClientHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const results = name ? await searchClientByName(name) : await getAllClient()
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: "Error occurred while found client:", detail: error.message })
    }
}


//? Obtiene la empresa por ID especifico mas los posteos

const getClientHandlerId = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const clientById = await getClientById(id, source)
        if (!clientById) {
            throw new Error(`client with ID ${id} not found`);
        }
        res.status(200).json(clientById)
    } catch (error) {
        res.status(400).json({ error: `Error occurred while fetching client with ID ${id}:`, detail: error.message })
    }

}


const updateClientPremiumHandler = async (req, res) => {
    const { full_name } = req.params
    console.log(req.params.full_name)
    try {
        await setClientPremium(full_name)
        res.status(200).json({ message: "Actualizado a premium" })
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const deleteClientHandler = async (req, res) => {

}


module.exports = {
    getClientHandler,
    getClientHandlerId,
    createClientHandler,
    updateClientPremiumHandler,
    deleteClientHandler,
}
