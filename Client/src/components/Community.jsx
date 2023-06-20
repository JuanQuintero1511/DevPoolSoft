import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";
import PostCommunity from "./PostCommunity";
import { Link } from "react-router-dom";

const Community = () => {
  const dispatch = useDispatch();
//   const posts = useSelector((state) => state.allPosts);
const posts = [
  {
    "id_post": "2b65d544-478f-45d0-bfcb-8c03d61031c9",
    "title": "Cómo mejorar el rendimiento de una aplicación web",
    "body": "Hola a todos, estoy buscando consejos y sugerencias sobre cómo puedo mejorar el rendimiento de mi aplicación web. Actualmente, estoy enfrentando problemas de carga lenta y tiempos de respuesta lentos. He implementado algunas optimizaciones básicas, como la compresión de archivos y el almacenamiento en caché, pero me gustaría saber si hay otras estrategias que podría utilizar para optimizar aún más mi aplicación. ¡Cualquier consejo sería muy apreciado!",
    "likes": 85,
    "comments": 12,
    "date_register": "2023-06-18T12:53:55.946Z",
    "state": "In Progress",
    "id_user_data": "5d996e2a-8477-41ff-be69-78731ecb3b2e",
    "user_datum": {
      "full_name": "Ivan Soria"
    }
  },
  {
    "id_post": "d68f8626-3494-415e-908c-bcd7a9a64d48",
    "title": "Problema con el manejo de memoria en C++",
    "body": "¡Hola programadores! Estoy trabajando en un proyecto en C++ y estoy teniendo problemas con la gestión de la memoria. Actualmente, estoy experimentando fugas de memoria y errores de acceso no válidos. He intentado depurar el código y liberar correctamente la memoria asignada, pero aún así no logro solucionar el problema. Si alguien tiene experiencia en el manejo de memoria en C++ y puede ofrecer alguna orientación o consejo, estaría muy agradecido.",
    "likes": 72,
    "comments": 5,
    "date_register": "2023-06-18T12:58:07.625Z",
    "state": "In Progress",
    "id_user_data": "5d3ad53e-330e-42a1-a8e8-0669854e9361",
    "user_datum": {
      "full_name": "Virginia Juarez"
    }
  },
  {
    "id_post": "69bfc585-30ea-476b-a022-88d671795645",
    "title": "Recomendaciones de frameworks para desarrollo web",
    "body": "Estoy interesado en aprender un nuevo framework para el desarrollo web y me preguntaba si podrían compartir sus recomendaciones. Me gustaría conocer los frameworks más populares y cuáles son sus ventajas y desventajas. Además, si tienen alguna experiencia personal con algún framework en particular, me encantaría escuchar sus opiniones y consejos. ¡Gracias de antemano!",
    "likes": 37,
    "comments": 8,
    "date_register": "2023-06-18T13:04:12.336Z",
    "state": "In Progress",
    "id_user_data": "5c3fe4b9-a50a-4427-af49-f87d3e74812e",
    "user_datum": {
      "full_name": "Juan Perez"
    }
  },
  {
    "id_post": "8a15a6f2-2c01-435a-b45a-b12684cc1f1a",
    "title": "Problemas con la integración de API de pagos",
    "body": "¡Hola a todos! Estoy desarrollando una aplicación que requiere la integración de una API de pagos para procesar transacciones. Sin embargo, estoy teniendo dificultades para realizar la integración correctamente. No logro que la API funcione como se espera y no encuentro documentación clara al respecto. Si alguien tiene experiencia con la integración de API de pagos y puede ofrecer alguna orientación o consejo, se lo agradecería mucho.",
    "likes": 22,
    "comments": 3,
    "date_register": "2023-06-18T13:10:24.782Z",
    "state": "In Progress",
    "id_user_data": "6e3f95a9-d0f4-468c-b0f0-952f281fb23d",
    "user_datum": {
      "full_name": "María Rodriguez"
    }
  },
  {
    "id_post": "4e8d6edf-5f48-4197-9a89-320ddc6e808f",
    "title": "Duda sobre el uso de promesas en JavaScript",
    "body": "¡Hola a todos! Tengo una duda sobre el uso de promesas en JavaScript. Estoy trabajando en un proyecto y he estado utilizando promesas para manejar tareas asíncronas. Sin embargo, no estoy seguro de si estoy utilizando correctamente las promesas o si hay formas más eficientes de lograr lo que necesito. Si alguien puede proporcionar información adicional sobre las promesas en JavaScript o compartir algunos ejemplos prácticos, estaría muy agradecido.",
    "likes": 68,
    "comments": 10,
    "date_register": "2023-06-18T13:15:39.931Z",
    "state": "In Progress",
    "id_user_data": "d25c73e1-2c34-421f-937e-5b678e6c0874",
    "user_datum": {
      "full_name": "Luis Morales"
    }
  },
  {
    "id_post": "f7dd2723-6183-45ee-91a7-c76c0e77d83a",
    "title": "Recomendaciones de libros sobre desarrollo web",
    "body": "¡Hola a todos! Estoy buscando recomendaciones de libros sobre desarrollo web. Me gustaría ampliar mis conocimientos y aprender más sobre tecnologías web, como HTML, CSS, JavaScript, frameworks y diseño web en general. Si tienen algún libro para recomendar, ya sea para principiantes o para niveles más avanzados, ¡por favor compartan sus sugerencias!",
    "likes": 54,
    "comments": 7,
    "date_register": "2023-06-18T13:20:51.117Z",
    "state": "In Progress",
    "id_user_data": "cb4d5b2f-af0d-40c0-b0c3-0a59f8cc8533",
    "user_datum": {
      "full_name": "Carlos Sanchez"
    }
  },
  {
    "id_post": "24e42925-c2e0-4b71-8a3f-293e0b6a12a8",
    "title": "Problema con el rendimiento de consultas SQL",
    "body": "¡Hola! Necesito ayuda con un problema relacionado con el rendimiento de consultas SQL en mi aplicación. Tengo algunas consultas que se ejecutan lentamente y estoy tratando de optimizarlas. He agregado índices a las columnas relevantes y he revisado el plan de ejecución de las consultas, pero aún no logro obtener un rendimiento satisfactorio. Si alguien tiene experiencia en la optimización de consultas SQL o puede ofrecer alguna sugerencia, ¡se lo agradecería mucho!",
    "likes": 91,
    "comments": 15,
    "date_register": "2023-06-18T13:26:02.201Z",
    "state": "In Progress",
    "id_user_data": "a53f55b2-196c-4a50-a49a-550d96edc38b",
    "user_datum": {
      "full_name": "Laura Gomez"
    }
  },
  {
    "id_post": "11750f9b-7a18-4c55-8ec7-d36f7e12fe5d",
    "title": "Duda sobre el uso de componentes en React",
    "body": "¡Hola a todos! Estoy aprendiendo React y tengo una duda sobre el uso de componentes. He estado creando algunos componentes en mi aplicación, pero no estoy seguro de cuándo y cómo dividirlos en componentes más pequeños. ¿Existe alguna recomendación o patrón común para organizar componentes en React? Si alguien tiene experiencia en el desarrollo de aplicaciones con React y puede ofrecer consejos sobre el uso de componentes, ¡sería de gran ayuda!",
    "likes": 31,
    "comments": 6,
    "date_register": "2023-06-18T13:31:18.006Z",
    "state": "In Progress",
    "id_user_data": "b8ad120c-6c9a-419f-92e6-33461d19ebf3",
    "user_datum": {
      "full_name": "Pedro Fernandez"
    }
  }
]

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);


  return (
    <div className="bg-gray-100">
    <div className="flex flex-col items-center mt-10 mr-8">
      <div className="flex items-center justify-between w-full mb-4 mt-8">
  <h2 className="text-3xl font-bold text-teal-700 ml-[20vw]">COMMUNITY</h2>
  <div>
    <Link to={`/inprogress`}>
      <button className="select-none rounded-lg bg-teal-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        CREATE POST
      </button>
    </Link>
  </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-[20vw]">
        {posts.map((post) => (
          <PostCommunity key={post.id_post} post={post} />
        ))}
      </div>
    </div>
    </div>
  );
        }  

export default Community;

