import React from 'react';

function AppliedUsers() {
  const users = [
    {
      name: "John Doe",
      imageUrl: "https://via.placeholder.com/150",
      bio: "A passionate developer with experience in building modern web applications.",
    },
    {
      name: "Jane Smith",
      imageUrl: "https://via.placeholder.com/150",
      bio: "A skilled designer with a knack for creating stunning visuals.",
    },
    {
      name: "Jane Smith",
      imageUrl: "https://via.placeholder.com/150",
      bio: "A skilled designer with a knack for creating stunning visuals.",
    },
    {
      name: "Jane Smith",
      imageUrl: "https://via.placeholder.com/150",
      bio: "A skilled designer with a knack for creating stunning visuals.",
    },
    {
      name: "Jane Smith",
      imageUrl: "https://via.placeholder.com/150",
      bio: "A skilled designer with a knack for creating stunning visuals.",
    },
    {
      name: "Alice Johnson",
      imageUrl: "https://via.placeholder.com/150",
      bio: "An experienced project manager with a proven track record of successful projects.",
    }
  ];

  return (
    <div className="container max-w-4xl mx-auto rounded-lg bg-white mt-6 p-8 shadow-lg dark:bg-dark-secondary-100 dark:border dark:border-secondary-200" >
      <h3 className="text-2xl font-semibold text-secondary-300 dark:text-secondary-100 mb-8">
        Applied Users
      </h3>
      <div className="container mx-auto  mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-dark-secondary-100 dark:border dark:border-secondary-200"
          >
            <div className="flex flex-col items-center p-6">
              <div className="w-24 h-24 mb-4">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={user.imageUrl}
                  alt={user.name}
                />
              </div>
              <h3 className="text-xl font-semibold text-secondary-300 dark:text-secondary-100">
                {user.name}
              </h3>
              <p className="mt-2 text-center text-secondary-500 dark:text-secondary-200">
                {user.bio}
              </p>
              <div className="mt-4 flex space-x-4">
                <button
                  className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                // onClick={() => onSelected(user.id)}
                >
                  Selected
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                // onClick={() => onNotSelected(user.id)}
                >
                  Not Selected
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}

export default AppliedUsers;