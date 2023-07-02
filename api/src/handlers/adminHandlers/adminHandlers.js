const { getAdmin, updateAdmin, setToAdmin } = require('../../controllers/adminControllers/adminControllers');
const { createClient, setClientUsers, getClientById } = require('../../controllers/clientControllers/clientControllers');
const  { sendNotification }  = require('../../utils/sendEmail')


const getAdminHandler = async (req, res) => {
    try {
        const allAdmin = await getAdmin();

        res.status(200).json(allAdmin)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getAdminByIdHandler = async (req, res) => {
  const {id} = req.params;
  try{
    if(isNaN(id)) {
      let AdminById = await getClientById(id)

      if (!AdminById) throw Error("The Admin was not found.");
      return res.status(200).json(AdminById);
    }
  } catch(error) {
    return res.status(400).json({ details: error.message });
  }
};  

const createAdminHandler = async (req, res) => {
         
    try {
        const { userName, password, email, full_name, backup_email, date_birthday, address, phone_number, profile_image, authentication, image, full_nameAux} = req.body;       
        
        const adminLogin = await setClientUsers(
          userName,
          email,
          password,
          full_nameAux
        );
        
        const adminData = await createClient(
          full_name,
          backup_email,
          date_birthday,
          address,
          phone_number,
          profile_image,
          authentication,
          image,
          "admin"
        );
        
        const adminComplete = {
          adminData,
          adminLogin
        };
        
        sendNotification(email, full_name, 'admin')

        res.status(200).json(adminComplete);

    } catch (error) {      
      res.status(400).json({details: error.message});
    }
  };

const updateAdminHandler = async (req, res) => {
  try {
    const { id, full_name, backup_email, date_birthday, address, phone_number, profile_image, authentication, image, rol } = req.body;

    if (isNaN(id)) {
      let AdminById = await getClientById(id)  
      if (!AdminById) throw Error("The Admin was not found.");
    }

    const changeAdmin = updateAdmin(id, full_name, backup_email, date_birthday, address, phone_number, profile_image, authentication, image, rol)   

    res.status(200).json(changeAdmin);
  } catch (error) {
    res.status(400).json({ details: error.message });
  }
};

const setAdminHandler = async (req, res) => {
  const { id } = req.params;
  const {rol} = req.body
  try {
    
      const setAdmin = setToAdmin( id, rol)   

    res.status(200).json({setAdmin});
  } catch (error) {
    res.status(400).json({ details: error.message });
  }
}



module.exports = {
    getAdminHandler,
    getAdminByIdHandler,
    createAdminHandler,
    updateAdminHandler,
    setAdminHandler
}