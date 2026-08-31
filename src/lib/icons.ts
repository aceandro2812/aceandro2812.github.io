import type { ComponentType } from 'react';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiTailwindcss,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
  SiLangchain,
  SiDocker,
  SiAmazon,
  SiLinux,
  SiGit,
  SiGithub,
  SiPostman,
  SiStreamlit,
  SiReact,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import {
  Activity,
  BrainCircuit,
  Database,
  MonitorSmartphone,
  Server,
  Sparkles,
  TerminalSquare,
  Workflow,
} from 'lucide-react';

type IconComponent = ComponentType<{ className?: string; style?: React.CSSProperties }>;

/**
 * Explicit registry instead of `import * as SiIcons from 'react-icons/si'`.
 *
 * The wildcard import defeats tree-shaking and pulled several thousand unused
 * icon components (multiple MB) into the production bundle. Listing only what
 * the config references keeps the payload proportional to what we render.
 */
export const iconRegistry: Record<string, IconComponent> = {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiTailwindcss,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
  SiLangchain,
  SiDocker,
  SiAmazon,
  SiLinux,
  SiGit,
  SiGithub,
  SiPostman,
  SiStreamlit,
  SiReact,
  FaJava,
  Activity,
  BrainCircuit,
  Database,
  MonitorSmartphone,
  Server,
  Sparkles,
  TerminalSquare,
  Workflow,
};

export const getIcon = (name: string): IconComponent => iconRegistry[name] ?? SiReact;
