'use client';
import FullBackgroundImage from "@/components/FullBackgroundImage";
import QuranVerse from "@/components/QuranVerse";
import useImage from "@/hooks/useImage";
import useQuranVerse from "@/hooks/useQuranVerse";
import { useEffect } from "react";

export default function Home() {

  const imageUrl = "https://images.unsplash.com/photo-1569834381156-7b735e41e57d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDE0OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDI3MTY0Mzl8&ixlib=rb-4.0.3&q=80&w=1080"
  // const imageUrl = "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

  // const arabicText = "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ"
  const arabicText = "الله أكبر"
  const translationText = "Allahu Akbar (Allah is the Greatest)"

  const { quranVerseData, loading : quranLoding, fetchQuranVerse } = useQuranVerse();
  const { image, loading: imageLoading, fetchImage } = useImage();

  if(!imageLoading){
    console.log(image);
    
  }

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
      <FullBackgroundImage imageUrl={image?.urls?.regular ?? ""}  >
        <div className="flex items-center justify-center h-screen">
          <div className="max-w-md backdrop-blur-sm p-3 rounded-lg">
            <QuranVerse
              arabicText={quranVerseData?.original ?? ""}
              translationText={quranVerseData?.translate ?? ""}
              reference={`${quranVerseData?.surah_name} ${quranVerseData?.surah_number}:${quranVerseData?.ayat_number}`}
            />
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 mb-8  flex justify-center text-white">
          <button onClick={handleFetchQuranVerse} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            give me a ayat
          </button>
        </div>

      </FullBackgroundImage>
    </main>
  )
}