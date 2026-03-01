import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FloatingLetters from "@/components/FloatingLetters";
import { BookOpen, Terminal, Code } from "lucide-react";
import { useEffect } from "react";
import { ScrambleText } from "@/components/ScrambleText";
import { motion } from "framer-motion";

const VedicLearnings = () => {
  useEffect(() => {
    // Custom styling for navbar on this page is removed, we want to keep the dark base theme
    // but we can tint the global background a bit
    document.body.style.backgroundColor = '#050200'; // Very dark amber tint
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="min-h-screen font-mono text-amber-500 overflow-hidden relative pb-32">
      {/* Dark Amber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.1),rgba(0,0,0,0))] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-center justify-center p-4 sm:p-8 pt-24">

        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full border border-amber-500/30 flex items-center justify-center bg-amber-500/5 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <BookOpen className="h-8 w-8 text-amber-500 animate-pulse" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)] mb-2">
            <ScrambleText text="ANCIENT_ALGORITHMS" />
          </h1>
          <p className="text-amber-500/70 text-sm tracking-widest max-w-2xl mx-auto uppercase">
            [DECODING_VEDIC_SOURCE_CODE...] // <span className="text-orange-500">INDIC_EDUCATION_MATRIX</span>
          </p>
        </div>

        <div className="w-full max-w-5xl space-y-12">
          {/* Krishna Yajurveda Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-1 bg-gradient-to-b from-amber-500/20 to-transparent clip-path-cyber-card"
          >
            <div className="absolute top-0 left-0 w-8 h-px bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
            <div className="absolute top-0 left-0 w-px h-8 bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
            <div className="bg-black/60 backdrop-blur-md p-8 border border-amber-500/10 h-full w-full relative">
              <div className="flex flex-col md:flex-row gap-8 items-start">

                <div className="flex-1 w-full">
                  <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-bold tracking-widest mb-6">
                    <Terminal className="inline w-3 h-3 mr-2" />
                    FILE: KRISHNA_YAJURVEDA.ved
                  </div>

                  <h3 className="text-2xl font-bold mb-6 text-amber-400">
                    <ScrambleText text="Krishna Yajurveda" />
                  </h3>

                  <div className="space-y-4 text-sm text-amber-500/80">
                    <p className="flex items-start gap-2 border-l-2 border-amber-500/30 pl-4 py-1 hover:border-amber-400 transition-colors">
                      <Code className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                      Mahamahopadhyaya Sheshadrinatha Sastrigal
                    </p>
                    <p className="flex items-start gap-2 border-l-2 border-amber-500/30 pl-4 py-1 hover:border-amber-400 transition-colors">
                      <Code className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                      Veda Ratnam Dr Ramesh Dravid Ghanapathi (Kashi)
                    </p>
                    <p className="flex items-start gap-2 border-l-2 border-amber-500/30 pl-4 py-1 hover:border-amber-400 transition-colors">
                      <Code className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                      Rajesh Iyer
                    </p>

                    <div className="mt-6 p-4 bg-amber-500/5 border border-amber-500/20 rounded">
                      <p className="text-amber-400">
                        <span className="font-bold opacity-70">LOCATION_NODE:</span> Shankara Shanti Nilayam Patashala, Kalady, Kerala
                      </p>
                      <p className="text-amber-500/50 text-xs mt-2 italic">
                        [TRANSMISSION: Online post-Covid adaptation]
                      </p>
                    </div>
                  </div>
                </div>

                {/* Holographic Image Representation */}
                <div className="w-full md:w-64 shrink-0 relative group">
                  <div className="absolute inset-0 bg-amber-500/20 blur-xl group-hover:bg-amber-400/30 transition-all z-0" />
                  <div className="relative z-10 w-full aspect-square border-2 border-amber-500/30 bg-black/50 p-2 transform rotate-1 hover:rotate-0 transition-transform">
                    <img
                      src="./brahm.png"
                      alt="Ancient wisdom encrypted"
                      className="w-full h-full object-cover filter contrast-[1.5] brightness-75 sepia hue-rotate-[15deg] saturate-200 mix-blend-screen opacity-80"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(245,158,11,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />
                  </div>
                  <div className="text-center mt-3 text-xs text-amber-600 tracking-widest">
                    [VISUAL_DATA_DECRYPTED]
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Sanskrit Grammar Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-1 bg-gradient-to-b from-orange-500/20 to-transparent clip-path-cyber-card"
          >
            <div className="absolute top-0 right-0 w-8 h-px bg-orange-500 shadow-[0_0_10px_#f97316]" />
            <div className="absolute top-0 right-0 w-px h-8 bg-orange-500 shadow-[0_0_10px_#f97316]" />
            <div className="bg-black/60 backdrop-blur-md p-8 border border-orange-500/10 h-full w-full relative">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-start">

                <div className="flex-1 w-full text-right">
                  <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold tracking-widest mb-6">
                    <Terminal className="inline w-3 h-3 mr-2" />
                    FILE: SANSKRIT_GRAMMAR.sys
                  </div>

                  <h3 className="text-2xl font-bold mb-6 text-orange-400">
                    <ScrambleText text="Sanskrit Language" />
                  </h3>

                  <div className="space-y-4 text-sm text-orange-500/80 flex flex-col items-end">
                    <p className="flex items-start justify-end gap-2 border-r-2 border-orange-500/30 pr-4 py-1 hover:border-orange-400 transition-colors w-full text-right">
                      Swami Guhatmananda Saraswati
                      <Code className="w-4 h-4 shrink-0 mt-0.5 text-orange-600" />
                    </p>
                    <p className="flex items-start justify-end gap-2 border-r-2 border-orange-500/30 pr-4 py-1 hover:border-orange-400 transition-colors w-full text-right">
                      Brahmaleen Swami Omakarananda Brahmendra Saraswati
                      <Code className="w-4 h-4 shrink-0 mt-0.5 text-orange-600" />
                    </p>
                    <p className="flex items-start justify-end gap-2 border-r-2 border-orange-500/30 pr-4 py-1 hover:border-orange-400 transition-colors w-full text-right">
                      Rajesh Iyer
                      <Code className="w-4 h-4 shrink-0 mt-0.5 text-orange-600" />
                    </p>
                  </div>
                </div>

                {/* Holographic Image Representation */}
                <div className="w-full md:w-64 shrink-0 relative group">
                  <div className="absolute inset-0 bg-orange-500/20 blur-xl group-hover:bg-orange-400/30 transition-all z-0" />
                  <div className="relative z-10 w-full aspect-square border-2 border-orange-500/30 bg-black/50 p-2 transform -rotate-1 hover:rotate-0 transition-transform">
                    <img
                      src="./sans.png"
                      alt="Sanskrit encrypted"
                      className="w-full h-full object-cover filter contrast-[1.5] brightness-75 sepia hue-rotate-[-10deg] saturate-200 mix-blend-screen opacity-80"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(249,115,22,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />
                  </div>
                  <div className="text-center mt-3 text-xs text-orange-600 tracking-widest">
                    [LITERAL_MAPPING_EXTRACTED]
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Footer quote */}
        <div className="text-center mt-20 pt-8 border-t border-amber-500/20 max-w-3xl w-full">
          <p className="text-xl md:text-2xl text-amber-500 mb-2 font-bold drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
            <ScrambleText text="गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः" />
          </p>
          <p className="text-sm text-amber-600/60 uppercase tracking-widest mt-4">
            [TRANSLATION: "The Guru is Brahma, the Guru is Vishnu, the Guru is Maheshvara"]
          </p>
        </div>

      </div>
    </div>
  );
};

export default VedicLearnings;
