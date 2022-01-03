module.exports = [
    {
      key: "X-DNS-Prefetch-Control",
      value: "on",
    },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },
    {
      key: "Server",
      value: "Apache",
    },
    {
      key: "X-Content-Type-Options",
      value: "nosniff",
    },
    {
      key: "X-Frame-Options",
      value: "SAMEORIGIN",
    },
    {
      key: "X-XSS-Protection",
      value: "1; mode=block",
    },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=()",
    },
  
    {
      key: "Referrer-Policy",
      value: "strict-origin-when-cross-origin",
    },
  ];
  