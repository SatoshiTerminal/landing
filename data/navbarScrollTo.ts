// ====== All Section names ======

// Section 1 Overview
// Section 2 Our Vision&Goal
// Section 3 Company Mission
// Section 4 Our Product
// Section 5 Our Pricing
// Section 6 Our Roadmap
// Section 7 Contact Us

// Navbar links here
type NavbarScrollTo = {
  id: number;
  title: string;
  scrollTo: string;
};

export const navbarScrollTo: NavbarScrollTo[] = [
  {
    id: 1,
    title: 'Overview',
    scrollTo: '#overview',
  },
  {
    id: 2,
    title: 'Our Vision',
    scrollTo: '#our_vision',
  },
  {
    id: 3,
    title: 'Mission',
    scrollTo: '#mission',
  },
  {
    id: 4,
    title: 'Product',
    scrollTo: '#product',
  },
  {
    id: 5,
    title: 'Pricing',
    scrollTo: '#pricing',
  },
  {
    id: 6,
    title: 'Roadmap',
    scrollTo: '#roadmap',
  },
  {
    id: 7,
    title: 'Contact',
    scrollTo: '#contact',
  },
];
