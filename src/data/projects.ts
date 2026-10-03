export type Project = {
  id: string
  category: string
  description: string
  recent: boolean
  image?: string
  alt?: string
}

export const projects: Project[] = [
  // ─────────────────────────────
  // BEDROOM
  // ─────────────────────────────
  {
    id: 'bedroom-1',
    category: 'Bedroom',
    description: 'Custom wooden wardrobe',
    recent: true,
    image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791030719/Screenshot_2026-10-03_175554.png',
    alt: 'Custom wooden bedroom wardrobe'
  },
  {
    id: 'bedroom-2',
    category: 'Bedroom',
    description: 'Full-wall bedroom wardrobe with storage',
    recent: false,
    image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791030715/Screenshot_2026-10-03_175705.png',
    alt: 'Full-wall bedroom wardrobe with storage'
  },
  {
    id: 'bedroom-3',
    category: 'Bedroom',
    description: 'Custom bed with side storage',
    recent: false,
    image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791030715/Screenshot_2026-10-03_175825.png',
    alt: 'Custom wooden bed with side storage'
  },
  {
    id: 'bedroom-4',
    category: 'Bedroom',
    description: 'Bedroom dressing table and mirror unit',
    recent: false,
    image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791030715/Screenshot_2026-10-03_175422.png',
    alt: 'Custom bedroom dressing table and mirror unit'
  },
  {
    id: 'bedroom-5',
    category: 'Bedroom',
    description: 'Bedside tables and bedroom storage',
    recent: false,
    image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791030713/R.jpg',
    alt: 'Custom bedside tables and bedroom storage'
  },

  // ─────────────────────────────
  // KITCHEN
  // ─────────────────────────────
  {
    id: 'kitchen-1',
    category: 'Kitchen',
    description: 'Custom modular kitchen woodwork',
    recent: false,
    image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791032930/88608cba-1e68-4f69-8607-c207c314c589.png',
    alt: 'Custom modular kitchen woodwork'
  },
  {
    id: 'kitchen-2',
    category: 'Kitchen',
    description: 'Kitchen cabinets with overhead storage',
    recent: true,
    image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791032922/1815c89f-f52a-427d-b3b3-66c231125af2.png',
    alt: 'Kitchen cabinets with overhead storage'
  },
  {
    id: 'kitchen-3',
    category: 'Kitchen',
    description: 'Custom kitchen drawer and cabinet units',
    recent: false,
    image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791032854/a2895765-ce06-4306-a334-889e7ee23a41.png',
    alt: 'Custom kitchen drawers and cabinets'
  },
  {
    id: 'kitchen-4',
    category: 'Kitchen',
    description: 'Kitchen platform storage and cabinetry',
    recent: false,
    image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791032799/d39db6e3-566b-4f01-b6af-bc06a066a8ad.png',
    alt: 'Kitchen platform storage and cabinetry'
  },
  {
    id: 'kitchen-5',
    category: 'Kitchen',
    description: 'Custom wooden kitchen shelving',
    recent: false,
    image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791032781/b96ae5d7-9396-4519-8f9c-e23d8f9cab60.png',
    alt: 'Custom wooden kitchen shelving'
  },

  
  
  // ─────────────────────────────
// WARDROBE
// ─────────────────────────────
{
  id: 'wardrobe-1',
  category: 'Wardrobe',
  description: 'Custom wooden bedroom wardrobe',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791033467/93286be6-ea33-4c69-89bf-2b14fc4d2136.png',
  alt: 'Custom wooden bedroom wardrobe'
},
{
  id: 'wardrobe-2',
  category: 'Wardrobe',
  description: 'Full-wall wardrobe with storage',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791033576/1bb6f422-e905-4d8f-bf10-946fef089675.png',
  alt: 'Full-wall custom wooden wardrobe with storage'
},
{
  id: 'wardrobe-3',
  category: 'Wardrobe',
  description: 'Modern sliding door wardrobe',
    recent: true,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791033623/72196c55-317b-41d9-96b5-ba43e50a67a3.png',
  alt: 'Modern custom sliding door wooden wardrobe'
},
{
  id: 'wardrobe-4',
  category: 'Wardrobe',
  description: 'Custom wardrobe with dressing unit',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791033737/030c5913-d4e0-4b81-a035-64b864b501b4.png',
  alt: 'Custom wooden wardrobe with integrated dressing unit'
},
{
  id: 'wardrobe-5',
  category: 'Wardrobe',
  description: 'Built-in wardrobe with overhead storage',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791033907/8cb29522-9181-429a-ba5d-5d5719e71fa7.png',
  alt: 'Built-in wooden wardrobe with overhead storage'
},


// ─────────────────────────────
// LED PANELS
// ─────────────────────────────
{
  id: 'led-panel-1',
  category: 'LED Panels',
  description: 'Modern wooden LED TV wall panel',
    recent: true,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791035476/71ca1837-0d91-48c1-8692-63a5e57a6eab.png',
  alt: 'Modern wooden LED TV wall panel'
},
{
  id: 'led-panel-2',
  category: 'LED Panels',
  description: 'Wooden fluted LED feature wall',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791035483/492cafb3-9e0d-41e3-9143-2bea7de409b5.png',
  alt: 'Wooden fluted LED feature wall'
},
{
  id: 'led-panel-3',
  category: 'LED Panels',
  description: 'Custom LED panel with storage unit',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791035756/2e1a7f41-7e46-416a-936b-bbb24a65404b.png',
  alt: 'Custom wooden LED panel with storage unit'
},
{
  id: 'led-panel-4',
  category: 'LED Panels',
  description: 'Designer wooden TV panel with warm lighting',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791036390/63a9bdc4-56bd-439f-92b5-1a48f2797255.png',
  alt: 'Designer wooden TV panel with warm LED lighting'
},
{
  id: 'led-panel-5',
  category: 'LED Panels',
  description: 'Full-wall wooden LED entertainment panel',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791036627/ae9cf9f2-2818-43e0-b1b5-c4d02eaf61a4.png',
  alt: 'Full-wall wooden LED entertainment panel'
},

// ─────────────────────────────
// MANDIRS
// ─────────────────────────────
{
  id: 'mandir-1',
  category: 'Mandirs',
  description: 'Custom wooden home mandir',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791037142/efdde592-c262-4627-a06f-87761a15052e.png',
  alt: 'Custom wooden home mandir'
},
{
  id: 'mandir-2',
  category: 'Mandirs',
  description: 'Wall-mounted wooden mandir with storage',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791037158/461b8d1c-2840-4672-ad65-3fcd756e0ab7.png',
  alt: 'Wall-mounted wooden mandir with storage'
},
{
  id: 'mandir-3',
  category: 'Mandirs',
  description: 'Traditional wooden mandir with carved details',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791037018/8e3b77e8-9c65-4e2a-a7e4-b4e76992ee63.png',
  alt: 'Traditional wooden mandir '
},
{
  id: 'mandir-4',
  category: 'Mandirs',
  description: 'Modern wooden mandir with LED lighting',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791036874/34eb03a8-ed9c-44e2-90a9-60e14bf1dae9.png',
  alt: 'Modern wooden mandir with LED lighting'
},
{
  id: 'mandir-5',
  category: 'Mandirs',
  description: 'Compact wooden pooja unit for home',
    recent: true,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791036938/122cfcbb-6efc-4997-8c7f-47ee919c6364.png',
  alt: 'Compact custom wooden pooja unit for home'
},

// ─────────────────────────────
// DRESSING TABLES
// ─────────────────────────────
{
  id: 'dressing-table-1',
  category: 'Dressing Tables',
  description: 'Custom wooden dressing table with mirror',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791037383/0ebc8513-b4fa-4b85-8ba4-c1e2bf355fef.png',
  alt: 'Custom wooden dressing table with mirror'
},
{
  id: 'dressing-table-2',
  category: 'Dressing Tables',
  description: 'Modern wall-mounted dressing unit',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791037645/15bb38d4-9c1e-468b-b7f1-18d3b6dea1e0.png',
  alt: 'Modern wall-mounted wooden dressing unit'
},
{
  id: 'dressing-table-3',
  category: 'Dressing Tables',
  description: 'Bedroom dressing table with storage drawers',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791037759/c6dd3ae5-4e95-4658-a185-eed634436866.png',
  alt: 'Bedroom dressing table with storage drawers'
},
{
  id: 'dressing-table-4',
  category: 'Dressing Tables',
  description: 'Full-height dressing unit with wardrobe',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791037883/f2fcb64e-917e-4320-88a2-b4584ea8a1f2.png',
  alt: 'Full-height dressing unit with wardrobe'
},
{
  id: 'dressing-table-5',
  category: 'Dressing Tables',
  description: 'Designer dressing table with LED mirror',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791037985/27cad758-1624-4748-9ebe-417beee3b953.png',
  alt: 'Designer wooden dressing table with LED mirror'
},

// ─────────────────────────────
// DOORS
// ─────────────────────────────
{
  id: 'door-1',
  category: 'Doors',
  description: 'Custom wooden main entrance door',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791039229/96c29f62-2559-40ed-84e4-61db330ef3d2.png',
  alt: 'Custom wooden main entrance door'
},
{
  id: 'door-2',
  category: 'Doors',
  description: 'Modern wooden bedroom door',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791039336/d7ffd5fb-561c-4a16-a2be-2db8d099a2fc.png',
  alt: 'Modern custom wooden bedroom door'
},
{
  id: 'door-3',
  category: 'Doors',
  description: 'Designer wooden door with decorative panels',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791039472/40f599a1-77f6-4711-b30b-440f39d95e52.png',
  alt: 'Designer wooden door '
},
{
  id: 'door-4',
  category: 'Doors',
  description: 'Modern wooden door with glass detailing',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791039621/8a2c6860-fcb0-4937-87c5-dbc577c6c318.png',
  alt: 'Modern wooden door with glass detailing'
},
{
  id: 'door-5',
  category: 'Doors',
  description: 'Custom wooden double entrance door',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791039818/8760cdff-ae72-40b8-897d-4f334ca26b21.png',
  alt: 'Custom wooden double entrance door'
},

// ─────────────────────────────
// WALL PANELS
// ─────────────────────────────
{
  id: 'wall-panel-1',
  category: 'Wall Panels',
  description: 'Modern wooden feature wall paneling',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791040056/8d5ab716-e5ee-48b9-b2b0-f57680777d98.png',
  alt: 'Modern wooden feature wall paneling'
},
{
  id: 'wall-panel-2',
  category: 'Wall Panels',
  description: 'Fluted wooden wall panel design',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791040134/c995ebea-49b9-4df2-8b87-1d2d354cf46a.png',
  alt: 'Fluted wooden wall panel design'
},
{
  id: 'wall-panel-3',
  category: 'Wall Panels',
  description: 'Bedroom wooden accent wall',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791040145/53cafbe0-4b31-4cfe-a8d1-5cd130107019.png',
  alt: 'Bedroom wooden accent wall'
},
{
  id: 'wall-panel-4',
  category: 'Wall Panels',
  description: 'Living room decorative wall panel',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791040353/f0e73fca-295c-4f3b-9787-43cb056dc372.png',
  alt: 'Living room decorative wooden wall panel'
},
{
  id: 'wall-panel-5',
  category: 'Wall Panels',
  description: 'Wooden wall panel with integrated lighting',
    recent: false,
  image: 'https://res.cloudinary.com/bj5daffd/image/upload/v1791040401/32188e11-78de-4f42-840f-4a32243e0f08.png',
  alt: 'Wooden wall panel with integrated lighting'
},


]

