/// <reference types="vite/client" />

declare module '*.css' {
  const content: string;
  export default content;
}

declare module 'p5' {
  const p5: typeof import('p5');
  export default p5;
}

declare global {
  interface Window {
    p5: typeof import('p5');
  }
}

export {};
