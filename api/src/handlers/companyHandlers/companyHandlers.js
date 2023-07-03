const {
    createCompany,
    setCompanyRol,
    setCompanyPremium,
    getAllCompanies,
    searchCompanyByName,
    getCompanyById,
    createCompanyUser, 
    setCompanyUsers,
    } = require('../../controllers/companyControllers/companyControllers');

const { searchUsersByUserName } = require('../../controllers/usersControllers/usersControllers');

const  { sendNotification }  = require('../../utils/sendEmail')

    const createCompanyHandler = async (req, res) => {       
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
                       
              await createCompany(
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
              await setCompanyUsers(userName, email, password, full_nameAux);
              await setCompanyRol(rol_type, full_nameAux);
                  
            const newUsers = await searchUsersByUserName(userName);
      
             sendNotification(email, full_name, rol);
            
            
            res.status(201).json(newUsers);
            

          } catch (error) {
            
            res.status(400).json({ error: error.message});
          }
        }
       
      
      
//*Trae empresa por nombre o todas si no tiene nombre
const getCompanyHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const results = name ? await searchCompanyByName(name) : await getAllCompanies()
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: "Error occurred while found company:", detail: error.message })
    }
}


//? Obtiene la empresa por ID especifico mas los posteos

const getCompanyHandlerId = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const companyById = await getCompanyById(id, source)
        if (!companyById) {
            throw new Error(`Company with ID ${id} not found`);
        }
        res.status(200).json(companyById)
    } catch (error) {
        res.status(400).json({ error: `Error occurred while fetching company with ID ${id}:`, detail: error.message })
    }

}


const updateCompanyPremiumHandler = async (req, res) => {
    const { full_name } = req.params
    console.log(req.params.full_name)
    try {
        await setCompanyPremium(full_name)
        res.status(200).json({ message: "Actualizado a premium" })
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const deleteCompanyHandler = async (req, res) => {

}


module.exports = {
    getCompanyHandler,
    getCompanyHandlerId,
    createCompanyHandler,
    updateCompanyPremiumHandler,
    deleteCompanyHandler,
}

module.exports = {
    getCompanyHandler,
    getCompanyHandlerId,
    createCompanyHandler,
    updateCompanyPremiumHandler,
    deleteCompanyHandler,
}