// Need only 3 item in list becouse Roadmap have specific Css style
type OurRoadmapType = {
  date: string;
  list: [
    {
      title: string;
    },
    {
      title: string;
    },
    {
      title: string;
    }
  ];
}[];

// Roadmap have only 9 items from 10% to 90% in 10% steps
export const ourRoadmapData: OurRoadmapType = [
  // Item 1
  {
    date: 'Q4 2022',
    list: [
      {
        title: 'Strategy & Technical',
      },
      {
        title: 'Team Formation',
      },
      {
        title: 'Concept development',
      },
    ],
  },
  // Item 2
  {
    date: 'Q1 2023',
    list: [
      {
        title: 'Terminal prototype designed',
      },
      {
        title: 'Technical specifications defined',
      },
      {
        title: 'Early partnerships',
      },
    ],
  },
  // Item 3
  {
    date: 'Q2 2023',
    list: [
      {
        title: 'Prototype testing',
      },
      {
        title: 'Key vendors arranged',
      },
      {
        title: 'Enterprise solution planned',
      },
    ],
  },
  // Item 4
  {
    date: 'Q3 2023',
    list: [
      {
        title: 'Prototype improvements',
      },
      {
        title: 'Manufacturing partnership',
      },
      {
        title: 'Hardware Compliances met',
      },
    ],
  },
  // Item 5
  {
    date: 'Q4 2023',
    list: [
      {
        title: 'Expansion of team',
      },
      {
        title: 'Model & pricing finalized',
      },
      {
        title: 'Commercialization strategy',
      },
    ],
  },
  // Item 6
  {
    date: 'Q1 2024',
    list: [
      {
        title: 'Production begins',
      },
      {
        title: 'Product distribution planned',
      },
      {
        title: 'Warehouse & logistics coordination',
      },
    ],
  },
  // Item 6
  {
    date: 'Q2 2024',
    list: [
      {
        title: 'Marketing and awareness campaign',
      },
      {
        title: 'Terminal samples shipped',
      },
      {
        title: 'Release to pre users',
      },
    ],
  },
  // Item 6
  {
    date: 'Q3 2024',
    list: [
      {
        title: 'Official release',
      },
      {
        title: 'Keyboard & Monitor Distribution',
      },
      {
        title: 'Trade shows and virtual events',
      },
    ],
  },
  // Item 7
  {
    date: 'Q4 2024',
    list: [
      {
        title: 'Growth strategy optimized',
      },
      {
        title: 'Sales support tailored for new markets',
      },
      {
        title: 'Team expanded',
      },
    ],
  },
  // Item 8
  {
    date: 'Q1 2025',
    list: [
      {
        title: 'Expansion to international markets',
      },
      {
        title: 'Mass manufacturing & distribution',
      },
      {
        title: 'Enterprise solution optimization',
      },
    ],
  },
];

// Q4 2022 Item 1
// -Strategy & Technical
// -Team Formation
// -Concept development
// Q1 2023 Item 2
// -Terminal prototype designed
// -Technical specifications defined
// -Early partnerships
// Q2 2023 Item 3
// -Prototype testing
// -Key vendors arranged
// -Enterprise solution planned
// Q3  2023 Item 4
// -Prototype improvements
// -Manufacturing partnership
// -Hardware Compliances met
// Q4 2023 Item 5
// -Expansion of team
// -Model & pricing finalized
// -Commercialization strategy
// Q1 2024 Item 6
// -Production begins
// -Product distribution planned
// -Warehouse & logistics coordination
// Q2 2024 Item 7
// -Marketing and awareness campaign
// -Terminal samples shipped
// -Release to pre users
// Q3 2024 Item 8
// -Official release
// -Keyboard & Monitor Distribution
// -Trade shows and virtual events
// Q4 2024 Item 9
// -Growth strategy optimized
// -Sales support tailored for new markets
// -Team expanded
// Q1 2025 Item 10
// -Expansion to international markets
// -Mass manufacturing & distribution
// -Enterprise solution optimization
