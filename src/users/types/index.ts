export interface IUser {
  userId: string;
  nickname: string;
  email: string;
  favoriteTheme: string;
  favoriteSecondTheme: string;
  password: string;
}

export type IUserUpdate = Partial<IUser> & { userId: string };

export type IUsers = { items: IUser[] };
