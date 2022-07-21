import 'axios';

declare module 'axios' {
  export type AxiosResponse<T = any> = Promise<T>;
}
