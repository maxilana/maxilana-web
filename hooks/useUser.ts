import Router from 'next/router';
import { useEffect } from 'react';
import useSWR, { MutatorCallback } from 'swr';
import NextAPIFetcher from '~/modules/api/nextApiFetcher';
import { FetcherError } from '~/modules/lib/errors';
import { User } from '~/types/Models';

type UserHookResult = {
  user?: User;
  mutateUser: MutatorCallback;
};

export default function useUser({ redirectTo = '', redirectIfFound = false }): UserHookResult {
  const wrapper = (endpoint: string) => NextAPIFetcher({ endpoint });
  const { data: user, mutate: mutateUser } = useSWR<User, FetcherError>('/api/user', {
    fetcher: wrapper,
  });

  useEffect(() => {
    if (!redirectTo || !user) return;

    if (
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser };
}
