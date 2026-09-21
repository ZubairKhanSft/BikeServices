import React from 'react';

export function HelmetProvider({ children }) {
  return React.createElement(React.Fragment, null, children);
}

export function Helmet(_props) {
  // No-op shim: server-side rendering or head management not required for local dev here
  return null;
}

export default {
  HelmetProvider,
  Helmet,
};
