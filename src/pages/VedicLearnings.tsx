
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FloatingLetters from "@/components/FloatingLetters";
import { BookOpen, Flower2, Sun } from "lucide-react";

const VedicLearnings = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950 dark:via-orange-950 dark:to-yellow-950 font-serif overflow-hidden">
      <FloatingLetters />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-amber-400/20 dark:text-amber-600/20">
        <Flower2 size={80} />
      </div>
      <div className="absolute bottom-10 right-10 text-amber-400/20 dark:text-amber-600/20">
        <Sun size={80} />
      </div>
      <div className="absolute top-1/3 right-20 text-amber-400/10 dark:text-amber-600/10">
        <BookOpen size={60} />
      </div>

      <Card className="relative z-10 w-full max-w-5xl bg-gradient-to-br from-amber-100/90 to-orange-100/90 dark:from-amber-900/90 dark:to-orange-900/90 backdrop-blur-lg border-2 border-amber-300/30 dark:border-amber-700/30 shadow-2xl shadow-amber-900/20 animate-fade-in-up">
        <CardHeader className="text-center border-b border-amber-300/30 dark:border-amber-700/30 bg-gradient-to-r from-amber-200/50 to-orange-200/50 dark:from-amber-800/50 dark:to-orange-800/50">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-amber-300/30 dark:bg-amber-700/30">
              <BookOpen className="h-12 w-12 text-amber-700 dark:text-amber-300" />
            </div>
          </div>
          <CardTitle className="text-5xl font-display font-bold text-amber-800 dark:text-amber-200 drop-shadow-lg">
            इंडिक शिक्षा
          </CardTitle>
          <p className="text-2xl font-serif text-amber-700 dark:text-amber-300 mt-2">
            Indic Education
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent rounded-full"></div>
          </div>
        </CardHeader>
        
        <CardContent className="p-8">
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-display font-bold text-amber-800 dark:text-amber-200 mb-4 flex items-center justify-center gap-3">
                <Flower2 className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                गुरु परम्परा
                <Flower2 className="h-8 w-8 text-amber-600 dark:text-amber-400" />
              </h3>
              <p className="text-xl text-amber-700 dark:text-amber-300 font-serif italic">
                Guru Parampara & Sacred Knowledge
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
              {/* Krishna Yajurveda */}
              <div className="relative p-8 bg-gradient-to-br from-amber-50/80 to-orange-50/80 dark:from-amber-950/80 dark:to-orange-950/80 rounded-2xl border-2 border-amber-300/40 dark:border-amber-700/40 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute -top-4 left-8">
                  <div className="bg-amber-600 dark:bg-amber-400 text-white dark:text-amber-900 px-4 py-2 rounded-full font-bold text-sm">
                    कृष्ण यजुर्वेद
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-2xl text-amber-800 dark:text-amber-200 mb-4 font-sanskrit">
                    Krishna Yajurveda
                  </h4>
                  <div className="space-y-3 text-lg">
                    <div className="flex items-start gap-3">
                      <Sun className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-amber-800 dark:text-amber-200">
                          Mahamahopadhyaya Sheshadrinatha Sastrigal
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sun className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-amber-800 dark:text-amber-200">
                          Veda Ratnam Dr Ramesh Dravid Ghanapathi (Kashi)
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-amber-100/50 dark:bg-amber-900/50 rounded-lg border border-amber-300/30 dark:border-amber-700/30">
                      <p className="text-amber-700 dark:text-amber-300 font-serif">
                        <span className="font-bold">Institution:</span> Shankara Shanti Nilayam Patashala, Kalady, Kerala
                      </p>
                      <p className="text-amber-600 dark:text-amber-400 text-sm mt-1 italic">
                        (Online post-Covid adaptation)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sanskrit */}
              <div className="relative p-8 bg-gradient-to-br from-orange-50/80 to-red-50/80 dark:from-orange-950/80 dark:to-red-950/80 rounded-2xl border-2 border-orange-300/40 dark:border-orange-700/40 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute -top-4 left-8">
                  <div className="bg-orange-600 dark:bg-orange-400 text-white dark:text-orange-900 px-4 py-2 rounded-full font-bold text-sm">
                    संस्कृत
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold text-2xl text-orange-800 dark:text-orange-200 mb-4 font-sanskrit">
                    Sanskrit
                  </h4>
                  <div className="space-y-3 text-lg">
                    <div className="flex items-start gap-3">
                      <Flower2 className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-orange-800 dark:text-orange-200">
                          Swami Guhatmananda Saraswati
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Flower2 className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-orange-800 dark:text-orange-200">
                          Brahmaleen Swami Omakarananda Brahmendra Saraswati Avadhoota Swami
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer quote */}
            <div className="text-center mt-12 pt-8 border-t border-amber-300/30 dark:border-amber-700/30">
              <p className="text-2xl font-sanskrit text-amber-700 dark:text-amber-300 mb-2">
                गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः
              </p>
              <p className="text-lg text-amber-600 dark:text-amber-400 italic font-serif">
                "The Guru is Brahma, the Guru is Vishnu, the Guru is Maheshvara"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VedicLearnings;
