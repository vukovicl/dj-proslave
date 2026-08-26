import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("home/Home.tsx"),
  route("o-nama", "about/About.tsx"),
  route("usluge", "services/Services.tsx"),
  route("galerija", "gallery/Gallery.tsx"),
  route("kontakt", "contact/Contact.tsx"),
  route("dj-za-korporativni-dogadaj", "event-dj/EventDJ.tsx"),
  route("dj-za-proslave", "celebration-dj/CelebrationDJ.tsx"),
  route("dj-za-vjencanja", "wedding-dj/WeddingDJ.tsx"),
  route("politika-privatnosti", "legal/PrivacyPolicy.tsx"),
  route("uvjeti-koristenja", "legal/TermsOfUse.tsx"),
  route("blog", "blog/Blog.tsx"),
  route("blog/kako-odabrati-dj-a-za-vjencanje", "blog/posts/PostVjencanje.tsx"),
  route("blog/najbolja-glazba-za-evente", "blog/posts/PostEventi.tsx"),
] satisfies RouteConfig;
