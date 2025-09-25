// This is a mock authentication library.
// In a real application, this would be replaced with a robust authentication system.

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

// In a real app, this would read from a secure session cookie or token.
// For this prototype, we'll just simulate a logged-in user.
let isAuthenticated = true;

export async function getAuth(): Promise<User | null> {
  // Simulate an async call to an auth service
  await new Promise(resolve => setTimeout(resolve, 100));
  
  if (isAuthenticated) {
    return MOCK_USER;
  }
  return null;
}

export async function login() {
  isAuthenticated = true;
}

export async function logout() {
  isAuthenticated = false;
}
