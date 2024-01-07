'use client';

import { UserContextProvider } from '@/hooks/useUser';

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default UserProvider;
