import { AxiosResponse } from 'axios';
import { Member } from '../domains/member';
import api from './api';

interface SearchMemberParams {
  idToken: string;
}

export const searchMember = (params: SearchMemberParams): Promise<AxiosResponse<Member>> => {
  return api.get<Member>(`/api/members/${params.idToken}`);
};
