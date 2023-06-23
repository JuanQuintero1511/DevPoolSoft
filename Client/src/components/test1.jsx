import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserData, getByUserName } from "../redux/actions";


const Test1 = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.byUserName[0])
  const juan555 = "Juan840"
  useEffect(() => {
    dispatch(getByUserName(juan555))
  }, [dispatch])
  console.log(user?.userName)

  const [rolSelected, setRolSelected] = useState({
    company: false,
    user: false,
  });
  const [error, setError] = useState({});
  const [thisUser, setThisUser] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const [form, setForm] = useState({

    rol_type: "",
    full_name: "",
    adress: "",
    backup_email: "",
    date_birthday: "",
    phone_number: "",
    description: "",
    isActive: true,
    isPremium: false,
    authentication: "",


  })


  const handleInputChange = event => {

    const { name, value } = event.target;
    setForm(prevUser => ({
      ...prevUser,
      [name]: value
    }));


  };

  function handleSubmit(event) {
    event.preventDefault();


    dispatch(createUserData(form));



  }


  return (
    <div className=" flex items-center justify-center min-h-screen" >
      <div className="w-full sm:w-[40%] bg-gray-100 mx-auto px-6 py-12 border-0 shadow-lg sm:rounded-3xl">
        <h1 className="flex justify-center mb-3 -mt-8 text-3xl font-extrabold text-gray-900 md:text-2xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mr-4 mt-0">DevPool </span>  Pofile Form.</h1>

        {rolSelected.company || rolSelected.user ? null : <div className="flex justify-center space-x-4 h-12 mb-2">
          <a onClick={() => {
            setRolSelected({ user: true, company: false });
            setForm({ rol_type: "user" });
          }} className="relative inline-flex items-center justify-center px-9 py-3 overflow-hidden font-mono font-medium tracking-normal text-white bg-gray-800 rounded-lg group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-teal-200"></span>
            <span className="relative">DEVELOPER</span>
          </a>
          <a
            onClick={() => {
              setRolSelected({ company: true, user: false });
              setForm({ rol_type: "company" });
            }}
            className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-widest text-white bg-gray-800 rounded-lg group focus:bg-teal-200 focus:outline-none"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-teal-200"></span>
            <span className="relative">COMPANY</span>
          </a>


        </div>}

        {rolSelected.company || rolSelected.user ? (
          <form  >
            <div >
              <div className="relative mb-2">
                <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-blue-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                name={rolSelected.company ? 'userName' : 'userName'}
                onChange={handleInputChange}
                required />
                <label for="floating_outlined" className="absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"
                  >
                  User Name:
                </label>
              </div>

            </div>

            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2">
                <div className="relative mb-2">
                  <input type="password" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                  name={rolSelected.company ? 'password_company' : 'password_user'}
                  onChange={handleInputChange}
                  required
                  />
                  <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1  font-mono tracking-widest"
                 
                    >
                    Password:
                  </label>
                </div>
              </div>
              <div className="relative mb-2">
                <div className="w-1/2 px-2">
                  <input type="password" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-[420%] text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name={rolSelected.company ? 'password_company' : 'password_user'}
                    onChange={handleInputChange}
                    required/>
                  <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest ml-2"
                
                    >
                    Confirm Password:
                  </label>
                </div>
              </div>
            </div>




            <div className="relative mb-2">
              <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " 
              name={rolSelected.company ? 'full_name' : 'full_name'}
              onChange={handleInputChange}
              required
              />
              <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"
                type="text"
                >
                {rolSelected.company ? 'Company owner name:' : 'Full name of the user:'}
              </label>
            </div>

            <div className="relative mb-2">
              <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"
                type="text"
                name="email"
                onChange={handleInputChange}

                required>
                Email:
              </label>
            </div>


            <div className="relative mb-2">
              <input id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  type="number"
                name="phone_number"
                onChange={handleInputChange}
                required/>
              <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"
               >
                Phone Number:
              </label>
            </div>

            {rolSelected.company && (
              <div className="relative mb-2">
                <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="authentication"
                  onChange={handleInputChange}

                  required />
                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"

                >
                  Authentication archive:
                </label>
              </div>)}


            <div className="relative mb-2">
              <input  id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  type="text"
                name={rolSelected.company ? 'date_birthday' : 'date_birthday'}
                onChange={handleInputChange}
                required/>
              <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"
               >
                {rolSelected.company ? 'Date of create:' : 'Date of birth:'}
              </label>
            </div>
            <div className="relative mb-2">
              <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-black font-mono dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  name="address"
                onChange={handleInputChange}
                required />
              <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 font-mono tracking-widest"
               
               >
                Address:
              </label>
            </div>
            <div className="max-w-xl">
              <label
                className="flex justify-center w-full h-24 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="font-medium text-gray-600 font-mono tracking-widest">
                    Drop, or upload your image here...or
                    <span className="text-blue-600 underline"> browse</span>
                  </span>
                </span>
                <input type="file" name="file_upload" className="hidden" />
              </label>
            </div>
            <div className="relative mb-2">
              <label
                className="flex flex-col font-mono tracking-widest">
                <textarea name="description"
                  onChange={handleInputChange}
                  placeholder="Description about you..."
                  className="bg-black-300 py-3 px-6 placeholder:text-secondary text-white rounded-lg font-medium" />
              </label>
            </div>
            <div className="flex items-center justify-center my-2 h-4">
              <a onClick={handleSubmit}
                className="relative inline-flex items-center justify-center px-9 py-3 overflow-hidden font-mono font-medium tracking-widest text-white bg-gray-800 rounded-lg group mx-4 mt-14">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-teal-300"></span>
                <span className="relative">SUBMIT</span>
              </a>
            </div>
          </form>
        ) : null}

      </div>

    </div>
  )
}

export default Test1;