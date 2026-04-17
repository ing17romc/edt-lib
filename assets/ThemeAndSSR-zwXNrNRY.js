import{n as e}from"./chunk-BneVvdWh.js";import{_t as t}from"./iframe-BrtTKpdh.js";import{r as n}from"./react-BXSJG8e8.js";import{a as r,o as i}from"./blocks-D--JhPaE.js";import{t as a}from"./mdx-react-shim-DMU2pm5m.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Documentation/Theme and SSR`}),`
`,(0,c.jsx)(t.h1,{id:`theme-and-ssr`,children:`Theme and SSR`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ThemeProvider`}),` is the runtime theming boundary for the library.`]}),`
`,(0,c.jsx)(t.p,{children:`Use it when you need:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`light`}),`, `,(0,c.jsx)(t.code,{children:`dark`}),`, or `,(0,c.jsx)(t.code,{children:`system`}),` theme mode`]}),`
`,(0,c.jsx)(t.li,{children:`a stable SSR fallback theme`}),`
`,(0,c.jsx)(t.li,{children:`a consistent theme context across multiple components`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Recommended setup:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import 'edt-lib/styles.css';
import { ThemeProvider } from 'edt-lib';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" ssrFallbackTheme="light">
      {children}
    </ThemeProvider>
  );
}
`})}),`
`,(0,c.jsx)(t.p,{children:`Guidance:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`prefer `,(0,c.jsx)(t.code,{children:`styles.css`}),` in Next.js and App Router`]}),`
`,(0,c.jsx)(t.li,{children:`keep the provider high in the tree`}),`
`,(0,c.jsx)(t.li,{children:`avoid reading browser theme APIs during render from consumer code`}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};