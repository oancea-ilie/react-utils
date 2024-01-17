const TOKEN_KEY = 'JWT';

export const Jwt = {
  set: (token: string) => {
    sessionStorage.setItem(TOKEN_KEY, token);
  },
  get: () => sessionStorage.getItem(TOKEN_KEY),
  remove: () => {
    sessionStorage.removeItem(TOKEN_KEY);
  },
};

export const authorizedHeaders = (headers: Headers) => {
  const token = Jwt.get();
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
};
