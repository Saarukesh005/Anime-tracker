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

// Mock user database
const MOCK_USERS: User[] = [
  {
    id: '1',
    username: 'AnimeFan_22',
    email: 'user@example.com',
    avatarUrl: 'https://picsum.photos/seed/user1/40/40',
  }
];

const AUTH_COOKIE_NAME = 'mock_auth_session';

export async function getAuth(): Promise<User | null> {
  const cookieStore = cookies();
  const userId = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  if (userId) {
    return MOCK_USERS.find(user => user.id === userId) || null;
  }

  return null;
}

export async function login(username: string, password?: string): Promise<{ success: boolean }> {
  const user = MOCK_USERS.find(u => u.username === username);

  if (user) {
    const cookieStore = cookies();
    cookieStore.set(AUTH_COOKIE_NAME, user.id, { path: '/', httpOnly: true });
    return { success: true };
  }
  
  return { success: false };
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}


export async function createUser(data: { email: string, username: string }): Promise<User> {
  // In a real app, this would create a user in a database.
  // Here, we just return a new mock user object.
  const newUser: User = {
    id: (MOCK_USERS.length + 1).toString(),
    email: data.email,
    username: data.username,
    avatarUrl: `https://picsum.photos/seed/${data.username}/40/40`,
  };
  MOCK_USERS.push(newUser);
  return newUser;
}
