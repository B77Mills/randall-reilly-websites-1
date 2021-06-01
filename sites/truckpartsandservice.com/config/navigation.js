const topics = {
  primary: [
    { href: '/business', label: 'Business' },
    { href: '/workforce', label: 'Workforce' },
    { href: '/economic-trends', label: 'Economic Trends' },
    { href: '/maintenance', label: 'Maintenance' },
    { href: '/aftermarket-truck-parts-suppliers', label: 'Buyers\' Guide' },
  ],
  expanded: [
    { href: '/products', label: 'Products' },
    { href: '/trucks-trailers', label: 'Trucks & Trailers' },
    { href: '/alternative-power', label: 'Alternative Power' },
    { href: '/technology', label: 'Technology' },
    { href: '/regulations', label: 'Regulations' },
    { href: '/distributor-of-the-year-award', label: 'Distributor of the Year' },
    { href: '/successful-dealer-award-nomination', label: 'Successful Dealer Award' },
  ],
  secondary: [
  ],
};

const utilities = [
  { href: '/page/advertise', label: 'Advertise' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: '/newsletters', label: 'Newsletters' },
];

const mobileMenu = {
  primary: [
    ...topics.primary,
    ...topics.expanded,
  ],
  secondary: [
    ...topics.secondary,
    { href: '/newsletters', label: 'Newsletters' },
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [
    ...topics.primary,
    ...topics.expanded,
    ...topics.secondary,
  ],
};

module.exports = {
  desktopMenu,
  mobileMenu,
  primary: {
    items: [],
  },
  secondary: {
    items: topics.primary,
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/termsandprivacy', label: 'Terms of User and Privacy Policy' },
      { href: '/collection', label: 'Point of Collection Notice' },
      { href: 'https://privacyportal-cdn.onetrust.com/dsarwebform/49a9a972-547e-4c49-b23c-4cc77554cacb/cddab1bc-7e58-4eca-a20d-be42716734cf.html', label: 'Do Not Sell My Personal Information', target: '_blank' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/html-sitemap', label: 'Site Map' },
    ],
    topics: topics.primary,
    more: utilities,
  },
};
