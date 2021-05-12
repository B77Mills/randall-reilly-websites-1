const configureGAM = require('@randall-reilly/package-global/config/gam');

const config = configureGAM({ basePath: 'tn' });

config.lazyLoad = {
  enabled: false, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config
  .setAliasAdUnits('default', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'rotation' },
    { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'wallpaper-left' },
    { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'wallpaper-right' },
  ])
  .setAliasAdUnits('gear', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'gear-leaderboard' },
    { name: 'leaderboard-2', templateName: 'LEADERBOARD', path: 'gear-leaderboard' },
    { name: 'rotation', templateName: 'LEADERBOARD', path: 'gear-leaderboard' },
    { name: 'rotation-1', templateName: 'GEAR', path: 'gear-rotation-1' },
    { name: 'rotation-2', templateName: 'GEAR', path: 'gear-rotation-2' },
    { name: 'rotation-3', templateName: 'GEAR', path: 'gear-rotation-3' },
    { name: 'rotation-1-mobile', templateName: 'GEAR-MOBILE', path: 'gear-rotation-1' },
    { name: 'rotation-2-mobile', templateName: 'GEAR-MOBILE', path: 'gear-rotation-2' },
    { name: 'rotation-3-mobile', templateName: 'GEAR-MOBILE', path: 'gear-rotation-3' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'gear-leaderboard' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'gear-leaderboard' },
    { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'gear-wallpaper-left' },
    { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'gear-wallpaper-right' },
  ]);

module.exports = config;
