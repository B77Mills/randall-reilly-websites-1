const topics = [
  { href: '/construction-and-landscaping', label: 'Construction & Landscaping' },
  { href: '/pickup-and-delivery', label: 'Pickup & Delivery' },
  { href: '/utilities', label: 'Utilities' },
  { href: '/vans', label: 'Vans' },
  { href: '/pickup-trucks', label: 'Pickup Trucks' },
  { href: '/products', label: 'Products' },
];

module.exports = {
  primary: {
    items: [],
  },
  secondary: {
    items: topics,
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/termsandprivacy', label: 'Terms of User and Privacy Policy' },
      { href: '/collection', label: 'Point of Collection Notice' },
      { href: 'https://privacyportal-cdn.onetrust.com/dsarwebform/49a9a972-547e-4c49-b23c-4cc77554cacb/cddab1bc-7e58-4eca-a20d-be42716734cf.html', label: 'Do Not Sell My Personal Information', target: '_blank' },
      { href: '/contact-us', label: 'Contact Us' },
    ],

    topics,
    more: [
      { href: '/advertise', label: 'Advertise' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '#', label: 'Newsletters' },
    ],
    newsletter: {
      formAction: '/newsletters',
      cta: 'Sign up for the <strong>Hard Working Trucks Daily</strong> to keep up with ...',
    },
  },
  menu: [
    {
      modifiers: ['primary'],
      items: topics,
    },
    {
      modifiers: ['secondary'],
      items: [
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions' },
      ],
    },
  ],
};
