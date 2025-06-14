
import { useQuery } from '@tanstack/react-query';
import GithubRepoCard from './GithubRepoCard';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const fetchRepos = async (username: string): Promise<Repo[]> => {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=12`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const GithubProjects = ({ username }: { username: string }) => {
  const { data: repos, isLoading, isError } = useQuery({
    queryKey: ['githubRepos', username],
    queryFn: () => fetchRepos(username),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold text-primary/90 sm:text-4xl">From My GitHub</h2>
        <p className="mt-2 text-muted-foreground">My latest public repositories on GitHub.</p>
      </div>
      
      {isLoading && (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      )}

      {isError && (
        <Alert variant="destructive" className="max-w-md mx-auto">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Could not fetch projects from GitHub. Please try again later.
          </AlertDescription>
        </Alert>
      )}

      {repos && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map(repo => (
            <GithubRepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </section>
  );
};

export default GithubProjects;
