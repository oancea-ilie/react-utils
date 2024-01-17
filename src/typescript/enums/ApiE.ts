export enum ReqMethodE {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum EndpointE {
  TEMPLATES = '/templates',
  LOGIN = '/auth/login',
  REGISTER = '/auth/register',
  CURRENT_USER = '/auth/current-user',
}

export enum ApiTagE {
  TEMPLATE = 'Template',
  AUTH = 'Auth',
  REGISTER = 'Register',
  CURRENT_USER = 'CurrentUser',
}

export enum ApiSliceE {
  TEMPLATE = 'templateApiSlice',
  AUTH = 'authApiSlice',
  REGISTER = 'registerApiSlice',
  CURRENT_USER = 'currentUserApiSlice',
}
