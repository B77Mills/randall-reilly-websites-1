const contentMeter = require('./content-meter');
const gam = require('./gam');
const identityX = require('./identity-x');
const nativeX = require('./native-x');
const navigation = require('./navigation');
const newsletter = require('./newsletter');
const omeda = require('./omeda');
const omedaIdentityX = require('./omeda-identity-x');
const search = require('./search');

module.exports = {
  // module configs
  contentMeter,
  gam,
  identityX,
  nativeX,
  navigation,
  newsletter,
  omeda,
  omedaIdentityX,
  search,
  // theme configs
  idxNavItems: {
    enable: process.env.IDX_NAV_ENABLE || false,
  },
  company: 'Randall-Reilly, LLC',
  p1events: {
    tenant: 'randallreilly',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'truckersnews.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.truckersnews.com/files/base/randallreilly/all/image/static/tn/tn-logo.svg?h=45&auto=format,compress',
      srcset: [
        'https://img.truckersnews.com/files/base/randallreilly/all/image/static/tn/tn-logo.svg?h=45&auto=format,compress&dpr=2 2x',
      ],
      width: 66,
      height: 35,
    },
    footer: {
      src: 'https://img.truckersnews.com/files/base/randallreilly/all/image/static/tn/tn-logo-white.svg?h=60&auto=format,compress',
      srcset: [
        'https://img.truckersnews.com/files/base/randallreilly/all/image/static/tn/tn-logo-white.svg?h=60&auto=format,compress&dpr=2 2x',
      ],
    },
    corporate: {
      alt: 'Randall-Reilly Logo',
      href: 'https://www.randallreilly.com',
      src: 'https://img.truckersnews.com/files/base/randallreilly/all/image/static/rr-logo.svg?w=200&auto=format,compress',
      srcset: [
        'https://img.truckersnews.com/files/base/randallreilly/all/image/static/rr-logo.svg?w=200&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/TruckersNews/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/truckersnews', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UC55CJCUhEdHwOcQ_A4c9U9g', target: '_blank' },
  ],
  gcse: {
    id: 'cf19a2a833a06d9d4',
  },
  oneTrust: [
    { path: '/collection', id: 'c04235aa-e9e0-4ff9-b558-5e21aa892d20' },
    { path: '/termsandprivacy', id: 'd8f2d6c5-d9af-4d60-a93f-7441ca9ad94c' },
  ],
  gtm: {
    containerId: 'GTM-KKR45JP',
  },
  wufoo: {
    userName: 'randallreilly',
  },
  inquiry: {
    enabled: false,
    directSend: false,
    sendTo: 'support@parameter1.com',
    sendFrom: 'TruckersNews.com <noreply@parameter1.com>',
    logo: 'https://img.truckersnews.com/files/base/randallreilly/all/image/static/tn/tn-logo.svg?h=45&auto=format,compress&bg=000000&pad=5',
    bgColor: '#000000',
  },
  sponsoredLabelLogos: {
    'Sponsored by RoadPro': {
      src: 'https://img.overdriveonline.com/files/base/randallreilly/all/image/static/road-pro-logo.png?auto=format&w=109&fit=crop',
      width: '109px',
    },
  },
  sponsoredSectionNameLogos: {
    gear: {
      src: 'https://img.overdriveonline.com/files/base/randallreilly/all/image/static/ovd/trucker-gear-logo.png?auto=format&w=275&fit=crop',
      width: '275px',
    },
  },
  setSearchSortFieldToScore: true,
};
