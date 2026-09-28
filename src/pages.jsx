import { Section } from './sections.jsx'

// This template's pages, in code. Each <Section> is an ordinary component
// call: change its props, replace it with your own JSX, add anything you
// like, delete what you do not want. Nothing reads a document to undo you.
// The look — fonts, colours, spacing, the header — is src/theme.css.

// The Google Fonts these pages and theme.css name. Add a key when you use a new one.
export const fonts = ["playfair", "manrope"]

export function Home() {
  return <main>
    <Section section={{
        id: "ticker",
        type: "marquee",
        props: {
          items: [
            "Nueva temporada",
            "Descubre las novedades",
            "Estilo para cada día"
          ],
          speed: "slow"
        }
      }} />
    <Section section={{
        id: "hero",
        type: "hero",
        props: {
          title: "La nueva temporada",
          subtitle: "Prendas, calzado y accesorios para usar una y otra vez.",
          button_label: "Ver novedades",
          design: {
            variant: "split"
          }
        }
      }} />
    <Section section={{
        id: "new",
        type: "product_carousel",
        props: {
          title: "Recién llegados",
          limit: 8,
          design: {
            columns: 4
          }
        }
      }} />
    <Section section={{
        id: "craft",
        type: "rich_text",
        props: {
          eyebrow: "El corte",
          title: "Todo empieza por cómo te queda",
          body: "Buscamos prendas que sienten bien, telas agradables al tacto y detalles que se notan de cerca. Piezas pensadas para combinarse entre sí, del lunes al fin de semana.",
          button_label: "Ver la colección",
          image_side: "right"
        }
      }} />
    <Section section={{
        id: "collection",
        type: "product_grid",
        props: {
          title: "Comprar todo",
          chips: true,
          limit: 8,
          design: {
            columns: 4
          }
        }
      }} />
    <Section section={{
        id: "benefits",
        type: "benefits",
        props: {}
      }} />
  </main>
}

export function Product() {
  return <main>
    <Section section={{
        id: "detail",
        type: "product_detail",
        props: {
          design: {
            variant: "split"
          }
        }
      }} />
    <Section section={{
        id: "suggested",
        type: "product_suggested",
        props: {
          title: "Combínalo con",
          limit: 4,
          design: {
            columns: 4
          }
        }
      }} />
  </main>
}
