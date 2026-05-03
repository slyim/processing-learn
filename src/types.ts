// Shared type definitions for the Processing.js Studio.

export interface Theme {
  bg: string;
  panel: string;
  panelAlt: string;
  panelHover: string;
  border: string;
  borderLight: string;
  text: string;
  textMuted: string;
  textDim: string;
  accent: string;
  accentHover: string;
  accentDim: string;
  accentBorder: string;
  accentText: string;
  editorBg: string;
  editorGutter: string;
  lineNum: string;
  tabActive: string;
  tabInactive: string;
  tabHover: string;
  sk: string;
  sb: string;
  ss: string;
  sn: string;
  sc: string;
  sf: string;
  so: string;
  sd: string;
  runBg: string;
  runText: string;
  resetBg: string;
  resetBorder: string;
  resetText: string;
  badge: string;
  canvasBg: string;
  canvasFrame: string;
  overviewBg: string;
  tryBg: string;
  tryBorder: string;
  statusDone: string;
  statusActive: string;
  statusLocked: string;
  activeRow: string;
  activeRowBorder: string;
  moduleLabel: string;
  shadow: string;
  buttonBg: string;
  buttonText: string;
  accent2: string;
  accent2Soft: string;
  accentSoft: string;
  headerGrad: string;
}

export type ThemeName = 'dark' | 'light';

export interface Translations {
  brand: string;
  repoLabel: string;
  downloadLabel: string;
  uploadLabel: string;
  title: string;
  subtitle: string;
  about: string;
  editor: string;
  editorSub: string;
  run: string;
  reset: string;
  download: string;
  upload: string;
  share: string;
  shareCopied: string;
  langLabel: string;
  themeLabel: string;
  themeDark: string;
  themeLight: string;
  courseLabel: string;
  moduleWord: string;
  lessonIntro: string;
  lessonConcepts: string;
  lessonTryIt: string;
  playgroundBadge: string;
  tabCourses: string;
  tabFiles: string;
  lessonOverview: string;
  running: string;
  nothingOpen: string;
  nothingOpenHint: string;
  prevLesson: string;
  nextLesson: string;
  stopped?: string;
  stop?: string;
  modules: Record<string, string>;
  sections: Record<string, string>;
  lessons: Record<string, LessonContent>;
}

export interface LessonContent {
  intro: string;
  concepts: string[];
  tryIt: string;
}

export interface ModuleDef {
  id: string;
  sectionIds: string[];
}

export type NodeType = 'folder' | 'file';

export interface UserNode {
  id: string;
  type: NodeType;
  name: string;
  parentId?: string;
  content?: string;
}

export type UserNodes = Record<string, UserNode>;

export interface TabsState {
  ids: string[];
  active: string | null;
}

export type Buffers = Record<string, string>;

export interface SketchMap {
  [key: string]: string;
}

export type SectionIcons = Record<string, string>;

export interface IconProps {
  name: string;
  size?: number;
  title?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  strokeWidth?: number;
}

export type SidebarTab = 'courses' | 'files';

export type Status = 'done' | 'active' | 'next' | 'locked';
