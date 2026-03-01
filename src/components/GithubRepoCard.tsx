
import { Star, GitFork, ExternalLink } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { cn } from "@/lib/utils";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const GithubRepoCard = ({ repo }: { repo: Repo }) => {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.02}
      transitionSpeed={2000}
      className="h-full w-full group"
    >
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block h-full cyber-card relative flex flex-col transition-all duration-300 bg-base-bg/80 border border-primary-green/30 group-hover:border-primary-green p-6 font-mono">
        <div className="absolute top-0 inset-x-0 h-[100%] bg-gradient-to-b from-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="flex items-center justify-between text-primary-green text-lg sm:text-lg font-bold mb-3 z-10">
          <span className="truncate flex items-center gap-2">
            <span className="text-cyber-blue">&gt;</span>{repo.name}
          </span>
          <ExternalLink className="h-4 w-4 text-primary-green/50 group-hover:text-primary-green transition-colors flex-shrink-0" />
        </div>

        <p className="flex-1 text-text-muted text-sm sm:text-xs leading-relaxed z-10 line-clamp-3">
          {repo.description || "NO_DESCRIPTION_PROVIDED_IN_DATA_STREAM"}
        </p>

        <div className="mt-6 flex items-end justify-between text-xs text-primary-green/70 pt-4 border-t border-primary-green/10 z-10">
          <div className="flex items-center gap-2 border border-primary-green/30 bg-primary-green/10 px-2 py-1">
            <div className={`w-2 h-2 ${repo.language ? 'bg-cyber-blue animate-pulse' : 'bg-muted'}`}></div>
            <span className="truncate">{repo.language || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0 font-mono">
            <div className="flex items-center gap-1 group-hover:text-primary-green transition-colors">
              <Star className="h-3 w-3" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1 group-hover:text-primary-green transition-colors">
              <GitFork className="h-3 w-3" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
        </div>
      </a>
    </Tilt>
  );
};

export default GithubRepoCard;
