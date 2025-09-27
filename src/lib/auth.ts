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

// Mock user data - NOT exported anymore
const MOCK_USERS: User[] = [
    {
      id: '1',
      username: 'AdminUser',
      email: 'admin@example.com',
      avatarUrl: 'https://picsum.photos/seed/admin/40/40',
      role: 'Admin',
    },
    {
      id: '2',
      username: 'SakuraChan',
      email: 'sakura@example.com',
      avatarUrl: 'https://picsum.photos/seed/sakura/40/40',
      role: 'User',
    },
    {
        id: '3',
        username: 'GokuFan99',
        email: 'goku@example.com',
        avatarUrl: 'https://picsum.photos/seed/goku/40/40',
        role: 'User',
    }
];

const AUTH_COOKIE_NAME = 'mock_auth_session';

export async function getAuth(): Promise<User | null> {
  // This is the crucial change: it prevents the server from caching the auth state.
  noStore();
  
  const cookieStore = cookies();
  const session = cookieStore.get(AUTH_COOKIE_NAME);

  if (session?.value) {
    const user = MOCK_USERS.find(u => u.id === session.value);
    return user || null;
  }

  return null;
}

export async function login(userId: string) {
  const cookieStore = cookies();
  const user = MOCK_USERS.find(u => u.id === userId);
  if (user) {
    cookieStore.set(AUTH_COOKIE_NAME, user.id, { path: '/' });
  } else {
    // Handle case where user is not found, maybe clear cookie
    cookieStore.delete(AUTH_COOKIE_NAME);
  }
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

// Function to get users for the login page, since the constant cannot be exported
export async function getMockUsersForLogin() {
    return MOCK_USERS;
}
