
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, GitFork, ExternalLink } from "lucide-react";

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
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="group h-full">
      <Card className="bg-card/50 border-border/20 h-full flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-primary text-xl">
            <span className="truncate">{repo.name}</span>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardTitle>
          <CardDescription className="h-10 text-card-foreground/80 overflow-hidden text-ellipsis">
            {repo.description || "No description available."}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex items-end justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className={`w-3 h-3 rounded-full ${repo.language ? 'bg-primary' : 'bg-muted'}`}></div>
            <span>{repo.language || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export default GithubRepoCard;
