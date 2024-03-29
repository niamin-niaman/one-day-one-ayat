'use client';
import FullBackgroundImage from "@/components/FullBackgroundImage";
import QuranVerse from "@/components/QuranVerse";
import useImage from "@/hooks/useImage";
import useQuranVerse from "@/hooks/useQuranVerse";
import { TranslateLanguage } from "@/types/QuranVerseType";
import { useEffect } from "react";

export default function Home() {

  const language = TranslateLanguage.Thai

  const { quranVerseData, loading: quranLoding, fetchQuranVerse } = useQuranVerse(language);
  const { image, loading: imageLoading, fetchImage } = useImage();

  const handleFetchQuranVerse = async () => {
    fetchQuranVerse()
    fetchImage()
  }

  useEffect(() => {
    fetchQuranVerse()
    fetchImage()
  }, [])


  return (
    <main>
      <FullBackgroundImage imageUrl={image?.urls?.regular ?? "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"}  >
        <div className="flex items-center justify-center h-screen">
          <div className="md:max-w-[70%] backdrop-blur-lg backdrop-brightness-50 p-4 rounded-lg">
            {quranLoding ?
              <div className={`text-lg text-white`}>
                Loading...
              </div>
              :
              <QuranVerse
                arabicText={quranVerseData?.original ?? ""}
                translationText={quranVerseData?.translate ?? ""}
                reference={`${quranVerseData?.surah_name} ${quranVerseData?.surah_number}:${quranVerseData?.ayat_number}`}
              />
            }
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 mb-8  flex justify-center text-white">
          <button onClick={handleFetchQuranVerse} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Give me one ayat
          </button>
        </div>
        <div className="fixed bottom-0 right-0  flex justify-center px-1 text-white backdrop-blur-lg backdrop-brightness-50">
          <p>Photo by&nbsp;</p> <a href={`${image?.user?.links?.html}?utm_source=one_day_one_ayat&utm_medium=referral`}> {image?.user?.name} </a> <p>&nbsp;on&nbsp;</p> <a href="https://unsplash.com/?utm_source=one_day_one_ayat&utm_medium=referral">Unsplash</a>
        </div>

      </FullBackgroundImage>
    </main>
  )
}
