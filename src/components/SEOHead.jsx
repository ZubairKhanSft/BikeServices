import { useEffect } from 'react';

export default function SEOHead({
  title,
  description,
  ogTitle,
  ogDescription,
  path = '/',
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr, value, type = 'name') => {
      const selector = type === 'property' ? `meta[property="${attr}"]` : `meta[name="${attr}"]`;
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (type === 'property') tag.setAttribute('property', attr);
        else tag.setAttribute('name', attr);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', value);
    };

    setMeta('description', description);
    setMeta('og:title', ogTitle || title, 'property');
    setMeta('og:description', ogDescription || description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:url', `${window.location.origin}${path}`, 'property');
    setMeta('twitter:card', 'summary_large_image');

    const canonical = document.head.querySelector('link[rel="canonical"]');
    const canonicalUrl = `${window.location.origin}${path}`;
    if (!canonical) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    document.head.querySelector('link[rel="canonical"]').setAttribute('href', canonicalUrl);
  }, [title, description, ogTitle, ogDescription, path]);

  return null;
}
