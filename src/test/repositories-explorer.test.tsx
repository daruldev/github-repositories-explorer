/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { render, screen, within } from '@testing-library/react';
import RepositoriesExplorer from '../pages/repositories-explorer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CoumponentUserList from '../pages/repositories-explorer/components/UserList';
import UserListLoader from '../pages/repositories-explorer/components/UserListLoader';
import AccordionBody from '../components/AccordionBody';
import { useGetUser } from '../api/users';
import { UserData } from '../types/user-list'

const queryClient = new QueryClient();

jest.mock('i18next', () => ({
  changeLanguage: jest.fn(),
}));

jest.mock('axios', () => ({
  axios: jest.fn(),
  create: jest.fn(),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: any) => key,
  }),
}));

test('Check Header', async () => {

  render(
    <QueryClientProvider client={queryClient}>
      <RepositoriesExplorer />
    </QueryClientProvider>,
  );

  const gre_logo = await screen.findByRole('img', {
    name: /gre logo/i,
  });
  expect(gre_logo).toBeInTheDocument();


  const usa_logo = await screen.findByRole('img', {
    name: /usa/i,
  });
  expect(usa_logo).toBeInTheDocument();

  const button = await screen.getByRole('button', {
    name: /usa/i
  })
  expect(button).toBeInTheDocument();

});


test('Check Content', async () => {

  render(
    <QueryClientProvider client={queryClient}>
      <RepositoriesExplorer />
    </QueryClientProvider>,
  );

  const title = await screen.findByText(/gre\.pages\.repositories_explorer\.header\.title/i);
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('gre.pages.repositories_explorer.header.title');

  const description = await screen.findByText(/gre\.pages\.repositories_explorer\.header\.description/i);
  expect(description).toBeInTheDocument();
  expect(description).toHaveTextContent('gre.pages.repositories_explorer.header.description');

  const search = await screen.getByRole('textbox', {
    name: /gre\.components\.search\.search_text/i
  })
  expect(search).toBeInTheDocument();

});


test('Check footer', async () => {

  render(
    <QueryClientProvider client={queryClient}>
      <RepositoriesExplorer />
    </QueryClientProvider>,
  );

  const logo = screen.getByRole('contentinfo');
  within(logo).getByRole('img', {
    name: /logo/i,
  });
  expect(logo).toBeInTheDocument();


  const years = await screen.findByText(/© 2023/i);
  expect(years).toBeInTheDocument();
  expect(years).toHaveTextContent('© 2023');

  const contentinfo = await screen.findByText(/github repositories explorer\./i);
  expect(contentinfo).toBeInTheDocument();
  expect(contentinfo).toHaveTextContent('GitHub Repositories Explorer.');
  
});

test('Check UserList Component', async () => {

  render(
    <CoumponentUserList
      id={1}
      avatar_url='https://avatars.githubusercontent.com/u/102568602?v=4'
      login='daruldev'
      key={2}
    />
  );

  const title = await screen.getByText(/daruldev/i)
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('daruldev');

  const cover = await screen.getByRole('img')
  expect(cover).toBeInTheDocument();
  
});


test('Check UserList Loader Component', async () => {

  render(
    <UserListLoader/>
  );

  const loader  = screen.getByTestId('user-list-loader-0')
  expect(loader).toBeInTheDocument();

});