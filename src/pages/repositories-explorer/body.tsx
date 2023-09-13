import React, { useState } from 'react';
import AccordionHead from '../../components/AccordionHead';
import { UserList } from '../../types/user-list';
import CoumponentUserList from './components/UserList';
import UserListLoader from './components/UserListLoader';
import AccordionBody from '../../components/AccordionBody';
import DataNotFound from './components/DataNotFound';
import SearchButton from './components/SearchButton';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useGetUser } from '../../api/users';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

function RepositoriesExplorerBody() {
  const { t } = useTranslation();
  const getUser = useGetUser();
  const [activeElement, setActiveElement] = useState(-1);
  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState('');
  const [dataList, setDataList] = useState<UserList[]>();

  const getData = async () => {
    try {
      await getUser.mutateAsync(
        {
          q: search,
          per_page: 5,
        },
        {
          onSuccess: (success) => {
            if (success) {
              if (success.items.length === 0) {
                setNotFound(search);
              }
              setDataList(success.items);
            }
          },
        },
      );
    } catch (error) {
      console.log('errror :', error);
    }
  };

  const handleClick = (value: number) => {
    if (value === activeElement) {
      setActiveElement(-1);
    } else {
      setActiveElement(value);
    }
  };

  return (
    <>
      <label
        className={clsx(
          'mx-auto mt-16 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row',
          'items-center justify-center border py-2 px-2 rounded-2xl gap-2',
          'shadow-2xl focus-within:border-gray-300',
        )}
        htmlFor="search-bar"
      >
        <input
          id="search-bar"
          placeholder={t('gre.components.search.search_placeholder')}
          className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {search !== '' && (
          <XCircleIcon
            className="absolute right-3 top-4 md:relative md:right-0 md:top-0"
            onClick={() => {
              setSearch('');
              setActiveElement(-1);
              setDataList([]);
              setNotFound('');
            }}
            width={24}
          />
        )}
        <div
          onClick={() => {
            getData();
          }}
          className={clsx(
            'w-full md:w-auto px-6 py-3 bg-[#333333] border-[#333333] text-white',
            'fill-white active:scale-95 duration-100 border will-change-transform',
            'overflow-hidden relative rounded-xl transition-all disabled:opacity-70',
          )}
        >
          <SearchButton />
        </div>
      </label>
      <div className="mx-auto mt-4 min-w-sm max-w-2xl min-h-[40vh]  sm:mt-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
          {getUser.isSuccess &&
            dataList?.map((person: UserList, index: number) => (
              <>
                <div
                  id={`users-${index}`}
                  className="rounded overflow-hidden shadow-lg"
                >
                  <div className="px-6 pt-4 pb-4">
                    <div>
                      <AccordionHead
                        index={index}
                        key={index}
                        onClick={() => {
                          handleClick(index);
                          setTimeout(() => {
                            window.location.href = `#users-${index}`;
                          }, 250);
                        }}
                        activeElement={activeElement}
                      >
                        <CoumponentUserList
                          key={index}
                          id={person.id}
                          login={person.login}
                          avatar_url={person.avatar_url}
                        />
                      </AccordionHead>
                      <AccordionBody
                        show={activeElement === index}
                        repos_url={person.repos_url}
                      />
                    </div>
                  </div>
                </div>
              </>
            ))}
          {!getUser.isLoading && notFound !== '' && dataList?.length === 0 && (
            <DataNotFound notFound={notFound} />
          )}
          {getUser.isLoading && <UserListLoader />}
        </div>
      </div>
    </>
  );
}

export default RepositoriesExplorerBody;
