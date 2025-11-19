import type { Project, Category, Award, ImagePlaceholder } from './definitions';
import { PlaceHolderImages } from './placeholder-images';

export const getImageById = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    return {
      id: 'not-found',
      imageUrl: `https://picsum.photos/seed/${id}/600/400`,
      description: 'Image not found',
      imageHint: 'placeholder',
      width: 600,
      height: 400,
    };
  }
  return image;
}

export const categories: Category[] = [
  {
    slug: 'residential',
    name: 'Residential',
    description: 'Crafting personal sanctuaries that are both beautiful and functional.',
    imageId: 'cat-residential',
    subcategories: [
      { slug: 'flats', name: 'Flats' },
      { slug: 'bungalows', name: 'Bungalows' },
      { slug: 'kitchen', name: 'Kitchen' },
      { slug: 'bathroom', name: 'Bathroom' },
    ],
  },
  {
    slug: 'commercial',
    name: 'Commercial',
    description: 'Designing innovative workspaces that foster creativity and productivity.',
    imageId: 'cat-corporate',
    subcategories: [
        { slug: 'office', name: 'Office' },
        { slug: 'shop-boutique', name: 'Shop / Boutique' },
    ]
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    description: 'Creating memorable experiences through immersive and welcoming environments.',
    imageId: 'cat-hospitality',
    subcategories: [
        { slug: 'hotel', name: 'Hotel' },
        { slug: 'restaurant', name: 'Restaurant' },
        { slug: 'banquet', name: 'Banquet' },
    ]
  },
  {
    slug: 'hospital-healthcare',
    name: 'Hospital / Healthcare',
    description: 'Designing healing environments with a focus on patient well-being.',
    imageId: 'cat-healthcare',
    subcategories: [
        { slug: 'clinic', name: 'Clinic' },
    ]
  },
  {
    slug: 'art-work',
    name: 'Art Work',
    description: 'Curating and creating unique art pieces that define and enhance spaces.',
    imageId: 'cat-artwork',
  }
];

export const projects: Project[] = [
  {
    slug: 'seventy-residence',
    title: 'Seventy Residence',
    category: 'residential',
    subcategory: 'bungalows',
    categoryName: 'Residential',
    subcategoryName: 'Bungalows',
    location: 'Ahmedabad',
    year: 2023,
    description: 'A contemporary home designed for a modern family, balancing open, social spaces with private retreats. The design emphasizes natural light and a connection to the outdoors.',
    coverImageId: 'cover-seventy-res',
    galleryImageIds: ['gallery-res1-1', 'gallery-res1-2', 'gallery-res1-3'],
  },
  {
    slug: 'azure-villas',
    title: 'Azure Villas',
    category: 'residential',
    subcategory: 'bungalows',
    categoryName: 'Residential',
    subcategoryName: 'Bungalows',
    location: 'Goa',
    year: 2022,
    description: 'A series of luxury villas overlooking the Arabian Sea, featuring sustainable design and locally sourced materials. Each villa boasts a private pool and expansive ocean views.',
    coverImageId: 'cover-azure-villas',
    galleryImageIds: [],
  },
  {
    slug: 'modern-apartment',
    title: 'Modern Apartment',
    category: 'residential',
    subcategory: 'flats',
    categoryName: 'Residential',
    subcategoryName: 'Flats',
    location: 'Mumbai',
    year: 2023,
    description: 'A chic and functional apartment design for urban living.',
    coverImageId: 'placeholder-1',
    galleryImageIds: [],
  },
  {
    slug: 'gourmet-kitchen',
    title: 'Gourmet Kitchen',
    category: 'residential',
    subcategory: 'kitchen',
    categoryName: 'Residential',
    subcategoryName: 'Kitchen',
    location: 'Delhi',
    year: 2023,
    description: 'A chef\'s dream kitchen with state-of-the-art appliances and custom cabinetry.',
    coverImageId: 'placeholder-2',
    galleryImageIds: [],
  },
  {
    slug: 'spa-bathroom',
    title: 'Spa Bathroom',
    category: 'residential',
    subcategory: 'bathroom',
    categoryName: 'Residential',
    subcategoryName: 'Bathroom',
    location: 'Pune',
    year: 2024,
    description: 'A luxurious bathroom designed to be a personal spa retreat.',
    coverImageId: 'placeholder-3',
    galleryImageIds: [],
  },
  {
    slug: 'techcorp-hq',
    title: 'TechCorp HQ',
    category: 'commercial',
    subcategory: 'office',
    categoryName: 'Commercial',
    subcategoryName: 'Office',
    location: 'Bangalore',
    year: 2023,
    description: 'A state-of-the-art corporate headquarters designed to inspire innovation. The campus includes flexible workspaces, collaborative hubs, and extensive green areas.',
    coverImageId: 'cover-techcorp-hq',
    galleryImageIds: ['gallery-corp1-1', 'gallery-corp1-2', 'gallery-corp1-3'],
  },
  {
    slug: 'innovate-hub',
    title: 'Innovate Hub',
    category: 'commercial',
    subcategory: 'office',
    categoryName: 'Commercial',
    subcategoryName: 'Office',
    location: 'Pune',
    year: 2021,
    description: 'A dynamic co-working space that caters to startups and creative professionals. The design features modular furniture and multi-functional zones to adapt to various needs.',
    coverImageId: 'cover-innovate-hub',
    galleryImageIds: [],
  },
  {
    slug: 'aura-flagship-store',
    title: 'Aura Flagship Store',
    category: 'commercial',
    subcategory: 'shop-boutique',
    categoryName: 'Commercial',
    subcategoryName: 'Shop / Boutique',
    location: 'Mumbai',
    year: 2023,
    description: 'A flagship store for a luxury fashion brand, designed to create an immersive shopping experience. The space features dramatic lighting and sculptural displays.',
    coverImageId: 'cover-flagship-store',
    galleryImageIds: [],
  },
  {
    slug: 'elysian-hotel',
    title: 'The Elysian Hotel',
    category: 'hospitality',
    subcategory: 'hotel',
    categoryName: 'Hospitality',
    subcategoryName: 'Hotel',
    location: 'Jaipur',
    year: 2024,
    description: 'A luxury boutique hotel that blends traditional Rajasthani architecture with contemporary elegance. The interiors feature handcrafted details and bespoke art pieces.',
    coverImageId: 'cover-elysian-hotel',
    galleryImageIds: ['gallery-hosp1-1', 'gallery-hosp1-2'],
  },
  {
    slug: 'oasis-resort',
    title: 'Oasis Resort & Spa',
    category: 'hospitality',
    subcategory: 'hotel',
    categoryName: 'Hospitality',
    subcategoryName: 'Hotel',
    location: 'Kerala',
    year: 2022,
    description: 'A wellness resort set in the serene backwaters of Kerala. The design harmonizes with nature, offering a tranquil retreat for guests seeking relaxation and rejuvenation.',
    coverImageId: 'cover-oasis-resort',
    galleryImageIds: [],
  },
  {
    slug: 'spice-route-restaurant',
    title: 'Spice Route',
    category: 'hospitality',
    subcategory: 'restaurant',
    categoryName: 'Hospitality',
    subcategoryName: 'Restaurant',
    location: 'Chennai',
    year: 2023,
    description: 'An fine-dining restaurant with an exotic and inviting ambiance.',
    coverImageId: 'placeholder-4',
    galleryImageIds: [],
  },
  {
    slug: 'grand-banquet-hall',
    title: 'The Grand Hall',
    category: 'hospitality',
    subcategory: 'banquet',
    categoryName: 'Hospitality',
    subcategoryName: 'Banquet',
    location: 'Hyderabad',
    year: 2022,
    description: 'A magnificent banquet hall for weddings and corporate events.',
    coverImageId: 'placeholder-5',
    galleryImageIds: [],
  },
  {
    slug: 'serene-clinic',
    title: 'Serene Dental Clinic',
    category: 'hospital-healthcare',
    subcategory: 'clinic',
    categoryName: 'Hospital / Healthcare',
    subcategoryName: 'Clinic',
    location: 'Noida',
    year: 2023,
    description: 'A calming and modern dental clinic designed to reduce patient anxiety.',
    coverImageId: 'placeholder-6',
    galleryImageIds: [],
  },
  {
    slug: 'bronze-sculpture',
    title: 'The Thinker',
    category: 'art-work',
    categoryName: 'Art Work',
    location: 'Studio',
    year: 2024,
    description: 'A custom bronze sculpture for a private collector.',
    coverImageId: 'placeholder-7',
    galleryImageIds: [],
  },
];

export const featuredProjects = projects.slice(0, 3);

export const aboutFirm = {
  name: 'Beyond Interior Design Studio',
  summary: 'We are an award-winning architecture and interior design firm dedicated to creating spaces that are not only aesthetically pleasing but also a true reflection of our clients’ personalities and needs.',
  philosophy: 'Our design philosophy is rooted in a commitment to excellence, innovation, and sustainability. We believe in a collaborative process, working closely with our clients to bring their vision to life with meticulous attention to detail.',
  founder: {
    name: 'Hardik Mistry',
    title: 'Interior Designer',
    bio: 'Hardik Mistry is a visionary leader in the field of architecture and design. With over two decades of experience, he has led the firm to international acclaim, earning a reputation for his timeless designs and unwavering commitment to quality. His work is characterized by a unique ability to blend modernism with tradition, creating spaces that are both contextually relevant and globally inspired.',
    imageId: 'about-firm'
  }
};

export const awards: Award[] = [
  { year: 2023, title: 'Best Hospitality Project', project: 'The Elysian Hotel', organization: 'Design & Architecture Awards' },
  { year: 2023, title: 'Excellence in Corporate Design', project: 'TechCorp HQ', organization: 'Workspace Design Awards' },
  { year: 2022, title: 'Residential Project of the Year', project: 'Azure Villas', organization: 'Luxury Lifestyle Awards' },
  { year: 2021, title: 'Innovation in Workspace Design', project: 'Innovate Hub', organization: 'Future of Work Awards' },
];

export const contactDetails = {
  address: 'TB3, Solitaire Complex, Mahavir Nagar, Silvassa Char Rasta, Vapi 396191',
  phone: '9099042211',
  email: 'beyondhardik@gmail.com',
  socials: {
    instagram: '#',
    linkedin: '#',
    twitter: '#'
  }
}
