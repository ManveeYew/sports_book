import { useLanguageStore } from "@/store/useLanguageStore";
import en from "@/public/locales/en/common.json";
import zh from "@/public/locales/zh/common.json";

const translations = {
  en,
  zh,
};

export function useTranslation() {
  const lang = useLanguageStore((state) => state.language);
  return translations[lang];
}
