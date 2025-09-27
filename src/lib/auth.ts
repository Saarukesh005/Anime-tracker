
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

// Mock user data - Use `let` to allow for in-memory modification
let MOCK_USERS: User[] = [
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

/**
 * Get the currently logged-in user
 */
export async function getAuth(): Promise<User | null> {
  noStore(); // Prevent caching auth state
  const cookieStore = cookies();
  const session = cookieStore.get(AUTH_COOKIE_NAME);

  if (session?.value) {
    const user = MOCK_USERS.find(u => u.id === session.value);
    return user || null;
  }

  return null;
}

/**
 * Login a user by setting a cookie
 */
export async function login(username: string): Promise<{ success: boolean }> {
  const cookieStore = cookies();
  // In a real app, you would also validate the password
  const user = MOCK_USERS.find(u => u.username === username);
  
  if (user) {
    cookieStore.set(AUTH_COOKIE_NAME, user.id, { path: '/' });
    return { success: true };
  } else {
    cookieStore.delete(AUTH_COOKIE_NAME);
    return { success: false };
  }
}

/**
 * Logout the current user
 */
export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

/**
 * Update the logged-in user's profile (username/avatar)
 */
export async function updateUserProfile(data: {
  username?: string;
  avatarUrl?: string;
}): Promise<User> {
  const cookieStore = cookies();
  const session = cookieStore.get(AUTH_COOKIE_NAME);

  if (!session?.value) {
    throw new Error('No user logged in');
  }

  const userIndex = MOCK_USERS.findIndex(u => u.id === session.value);
  if (userIndex === -1) throw new Error('User not found');

  const updatedUser = {
    ...MOCK_USERS[userIndex],
    username: data.username ?? MOCK_USERS[userIndex].username,
    avatarUrl: data.avatarUrl ?? MOCK_USERS[userIndex].avatarUrl,
  };

  MOCK_USERS[userIndex] = updatedUser;
  return updatedUser;
}

/**
 * Get all mock users (for login dropdown/testing)
 */
export async function getMockUsersForLogin() {
  return MOCK_USERS;
}

/**
 * Creates a new mock user and adds them to the list.
 */
export async function createUser(data: { email: string; username: string }): Promise<User> {
  const newUser: User = {
    id: (MOCK_USERS.length + 1).toString(),
    email: data.email,
    username: data.username,
    avatarUrl: `https://picsum.photos/seed/${data.username}/40/40`,
    role: 'User',
  };

  MOCK_USERS.push(newUser);
  return newUser;
}
