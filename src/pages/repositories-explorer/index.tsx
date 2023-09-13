import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import RepositoriesExplorerHeader from './header';
import RepositoriesExplorerBody from './body';

function RepositoriesExplorer() {

  return (
    <>
      <MainLayout>
        <RepositoriesExplorerHeader />
        <RepositoriesExplorerBody />
      </MainLayout>
    </>
  );
}

export default RepositoriesExplorer;
