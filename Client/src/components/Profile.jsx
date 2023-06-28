import { useSelector } from "react-redux";

import Test1 from "./test1";

export const Profile = () => {

  const user = useSelector((state) => state.userLogin);
  console.log(user)

  return (

    <div>
  {user.user_datum ? (
    <div className="flex items-center justify-center w-screen h-screen bg-teal-500 bg-opacity-30">
      <div className="ml-[180px] mt-14 bg-white shadow-md rounded-lg overflow-hidden w-[80%] h-[80%]">
        <div className="p-4">
          <div className="flex items-center">
            <img
              src={user.user_datum.image.url}
              alt="Profile"
              className="w-[300px] h-[220px] rounded-full mr-4"
            />
            <div>
              <h2 className="text-3xl font-bold text-center font-mono">{user.userName}</h2>
              <p className="text-gray-600">{user.email} ({user.userName})</p>
            </div>
          </div>
          <div className="mt-4 items-center justify-center ml-4">
            {user.user_datum.rol_type == "user"?  <h3 className="text-2xl font-semibold ml-[20%]">Developer Information</h3> : <h3 className="text-2xl font-semibold ml-[20%]">Company Information</h3>}
           
            <p>
              <span className="font-medium text-xl font-mono">Full Name:</span> {user.user_datum.full_name}
            </p>
            <p>
              <span className="font-medium text-xl font-mono">Date of Birth:</span> {user.user_datum.date_birthday}
            </p>
            <p>
              <span className="font-medium text-xl font-mono">Address:</span> {user.user_datum.address}
            </p>
            <p>
              <span className="font-medium text-xl font-mono">Phone Number:</span> {user.user_datum.phone_number}
            </p>
            <br />
            <br />
            <p className="font-bold text-2xl font-mono text-center">Description:</p>
            <p className="font-mono text-center text-xl">{user.user_datum.description}</p>
          </div>
        </div>
        <div className="px-4 py-2 bg-gray-200">
  <h3 className="text-lg font-semibold">Posts</h3>
  {user.user_datum.posts && user.user_datum.posts.length > 0 ? (
    <ul className="mt-2">
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

