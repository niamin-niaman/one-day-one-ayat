// components/QuranVerse.tsx
import React from 'react';
import { Noto_Sans_Arabic , Amiri_Quran , Amiri , Merriweather } from 'next/font/google';

interface QuranVerseProps {
    arabicText: string;
    translationText: string;
    reference: string;
}

const notoSansArabic = Noto_Sans_Arabic({
    subsets: ['arabic'],
});

const amiriQuran = Amiri_Quran({
    subsets: ['arabic'],
    weight: '400',
});

const amiri = Amiri({
    subsets: ['arabic'],
    weight: '400',
})

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: '300',
})


const QuranVerse: React.FC<QuranVerseProps> = ({ arabicText, translationText, reference }) => {
    return (
        <div className="text-center">
            {/* First line: Arabic Font */}
            <div className={`font-arabic text-2xl text-white ${amiri.className}`}>
                {arabicText}
            </div>

            {/* Second line: Translation Text */}
            <div className={`text-lg text-white ${merriweather.className}`}>
                {translationText}
            </div>

            {/* Third line: Reference */}
            <div className="italic text-sm text-white mt-2">
                {reference}
            </div>
        </div>
    );
};

export default QuranVerse;
