import { useEffect, useState } from "react";
import { useDetectLanguage } from "@/hooks/useDetectLanguage";

export const useGetLandingData = <T>(fileName: string, localData: T) => {
  const { lang } = useDetectLanguage();
  const [data, setData] = useState<T>(localData);

  useEffect(() => {
    (async () => {
      try {
        // const res = await landingService.getLandingData<T>(fileName);
        // setData(res);
      } catch (e) {
        setData(localData);
      }
    })();
  }, [fileName]);

  return { data: data[lang] } as const;
};
