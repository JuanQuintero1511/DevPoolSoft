const {
    createCompany,
    setPremium,
    getAllCompanies,
    searchCompanyByName,
    getCompanyById} = require('../../controllers/companyControllers/companyControllers')

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
            isPremium,
            authentication } = req.body;

        const newCompany = await createCompany(
            full_name,
            backup_email,
            description,
            date_birthday,
            address,
            phone_number,
            profile_image,
            authentication);
        // await setPremium(isPremium, full_name)
        res.status(201).json(newCompany);

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//*Trae empresa por nombre o todas si no tiene nombre
const getCompanyHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const results = name ? await searchCompanyByName(name) : await getAllCompanies()
        res.status(200).json(results);
    } catch (error) {
        console.error("Error occurred while found company:", error);
        res
            .status(400)
            .json({ error: "Failed to found company. Please try again later." });
    }    
}

const getCompanyHandlerId = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const companyByID = await getCompanyById(id, source)
        res.status(200).json(companyByID)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const updateCompanyHandler = async (req, res) => {

}

const deleteCompanyHandler = async (req, res) => {

}


module.exports = {
    getCompanyHandler,
    getCompanyHandlerId,
    createCompanyHandler,
    updateCompanyHandler,
    deleteCompanyHandler,
}
