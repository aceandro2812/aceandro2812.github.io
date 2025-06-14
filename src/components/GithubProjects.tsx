
import { useQuery } from '@tanstack/react-query';
import { Loader2, Github, Star, GitFork, ExternalLink, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

// Using GitHub API with authentication for higher rate limits
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

// Debug: Log environment variables (remove in production)
console.log('Environment Variables:', {
  hasToken: !!import.meta.env.VITE_GITHUB_TOKEN,
  tokenLength: import.meta.env.VITE_GITHUB_TOKEN?.length,
  tokenStart: import.meta.env.VITE_GITHUB_TOKEN?.substring(0, 4) + '...',
  tokenEnd: '...' + import.meta.env.VITE_GITHUB_TOKEN?.substring(import.meta.env.VITE_GITHUB_TOKEN?.length - 4)
});

interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
  topics: string[];
  private: boolean;
  fork: boolean;
}

const fetchRepos = async (username: string): Promise<GithubRepo[]> => {
  console.log('Starting to fetch repos for user:', username);
  console.log('Using token:', GITHUB_TOKEN ? 'Yes (length: ' + GITHUB_TOKEN.length + ')' : 'No');

  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    // Add authorization header if token is available
    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    } else {
      console.warn('No GitHub token provided. Using unauthenticated requests with rate limiting.');
    }

    const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=6&type=owner`;
    console.log('Making request to:', apiUrl);
    console.log('Headers:', headers);

    const response = await fetch(apiUrl, { headers });
    console.log('Response status:', response.status);

    // Log rate limit headers
    const rateLimitRemaining = response.headers.get('x-ratelimit-remaining');
    const rateLimitTotal = response.headers.get('x-ratelimit-limit');
    const rateLimitReset = response.headers.get('x-ratelimit-reset');
    
    console.log('Rate limits:', {
      remaining: rateLimitRemaining,
      limit: rateLimitTotal,
      reset: rateLimitReset ? new Date(parseInt(rateLimitReset) * 1000).toISOString() : 'N/A'
    });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
        console.error('GitHub API Error Response:', errorData);
      } catch (e) {
        console.error('Failed to parse error response:', e);
        errorData = { message: 'No error details available' };
      }
      
      const errorMessage = `GitHub API error: ${response.status} ${response.statusText}. ${errorData?.message || ''}`;
      console.error(errorMessage, {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        errorData
      });
      
      throw new Error(errorMessage);
    }

    const repos = await response.json();
    console.log(`Fetched ${repos.length} repositories`);
    
    // Filter out forked repos and sort by stars
    const filteredRepos = repos
      .filter((repo: GithubRepo) => !repo.fork)
      .sort((a: GithubRepo, b: GithubRepo) => b.stargazers_count - a.stargazers_count);
    
    console.log(`After filtering, ${filteredRepos.length} repositories remain`);
    return filteredRepos;
    
  } catch (error) {
    console.error('Error in fetchRepos:', {
      error,
      errorString: String(error),
      stack: error instanceof Error ? error.stack : 'No stack trace',
      timestamp: new Date().toISOString()
    });
    
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'Failed to fetch GitHub repositories. Please try again later.'
    );
  }
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
};

interface GithubProjectsProps {
  username: string;
  className?: string;
}

const GithubProjects = ({ username = 'aceandro2812', className }: GithubProjectsProps) => {
  // Ensure username is properly set
  const githubUsername = username || 'aceandro2812';
  console.log('GithubProjects - Username:', githubUsername);
  const { 
    data = [], 
    isLoading, 
    isError, 
    error,
    isFetching
  } = useQuery({
    queryKey: ['githubRepos', githubUsername],
    queryFn: () => fetchRepos(githubUsername),
    retry: 1,
    staleTime: 1000 * 60 * 30, // 30 minutes
    refetchOnWindowFocus: false
  });
  
  const repos = data as GithubRepo[];

  if (isLoading || isFetching) {
    return (
      <div className={cn('flex items-center justify-center py-12', className)}>
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-muted-foreground">
            {isFetching ? 'Refreshing...' : 'Loading GitHub projects...'}
          </p>
        </div>
      </div>
    );
  }

  if (isError) {
    console.error('GitHub Projects Error State:', {
      error: error?.message,
      username,
      hasToken: !!import.meta.env.VITE_GITHUB_TOKEN,
      timestamp: new Date().toISOString()
    });

    return (
      <div className={cn('py-12', className)}>
        <Alert variant="destructive">
          <AlertTitle>Error Loading Projects</AlertTitle>
          <AlertDescription className="space-y-2">
            <p>Failed to load GitHub repositories.</p>
            <p className="text-sm opacity-75">
              Error: {error?.message || 'Unknown error occurred'}
            </p>
            <p className="text-xs opacity-50">
              Please check the browser console for more details.
            </p>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!repos || repos.length === 0) {
    return (
      <div className={cn("text-center py-12", className)}>
        <p className="text-muted-foreground">No public repositories found.</p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <Card key={repo.id} className="group flex flex-col h-full overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg font-semibold leading-tight line-clamp-2">
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {repo.name}
                  </a>
                </CardTitle>
                <div className="flex items-center space-x-1">
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  {repo.homepage && (
                    <a 
                      href={repo.homepage.startsWith('http') ? repo.homepage : `https://${repo.homepage}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors ml-1"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-1">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  <span>{repo.stargazers_count.toLocaleString()}</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <GitFork className="h-3 w-3 mr-1" />
                  <span>{repo.forks_count.toLocaleString()}</span>
                </div>
                {repo.language && (
                  <Badge variant="outline" className="text-xs h-5">
                    {repo.language}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-1 pb-4">
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                {repo.description || 'No description provided.'}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {repo.topics?.slice(0, 3).map((topic) => (
                  <Badge 
                    key={topic} 
                    variant="secondary"
                    className="text-xs font-medium"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-0 mt-auto">
              <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
                <span>Updated {formatDate(repo.updated_at)}</span>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center"
                >
                  View on GitHub
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button 
          variant="outline" 
          onClick={() => window.open(`https://github.com/${username}?tab=repositories`, '_blank')}
          className="mt-4"
        >
          <Github className="mr-2 h-4 w-4" />
          View All Repositories
        </Button>
      </div>
    </div>
  );
};

export default GithubProjects;
