import { FetcherError } from './errors';

export function getError(errors: any[] | null, status: number) {
  errors = errors ?? [{ message: 'Failed to fetch API' }];

  return new FetcherError({ errors, status });
}

export async function getAsyncError(res: Response) {
  const data = await res.json();

  return getError(data.errors, res.status);
}

const handleFetchResponse = async (res: Response) => {
  if (res.ok) {
    const data = await res.json();

    // if(errors && errors.length ) {
    //   throw getError(errors, res.status);
    // }

    return data;
  }

  throw await getAsyncError(res);
};

export default handleFetchResponse;
