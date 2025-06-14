
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FloatingLetters from "@/components/FloatingLetters";
import { BookOpen, Flower2, Sun } from "lucide-react";
import { useEffect } from "react";

const VedicLearnings = () => {
  useEffect(() => {
    // Make navbar transparent for this page
    const navbar = document.querySelector('header');
    if (navbar) {
      navbar.style.backgroundColor = 'transparent';
      navbar.style.backdropFilter = 'none';
      navbar.style.borderBottom = 'none';
    }
    
    // Cleanup on unmount
    return () => {
      if (navbar) {
        navbar.style.backgroundColor = '';
        navbar.style.backdropFilter = '';
        navbar.style.borderBottom = '';
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 font-serif overflow-auto">
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

      <div className="relative z-10 w-full min-h-screen flex items-center justify-center p-4 sm:p-8 pt-20">
        <Card className="w-full max-w-5xl bg-gradient-to-br from-amber-100/90 to-orange-100/90 backdrop-blur-lg border-2 border-amber-300/30 shadow-2xl shadow-amber-900/20 animate-fade-in-up">
          <CardHeader className="text-center border-b border-amber-300/30 bg-gradient-to-r from-amber-200/50 to-orange-200/50">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-amber-300/30">
                <BookOpen className="h-12 w-12 text-amber-700" />
              </div>
            </div>
            <CardTitle className="text-5xl font-display font-bold text-amber-800 drop-shadow-lg">
              इंडिक शिक्षा
            </CardTitle>
            <p className="text-2xl font-serif text-amber-700 mt-2">
              Indic Education
            </p>
            <div className="flex justify-center mt-4">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent rounded-full"></div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="space-y-8">
              <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
                {/* Krishna Yajurveda */}
                <div className="relative p-8 bg-gradient-to-br from-amber-50/80 to-orange-50/80 rounded-2xl border-2 border-amber-300/40 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute -top-4 left-8">
                    <div className="bg-amber-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                      कृष्ण यजुर्वेद
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-2xl text-amber-800 mb-4 font-sanskrit">
                      Krishna Yajurveda
                    </h4>
                    <div className="space-y-3 text-lg">
                      <div className="flex items-start gap-3">
                        <Sun className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-amber-800">
                            Mahamahopadhyaya Sheshadrinatha Sastrigal
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Sun className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-amber-800">
                            Veda Ratnam Dr Ramesh Dravid Ghanapathi (Kashi)
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-amber-100/50 rounded-lg border border-amber-300/30">
                        <p className="text-amber-700 font-serif">
                          <span className="font-bold">Institution:</span> Shankara Shanti Nilayam Patashala, Kalady, Kerala
                        </p>
                        <p className="text-amber-600 text-sm mt-1 italic">
                          (Online post-Covid adaptation)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sanskrit */}
                <div className="relative p-8 bg-gradient-to-br from-orange-50/80 to-red-50/80 rounded-2xl border-2 border-orange-300/40 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute -top-4 left-8">
                    <div className="bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                      संस्कृत
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-2xl text-orange-800 mb-4 font-sanskrit">
                      Sanskrit
                    </h4>
                    <div className="space-y-3 text-lg">
                      <div className="flex items-start gap-3">
                        <Flower2 className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-orange-800">
                            Swami Guhatmananda Saraswati
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Flower2 className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-orange-800">
                            Brahmaleen Swami Omakarananda Brahmendra Saraswati Avadhoota Swami
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer quote */}
              <div className="text-center mt-12 pt-8 border-t border-amber-300/30">
                <p className="text-2xl font-sanskrit text-amber-700 mb-2">
                  गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः
                </p>
                <p className="text-lg text-amber-600 italic font-serif">
                  "The Guru is Brahma, the Guru is Vishnu, the Guru is Maheshvara"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VedicLearnings;
