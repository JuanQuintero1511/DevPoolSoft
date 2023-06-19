
export const Profile = () => {
  const perfiles = [
    {
      nombre: "Ramiro Fassetta",
      profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
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

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="bg-white shadow-md rounded-md p-6 mb-4">
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
              <h2 className="text-lg font-bold mb-2">About</h2>
              {/* la info del about se deberia poder editar */}
              <p className="text-gray-600">{perfiles[0].acercaDeMi}</p>
            </div>
            <div className="bg-gray-200 rounded-md p-4">
              <h2 className="text-lg font-bold mb-2">Experience</h2>
              {perfiles[0].experiencia.map((exp, index) => (
                <p key={index} className="text-gray-600">
                  {exp.puesto} at {exp.empresa}
                </p>
              ))}
            </div>
          </div>
          <div className="w-3/4">
            <div className="bg-gray-200 rounded-md p-4 mb-4">
              <h2 className="text-lg font-bold mb-2">Education</h2>
              {perfiles[0].educacion.map((edu, index) => (
                <p key={index} className="text-gray-600">
                  {edu.titulo} at {edu.institucion}
                </p>
              ))}
            </div>
            <div className="bg-gray-200 rounded-md p-4">
              <h2 className="text-lg font-bold mb-2">Skills</h2>
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
