import { useState, useRef } from "react";



export const Register = () => {
    const [rolSelected, setRolSelected] = useState({
        company: false,
        user: false,
    });
    const [error, setError] = useState({})

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
       
            setCompanyForm(prevCompany=> ({
                ...prevCompany,
                [name]: value
            }))
        
    };
    

    const handleSubmit = event => {
        event.preventDefault();
        let error;
        if (!rolSelected.company) {
            error = onValidate(userForm)
        } else {
            error = onValidate(companyForm)
        }

        
            console.log(companyForm)
        

    }

    const onValidate = (values) => {
        const errors = {hola: "hola"};
       console.log("se esta validando" + errors)
    };

    console.log(companyForm.username_company)


    return (
        <div className="container mx-auto">
      <h1 className="text-center font-bold text-3xl mb-4" style={{marginTop:'50px'}}>
       USER REGISTER:
      </h1>
      <div className="flex justify-center gap-4 mb-4" style={{marginLeft: '300px'}}>
        <button
          className={`${
            rolSelected.user ? "bg-blue-500 text-white" : "bg-gray-200"
          } p-2 px-4 rounded`}
          onClick={() =>
            setRolSelected({ user: true, company: false })
          }
        >
          DEVELOPER
        </button>
        <button
          className={`${
            rolSelected.company ? "bg-blue-500 text-white" : "bg-gray-200"
          } p-2 px-4 rounded`}
          onClick={() =>
            setRolSelected({ company: true, user: false })
          }
        >
          COMPANY
        </button>
      </div>
      <form className="bg-gray-100 p-8 rounded shadow-md" style={{marginLeft: '300px'}}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            User Name:
            <input
              type="text"
              name={rolSelected.company ? "username_company" : "username_user"}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Escriba su user name aquí"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Password:
            <input
              type="password"
              name={rolSelected.company ? "password_company" : "password_user"}
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
            {rolSelected.company
              ? "Company owner name:"
              : "Full name of the user:"}
            <input
              type="text"
              name={rolSelected.company ? "fullName_owner" : "fullName_user"}
              placeholder={
                rolSelected.company ? "Company owner full name..." : "Full name of the user..."
              }
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
        {rolSelected.company ? (
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
              Date of create:
              <input
                type="text"
                name="dateOfCreate"
                placeholder="Date of birth..."
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
        ): <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2">
          Date of create:
          <input
            type="text"
            name="dateOfBirth"
            placeholder="Date of birth..."
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>}
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );


}
