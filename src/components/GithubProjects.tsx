
import { useQuery } from '@tanstack/react-query';
import GithubRepoCard from './GithubRepoCard';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Octokit } from '@octokit/rest';

// --- IMPORTANT SECURITY WARNING ---
// Storing Personal Access Tokens in client-side code is NOT secure and should be avoided in production.
// This token can be used to access all your repositories, including private ones.
// For a production app, this should be handled by a secure backend.
//
// To generate a token for this portfolio:
// 1. Go to https://github.com/settings/tokens/new
// 2. Give it a name (e.g., "Portfolio Website").
// 3. Set an expiration date.
// 4. Under "Repository access", select "All repositories" or "Only select repositories".
// 5. Under "Permissions", go to "Repository permissions" and grant "Contents: Read-only". This is the minimum required permission.
// 6. Click "Generate token" and copy the token below.
const GITHUB_ACCESS_TOKEN = 'YOUR_PERSONAL_ACCESS_TOKEN_HERE';

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
  const isTokenProvided = GITHUB_ACCESS_TOKEN && GITHUB_ACCESS_TOKEN !== 'YOUR_PERSONAL_ACCESS_TOKEN_HERE';

  if (isTokenProvided) {
    try {
      const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });
      const { data } = await octokit.repos.listForUser({
        username,
        type: 'owner',
        sort: 'pushed',
        per_page: 12,
      });
      return data as Repo[];
    } catch (error) {
      console.error("Failed to fetch repos using Personal Access Token. It might be invalid or expired. Falling back to public API.", error);
    }
  } else {
     console.warn(
      'GitHub Personal Access Token is not configured. Fetching public repositories only. To see private repos, add a token to `src/components/GithubProjects.tsx`.'
    );
  }

  // Public fetch (also serves as fallback for authenticated requests that fail)
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
        <p className="mt-2 text-muted-foreground">My latest repositories on GitHub. Private repos are shown if a token is provided.</p>
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

      {repos && repos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map(repo => (
            <GithubRepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
      
      {repos && repos.length === 0 && !isLoading && !isError && (
         <Alert className="max-w-md mx-auto">
          <AlertTitle>No Repositories Found</AlertTitle>
          <AlertDescription>
            No repositories were found. If you've added a token to view private repos, ensure it's valid and has the correct permissions.
          </AlertDescription>
        </Alert>
      )}
    </section>
  );
};

export default GithubProjects;
