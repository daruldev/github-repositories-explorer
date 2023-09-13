import { MutationFunction, useMutation, useQueryClient } from '@tanstack/react-query'

import { get } from '../helpers/main-api-helper'
import * as url from '../helpers/url'

import { ACTION } from './constant'
import { UserData } from '../types/user-list'
import { TOKEN } from '../helpers/environment'

//* LIST Creator
export const getUser: MutationFunction<UserData> = ( data ) => {
  return get<UserData>(url.SEARCH_USERS, {
    params: data,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
}

export const useGetUser = () => {
  const client = useQueryClient()

  const mutation = useMutation(getUser, {
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [url.SEARCH_USERS, ACTION.LIST] })
    },
  })

  return {
    ...mutation,
    isLoading: mutation.isLoading,
  }
}