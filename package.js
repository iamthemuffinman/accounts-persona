Package.describe({
  summary: "Login service for Mozilla Persona accounts.",
  git: "https://github.com/iamthemuffinman/meteor-accounts-persona",
  version: "0.0.1"
});

Package.on_use(function(api) {
  api.use('accounts-base@1.1.3', ['client', 'server']);
  api.use('http@1.0.9', ['server']);

  api.add_files('persona-server.js', 'server');
  api.add_files('persona-client.js', 'client');
});
