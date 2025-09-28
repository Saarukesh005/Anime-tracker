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
};

// Mock user data
const MOCK_USER: User = {
  id: '1',
  username: 'AnimeFan_22',
  email: 'user@example.com',
  avatarUrl: 'https://picsum.photos/seed/user1/40/40',
};

const AUTH_COOKIE_NAME = 'mock_auth_session';

export async function getAuth(): Promise<User | null> {
  // This prevents the server from caching the user's authentication state,
  // ensuring it's checked on every request.
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

export async function createUser(data: { email: string, username: string }): Promise<User> {
  // This is a mock function, it doesn't actually save the user
  const newUser: User = {
    id: '2', 
    email: data.email,
    username: data.username,
    avatarUrl: `https://picsum.photos/seed/${data.username}/40/40`,
  };
  return newUser;
}