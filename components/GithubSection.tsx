"use client";

import { useEffect, useMemo, useState } from "react";
import { Github, Star, GitFork, Users, BookOpen, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/data/content";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

type GitHubUser = {
  public_repos: number;
  followers: number;
};

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${profile.githubUser}`),
      fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=100`),
    ])
      .then(async ([userResponse, reposResponse]) => {
        if (!userResponse.ok || !reposResponse.ok) throw new Error("GitHub API request failed");
        return Promise.all([userResponse.json() as Promise<GitHubUser>, reposResponse.json() as Promise<Repo[]>]);
      })
      .then(([userData, reposData]) => {
        setUser(userData);
        setRepos(reposData);
      })
      .catch(() => setError(true));
  }, []);

  const stats = useMemo(() => {
    if (!repos) return null;
    const languages = new Map<string, number>();
    repos.forEach((repo) => {
      if (repo.language) languages.set(repo.language, (languages.get(repo.language) ?? 0) + 1);
    });
    return {
      stars: repos.reduce((total, repo) => total + repo.stargazers_count, 0),
      forks: repos.reduce((total, repo) => total + repo.forks_count, 0),
      languages: [...languages.entries()].sort(([, a], [, b]) => b - a).slice(0, 5),
    };
  }, [repos]);

  return (
    <section className="relative py-28 px-6 bg-panel/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="GitHub"
          title="Open-source activity"
          description="My latest repositories, automatically updated from GitHub."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg text-chalk">GitHub statistics</h3>
              <p className="mt-1 text-sm text-mist">Live public data from GitHub.</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: "Repositories", value: user?.public_repos, icon: BookOpen },
                  { label: "Followers", value: user?.followers, icon: Users },
                  { label: "Total stars", value: stats?.stars, icon: Star },
                  { label: "Total forks", value: stats?.forks, icon: GitFork },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-xl border border-line bg-white/[0.03] p-4">
                    <Icon size={16} className="text-signal" />
                    <p className="mt-3 font-display text-2xl text-chalk">{value ?? "—"}</p>
                    <p className="mt-1 text-xs text-mist">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 glass rounded-2xl p-6">
              <div className="flex items-center gap-2">
                <Code2 size={17} className="text-signal" />
                <h3 className="font-display text-lg text-chalk">Most used languages</h3>
              </div>
              {stats?.languages.length ? (
                <div className="mt-5 flex flex-col gap-3">
                  {stats.languages.map(([language, count]) => (
                    <div key={language} className="flex items-center justify-between text-sm">
                      <span className="text-chalk">{language}</span>
                      <span className="text-mist font-mono">{count} {count === 1 ? "repository" : "repositories"}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-5 text-sm text-mist">{error ? "Statistics are unavailable right now." : "Loading language statistics..."}</p>
              )}
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {error && (
              <p className="text-sm text-mist col-span-2">
                Unable to load repositories right now—visit{" "}
                <a href={profile.github} className="text-signal underline" target="_blank" rel="noreferrer">
                  github.com/{profile.githubUser}
                </a>
                .
              </p>
            )}
            {!repos && !error &&
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="glass rounded-2xl p-5 h-32 animate-pulse" />
              ))}
            {repos?.slice(0, 4).map((r, i) => (
              <Reveal key={r.id} delay={i * 0.06}>
                <a
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="block glass rounded-2xl p-5 h-full hover:border-signal/40 transition-colors"
                >
                  <div className="flex items-center gap-2 text-chalk font-medium text-sm">
                    <Github size={14} className="text-signal" /> {r.name}
                  </div>
                  <p className="text-xs text-mist mt-2 line-clamp-2 leading-relaxed">
                    {r.description || "No description."}
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-[11px] text-mist font-mono">
                    {r.language && <span>{r.language}</span>}
                    <span className="flex items-center gap-1">
                      <Star size={11} /> {r.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={11} /> {r.forks_count}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
