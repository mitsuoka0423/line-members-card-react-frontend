import { Member } from '../domains/member';
import api from './api';

interface SearchMemberParams {
  idToken: string;
}

export const searchMember = (params: SearchMemberParams): Promise<Member> => {
  return api.get<Member, Member>(`/api/members/${params.idToken}`);
};
