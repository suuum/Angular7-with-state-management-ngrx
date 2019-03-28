import { IUser } from 'src/models/users.interface';

export interface IUserState {
    users: IUser[];
    selectedUser: IUser
}

export const initialUserState: IUserState = {
    users: null,
    selectedUser: null
};