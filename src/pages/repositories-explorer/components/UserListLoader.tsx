import React from 'react';

const UserListLoader = () => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <div data-testid={`user-list-loader-${index}`}  key={index} className="rounded overflow-hidden shadow-lg">
          <div className="px-6 pt-4 pb-4">
            <div id="accordionExample">
              <div>
                <li
                  key={index}
                  className="flex justify-between gap-x-6 bg-white"
                >
                  <div className="flex min-w-0 gap-x-4 items-center">
                    <div className="h-12 w-12 object-cover flex-none rounded-full bg-gray-200" />
                    <div className="min-w-0 flex items-center">
                      <p className="text-sm font-semibold leading-6 text-gray-900 bg-gray-200 h-4 w-[600px] rounded-lg" />
                    </div>
                    <div className="h-5 w-10 object-cover flex-none rounded-lg bg-gray-200" />
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserListLoader;
