interface Config {
  app: {
    name: string;
    domain: string;
    url: string;
    adminEmail: string;
  };
  analytics: {
    googleAnalyticsId: string | null;
    allowedDomains: string;
  };
  social: {
    twitter: string;
    github: string;
    linkedin: string;
    facebook: string;
    instagram: string;
  };
  features: {
    blog: boolean;
    docs: boolean;
    navbar: boolean;
  };
}

function getEnvVar(key: string, defaultValue?: string): string {
  const value = import.meta.env[key] || defaultValue;
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not set`);
  }
  return value;
}

function getEnvBoolean(key: string, defaultValue: boolean): boolean {
  const value = import.meta.env[key];
  if (value === undefined) return defaultValue;
  return value.toLowerCase() === 'true';
}

function getEnvVarOrNull(key: string): string | null {
  const value = import.meta.env[key];
  return value || null;
}

// Helper to get a social media URL or empty string
function getSocialUrl(key: string): string {
  return import.meta.env[key] || '';
}

export const config: Config = {
  app: {
    name: getEnvVar('APP_NAME', 'Nicho Digital'),
    domain: getEnvVar('APP_DOMAIN', 'nixgodigital.com'),
    url: getEnvVar('APP_URL', 'https://nixgodigital.com'),
    adminEmail: getEnvVar('ADMIN_EMAIL', 'contacto@nichodigital.com'),
  },
  analytics: {
    googleAnalyticsId: getEnvVarOrNull('GOOGLE_ANALYTICS_ID'),
    allowedDomains: getEnvVar('ANALYTICS_DOMAINS', 'https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com'),
  },
  social: {
    twitter: getSocialUrl('TWITTER_URL'),
    github: getSocialUrl('GITHUB_URL'),
    linkedin: getSocialUrl('LINKEDIN_URL'),
    facebook: getSocialUrl('FACEBOOK_URL'),
    instagram: getSocialUrl('INSTAGRAM_URL'),
  },
  features: {
    blog: getEnvBoolean('ENABLE_BLOG', false),
    docs: getEnvBoolean('ENABLE_DOCS', false),
    navbar: getEnvBoolean('ENABLE_NAVBAR', true),
  },
} as const;
