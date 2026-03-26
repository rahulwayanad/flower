// Second-image pool – cycled across products so hover always shows a different flower photo
const P = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1463595373836-6e0b0a8ee322?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=300&h=300&fit=crop',
]
function p2(i) { return P[i % P.length] }

export const CIRCLE_ITEMS = [
  { label: 'Birthday Flowers',      href: '/category?cat=birthday',          bg: 'linear-gradient(135deg,#ffe0e6,#ffb3c6)', img: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=120&h=120&fit=crop&crop=center' },
  { label: 'Birthday Balloons',     href: '/category?cat=birthday-balloons', bg: 'linear-gradient(135deg,#d6eaff,#a8caff)', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&h=120&fit=crop&crop=center' },
  { label: 'Birthday Combos',       href: '/category?cat=birthday-combos',   bg: 'linear-gradient(135deg,#e8ffd6,#b8f0a0)', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=120&fit=crop&crop=center' },
  { label: "Mother's Day Flowers",  href: '/category?cat=mothers-day',       bg: 'linear-gradient(135deg,#ffd6f5,#ffaade)', img: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=120&h=120&fit=crop&crop=center' },
  { label: 'Sympathy Flowers',      href: '/category?cat=sympathy',          bg: 'linear-gradient(135deg,#fff3d6,#ffe08a)', img: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=120&h=120&fit=crop&crop=center' },
  { label: 'Wedding Flowers',       href: '/category?cat=wedding',           bg: 'linear-gradient(135deg,#ffd6d6,#ffaaaa)', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=120&h=120&fit=crop&crop=center' },
  { label: 'Get Well Soon Flowers', href: '/category?cat=get-well-soon',     bg: 'linear-gradient(135deg,#d6fff5,#a0f0df)', img: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=120&h=120&fit=crop&crop=center' },
  { label: 'Last Minute Flowers',   href: '/category?cat=last-minute',       bg: 'linear-gradient(135deg,#f5d6ff,#d9a0ff)', img: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=120&h=120&fit=crop&crop=center' },
  { label: 'Eid Mubarak',           href: '/category?cat=eid',               bg: 'linear-gradient(135deg,#fff8d6,#ffe08a)', img: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=120&h=120&fit=crop&crop=center' },
  { label: 'Newborn Baby Boy',      href: '/category?cat=newborn',           bg: 'linear-gradient(135deg,#d6eaff,#b0ccff)', img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=120&h=120&fit=crop&crop=center' },
  { label: 'Newborn Baby Girl',     href: '/category?cat=newborn-girl',      bg: 'linear-gradient(135deg,#ffd6ec,#ffaacc)', img: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=120&h=120&fit=crop&crop=center' },
  { label: 'Best Sellers',          href: '/category?cat=best-sellers',      bg: 'linear-gradient(135deg,#ffd6d6,#ffb3b3)', img: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=120&h=120&fit=crop&crop=center' },
]

export const EID_PRODUCTS = [
  { id:1,  name:'Blossom White Floral Arrangement',  price:'AED 275.00', imgBg:'linear-gradient(160deg,#fff5f8,#ffe0eb)', images:['https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?w=300&h=300&fit=crop', p2(0)] },
  { id:2,  name:'Floral Heart Bouquet',              price:'AED 350.00', imgBg:'linear-gradient(160deg,#fff9e6,#ffedb0)', images:['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop', p2(1)] },
  { id:3,  name:'Pink & White Bloom – Elegant Box',  price:'AED 295.00', imgBg:'linear-gradient(160deg,#fef0ff,#f8c8ff)', images:['https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=300&fit=crop', p2(2)] },
  { id:4,  name:'Classic with a Fruity Touch',       price:'AED 310.00', imgBg:'linear-gradient(160deg,#edfff6,#b8f0d4)', images:['https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300&h=300&fit=crop', p2(3)] },
  { id:5,  name:'The Sentimint',                     price:'AED 240.00', imgBg:'linear-gradient(160deg,#e8f4ff,#bdd8f8)', images:['https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=300&h=300&fit=crop', p2(4)] },
  { id:6,  name:'Floral Delight Basket',             price:'AED 420.00', imgBg:'linear-gradient(160deg,#fff3f3,#ffc8c8)', images:['https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=300&h=300&fit=crop', p2(5)] },
]

export const MOTHERS_PRODUCTS = [
  { id:7,  name:'Blush Pink Garden Arrangement',       price:'AED 249.00', imgBg:'linear-gradient(160deg,#fef0fa,#ffc8ed)', images:['https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=300&h=300&fit=crop', p2(0)] },
  { id:8,  name:'Pink & White Luxury Bouquet',         price:'AED 375.00', imgBg:'linear-gradient(160deg,#fff5f8,#ffd6e8)', images:['https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=300&h=300&fit=crop', p2(1)] },
  { id:9,  name:'Pastel Bloom Surprise Flower Box',    price:'AED 199.00', imgBg:'linear-gradient(160deg,#fffbec,#ffedc0)', images:['https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=300&h=300&fit=crop', p2(2)] },
  { id:10, name:'Sweetness White Yellow and Pink',     price:'AED 289.00', imgBg:'linear-gradient(160deg,#edfff6,#b8f0d4)', images:['https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=300&h=300&fit=crop', p2(3)] },
  { id:11, name:'Tulip Fantasy Flower Arrangement',    price:'AED 329.00', imgBg:'linear-gradient(160deg,#f6eeff,#d8b4ff)', images:['https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=300&h=300&fit=crop', p2(4)] },
  { id:12, name:'Peony Bliss Bouquet',                 price:'AED 450.00', imgBg:'linear-gradient(160deg,#fff0f5,#ffc2d4)', images:['https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=300&h=300&fit=crop', p2(5)] },
]

export const BEST_SELLERS = [
  { id:13, name:'24 Red Roses Bouquet',                    price:'AED 199.00',   badge:'Best Seller', imgBg:'linear-gradient(160deg,#fff0f0,#ffb3b3)', images:['https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=300&h=300&fit=crop', p2(0)] },
  { id:14, name:'50 Mix Roses – Pink & White',             price:'AED 349.00',   badge:'Best Seller', imgBg:'linear-gradient(160deg,#fffbec,#ffe8a0)', images:['https://images.unsplash.com/photo-1463595373836-6e0b0a8ee322?w=300&h=300&fit=crop', p2(1)] },
  { id:15, name:'12 Pink Roses Arrangement',               price:'AED 159.00',   badge:'Best Seller', imgBg:'linear-gradient(160deg,#edf5ff,#b8d4ff)', images:['https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=300&fit=crop', p2(2)] },
  { id:16, name:'1 Box Rose Arrangement + Chocolate',      price:'AED 279.00',   badge:'Best Seller', imgBg:'linear-gradient(160deg,#fef0fa,#f8b8e8)', images:['https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=300&h=300&fit=crop', p2(3)] },
  { id:17, name:'Sunflower & Daisy Bouquet',               price:'AED 189.00',   badge:'Best Seller', imgBg:'linear-gradient(160deg,#fffbe8,#ffedb0)', images:['https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=300&h=300&fit=crop', p2(4)] },
  { id:18, name:'Grand Rose Arrangement Luxury',           price:'AED 1,200.00', badge:'Best Seller', imgBg:'linear-gradient(160deg,#f6eeff,#d4aaff)', images:['https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300&h=300&fit=crop', p2(5)] },
]

export const BIRTHDAY_PRODUCTS = [
  { id:19, name:'Love Truck & Money Bouquet',             price:'AED 499.00 – AED 699.00', imgBg:'linear-gradient(160deg,#fff0f5,#ffc8dc)', images:['https://images.unsplash.com/photo-1546015720-b8b30df5aa27?w=300&h=300&fit=crop', p2(0)] },
  { id:20, name:'Cotton Candy Bloom Flower Box',          price:'AED 259.00',              imgBg:'linear-gradient(160deg,#e8f4ff,#b8d8ff)', images:['https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=300&h=300&fit=crop', p2(1)] },
  { id:21, name:'12 Red Roses Birthday Arrangement',      price:'AED 149.00',              imgBg:'linear-gradient(160deg,#fff8ec,#ffecc0)', images:['https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=300&h=300&fit=crop', p2(2)] },
  { id:22, name:'Multi Colourful Flower Arrangement',     price:'AED 229.00',              imgBg:'linear-gradient(160deg,#fef0fa,#f8c0ef)', images:['https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=300&h=300&fit=crop', p2(3)] },
  { id:23, name:'Pink Basket of Roses Pink Flowers',      price:'AED 349.00',              imgBg:'linear-gradient(160deg,#edfff6,#b0f0d4)', images:['https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=300&h=300&fit=crop', p2(4)] },
  { id:24, name:'Fresh Birthday Floral Box',              price:'AED 199.00',              imgBg:'linear-gradient(160deg,#f5eeff,#d0a8ff)', images:['https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=300&fit=crop', p2(5)] },
]

export const NEWBORN_BOY = [
  { id:25, name:'Jungle Baby Balloon Stand 1',             price:'AED 275.00', imgBg:'linear-gradient(160deg,#e8f4ff,#b8d4ff)', images:['https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=300&fit=crop', p2(0)] },
  { id:26, name:'Little Monkey Baby Balloon & Fl…',        price:'AED 149.00', imgBg:'linear-gradient(160deg,#d8eeff,#a8c8ff)', images:['https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=300&fit=crop', p2(1)] },
  { id:27, name:'Baby Boy Lovely Child Flower & Ballo…',   price:'AED 239.00', imgBg:'linear-gradient(160deg,#e4f0ff,#c0d8ff)', images:['https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=300&h=300&fit=crop', p2(2)] },
  { id:28, name:'Baby Boy Flower & Balloon Bouquet',        price:'AED 199.00', imgBg:'linear-gradient(160deg,#d4e8ff,#a4c4ff)', images:['https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=300&h=300&fit=crop', p2(3)] },
  { id:29, name:'Stars & Bears Newborn Set',                price:'AED 325.00', imgBg:'linear-gradient(160deg,#dceeff,#acd0ff)', images:['https://images.unsplash.com/photo-1519689680058-324335c77eba?w=300&h=300&fit=crop', p2(4)] },
  { id:30, name:'Balloon & Teddy Baby Boy Bundle',          price:'AED 289.00', imgBg:'linear-gradient(160deg,#e0ecff,#b4d0ff)', images:['https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=300&h=300&fit=crop', p2(5)] },
]

export const NEWBORN_GIRL = [
  { id:31, name:'Pink Baby Balloon Stand 1',               price:'AED 275.00', imgBg:'linear-gradient(160deg,#feeaf5,#ffc2e0)', images:['https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&h=300&fit=crop', p2(0)] },
  { id:32, name:'Pink Floral Baby Girl Balloon',           price:'AED 189.00', imgBg:'linear-gradient(160deg,#fde8f5,#ffb4e4)', images:['https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=300&h=300&fit=crop', p2(1)] },
  { id:33, name:'All Flowers and Balloons Baby Girl',      price:'AED 349.00', imgBg:'linear-gradient(160deg,#fff0fa,#ffd0ee)', images:['https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300&h=300&fit=crop', p2(2)] },
  { id:34, name:'Baby Girl Pink Flower & Teddy Bear',      price:'AED 229.00', imgBg:'linear-gradient(160deg,#fde0f0,#ffb0d8)', images:['https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=300&fit=crop', p2(3)] },
  { id:35, name:'Fairy Pink Baby Girl Set',                price:'AED 299.00', imgBg:'linear-gradient(160deg,#ffe8f8,#ffc0ec)', images:['https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=300&h=300&fit=crop', p2(4)] },
  { id:36, name:'Rose Garden Baby Girl Set',               price:'AED 399.00', imgBg:'linear-gradient(160deg,#fff0f8,#ffd0e8)', images:['https://images.unsplash.com/photo-1548263594-a71ea65a8598?w=300&h=300&fit=crop', p2(5)] },
]

export const BIRTHDAY_BALLOONS = [
  { id:37, name:'Smiley Face Birthday Balloon Set',       price:'AED 49.00 – AED 79.00',  imgBg:'linear-gradient(160deg,#fffbe6,#ffeaa0)', images:['https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300&h=300&fit=crop', p2(0)] },
  { id:38, name:'Happy Birthday Balloon Bouquet',         price:'AED 59.00 – AED 89.00',  imgBg:'linear-gradient(160deg,#ecfff8,#a8f0d0)', images:['https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=300&h=300&fit=crop', p2(1)] },
  { id:39, name:'Triple Colour Birthday Balloon Arch',   price:'AED 75.00',               imgBg:'linear-gradient(160deg,#fff0f0,#ffb8b8)', images:['https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=300&fit=crop', p2(2)] },
  { id:40, name:'Big Birthday Balloon Edition B',        price:'AED 120.00',              imgBg:'linear-gradient(160deg,#e8eeff,#b8c8ff)', images:['https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=300&h=300&fit=crop', p2(3)] },
  { id:41, name:'Birthday 16 Balloon Edition B',         price:'AED 99.00',               imgBg:'linear-gradient(160deg,#fde8ff,#f0b0ff)', images:['https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop', p2(4)] },
  { id:42, name:'Single Number Balloon with Stand',      price:'AED 65.00',               imgBg:'linear-gradient(160deg,#fff5e0,#ffdda0)', images:['https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=300&fit=crop', p2(5)] },
]

export const CUSTOM_BALLOONS = [
  { id:43, name:'I Love You Happy Birthday Balloon',     price:'AED 29.00',              imgBg:'linear-gradient(160deg,#fff8e0,#ffeaa0)', images:['https://images.unsplash.com/photo-1546015720-b8b30df5aa27?w=300&h=300&fit=crop', p2(0)] },
  { id:44, name:'Happy Cute Birthday Balloon Set',       price:'AED 29.00 – AED 59.00',  imgBg:'linear-gradient(160deg,#ffe8e8,#ffb8b8)', images:['https://images.unsplash.com/photo-1458560871784-56d23406c091?w=300&h=300&fit=crop', p2(1)] },
  { id:45, name:'Triple Colour Birthday Balloon Arch',   price:'AED 75.00',              imgBg:'linear-gradient(160deg,#e8f8ff,#b0e0ff)', images:['https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=300&fit=crop', p2(2)] },
  { id:46, name:'Buy Chocolate Balloon Birthday',        price:'AED 45.00',              imgBg:'linear-gradient(160deg,#f0e8ff,#d0b0ff)', images:['https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=300&h=300&fit=crop', p2(3)] },
  { id:47, name:'Best Birthday Balloon Set',             price:'AED 35.00',              imgBg:'linear-gradient(160deg,#e8fff8,#a8f0d8)', images:['https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=300&fit=crop', p2(4)] },
]

export const FAQ_ITEMS = [
  { q: 'Can we order same-day flower delivery from Flowerify?', a: 'Yes, as a minimum we ask for 2–3 hours\' advance notice. For same-day delivery, please place your order before noon to guarantee delivery that day.' },
  { q: 'What time is flower delivery available?', a: 'We deliver 7 days a week, from 8 AM to 10 PM. VIP delivery slots are available for special occasions.' },
  { q: 'Can I customise my flower bouquet at Flowerify?', a: 'Absolutely! You can request specific flowers, colours, and arrangements. Use the "Special Requests" field when booking, or contact our support team directly.' },
  { q: 'Can Flowerify Delivery be done by Drone Bouquet?', a: 'We are currently piloting drone deliveries in select areas. Contact us to find out if your location qualifies for this premium service.' },
  { q: 'Can I add a personalised gift with my flowers?', a: 'Yes! We offer add-ons like chocolates, teddy bears, greeting cards, and balloons to complement your arrangement.' },
  { q: 'Is there tracking available for my order?', a: 'Yes, once your order is dispatched you\'ll receive a tracking link via email and SMS so you can follow your delivery in real time.' },
  { q: 'Is it possible to send an anonymous flower delivery to someone?', a: 'Yes, simply leave the sender name blank during checkout or request anonymity in the special instructions field.' },
  { q: 'In which locations do you deliver? What hours in Dubai?', a: 'We deliver across all major areas in Dubai and the UAE. Deliveries in Dubai are available from 8 AM – 10 PM, typically within 2–4 hours of order confirmation.' },
]
