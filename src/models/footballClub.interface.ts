import { IUser } from './users.interface';

export interface IFootballClub {
    id: number;
    name: string;
    league: string;
    players: IUser[];
}