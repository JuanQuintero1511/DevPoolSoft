import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDetail from './CardDetail';




const Card = () => {

  const techNews = [
    {
      titulo: "Empresa XYZ busca desarrollador frontend",
      imagen: "https://images.vexels.com/content/204038/preview/web-developer-logo-design-29b5d4.png",
      imagenperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPVTYhTBmrVTQl-bZzTn7z0rEdrN6G-0RqQ&usqp=CAU",
      descripcion: "Empresa XYZ está buscando un desarrollador frontend con experiencia en HTML, CSS y JavaScript.",
      detalles: "La empresa ofrece un ambiente de trabajo dinámico, oportunidades de crecimiento y beneficios competitivos. Si estás interesado, visita nuestro sitio web para más información.",
    },
    {
      titulo: "Oportunidad laboral: Desarrollador full-stack en Empresa ABC",
      imagen: "https://img.freepik.com/vector-gratis/coleccion-logotipos-codigo-plano_23-2148829940.jpg",
imagenperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPVTYhTBmrVTQl-bZzTn7z0rEdrN6G-0RqQ&usqp=CAU",
      descripcion: "Empresa ABC está contratando un desarrollador full-stack con conocimientos en React, Node.js y bases de datos SQL.",
      detalles: "El candidato ideal tendrá experiencia previa en proyectos de desarrollo web y podrá trabajar en equipo. Si cumples con los requisitos, envía tu CV y portafolio a nuestro correo electrónico.",
    },
    {
      titulo: "Desarrollador backend senior requerido en Compañía XYZ",
      imagen: "https://www.pngfind.com/pngs/m/426-4264848_creative-web-solutions-logos-para-empresas-de-diseo.png",
imagenperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPVTYhTBmrVTQl-bZzTn7z0rEdrN6G-0RqQ&usqp=CAU",
      descripcion: "Compañía XYZ está buscando un desarrollador backend senior con experiencia en Python, Django y bases de datos NoSQL.",
      detalles: "Ofrecemos un salario competitivo, un entorno de trabajo flexible y la oportunidad de trabajar en proyectos desafiantes. Si estás interesado en unirte a nuestro equipo, envíanos tu currículum y muestra de trabajo.",
    },
    {
      titulo: "Empresa ABC busca desarrollador móvil",
      imagen: "https://img.freepik.com/vector-premium/letra-c-concepto-logo-flecha_302761-170.jpg?w=2000",
imagenperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPVTYhTBmrVTQl-bZzTn7z0rEdrN6G-0RqQ&usqp=CAU",
      descripcion: "Empresa ABC está en busca de un desarrollador móvil con experiencia en desarrollo de aplicaciones para iOS y Android.",
      detalles: "Ofrecemos un ambiente de trabajo colaborativo, proyectos emocionantes y la oportunidad de contribuir al desarrollo de aplicaciones móviles líderes en el mercado. Si estás interesado, contáctanos para más detalles.",
    },
    {
      titulo: "Desarrollador web junior requerido en Startup Innovadora",
      imagen: "https://i.pinimg.com/originals/f5/53/98/f5539898911e020ce0f4d7a596b5ab2a.jpg",
      imagenperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPVTYhTBmrVTQl-bZzTn7z0rEdrN6G-0RqQ&usqp=CAU",
      descripcion: "Startup Innovadora está buscando un desarrollador web junior apasionado por la programación y dispuesto a aprender nuevas tecnologías.",
      detalles: "Si tienes conocimientos básicos de HTML, CSS y JavaScript, y deseas formar parte de un equipo dinámico y creativo, envía tu CV y muestras de trabajo a nuestra dirección de correo electrónico.",
    },
    {
      titulo: "Empresa XYZ busca ingeniero de datos",
      imagen: "https://i.pinimg.com/280x280_RS/c8/07/fd/c807fd2824655fc60149460c6c18b4f2.jpg",
imagenperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPVTYhTBmrVTQl-bZzTn7z0rEdrN6G-0RqQ&usqp=CAU",
      descripcion: "Empresa XYZ está buscando un ingeniero de datos con experiencia en extracción, transformación y carga de datos.",
      detalles: "Si eres un profesional proactivo con habilidades en Python, SQL y herramientas de big data, únete a nuestro equipo y trabaja en proyectos emocionantes de análisis de datos y machine learning.",
    },
  ];
  const [showDetails, setShowDetails] = useState(Array(techNews.length).fill(false));

  const handleToggleDetail = (index) => {
    setShowDetails((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  const handleCloseDetail = (index) => {
    setShowDetails((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = false;
      return updatedState;
    });
  };

  return (
    <div className="card-list">
      {techNews.map((news, index) => (
        <div
          className="card bg-white rounded-lg shadow-lg my-4"
          style={{ width: '450px' }}
          key={index}
        >
          <div className="card-header d-flex align-items-center p-2">
            <img
              src={news.imagenperfil}
              className="rounded-circle me-2"
              style={{ width: '40px', height: '40px' }}
              alt="Imagen de perfil"
            />
            <h5 className="card-title m-0">{news.titulo}</h5>
          </div>
          <img
            src={news.imagen}
            className="card-img-top rounded-t-lg w-50"
            alt="Imagen de la publicación"
            style={{ alignSelf: 'center' }}
          />
          <div className="card-body p-1"></div>

          <div className="d-flex" style={{ alignSelf: 'flex-end' }}>
            <button className="btn btn-link btn-sm">
              <i className="bi-heart-fill me-1 text-danger"></i>
            </button>
            <button className="btn btn-link btn-sm">
              <i className="bi-share-fill me-1"></i>
            </button>
            <button className="btn btn-link btn-sm">
              <i className="bi-chat-fill me-1"></i>
            </button>
          </div>
          <hr />
          <p className="card-text text-gray-600">{news.descripcion}</p>
          {!showDetails[index] && (
            <button
              className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={() => handleToggleDetail(index)}
              disabled={showDetails.includes(true)}
            >
              Ver Detalles
            </button>
          )}

          {showDetails[index] && (
            <div
              className="card-detail"
              style={{
                width: '20rem',
                position: 'absolute',
                top: '0',
                left: '100%',
                marginLeft: '50px'
              }}
            >
              <div className="card">
                <h5 className="card-header">Aplica Ahora</h5>
                <div className="card-body">
                  <h5 className="card-title">{news.titulo}</h5>
                  <p className="card-text">{news.detalles}</p>

                  <button
                    className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    onClick={() => handleCloseDetail(index)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    style={{ marginLeft: '5px' }}
                  >
                    APLICA
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
  
};

export default Card;






