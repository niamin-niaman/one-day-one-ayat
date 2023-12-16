export interface QuranVerseData {
  original: string; // arabic ayat
  original_edition: string; // edition of the original
  translate: string; // translated text
  translate_language: TranslateLanguage// ISO 639-1
  translate_edition: string; // edition of the translated
  surah_number: string;
  ayat_number: string;

}

export enum TranslateLanguage {
  English = "en",
  Thai = "th",
}

/*

{
  "original": "Arabic ayat",
  "original_edition": "...",
  "translate": "translated text",
  "translate_language": "eng"// ISO 639-1
  "translate_edition": "...",
  "surah_number": "0",
  "ayat_number": "0:1"
}

*/