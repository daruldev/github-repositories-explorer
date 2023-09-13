import React from 'react';
import { useTranslation } from 'react-i18next';

function RepositoriesExplorerHeader() {
  const { t } = useTranslation();

  return (
    <>
      <div className="mx-auto max-w-3xl text-center mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t('gre.pages.repositories_explorer.header.title')}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {t('gre.pages.repositories_explorer.header.description')}
        </p>
      </div>
    </>
  );
}

export default RepositoriesExplorerHeader;
