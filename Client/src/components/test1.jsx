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

const [form, setForm] = useState({

    rol_type: "",
    userName: "",
    password_company: "",
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
        <div className="flex items-center justify-center h-screen mt-12">
            soy un componente
        </div>
    )
}

export default Test1;