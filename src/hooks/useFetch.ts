import { getEnvVariables } from '@/helpers/getEnvVariables';
import { useEffect, useState } from 'react';

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
}

export const useFetch = <T>(url: string) => {
  const baseUrl = 'https://myanimelist.p.rapidapi.com/v2';
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
  });

  const { VITE_KEY_RAPID_API: viteKeyRapidApi } = getEnvVariables();

  const getData = async () => {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': `${viteKeyRapidApi}`,
        'x-rapidapi-host': 'myanimelist.p.rapidapi.com',
      },
    };

    try {
      setState({ ...state, isLoading: true });

      const resp = await fetch(`${baseUrl}/${url}`, options);
      const data: T = await resp.json();
      setState({ data, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
  };
};
