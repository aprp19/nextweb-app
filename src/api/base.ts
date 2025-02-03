import { compact, createFetch, createFetchURL } from '@nxweb/core';
import type { FetchURLOptions } from '@nxweb/core';

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const apiURL = (endpoint: string, options: Readonly<FetchURLOptions> = {}) => {
  return createFetchURL(
    endpoint,
    compact({
      ...options,
      get baseURL() {
        return options.baseURL || BASE_URL;
      }
    })
  );
};

export const apiFetch = () => createFetch({
  baseURL: BASE_URL
});