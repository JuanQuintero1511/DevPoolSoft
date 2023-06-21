import React from "react";
import {Cloudinary} from "@cloudinary/url-gen"
import { useRef, useEffect } from "react";
import { v2 as cloudinary } from "cloudinary-core";


const cld = new Cloudinary({
    cloud:{
        
    }
})

const UploadWidgetCloud = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current.createUploadWidget({
            cloudName: process.env.CLOUD_NAME,
            uploadPreset: "FrontCloudTry"
        }, function(error, result)
        {
            console.log(result)
        });
    }, [])

    return (
        <button onClick={() => widgetRef.current.open()}>
            Upload
        </button>
    )

}


export default UploadWidgetCloud;