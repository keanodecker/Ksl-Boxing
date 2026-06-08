const SITE_URL = 'https://ksl-boxing.com';

export default function sitemap() {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/club', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/groups', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/training-times', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/photos', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/news', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/faq', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/imprint', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
