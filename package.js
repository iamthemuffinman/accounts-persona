Package.describe({
  summary: "Login service for Mozilla Persona accounts.",
  git: "https://github.com/iamthemuffinman/meteor-accounts-persona",
  version: "0.0.1"
});

Package.on_use(function(api, where) {
  api.use('accounts-base', ['client', 'server']);
  api.use('http', ['server']);

  api.add_files('persona-server.js', 'server');
  api.add_files('persona-client.js', 'client');
});
