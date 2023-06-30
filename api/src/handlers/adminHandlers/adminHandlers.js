const { getAdmin, updateAdmin } = require('../../controllers/adminControllers/adminControllers');
const { createClient, setClientUsers} = require('../../controllers/clientControllers/clientControllers');
const  { sendNotification }  = require('../../utils/sendEmail')



const getAdminHandler = async (req, res) => {
    try {
        const allAdmin = await getAdmin();

        res.status(200).json(allAdmin)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

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
      const { id, full_name, backup_email, date_birthday, address, phone_number, profile_image, authentication, image } = req.body;
  
      const admin = updateAdmin(id, full_name, backup_email, date_birthday, address, phone_number, profile_image, authentication, image)    
      res.status(200).json({ admin });
    } catch (error) {
      res.status(400).json({ details: error.message });
    }
  };



module.exports = {
    getAdminHandler,
    createAdminHandler,
    updateAdminHandler
}