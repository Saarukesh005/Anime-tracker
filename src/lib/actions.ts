
'use server';

import { cookies } from 'next/headers';
import { login, createUser, logout } from './auth';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData) {
  const username = formData.get('username') as string;

  if (!username) {
    console.error('Username is required');
    return;
  }

  const success = await login(username);

  if (success) {
    redirect('/dashboard');
  } else {
    redirect('/login?error=InvalidCredentials');
  }
}

export async function signupAction(formData: FormData) {
  const email = formData.get('email') as string;
  const username = formData.get('username') as string;

  if (!email || !username) {
    return;
  }

  await createUser({ email, username });
  await login(username);
  redirect('/dashboard');
}


export async function logoutAction() {
  await logout();
  redirect('/login');
}
