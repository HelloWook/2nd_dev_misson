import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const baseUrl: string = process.env.REACT_APP_API_URL as string

const defaultApi = (option?: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({ baseURL: baseUrl, ...option })
  return instance
}

export default defaultApi
