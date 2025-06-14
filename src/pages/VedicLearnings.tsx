
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FloatingLetters from "@/components/FloatingLetters";

const learningsData = [
  {
    sanskrit: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्।",
    translation: "We meditate on the glory of the Creator; Who has created the Universe; Who is worthy of Worship; Who is the embodiment of Knowledge and Light; Who is the remover of all Sin and Ignorance; May He enlighten our Intellect.",
    source: "Rigveda 3.62.10"
  },
  {
    sanskrit: "सत्यमेव जयते नानृतम्।",
    translation: "Truth alone triumphs, not falsehood.",
    source: "Mundaka Upanishad 3.1.6"
  },
  {
    sanskrit: "अहिंसा परमो धर्मः।",
    translation: "Non-violence is the highest virtue.",
    source: "Mahabharata"
  },
  {
    sanskrit: "वसुधैव कुटुम्बकम्।",
    translation: "The world is one family.",
    source: "Maha Upanishad 6.71-75"
  },
];


const VedicLearnings = () => {
  return (
    <div className="relative w-full min-h-full flex items-center justify-center p-4 sm:p-8 bg-book-bg font-serif text-book-text overflow-hidden">
      <FloatingLetters />

      <Card className="relative z-10 w-full max-w-4xl bg-book-card/80 backdrop-blur-sm border-book-accent/20 text-book-text shadow-2xl shadow-black/50 animate-fade-in-up transition-all duration-500 hover:shadow-primary/20">
        <CardHeader>
          <CardTitle className="text-4xl font-display font-bold text-center text-book-accent drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            Vedic Learnings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 text-center mt-4">
          {learningsData.map((item, index) => (
            <div key={index} className="border-b border-book-accent/10 pb-8 last:border-b-0 last:pb-0">
              <p className="text-2xl font-sanskrit text-book-accent/90 leading-loose">
                {item.sanskrit}
              </p>
              <p className="mt-4 text-lg text-book-muted italic max-w-2xl mx-auto">
                "{item.translation}"
              </p>
              <p className="mt-3 text-sm text-book-muted/70">
                - {item.source}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default VedicLearnings;
