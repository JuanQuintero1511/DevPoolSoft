import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDetail from './CardDetail';




const Card = () => {

  const techNews = [
    {
      titulo: "Nuevo lanzamiento: Apple presenta el iPhone 14 con características innovadoras",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_49JR_B-sxfzKrebPMKoxgyCMnx5eToypQ&usqp=CAU",
      imagenperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPVTYhTBmrVTQl-bZzTn7z0rEdrN6G-0RqQ&usqp=CAU",
      descripcion: "Apple ha revelado su último buque insignia, el iPhone 14, que viene con avances tecnológicos impresionantes. El dispositivo cuenta con un procesador ultrarrápido, una cámara mejorada y una pantalla de alta resolución. Además, se espera que tenga nuevas funciones de realidad aumentada y una mayor duración de la batería.",
      detalles: "El iPhone 14 promete revolucionar la experiencia de los usuarios con su diseño elegante y rendimiento excepcional. Para obtener más información sobre sus características y disponibilidad, visita el sitio web oficial de Apple.",
    },
    {
      titulo: "Google anuncia el lanzamiento de su nuevo servicio de almacenamiento en la nube",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToS33A6ZEFSRYnHO5W9_t828BWLJiKqY3j3g&usqp=CAU",
imagenperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPVTYhTBmrVTQl-bZzTn7z0rEdrN6G-0RqQ&usqp=CAU",
descripcion: "Google ha presentado su última apuesta en el mercado de almacenamiento en la nube con su nuevo servicio innovador. Con esta plataforma, los usuarios podrán almacenar y acceder a sus datos de forma segura desde cualquier dispositivo y en cualquier momento. Además, ofrece funciones avanzadas de colaboración y sincronización.",
detalles: "El nuevo servicio de almacenamiento en la nube de Google promete ser una solución integral para empresas y usuarios individuales que buscan una forma segura y eficiente de gestionar sus archivos. Para obtener más información sobre sus características y precios, visita el sitio web oficial de Google Cloud.",
},
    {
      titulo: "Samsung presenta su última línea de televisores con tecnología OLED",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAWv5Wy4OcskKhPiVF9SGA64R0yR3J5KdyA&usqp=CAU",
imagenperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPVTYhTBmrVTQl-bZzTn7z0rEdrN6G-0RqQ&usqp=CAU",
descripcion: "Samsung ha anunciado el lanzamiento de su serie de televisores OLED de última generación. Estos televisores ofrecen una calidad de imagen impresionante con colores vibrantes y negros profundos. Además, cuentan con tecnología de inteligencia artificial que optimiza automáticamente la calidad de imagen y el sonido según el contenido que se esté reproduciendo.",
detalles: "Los nuevos televisores OLED de Samsung prometen brindar a los usuarios una experiencia de visualización envolvente y realista. Con tamaños de pantalla variados y funciones inteligentes integradas, esta línea de televisores se adapta a las necesidades de entretenimiento de cada usuario. Visita el sitio web oficial de Samsung para obtener más información sobre los modelos disponibles.",
},
    {
      titulo: "Microsoft anuncia el lanzamiento de Windows 11 con un diseño renovado",
      imagen: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoryU3C184XMsHvpB-VBw61QkMqwhNb1cy0A&usqp=CAU",
imagenperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPVTYhTBmrVTQl-bZzTn7z0rEdrN6G-0RqQ&usqp=CAU",
descripcion: "Microsoft ha revelado su último sistema operativo, Windows 11, que viene con una interfaz de usuario renovada y mejoras significativas en el rendimiento. La actualización incluye un nuevo menú de inicio centrado, ventanas rediseñadas y una integración más estrecha con servicios en la nube. Además, se han agregado nuevas funciones de productividad y entretenimiento.",
detalles: "Windows 11 promete brindar a los usuarios una experiencia más fluida y eficiente en sus dispositivos. Con nuevas capacidades de multitarea, opciones de personalización y una mayor compatibilidad con aplicaciones, este sistema operativo se posiciona como una actualización emocionante para los usuarios de Windows. Para obtener más información sobre sus características y disponibilidad, visita el sitio web oficial de Microsoft.",
},
    {
      titulo: "Sony anuncia la fecha de lanzamiento de la tan esperada PlayStation 5 Pro",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpnqFS3FPmSKlmB4ZManOuZKjZBciB03vXg&usqp=CAU",
      imagenperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPVTYhTBmrVTQl-bZzTn7z0rEdrN6G-0RqQ&usqp=CAU",
      descripcion: "Sony ha revelado la fecha de lanzamiento de la versión mejorada de su consola de próxima generación, la PlayStation 5 Pro. Esta nueva versión ofrecerá un rendimiento aún más potente, gráficos de alta calidad y una experiencia de juego inmersiva. Los jugadores podrán disfrutar de títulos exclusivos y compatibilidad con versiones anteriores.",
      detalles: "La PlayStation 5 Pro promete llevar los juegos a un nivel superior con su potencia y capacidades mejoradas. Con un catálogo de juegos variado y funciones innovadoras, esta consola se posiciona como una opción destacada para los amantes de los videojuegos. Para obtener más información, visita el sitio web oficial de PlayStation.",
    },
    {
      titulo: "Facebook anuncia el desarrollo de una nueva plataforma de realidad virtual",
      imagen: "https://i.pinimg.com/280x280_RS/c8/07/fd/c807fd2824655fc60149460c6c18b4f2.jpg",
imagenperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPVTYhTBmrVTQl-bZzTn7z0rEdrN6G-0RqQ&usqp=CAU",
descripcion: "Facebook está trabajando en una nueva plataforma de realidad virtual que promete llevar la experiencia de inmersión a un nivel superior. Esta plataforma contará con visores avanzados, controles intuitivos y una amplia biblioteca de experiencias virtuales. Además, se espera que permita la interacción social en entornos virtuales compartidos.",
detalles: "La nueva plataforma de realidad virtual de Facebook busca llevar la interacción y la exploración a nuevas fronteras. Con avances en tecnología y contenido innovador, la compañía espera ofrecer una experiencia de realidad virtual envolvente y accesible para usuarios de todo el mundo. Visita el sitio web oficial de Facebook para obtener más detalles sobre este emocionante proyecto.",
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
            style={{ alignSelf: 'center', }}
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






