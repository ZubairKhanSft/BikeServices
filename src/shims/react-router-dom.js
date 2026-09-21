import React from 'react';

export function BrowserRouter({ children }) {
  return React.createElement(React.Fragment, null, children);
}

export function Link({ to, children, ...props }) {
  return React.createElement('a', { href: to, ...props }, children);
}

export function Route() {
  // Route is a placeholder; actual rendering handled by Routes shim
  return null;
}

export function Routes({ children }) {
  const path = (typeof window !== 'undefined' && window.location && window.location.pathname) || '/';
  let match = null;
  React.Children.forEach(children, (child) => {
    if (match) return;
    if (!child || !child.props) return;
    const childPath = child.props.path;
    if (childPath === path) match = child.props.element;
    if (childPath === '/' && path === '/') match = child.props.element;
  });
  return match || null;
}

export function useNavigate() {
  return (to) => { window.location.href = to; };
}

export function useLocation() {
  return { pathname: typeof window !== 'undefined' ? window.location.pathname : '/' };
}

export default {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
  useLocation,
};
