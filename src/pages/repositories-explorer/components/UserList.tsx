import React from 'react';

interface ComponentUserList {
  id: number;
  avatar_url: string;
  login: string;
}
const CoumponentUserList = (person: ComponentUserList) => {
  return (
    <>
      <li key={person.id} className="flex justify-between gap-x-6">
        <div className="flex min-w-0 gap-x-4">
          <img
            className="h-12 w-12 object-cover flex-none rounded-full bg-gray-50"
            src={person.avatar_url}
            alt=""
          />
          <div className="min-w-0 flex items-center">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {person.login}
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default CoumponentUserList;
