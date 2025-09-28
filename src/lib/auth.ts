// This is a mock authentication library.
// In a real application, this would be replaced with a robust authentication system.
'use server';

import { cookies } from 'next/headers';

export type User = {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
};

// Mock user data - This is the single source of truth.
const MOCK_USERS: User[] = [{
  id: '1',
  username: 'AnimeFan_22',
  email: 'user@example.com',
  avatarUrl: 'https://picsum.photos/seed/user1/40/40',
}];

const AUTH_COOKIE_NAME = 'mock_auth_session';

export async function getAuth(): Promise<User | null> {
  const cookieStore = cookies();
  const session = cookieStore.get(AUTH_COOKIE_NAME);

  if (!session?.value) {
    return null;
  }
  
  const user = MOCK_USERS.find(u => u.username === session.value);

  return user || null;
}

export async function login(username?: string) {
  const cookieStore = cookies();
  const userToLogin = username 
    ? MOCK_USERS.find(u => u.username === username)
    : MOCK_USERS[0];

  if (userToLogin) {
    cookieStore.set(AUTH_COOKIE_NAME, userToLogin.username, { path: '/' });
  }
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

export async function createUser(data: { email: string, username: string }): Promise<User> {
  const existingUser = MOCK_USERS.find(u => u.username === data.username);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const newUser: User = {
    id: (MOCK_USERS.length + 1).toString(), 
    email: data.email,
    username: data.username,
    avatarUrl: `https://picsum.photos/seed/${data.username}/40/40`,
  };
  
  MOCK_USERS.push(newUser);
  return newUser;
}
