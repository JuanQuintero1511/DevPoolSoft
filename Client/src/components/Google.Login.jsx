import style from './GoogleLogin.module.css'
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from '../redux/actions';
import { useDispatch } from "react-redux";
import { newGoogleUser } from '../redux/actions';
// import jwtDecode from 'jwt-decode';
// import { getAnalytics } from "firebase/analytics";


function LoginButton() {

  const [success, setSuccess] = useState(false)
  const [dataa, setDataa] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const firebaseConfig = {
    apiKey: "AIzaSyCwCe7BBMtInaRu422Myrvg5d-qO-LAtHc",
    authDomain: "devpoolsoft.firebaseapp.com",
    projectId: "devpoolsoft",
    storageBucket: "devpoolsoft.appspot.com",
    messagingSenderId: "759683741972",
    appId: "1:759683741972:web:bc2b1d5c9746d5c728aa01",
    measurementId: "G-2549PBCD08"
  };

  const app = initializeApp(firebaseConfig);
  //   const analytics = getAnalytics(app);

  const auth = getAuth()

  const provider = new GoogleAuthProvider()

  const singInWithGoogle = () => {

    signInWithPopup(auth, provider).then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      const userName = result._tokenResponse.firstName + result._tokenResponse.lastName;
      const email = result._tokenResponse.email
      const data = { userName, email }
      setDataa(data)

      dispatch(newGoogleUser(data))
      // try {
      //   //Esto deberia estar en actions y reducer
      //   const response = await axios.post("http://localhost:3001/auth/google", data);
      // } catch (error) {
      //   console.log(error.message)
      // }

      setSuccess(true)

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    })
  }

  //   const name = result._tokenResponse.firstName;
  //   const surname = result._tokenResponse.lastName;
  //   const mail = result._tokenResponse.email;

  //   const data = { mail, surname, name };

  //   try {

  //     console.log(data, "data de google");
  //     const response = await axios.post("/auth", data);
  //     console.log(response.data, "soy data")
  //     if (response.data.token) {
  //       sessionStorage.setItem("token", response.data.token);
  //       sessionStorage.setItem("Name", JSON.stringify(name));
  //       sessionStorage.setItem("mail", JSON.stringify(mail));
  //       sessionStorage.setItem("user", JSON.stringify(data));


  //       ;
  //       const decodedToken = jwtDecode(response.data.token);
  //       const userRole = decodedToken.rol;
  //       const id = decodedToken.id;
  //       sessionStorage.setItem('id', id);
  //       // Guardar el rol en sessionStorage
  //       sessionStorage.setItem("userRole", userRole);
  //       console.log(response, "RESPUESTA AXIOS");
  //       setSuccess(true)

  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }


  const handleOnClickGoogle = (event) => {
    event.preventDefault()
    singInWithGoogle()
  }

  return (
    <>{success ? (
      dispatch(userLogin(dataa)),
      navigate("/home")
    ) : (
      <><button onClick={handleOnClickGoogle} type="button" className={style.loginBtnGoogle}>
        Sign in with Google
      </button></>
    )}</>
  )

}

export default LoginButton