// hooks/useQuranVerse.ts
import { QuranVerseData, TranslateLanguage } from '@/types/QuranVerseType';
import { useEffect, useState } from 'react';

const useQuranVerse = (language: TranslateLanguage = TranslateLanguage.Thai) => {

    const [quranVerseData, setQuranVerseData] = useState<QuranVerseData | null>(null);
    const [loading, setLoading] = useState(false);

    let queryLanguage = 'th.thai';

    switch (language) {
        case TranslateLanguage.English:
            queryLanguage = 'en.ahmedali'
            break;

        default:
            break;
    }


    const fetchQuranVerse = async () => {
        try {
            setLoading(true);

            // Replace the URL below with your actual API endpoint for fetching Quranic verses
            const randomAyatNumber = getRandomAyat()

            const responseArabic = await fetch(
                `https://api.alquran.cloud/v1/ayah/${randomAyatNumber}`
            );

            if (!responseArabic.ok) {
                throw new Error('Failed to fetch Quranic verse');
            }

            const responseTranslated = await fetch(
                `https://api.alquran.cloud/v1/ayah/${randomAyatNumber}/${queryLanguage}`
            );

            if (!responseTranslated.ok) {
                throw new Error('Failed to fetch Quranic verse');
            }

            // const data: QuranVerseData = await responseArabic.json();

            const responseArabicJson = await responseArabic.json()
            // console.log(responseArabicJson);

            const dataArabic = responseArabicJson?.data
            // console.log(data);

            const responseTranslatedJson = await responseTranslated.json()
            // console.log(responseTranslatedJson);

            const dataTranslated = responseTranslatedJson?.data
            // console.log(data);

            const quranVerdata: QuranVerseData = {
                original: dataArabic.text,
                original_edition: dataArabic.edition.identifier,
                translate: dataTranslated.text, // You may need to fetch the translated text from an API
                translate_language: TranslateLanguage.Thai,
                translate_edition: dataTranslated.edition.englishName,
                surah_name: dataArabic.surah.englishName,
                surah_number: String(dataArabic.surah.number),
                ayat_number: String(dataArabic.numberInSurah)
            };

            // const quranVerdata: QuranVerseData = {
            //     "original": "Arabic ayat",
            //     "original_edition": "...",
            //     "translate": "translated text",
            //     "translate_language": TranslateLanguage.English,// ISO 639-1
            //     "translate_edition": "...",
            //     "surah_number": "0",
            //     "ayat_number": "0:1"
            // }
            setQuranVerseData(quranVerdata);

        } catch (error) {
            console.error('Error fetching Quranic verse:', error);
        } finally {
            setLoading(false);
        }
    };


    return { quranVerseData, loading, fetchQuranVerse };
};

const getRandomAyat = () => {
    // get random number between 1 and 6236
    return Math.floor(Math.random() * 6236) + 1;
}

export default useQuranVerse;

