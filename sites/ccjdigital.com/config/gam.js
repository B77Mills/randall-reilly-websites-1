const configureGAM = require('@randall-reilly/package-global/config/gam');

const config = configureGAM({ basePath: 'ccj' });

config.lazyLoad = {
  enabled: false, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config.setAliasAdUnits('default', [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'leaderboard' },
  { name: 'leaderboard-2', templateName: 'LEADERBOARD', path: 'leaderboard' },
  { name: 'rotation', templateName: 'ROTATION', path: 'rotation' },
  { name: 'rail-1', templateName: 'GEAR', path: 'rail-1' },
  { name: 'rotation-1', templateName: 'GEAR', path: 'rail-1' },
  { name: 'rotation-2', templateName: 'GEAR', path: 'rail-1' },
  { name: 'rotation-3', templateName: 'GEAR', path: 'rail-1' },
  { name: 'rotation-1-mobile', templateName: 'GEAR-MOBILE', path: 'rail-1' },
  { name: 'rotation-2-mobile', templateName: 'GEAR-MOBILE', path: 'rail-1' },
  { name: 'rotation-3-mobile', templateName: 'GEAR-MOBILE', path: 'rail-1' },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'rotation' },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'rotation' },
  { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'wallpaper-left' },
  { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'wallpaper-right' },
  { name: 'interstitial', path: 'interstitial' },
]);

const aliases = [
  'business',
  'workforce',
  'economic-trends',
  'ecommerce-urban-delivery',
  'regulations',
  'trucks',
  'alternative-power',
  'equipment-controls',
  'equipment-controls',
  'maintenance',
  'technology',
];

aliases.forEach(alias => config.setAliasAdUnits(alias, [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: `${alias}-leaderboard` },
  { name: 'rotation', templateName: 'ROTATION', path: `${alias}-rotation` },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: `${alias}-rotation` },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: `${alias}-rotation` },
]));


module.exports = config;
