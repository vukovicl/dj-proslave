export function getSeoMeta(path: string, title: string, description: string, keywords: string, ogImage: string = "/logo.png") {
  const domain = "https://djproslave.com";
  
  const cleanPath = path.replace(/^\/|\/$/g, '');
  const pathSuffix = cleanPath ? `/${cleanPath}/` : '/';

  const currentUrl = `${domain}${pathSuffix}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${domain}${ogImage}`;

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "theme-color", content: "#0a0a0a" },
    { name: "author", content: "DJ Proslave" },
    
    // Open Graph
    { property: "og:site_name", content: "DJ Proslave" },
    { property: "og:locale", content: "hr_HR" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: currentUrl },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: fullOgImage },
    { property: "og:image:secure_url", content: fullOgImage },
    { property: "og:image:type", content: "image/png" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: fullOgImage },
    { name: "apple-mobile-web-app-title", content: "DJ Proslave" },
    
    // Canonical link
    { tagName: "link", rel: "canonical", href: currentUrl }
  ];
}
