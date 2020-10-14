module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8081),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3ff9b180291fcc5bb338ebba5796df31'),
    },
  },
});
