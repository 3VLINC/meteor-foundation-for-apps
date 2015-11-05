Npm.depends(

  {
    'foundation-apps': '1.1.0'
  }

);

Package.describe({
  name: 'threevl:foundation-for-apps',
  version: '0.0.1',
  summary: 'Builds foundation for apps into your project',
  git: 'https://github.com/3VLINC/meteor-foundation-for-apps'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  api.use('ecmascript');

  api.use('fourseven:scss');

  api.use('chriswessels:hammer');

  api.use('angular');
  
  var path = {
    scss: '.npm/package/node_modules/foundation-apps/scss/',
    js: '.npm/package/node_modules/foundation-apps/js/'
  };

  // SCSS
  // Bring in app settings for foundation
  api.addFiles(['_foundation_settings.scss'], 'client', { isImport: false});

  // Expose the foundation file so it can be included by 
  api.addFiles(['foundation.scss'], 'client', { isImport: true});

  api.addFiles(
    [
      path.scss + 'foundation.scss',
      path.scss + 'vendor/_normalize.scss',
      path.scss + 'helpers/_functions.scss',
      path.scss + 'helpers/_mixins.scss',
      path.scss + 'helpers/_breakpoints.scss',
      path.scss + 'helpers/_images.scss',
      path.scss + '_global.scss',
      path.scss + 'components/_iconic.scss',
      path.scss + 'components/_action-sheet.scss',
      path.scss + 'components/_block-list.scss',
      path.scss + 'components/_button.scss',
      path.scss + 'components/_button-group.scss',
      path.scss + 'components/_card.scss',
      path.scss + 'components/_extras.scss',
      path.scss + 'components/_forms.scss',
      path.scss + 'components/_panel.scss',
      path.scss + 'components/_grid.scss',
      path.scss + 'components/_title-bar.scss',
      path.scss + 'components/_label.scss',
      path.scss + 'components/_list.scss',
      path.scss + 'components/_menu-bar.scss',
      path.scss + 'components/_modal.scss',
      path.scss + 'components/_motion.scss',
      path.scss + 'components/_notification.scss',
      path.scss + 'components/_off-canvas.scss',
      path.scss + 'components/_popup.scss',
      path.scss + 'components/_switch.scss',
      path.scss + 'components/_tabs.scss',
      path.scss + 'components/_accordion.scss',
      path.scss + 'components/_typography.scss',
      path.scss + 'components/_utilities.scss'
    ],
    'client',
    { isImport: true}
  );

  // JS
  api.addFiles(
    [
      path.js + '/angular/foundation.js',
      path.js + '/angular/services/foundation.core.js',
      path.js + '/angular/services/foundation.core.animation.js',
      path.js + '/angular/services/foundation.dynamicRouting.js',
      path.js + '/angular/services/foundation.dynamicRouting.animations.js',
      path.js + '/angular/services/foundation.mediaquery.js',
      path.js + '/angular/components/accordion/accordion.js',
      path.js + '/angular/components/actionsheet/actionsheet.js',
      path.js + '/angular/components/common/common.js',
      path.js + '/angular/components/iconic/iconic.js',
      path.js + '/angular/components/interchange/interchange.js',
      path.js + '/angular/components/modal/modal.js',
      path.js + '/angular/components/notification/notification.js',
      path.js + '/angular/components/offcanvas/offcanvas.js',
      path.js + '/angular/components/panel/panel.js',
      path.js + '/angular/components/popup/popup.js',
      path.js + '/angular/components/tabs/tabs.js'
    ],
    'client'
  );

  api.addFiles(
    ['.npm/package/node_modules/foundation-apps/dist/js/foundation-apps-templates.js'],
    'client'
  );
  
});

Package.onTest(function(api) {

  api.use('ecmascript');

  api.use('tinytest');

  api.use('threevl:foundation-for-apps');

  api.addFiles('foundation-for-apps-tests.js');

});
