
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FloatingLetters from "@/components/FloatingLetters";

const VedicLearnings = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center p-4 sm:p-8 bg-book-bg font-serif text-book-text overflow-hidden">
      <FloatingLetters />

      <Card className="relative z-10 w-full max-w-4xl bg-book-card/80 backdrop-blur-sm border-book-accent/20 text-book-text shadow-2xl shadow-black/50 animate-fade-in-up transition-all duration-500 hover:shadow-primary/20">
        <CardHeader>
          <CardTitle className="text-4xl font-display font-bold text-center text-book-accent drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            Indic Education
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4">
          <div>
            <h3 className="text-3xl font-display font-bold text-center text-book-accent/90 mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              Gurus & Lineage
            </h3>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-left">
              <div className="p-4 bg-black/20 rounded-lg border border-book-accent/10 backdrop-blur-sm">
                <h4 className="font-bold text-xl text-book-accent/90 mb-2">Krishna Yajurveda</h4>
                <p className="text-book-muted">
                  From <strong>Mahamahopadhyaya Sheshadrinatha Sastrigal</strong> and <strong>Veda Ratnam Dr Ramesh Dravid Ghanapathi (Kashi)</strong> at Shankara Shanti Nilayam Patashala, Kalady, Kerala (Online post-covid).
                </p>
              </div>
              <div className="p-4 bg-black/20 rounded-lg border border-book-accent/10 backdrop-blur-sm">
                <h4 className="font-bold text-xl text-book-accent/90 mb-2">Sanskrit</h4>
                <p className="text-book-muted">
                  From <strong>Swami Guhatmananda Saraswati</strong> and <strong>Brahmaleen Swami Omakarananda Brahmendra Saraswati Avadhoota Swami</strong>.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VedicLearnings;
