import FullBackgroundImage from "@/components/FullBackgroundImage";
import QuranVerse from "@/components/QuranVerse";

export default function Home() {

  const imageUrl = "https://images.unsplash.com/photo-1569834381156-7b735e41e57d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDE0OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDI3MTY0Mzl8&ixlib=rb-4.0.3&q=80&w=1080"
  // const imageUrl = "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

  // const arabicText = "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ"
  const arabicText = "الله أكبر"

  return (
    <main>
      <FullBackgroundImage imageUrl={imageUrl}  >
        <div className="flex items-center justify-center h-screen">
          <div className="max-w-md backdrop-blur-sm p-3 rounded-lg">
            <QuranVerse
              arabicText={arabicText}
              translationText="Allahu Akbar (Allah is the Greatest)"
              reference="Quran 2:255"
            />
          </div>
        </div>
      </FullBackgroundImage>
    </main>
  )
}
