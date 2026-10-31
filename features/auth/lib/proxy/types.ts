import type {
    AccessToken,
    RefreshToken,
    SessionUser,
} from "@/features/auth/types/auth-index";

export interface RotatedTokens {
    accessToken: AccessToken;
    refreshToken: RefreshToken;
}

export type Session =
    | { authenticated: false }
    | {
          authenticated: true;
          user: SessionUser;
          hasUserData: boolean;
          rotatedTokens?: RotatedTokens;
      };
