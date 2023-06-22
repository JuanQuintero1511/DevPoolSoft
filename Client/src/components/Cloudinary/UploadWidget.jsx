import React, { Component } from "react";

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    const cloudName = import.meta.env.VITE_FRONT_CLOUD_NAME;
    const uploadPreset = "FrontCloudTry"; 
 
    
    //   https://cloudinary.com/documentation/upload_widget_reference toda la info papu NO BORRAR POR FAVOR

    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset
        // cropping: true, //add a cropping step (?)
        // showAdvancedOptions: true,  //add advanced options (public_id and tag) (?)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files (?)
        // multiple: false,  //restrict upload to a single file (?)
        // folder: "user_images", //upload files to the specified folder (?)
        // tags: ["users", "profile"], //add the given tags to the uploaded  files (?)
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files (?)
        // clientAllowedFormats: ["images"], //restrict uploading to image files only(?)
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB (?)
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 (?) pixels before uploading (?)
        // theme: "purple", //change to a purple theme (?)

        // NO BORRAR POR FAVOR
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info.url);
          console.log(result.info.url)
          
        //   document
        //   .getElementById("uploadedimage").src = result.info.secure_url
        //     .setAttribute("src", result.info.url); ESTO SIRVE PARA MOSTRAR LA IMAGEN QUE SUBIÓ DE MANERA INSTANTANEA


            
            // fetch("/ruta-al-backend", {
            //     method: "POST",
            //     body: JSON.stringify({ imageUrl }), // Envía la URL como datos en el cuerpo de la solicitud
            //     headers: {
            //       "Content-Type": "application/json"
            //     }
            //   })
            //     .then(response => response.json())
            //     .then(data => {
            //       // Maneja la respuesta del backend si es necesario
            //     })
            //     .catch(error => {
            //       console.error("Error al enviar la URL al backend:", error);
            //     });
          
            //   document
            //     .getElementById("uploadedimage")
            //     .setAttribute("src", imageUrl);
            //NO BORRAR POR FAVOR
            }
        
        
          }
          );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (<div className="flex justify-center items-center h-screen">

      <button id="upload_widget" className="cloudinary-button">
        Upload
      </button>
    
      </div>
    );
  }
}

export default CloudinaryUploadWidget;
