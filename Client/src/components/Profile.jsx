
export const Profile = () => {
  const perfiles = [
    {
      nombre: "Ramiro Fassetta",
      profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      cargo: "Desarrollador Full Stack",
      acercaDeMi: "Apasionado por la programación y el desarrollo web.",
      skills: ["JavaScript", "HTML", "CSS", "Node.js", "React"],
      experiencia: [
        {
          puesto: "Desarrollador Junior",
          duracion: "1 año",
          empresa: "ABC Solutions",
        },
        {
          puesto: "Desarrollador Senior",
          duracion: "2 años",
          empresa: "XYZ Tech",
        },
      ],
      educacion: [
        {
          titulo: "Licenciatura en Ingeniería de Software",
          institucion: "Universidad Nacional",
          año: 2018,
        },
        {
          titulo: "Diplomado en Desarrollo Web Full Stack",
          institucion: "Henry",
          año: 2017,
        },
      ],
    },
  ];

  const handleClick = () => {
    console.log("Haz hecho clic en la flecha");
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 mt-8">
      <div className="bg-white shadow-md rounded-md p-6 mb-4 relative">
      <div className="absolute top-0 right-0 transform -translate-x-2 translate-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-gray-400 cursor-pointer"
            onClick={handleClick}
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <div className="text-center mb-6">
          <div className="border-4 border-gray-200 rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
            <img
              src={perfiles[0].profileImage}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold">{perfiles[0].nombre}</h1>
          <p className="text-gray-500">{perfiles[0].cargo}</p>
        </div>
        <div className="flex">
          <div className="w-1/4 pr-6">
            <div className="bg-gray-200 rounded-md p-4 mb-4">
              <h2 className="text-lg font-bold mb-2 text-blue-500">About</h2>
              <p className="text-gray-600">{perfiles[0].acercaDeMi}</p>
            </div>
            <div className="bg-gray-200 rounded-md p-4">
              <h2 className="text-lg font-bold mb-2 text-blue-500">
                Experience
              </h2>
              {perfiles[0].experiencia.map((exp, index) => (
                <p key={index} className="text-gray-600">
                  {exp.puesto} at {exp.empresa}
                </p>
              ))}
            </div>
          </div>
          <div className="w-3/4">
            <div className="bg-gray-200 rounded-md p-4 mb-4">
              <h2 className="text-lg font-bold mb-2 text-blue-500">
                Education
              </h2>
              {perfiles[0].educacion.map((edu, index) => (
                <p key={index} className="text-gray-600">
                  {edu.titulo} at {edu.institucion}
                </p>
              ))}
            </div>
            <div className="bg-gray-200 rounded-md p-4">
              <h2 className="text-lg font-bold mb-2 text-blue-500">Skills</h2>
              <ul className="list-disc pl-6">
                {perfiles[0].skills.map((skill, index) => (
                  <li key={index} className="text-gray-600">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
