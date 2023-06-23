import React, { Component } from "react";

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    const cloudName = import.meta.env.VITE_FRONT_CLOUD_NAME;
    const uploadPreset = "FrontCloudTry"; 
 
    
   
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          console.log(result.info.url)
          
          // document
          // .getElementById("uploadedimage").src = result.info.secure_url
          //   .setAttribute("src", result.info.url); NO BORRAR POR EL MOMENTO
          this.props.onImageUpload(result.info.url);

            
          
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
