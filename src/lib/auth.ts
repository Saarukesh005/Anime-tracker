// This is a mock authentication library.
// In a real application, this would be replaced with a robust authentication system.
'use server';

import { cookies } from 'next/headers';
import { unstable_noStore as noStore } from 'next/cache';


export type User = {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
  role: 'Admin' | 'User';
};

// Mock user data
const MOCK_USER: User = {
  id: '1',
  username: 'AnimeFan_22',
  email: 'user@example.com',
  avatarUrl: 'https://picsum.photos/seed/user1/40/40',
  role: 'Admin',
};

const AUTH_COOKIE_NAME = 'mock_auth_session';

export async function getAuth(): Promise<User | null> {
  // This is the crucial change: it prevents the server from caching the auth state.
  noStore();
  
  const cookieStore = cookies();
  const session = cookieStore.get(AUTH_COOKIE_NAME);

  if (session?.value === 'true') {
    return MOCK_USER;
  }

  return null;
}

export async function login() {
  const cookieStore = cookies();
  cookieStore.set(AUTH_COOKIE_NAME, 'true', { path: '/' });
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.set(AUTH_COOKIE_NAME, 'false', { path: '/' });
}
