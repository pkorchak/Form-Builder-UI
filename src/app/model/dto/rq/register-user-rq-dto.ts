export interface RegisterUserRqDto {
  firstName: string;
  lastName: string;
  email: string;
  emailVerified?: boolean;
  photoUrl?: string;
  provider: IdentityProvider;
}

export enum IdentityProvider {
  INTERNAL = 'INTERNAL', // TODO Add registration by email/password inside of the app
  GOOGLE = 'GOOGLE'
}
