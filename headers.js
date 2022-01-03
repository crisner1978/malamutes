module.exports = [
    {
      key: "X-DNS-Prefetch-Control",
      value: "on",
    },
    {
      key: "Server",
      value: "Vercel",
    },
    {
      key: "X-Content-Type-Options",
      value: "nosniff",
    },
    {
      key: "X-Frame-Options",
      value: "DENY",
    },
    {
      key: "X-XSS-Protection",
      value: "1; mode=block",
    },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=()",
    },
  ];
  