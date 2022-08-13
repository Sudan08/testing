interface ILoginResponse {
  message?: string;
  token?: {
    access_token: string;
    refresh_token: string;
  };
}
