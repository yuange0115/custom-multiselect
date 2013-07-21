Package.describe({
  summary: "cutom-multiselect"
});

Package.on_use(function (api, where) {
  api.add_files(['css/bootstrap-multiselect.css', 'css/prettify.css', 'js/bootstrap-multiselect.js', 'js/prettify.js'], 'client');
});
