import React from 'react';
import { TECollapse } from 'tw-elements-react';
import { useListRepositories } from '../api/repositories';
import { ReposData } from '../types/repos';
import { StarIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

interface AccordionBodyProps {
  repos_url: string;
  show: boolean;
}

const AccordionBody = (props: AccordionBodyProps) => {
  const { t } = useTranslation();
  const ListRepositories = useListRepositories({ repos_url: props.repos_url });

  return (
    <>
      <TECollapse show={props.show} className="!mt-0 !rounded-b-none !shadow-none">
        <div className="mt-2">
          {ListRepositories?.data?.map((val: ReposData) => {
            return (
              <>
                <div className="items-center border-b border-gray-200 hover:bg-gray-100 rounded-lg">
                  <a
                    href={val.clone_url}
                    target="_blank"
                    key={val.id}
                    className="flex justify-between gap-x-6 pr-4 text-gray-700 hover:text-[#0000FF]"
                    rel="noreferrer"
                  >
                    <div className="flex justify-start cursor-pointer px-2 py-2 my-2 w-[80%]">
                      <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                      <div className="flex-grow font-medium px-2">{val.name}</div>
                    </div>
                    <div className="text-sm font-normal text-black tracking-wide flex items-center">
                      {val.stargazers_count}
                      <StarIcon width={24} className="ml-2" />
                    </div>
                  </a>
                  <p className="text-gray-500 mb-5 mx-10 text-sm">
                    {val.description ?? '-'}
                  </p>
                </div>
              </>
            );
          })}
          {ListRepositories?.data?.length === 0 && (
            <p className="text-gray-500 mb-4 mt-4 text-sm text-center">
              {t('gre.components.accordion.body.repos_no_data')}
            </p>
          )}
        </div>
      </TECollapse>
    </>
  );
};

export default AccordionBody;
