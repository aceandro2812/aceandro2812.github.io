import { useQuery } from '@tanstack/react-query';
import { Github, Star, GitFork, ExternalLink, AlertTriangle, RefreshCw } from 'lucide-react';
import { Panel, Chip } from './primitives';
import { cn } from '@/lib/utils';

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
  topics?: string[];
  fork: boolean;
}

/**
 * Fetches public repositories.
 *
 * NOTE: this deliberately makes an unauthenticated request. The previous
 * implementation shipped a hardcoded personal access token in the client
 * bundle, which published the credential to anyone who opened devtools. Any
 * token in a static site is a public token — the only correct fix is to not
 * have one. Unauthenticated GitHub calls allow 60 requests/hour per IP, which
 * is ample for a portfolio, and the result is cached for 30 minutes.
 */
const fetchRepos = async (username: string): Promise<GithubRepo[]> => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=12&type=owner`,
    { headers: { Accept: 'application/vnd.github+json' } }
  );

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error('GitHub rate limit reached. Try again in a few minutes.');
    }
    throw new Error(`GitHub API responded with ${response.status}.`);
  }

  const repos: GithubRepo[] = await response.json();
  return repos.filter((repo) => !repo.fork).slice(0, 6);
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'short', day: 'numeric' }).format(
    new Date(value)
  );

const SkeletonCard = () => (
  <Panel className="h-48 p-5">
    <div className="h-4 w-2/3 animate-pulse bg-primary-green/10" />
    <div className="mt-4 space-y-2">
      <div className="h-3 w-full animate-pulse bg-text-muted/10" />
      <div className="h-3 w-5/6 animate-pulse bg-text-muted/10" />
      <div className="h-3 w-3/6 animate-pulse bg-text-muted/10" />
    </div>
  </Panel>
);

interface Props {
  username: string;
  className?: string;
}

const GithubProjects = ({ username, className }: Props) => {
  const { data, isPending, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['githubRepos', username],
    queryFn: () => fetchRepos(username),
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  if (isPending) {
    return (
      <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-3', className)}>
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <Panel className={cn('flex flex-col items-start gap-3 p-6', className)}>
        <span className="inline-flex items-center gap-2 text-fluid-sm font-bold uppercase tracking-wider text-funky-accent">
          <AlertTriangle className="h-4 w-4" aria-hidden="true" />
          Could not load repositories
        </span>
        <p className="font-sans text-fluid-sm text-text-muted">
          {(error as Error)?.message ?? 'Unknown error.'} You can still browse everything directly
          on GitHub.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => refetch()}
            disabled={isFetching}
            className="inline-flex h-10 items-center gap-2 border border-primary-green/50 px-4 text-fluid-xs font-bold uppercase tracking-wider text-primary-green transition-colors hover:bg-primary-green/10 disabled:opacity-50"
          >
            <RefreshCw className={cn('h-3.5 w-3.5', isFetching && 'animate-spin')} aria-hidden="true" />
            Retry
          </button>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 border border-text-muted/30 px-4 text-fluid-xs font-bold uppercase tracking-wider text-text-muted transition-colors hover:text-text-base"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            Open GitHub
          </a>
        </div>
      </Panel>
    );
  }

  if (!data.length) {
    return (
      <p className={cn('py-8 text-center font-sans text-fluid-sm text-text-muted', className)}>
        No public repositories to show right now.
      </p>
    );
  }

  return (
    <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {data.map((repo) => (
        <Panel key={repo.id} interactive className="flex h-full flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="min-w-0 font-display text-fluid-base font-bold uppercase tracking-wide text-text-base">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block truncate transition-colors hover:text-primary-green"
              >
                {repo.name}
              </a>
            </h3>
            <div className="flex shrink-0 gap-1.5">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${repo.name} on GitHub`}
                className="text-text-muted transition-colors hover:text-primary-green"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage.startsWith('http') ? repo.homepage : `https://${repo.homepage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${repo.name} live site`}
                  className="text-text-muted transition-colors hover:text-cyber-blue"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <p className="mt-3 flex-1 font-sans text-fluid-sm leading-relaxed text-text-muted">
            {repo.description ?? 'No description provided.'}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {repo.language && <Chip tone="blue">{repo.language}</Chip>}
            <span className="inline-flex items-center gap-1 text-[11px] text-text-muted">
              <Star className="h-3 w-3" aria-hidden="true" />
              {repo.stargazers_count}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-text-muted">
              <GitFork className="h-3 w-3" aria-hidden="true" />
              {repo.forks_count}
            </span>
          </div>

          <p className="mt-3 border-t border-primary-green/10 pt-3 text-[11px] text-text-muted/60">
            Updated {formatDate(repo.updated_at)}
          </p>
        </Panel>
      ))}
    </div>
  );
};

export default GithubProjects;
