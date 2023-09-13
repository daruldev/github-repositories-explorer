import axios from 'axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { MAIN_URL } from './environment';

const axiosApi = axios.create({
  baseURL: MAIN_URL,
});

export async function get<T>(
  url: string,
  config: AxiosRequestConfig = {},
): Promise<T> {
  return axiosApi
    .get(url, config)
    .then((response: AxiosResponse<T>) => response.data);
}
export async function post<T>(
  url: string,
  data: unknown,
  config: AxiosRequestConfig = {},
): Promise<T> {
  return axiosApi
    .post(url, data, config)
    .then((response: AxiosResponse<T>) => response.data);
}

export async function form(
  url: string,
  data: unknown,
  headers = {},
  method = 'POST',
) {
  const config = { method: method, url, data, headers };
  return await axiosApi(config).then((response) => response.data);
}

export async function put<T>(
  url: string,
  data: unknown,
  config: AxiosRequestConfig = {},
): Promise<T> {
  return await axiosApi
    .put(url, { data }, { ...config })
    .then((response: AxiosResponse<T>) => response.data);
}

export async function del<T>(
  url: string,
  config: AxiosRequestConfig = {},
): Promise<T> {
  return await axiosApi.delete(url, { ...config }).then((response) => response.data);
}
