import React from 'react';
import { useTranslation } from 'react-i18next';

interface ComponentDataNotFound {
  notFound: string;
}

const DataNotFound = (props: ComponentDataNotFound) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-center">
          <p className="text-gray-500 text-sm text-center">
            {`${t('gre.pages.repositories_explorer.body.gitHub_username')}`}
          </p>
          <p className="text-gray-500 text-sm text-center mx-2 font-bold">
            {`"${props.notFound}"`}
          </p>
          <p className="text-gray-500 text-sm text-center">
            {`${t('gre.pages.repositories_explorer.body.not_found')}`}
          </p>
        </div>
    </>
  );
};

export default DataNotFound;
