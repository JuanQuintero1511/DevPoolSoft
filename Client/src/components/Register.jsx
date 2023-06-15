import { useState, useRef } from "react";

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back ;(";
})
window.addEventListener("focus", () => {
  document.title = docTitle;
})
console.log(docTitle)

export const Register = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }



    const [rolSelected, setRolSelected] = useState({
        company: false,
        user: false,
    });
    const [error, setError] = useState({});

    const [companyForm, setCompanyForm] = useState({
        id_company: "",
        id_rol: "company",
        username_company: "",
        password_company: "",
        fullName_owner: "",
        email: "",
        dateOfCreate: "",
        phoneNumber: "",
        isActive: false,
        isPremium: false,
        authentication_pdf: "",


    })
    const [userForm, setUserForm] = useState({
        id_user: "",
        id_rol: "user",
        username_user: "",
        password_user: "",
        fullName_user: "",
        email: "",
        dateOfBirth: "",
        phoneNumber: "",
        isActive: false,
        isPremium: false,
        isAdmin: false,


    })

    const handleInputChange = event => {
       
        const { name, value } = event.target;
        if(rolSelected.company === true) {
            setCompanyForm(prevCompany=> ({
                ...prevCompany,
                [name]: value
            }))
          } else {
            setUserForm(prevUser=> ({
              ...prevUser,
              [name]: value
          }))
          }
          
    };
    

    function handleSubmit ( event ){
        event.preventDefault();
        let errors= {};
        if (!rolSelected.company) {
            errors = onValidate(userForm);
        } else {
            errors = onValidate(companyForm);
        }
        if(errors && Object.keys(errors).length > 0) {
          setError(errors)
        } else {

          console.log(companyForm)
          console.log(userForm)
        }
        
            
        

    }

    const onValidate = (values) => {
        const errors = {};
        const noSymbols = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
        const bestPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if(!values.username_company && !values.username_user) {
          errors.username = "User name is required"
        }
        if(values.fullName_owner && noSymbols.test(values.fullName_owner)) {
          errors.fullName_owner = "Name can't contain symbols"
        }
        if(values.fullName_user && noSymbols.test(values.fullName_user)) {
          errors.fullName_user = "Name can't contain symbols"
        }
        if (values.password_company && !bestPassword.test(values.password_company)) {
          errors.password_company = "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number"
        }
        if (values.password_user && !bestPassword.test(values.password_user)) {
          errors.password_user = "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number"
        }
        return errors;
        console.log(errors)
    };

    console.log(companyForm.username_company)


    
      return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="text-center text-3xl font-bold text-gray-200">USER REGISTER</h1>
          </div>
          <div className="flex justify-center gap-4">
            <button
              className={`${
                rolSelected.user ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
              } inline-flex items-center px-4 py-2 rounded-md transition-colors duration-300 ease-in-out`}
              onClick={() => setRolSelected({ user: true, company: false })}
            >
              DEVELOPER
            </button>
            <button
              className={`${
                rolSelected.company ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'
              } inline-flex items-center px-4 py-2 rounded-md transition-colors duration-300 ease-in-out`}
              onClick={() => setRolSelected({ company: true, user: false })}
            >
              COMPANY
            </button>
          </div>
          {rolSelected.company || rolSelected.user ? (
            <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  User Name:
                  <input
                    type="text"
                    name={rolSelected.company ? 'username_company' : 'username_user'}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="User name here..."
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Password:
                  <input
                    type="password"
                    name={rolSelected.company ? 'password_company' : 'password_user'}
                    placeholder="Password..."
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Confirm password:
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password..."
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  {rolSelected.company ? 'Company owner name:' : 'Full name of the user:'}
                  <input
                    type="text"
                    name={rolSelected.company ? 'fullName_owner' : 'fullName_user'}
                    placeholder={rolSelected.company ? 'Company owner full name...' : 'Full name of the user...'}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email:
                  <input
                    type="text"
                    name="email"
                    placeholder="Email..."
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Phone Number:
                  <input
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone number..."
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              {rolSelected.company && (
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2">
                    Authentication archive:
                    <input
                      type="text"
                      name="authentication_pdf"
                      placeholder="Load authentication..."
                      onChange={handleInputChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </label>
                </div>
              )}
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">
                  {rolSelected.company ? 'Date of create:' : 'Date of birth:'}
                  <input
                    type="text"
                    name={rolSelected.company ? 'dateOfCreate' : 'dateOfBirth'}
                    placeholder={rolSelected.company ? 'Date of create...' : 'Date of birth...'}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          ) : null}
          {Object.keys(error).length > 0 && (
          <div className="bg-red-100 text-red-900 p-4 mt-4 rounded">
            {Object.values(error).map((errorMsg, index) => (
              <p key={index}>{errorMsg}</p>
            ))}
        </div>
          )}
      </div>
      </div>
      );
      
  

}
