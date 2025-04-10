import { useCallback, useState } from "react";

export default function useAsync<T, K>(
  callback: any,
  dependencies: any[] = [],
) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();
  const [value, setValue] = useState<T | undefined>();

  const callbackMemoized = useCallback(
    (params?: K) => {
      setLoading(true);
      setError(undefined);
      setValue(undefined);
      callback(params)
        .then(setValue)
        .catch(setError)
        .finally(() => setLoading(false));
    },
    [callback, dependencies],
  );

  return { loading, error, value, doCallback: callbackMemoized };
}
