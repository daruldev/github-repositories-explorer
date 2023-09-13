/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryFunction, useQuery } from '@tanstack/react-query'

import { get } from '../helpers/main-api-helper'

import { ACTION } from './constant'
import { ReposData } from '../types/repos'
import { TOKEN } from '../helpers/environment'

type ListRepositoriesQueryKey = [
  path: string,
  action: string,
  repos_url: string,
]

type ListRepositories = QueryFunction<ReposData[], ListRepositoriesQueryKey>

//* LIST Repositories
export const getListRepositories: ListRepositories = async ({ queryKey }) => {
  const [, , repos_url] = queryKey
  
  const data = await get<ReposData[]>(repos_url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })

  return data
}

export const useListRepositories = ({
  repos_url
}: {
  repos_url: string
}) => {
  return useQuery({
    queryFn: getListRepositories,
    queryKey: [repos_url, ACTION.LIST, repos_url],
    keepPreviousData: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    staleTime: Infinity,
  })
}