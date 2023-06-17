
export const Profile = () => {


  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="bg-white shadow-md rounded-md p-6 mb-4">
        <div className="text-center mb-6">
          <img src="profile-picture.jpg" alt="Profile Picture" className="w-40 h-40 rounded-full object-cover mx-auto mb-4" />
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-gray-500">Software Engineer</p>
        </div>
        <div className="flex">
          <div className="w-1/4 pr-6">
            <div className="bg-gray-200 rounded-md p-4 mb-4">
              <h2 className="text-lg font-bold mb-2">About</h2>
              {/* la info del about se deberia poder editar */}
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-200 rounded-md p-4">
              <h2 className="text-lg font-bold mb-2">Experience</h2>
              {/* mapeo de experiencia */}
              <p className="text-gray-600">Experience A</p>
              <p className="text-gray-600">Experience B</p>
              <p className="text-gray-600">Experience C</p>
            </div>
          </div>
          <div className="w-3/4">
            <div className="bg-gray-200 rounded-md p-4 mb-4">
              <h2 className="text-lg font-bold mb-2">Education</h2>
              {/* mapeo de educacion */}
              <p className="text-gray-600">University A</p>
              <p className="text-gray-600">University B</p>
            </div>
            <div className="bg-gray-200 rounded-md p-4">
              <h2 className="text-lg font-bold mb-2">Skills</h2>
              <ul className="list-disc pl-6">
                {/* mapeo de skills */}
                <li className="text-gray-600">JavaScript</li>
                <li className="text-gray-600">React</li>
                <li className="text-gray-600">Node.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
