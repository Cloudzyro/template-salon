// Everything on the site comes from this file: the salon's details, the service
// menu and prices, stylists, gallery captions and policies. Edit it and rebuild.

export const site = {
  name: "Juniper Row Salon",
  shortName: "Juniper Row",
  tagline: "Hair color, cuts and care on Juniper Row",
  description:
    "Juniper Row Salon is a hair and beauty studio in Alder Falls, Oregon, for lived-in color, precise cuts, curly hair and bridal styling. Book online with the stylist who suits you.",
  // Your online booking page (Vagaro, Square Appointments, Fresha, Boulevard, GlossGenius...).
  bookingUrl: "https://example.com/book",
  // Where people buy gift cards. Most booking systems have a gift card page.
  giftCardUrl: "https://example.com/gift-cards",
  phone: "(555) 014-7720",
  email: "hello@juniperrow.example",
  address: {
    street: "212 Juniper Row",
    city: "Alder Falls",
    region: "OR",
    postal: "97031",
  },
  mapsUrl: "https://www.openstreetmap.org/search?query=212%20Juniper%20Row",
  hours: [
    { days: "Tuesday to Friday", time: "9am to 8pm" },
    { days: "Saturday", time: "8am to 5pm" },
    { days: "Sunday and Monday", time: "Closed" },
  ],
  social: [
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "Pinterest", url: "https://pinterest.com/" },
  ],
};

export const home = {
  title: "Color that grows out softly, cuts that hold their shape",
  text: "A small studio of eight stylists on Juniper Row. Every new color starts with a free consultation, and every price on our menu is written down before you sit in the chair.",
  // Short facts shown under the hero.
  facts: [
    { figure: "8", label: "stylists across four levels" },
    { figure: "15 min", label: "free color consultations" },
    { figure: "2013", label: "on Juniper Row since" },
  ],
  introTitle: "How a visit goes",
  steps: [
    { title: "Pick a stylist or a level", text: "Prices follow the stylist's level, so you can choose by experience, budget or a look you liked in our gallery." },
    { title: "Talk it through first", text: "Color and big changes start with a consultation. We look at your hair in daylight and agree on a plan and a price." },
    { title: "Leave with a routine", text: "We write down the products and the timing for your next visit, so the result lasts until you're back." },
  ],
  giftTitle: "Gift cards in any amount",
  giftText: "Sent by email in a minute or picked up at the front desk in a card. They never expire and work for every service and product.",
};

// Stylist levels. The order here is the column order on the services menu.
export const levels = [
  { id: "new", name: "New Talent", note: "Our newest stylists, after two years in our academy" },
  { id: "stylist", name: "Stylist", note: "Three or more years behind the chair" },
  { id: "senior", name: "Senior", note: "Six or more years and a specialty" },
  { id: "master", name: "Master", note: "Our educators, ten years or more" },
] as const;

export type LevelId = (typeof levels)[number]["id"];

type Service = {
  name: string;
  detail?: string;
  minutes: number;
  // Starting price per level, in dollars. Use null where a level doesn't offer it.
  prices: Record<LevelId, number | null>;
};

export type Category = {
  id: string;
  name: string;
  // The swatch chip color that marks this category.
  chip: string;
  note?: string;
  services: Service[];
};

export const menu: Category[] = [
  {
    id: "cuts",
    name: "Cuts and styling",
    chip: "#3b2a22",
    note: "Every cut includes a wash, a scalp massage and a finish.",
    services: [
      { name: "Haircut", detail: "Short to long, any length", minutes: 60, prices: { new: 55, stylist: 70, senior: 85, master: 110 } },
      { name: "Curly cut", detail: "Cut dry, curl by curl", minutes: 90, prices: { new: null, stylist: 90, senior: 110, master: 135 } },
      { name: "Clipper cut", minutes: 30, prices: { new: 35, stylist: 42, senior: 50, master: 60 } },
      { name: "Fringe trim", detail: "Between cuts", minutes: 15, prices: { new: 15, stylist: 15, senior: 20, master: 25 } },
      { name: "Blowout", minutes: 45, prices: { new: 45, stylist: 55, senior: 65, master: 80 } },
      { name: "Event styling", detail: "Updos and waves", minutes: 75, prices: { new: 75, stylist: 90, senior: 110, master: 140 } },
    ],
  },
  {
    id: "color",
    name: "Color",
    chip: "#8c3b2c",
    note: "Prices are for shoulder length. Longer or thicker hair may need more time; we'll tell you at the consultation.",
    services: [
      { name: "Root touch-up", detail: "Up to 6 weeks of growth", minutes: 90, prices: { new: 75, stylist: 90, senior: 105, master: 125 } },
      { name: "All-over color", minutes: 120, prices: { new: 100, stylist: 120, senior: 140, master: 170 } },
      { name: "Gloss", detail: "Tone and shine", minutes: 45, prices: { new: 45, stylist: 55, senior: 65, master: 80 } },
      { name: "Gray blending", minutes: 105, prices: { new: 90, stylist: 110, senior: 130, master: 155 } },
    ],
  },
  {
    id: "lightening",
    name: "Lightening",
    chip: "#d9b27c",
    note: "Includes a gloss and a bond treatment.",
    services: [
      { name: "Partial highlights", minutes: 150, prices: { new: 130, stylist: 160, senior: 190, master: 230 } },
      { name: "Full highlights", minutes: 180, prices: { new: 170, stylist: 205, senior: 240, master: 290 } },
      { name: "Hand-painted balayage", minutes: 210, prices: { new: null, stylist: 240, senior: 285, master: 340 } },
      { name: "Color correction", detail: "By consultation, priced per hour", minutes: 60, prices: { new: null, stylist: null, senior: 120, master: 150 } },
    ],
  },
  {
    id: "care",
    name: "Treatments and texture",
    chip: "#6f7d5c",
    services: [
      { name: "Bond repair treatment", minutes: 30, prices: { new: 35, stylist: 35, senior: 35, master: 35 } },
      { name: "Scalp ritual", detail: "Exfoliation, steam and massage", minutes: 45, prices: { new: 50, stylist: 50, senior: 50, master: 50 } },
      { name: "Smoothing treatment", minutes: 150, prices: { new: null, stylist: 250, senior: 290, master: 330 } },
      { name: "Silk press", minutes: 105, prices: { new: 90, stylist: 105, senior: 120, master: 145 } },
    ],
  },
  {
    id: "beauty",
    name: "Brows and makeup",
    chip: "#c98b84",
    services: [
      { name: "Brow shape", minutes: 20, prices: { new: 25, stylist: 30, senior: 35, master: 40 } },
      { name: "Brow tint", minutes: 20, prices: { new: 20, stylist: 25, senior: 25, master: 30 } },
      { name: "Lash lift and tint", minutes: 60, prices: { new: null, stylist: 85, senior: 95, master: 110 } },
      { name: "Event makeup", minutes: 60, prices: { new: 80, stylist: 95, senior: 115, master: 140 } },
    ],
  },
];

export type Stylist = {
  name: string;
  level: LevelId;
  pronouns?: string;
  since: number;
  specialties: string[];
  bio: string;
  // Shown in the portrait placeholder until you add a photo.
  tone: string;
  // Link to this stylist's booking page, or leave empty to use bookingUrl.
  bookingUrl?: string;
  days: string;
};

export const stylists: Stylist[] = [
  { name: "Odette Marchetti", level: "master", pronouns: "she/her", since: 2013, specialties: ["Color correction", "Blonding", "Education"], bio: "Opened the studio and still takes Saturday clients. Known for fixing box dye without losing length.", tone: "#8c3b2c", days: "Tuesday, Wednesday, Saturday" },
  { name: "Ravi Castellanos", level: "master", pronouns: "he/him", since: 2014, specialties: ["Precision cuts", "Short hair", "Clipper work"], bio: "Trained in sharp, graphic shapes and teaches our cutting classes on Mondays.", tone: "#3b2a22", days: "Wednesday to Saturday" },
  { name: "Noor Haddad", level: "senior", pronouns: "she/her", since: 2016, specialties: ["Curly cuts", "Silk press", "Texture"], bio: "Works curl by curl and will show you how to style it at home in under ten minutes.", tone: "#5a3a2e", days: "Tuesday to Friday" },
  { name: "Wren Ellison", level: "senior", pronouns: "they/them", since: 2017, specialties: ["Lived-in color", "Balayage", "Gray blending"], bio: "Paints color that grows out without a line, so you can wait twelve weeks between visits.", tone: "#d9b27c", days: "Thursday to Saturday" },
  { name: "Matteo Lindqvist", level: "stylist", pronouns: "he/him", since: 2020, specialties: ["Men's cuts", "Fades", "Beard shaping"], bio: "Quick, tidy and good company. Most of his clients book every four weeks.", tone: "#6b4f3f", days: "Tuesday to Friday" },
  { name: "Simone Achebe", level: "stylist", pronouns: "she/her", since: 2021, specialties: ["Event styling", "Updos", "Bridal"], bio: "Does our wedding parties and trials, and keeps a book of pinned looks to try.", tone: "#c98b84", days: "Friday and Saturday" },
  { name: "Juno Park", level: "new", pronouns: "she/her", since: 2024, specialties: ["Blowouts", "Glosses", "Long layers"], bio: "Graduated from our academy last spring. A good place to start if you're trying us out.", tone: "#a07a5c", days: "Tuesday to Saturday" },
  { name: "Theo Vance", level: "new", pronouns: "he/him", since: 2025, specialties: ["Root touch-ups", "Haircuts", "Brow tint"], bio: "Careful and unhurried, with a week of evening appointments for people who work late.", tone: "#6f7d5c", days: "Tuesday to Friday evenings" },
];

// Gallery looks. Each is drawn as an illustrated placeholder until you add photos.
// shape: bob, long, curly, crop, shoulder, knot or straight.
export const gallery = [
  { title: "Copper gloss on a long bob", shape: "bob", by: "Wren Ellison", colors: ["#8c3b2c", "#b5603f", "#d98b5f"], alt: "Illustration of a long bob in warm copper tones" },
  { title: "Soft honey balayage", shape: "long", by: "Odette Marchetti", colors: ["#5a3a2e", "#b98a55", "#e3c08a"], alt: "Illustration of long wavy hair fading from brown to honey blonde" },
  { title: "Tapered curly cut", shape: "curly", by: "Noor Haddad", colors: ["#2a1d18", "#4a3128", "#6b4a3a"], alt: "Illustration of rounded curly hair in deep brown" },
  { title: "Graphic crop", shape: "crop", by: "Ravi Castellanos", colors: ["#1f1714", "#3b2a22", "#57423a"], alt: "Illustration of a short cropped haircut in near black" },
  { title: "Silver blending", shape: "shoulder", by: "Wren Ellison", colors: ["#8d8a86", "#b9b5af", "#dedad3"], alt: "Illustration of shoulder length hair in soft silver and gray" },
  { title: "Bridal low knot", shape: "knot", by: "Simone Achebe", colors: ["#6b4f3f", "#9a7458", "#c49a74"], alt: "Illustration of hair pinned into a low knot at the nape" },
  { title: "Rose gold refresh", shape: "shoulder", by: "Juno Park", colors: ["#a35a55", "#c98b84", "#e5b7ae"], alt: "Illustration of shoulder length hair in rose gold" },
  { title: "Sleek silk press", shape: "straight", by: "Noor Haddad", colors: ["#241915", "#3d2a22", "#5c4134"], alt: "Illustration of long straight hair with a center part" },
];

export const policies = [
  { title: "Consultations", text: "New color clients and anyone planning a big change book a free 15-minute consultation first. We may do a strand test, and we'll agree on the price before we start." },
  { title: "Cancellations", text: "Please give us 24 hours' notice to cancel or move an appointment. Late cancellations and missed appointments are charged 50% of the service." },
  { title: "Running late", text: "We'll always try to fit you in. After 15 minutes we may need to shorten the service or move you to another time." },
  { title: "Prices", text: "Menu prices are starting prices. Extra length, density or time is priced at the consultation, never as a surprise at the desk." },
  { title: "Happy with your hair", text: "If something isn't right, tell us within seven days and we'll adjust it at no charge." },
];
