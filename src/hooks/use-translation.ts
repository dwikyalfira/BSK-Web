import { create } from 'zustand';
import { translations, Language, Translations } from '@/lib/translations';
type State = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
};
const useTranslationStore = create<State>((set, get) => ({
  language: 'id',
  setLanguage: (language) => {
    set({ language, t: translations[language] });
  },
  t: translations.id,
}));
export const useTranslation = () => {
  const { language, setLanguage, t } = useTranslationStore();
  return { language, setLanguage, t };
};