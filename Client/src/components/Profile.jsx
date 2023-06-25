import { useSelector } from "react-redux";
import Test1 from "./test1";

export const Profile = () => {

  const user = useSelector((state) => state.userLogin);


  return (

    <div>
      {user.user_datum ?<div className="flex items-center w-screen h-screen bg-teal-500 bg-transparent-[30%]">
          
            <div className="ml-[270px] mt-14 bg-white shadow-md rounded-lg overflow-hidden w-[80%] h-[80%] ">
              <div className="p-4">
                <div className="flex items-center">
                  <img
                    src={user.user_datum.image.url}
                    alt="Profile"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-bold">{user.userName}</h2>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">User Information</h3>
                  <p>
                    <span className="font-medium">Full Name:</span> {user.user_datum.full_name}
                  </p>
                  <p>
                    <span className="font-medium">Backup Email:</span> {user.user_datum.backup_email}
                  </p>
                  <p>
                    <span className="font-medium">Description:</span> {user.user_datum.description}
                  </p>
                  <p>
                    <span className="font-medium">Date of Birth:</span> {user.user_datum.date_birthday}
                  </p>
                  <p>
                    <span className="font-medium">Address:</span> {user.user_datum.address}
                  </p>
                  <p>
                    <span className="font-medium">Phone Number:</span> {user.user_datum.phone_number}
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 bg-gray-200">
                <h3 className="text-lg font-semibold">Posts</h3>
                {user.user_datum.posts.length > 0 ? (
                  <ul className="mt-2 ">
                    {user.user_datum.posts.map((post, index) => (
                      <li key={index} className="mb-2">
                        {post}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No posts available.</p>
                )}
              </div>
            </div>
            </div>
             :<div className="flex justify-center w-full ">
              <div className="w-full ">
                <Test1 />
              </div>
            </div>}
        
    </div>
  );
};

