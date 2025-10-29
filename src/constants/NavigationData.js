const navigationData = [
  { to: 'Početna', url: '/' },
  { 
    to: 'Iznajmljivanje', 
    children: [
      { to: 'Novi Iznajmljivači', url: '/' },
      { to: 'Iskusni Iznajmljivači', url: '/' },
      { to: 'Investitori', url: '/' }
    ]
  },
  { to: 'Services', url: '/services' },
];

export default navigationData;