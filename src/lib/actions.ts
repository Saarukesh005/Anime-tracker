
'use server';

import { cookies } from 'next/headers';

const AUTH_COOKIE_NAME = 'mock_auth_session';

export async function logout() {
  cookies().delete(AUTH_COOKIE_NAME);
}
