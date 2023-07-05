import { useDispatch, useSelector } from "react-redux";
import Test1 from "./test1";
import { useEffect } from "react";
import { getAllUsers } from "../redux/actions";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])


  const allUsers = useSelector((state) => state.allUsers)
  const user = useSelector((state) => state.userLogin);


  const filteredUser = allUsers.filter((u) => u.userName === user.userName);

  return (
    <div>
      {user.user_datum ? (
        <div className="flex items-center justify-center w-screen h-screen bg-teal-500 bg-opacity-30">
          <div className="ml-[180px] mt-14 bg-white shadow-md rounded-lg overflow-hidden w-[80%] h-[90%]">
            <div className="p-4">
              {user.user_datum.rol === "developer" ? 
              <button
                className="ml-[90%] mt-0 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => (window.location.href = "/devdata")}
              >
                DevData CV
              </button>: null}

              <div className="flex items-center">
                <img
                  src={user.user_datum.image.url}
                  alt="Profile"
                  className="w-[300px] h-[220px] rounded-full mr-4"
                />
                <div>
                  <h2 className="text-3xl font-bold text-center font-mono">
                    {user.userName}
                  </h2>
                  <p className="text-gray-600">
                    {user.email} ({user.userName})
                  </p>
                </div>
              </div>
              <div className="mt-4 items-center justify-center ml-4">
                {user.user_datum.rol === "developer" ? (
                  <>
                    <h3 className="text-2xl font-semibold ml-[20%]">
                      Developer Information
                    </h3>
                    <p>
                      <span className="font-medium text-xl font-mono">
                        Experience:
                      </span>{" "}
                      {filteredUser[0]?.user_datum.devdatum?.experience.puesto} at{" "}
                      {filteredUser[0]?.user_datum.devdatum?.experience.empresa} (
                      {filteredUser[0]?.user_datum.devdatum?.experience.duracion})
                    </p>
                    <p>
                      <span className="font-medium text-xl font-mono">
                        Education:
                      </span>{" "}
                      {filteredUser[0]?.user_datum.devdatum?.education.titulo} at{" "}
                      {filteredUser[0]?.user_datum.devdatum?.education.institucion} (
                      {filteredUser[0]?.user_datum.devdatum?.education.año})
                    </p>
                    <p>
                      <span className="font-medium text-xl font-mono">
                        Skills:
                      </span>{" "}
                      {filteredUser[0]?.user_datum.devdatum?.skills.join(", ")}
                    </p>
                    <p>
                      <span className="font-medium text-xl font-mono">
                        Ratings:
                      </span>{" "}
                      {filteredUser[0]?.user_datum.devdatum?.ratings}
                    </p>
                    <p>
                      <span className="font-medium text-xl font-mono">
                        Curriculum Vitae:
                      </span>{" "}
                      <a
                        href={filteredUser[0]?.user_datum.devdatum?.curriculumVitae.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-teal-500 py-2 px-2 font-mono rounded-xl"
                      >
                        View CV
                      </a>
                    </p>
                  </>
                ) : (
                  <h3 className="text-2xl font-semibold ml-[20%]">
                    Company Information
                  </h3>
                )}

                <p>
                  <span className="font-medium text-xl font-mono">
                    Full Name:
                  </span>{" "}
                  {user.user_datum.full_name}
                </p>
                <p>
                  <span className="font-medium text-xl font-mono">
                    Date of Birth:
                  </span>{" "}
                  {user.user_datum.date_birthday.split("T")[0]}
                </p>

                <p>
                  <span className="font-medium text-xl font-mono">
                    Address:
                  </span>{" "}
                  {user.user_datum.address}
                </p>
                <p>
                  <span className="font-medium text-xl font-mono">
                    Phone Number:
                  </span>{" "}
                  {user.user_datum.phone_number}
                </p>
                <br />
                <br />
                <p className="font-bold text-2xl font-mono text-center">
                  Description:
                </p>
                <p className="font-mono text-center text-xl">
                  {user.user_datum.description}
                </p>
              </div>
            </div>
            <div className="px-4 py-2 bg-gray-200">
              <h3 className="text-lg font-semibold mt-0">Posts</h3>
              {user.user_datum.posts && user.user_datum.posts.length > 0 ? (
                <ul className="mt-2 z-20">
                  {user.user_datum.posts.map((post, index) => (
                    <li key={index} className="mb-2">
                      <h4>{post.title}</h4>
                      <p>{post.body}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No posts available.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center w-full bg-[url(./src/image/bgprofile.png)] bg-cover">
          <div className="w-full backdrop-blur-lg">
            <Test1 />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
