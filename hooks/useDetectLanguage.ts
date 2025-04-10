import { useParams } from "next/navigation";

export const useDetectLanguage = () => {
  const { lang } = useParams<{ lang: "vi" | "en" }>();
  const isEng = lang === "en";
  const isVie = lang === "vi";
  const langPrefix = isEng ? "_EN" : "_VN";
  const pricePrefix = isEng ? "_USD" : "_VND";

  return { lang, isEng, isVie, langPrefix, pricePrefix } as const;
};
