// The sample shop this template shows where no shop is behind the page (its
// live demo, or your project before the workspace sets up a shop). It never
// reaches a live shop: there the page draws the shop's own catalog, banner and
// settings. Replace it with your own sample shop, or leave it: a live shop
// never loads these photos.
import hero from './demo/hero.webp'
import story from './demo/story.webp'
import p1 from './demo/p1.webp'
import p2 from './demo/p2.webp'
import p3 from './demo/p3.webp'
import p4 from './demo/p4.webp'
import p5 from './demo/p5.webp'
import p6 from './demo/p6.webp'
import p7 from './demo/p7.webp'
import p8 from './demo/p8.webp'

export const demo = {
  name: 'MAISON SUR',
  tagline: 'Prendas, calzado y accesorios',
  about: 'Prendas, calzado y accesorios de líneas limpias, pensados para combinarse entre sí. Una tienda de demostración de la plantilla Boutique.',
  announcement: 'Nueva temporada disponible',
  hero,
  story,
  detail: 'Corte limpio, materiales elegidos con cuidado y acabados precisos. Una pieza versátil que conversa con todo tu armario.',
  benefits: ['Selección de temporada', 'Materiales cuidados', 'Asesoría personal'],
  categories: [
    { id: 'prendas', name: 'Prendas' },
    { id: 'calzado', name: 'Calzado' },
    { id: 'accesorios', name: 'Accesorios' },
  ],
  products: [
    { id: '1', name: 'Chaqueta denim índigo', price_cents: 25900000, category_id: 'prendas', badge: 'Nuevo', image: p1 },
    { id: '2', name: 'Tenis de cuero blanco', price_cents: 29900000, category_id: 'calzado', image: p2 },
    { id: '3', name: 'Blusa de seda marfil', price_cents: 21900000, category_id: 'prendas', image: p3 },
    { id: '4', name: 'Bolso estructurado negro', price_cents: 38900000, category_id: 'accesorios', image: p4 },
    { id: '5', name: 'Gafas de carey', price_cents: 15900000, category_id: 'accesorios', image: p5 },
    { id: '6', name: 'Gabardina camel', price_cents: 46900000, category_id: 'prendas', badge: 'Nuevo', image: p6 },
    { id: '7', name: 'Suéter de lana acanalado', price_cents: 24900000, category_id: 'prendas', image: p7 },
    { id: '8', name: 'Botines chelsea de cuero', price_cents: 34900000, category_id: 'calzado', image: p8 },
  ],
}
