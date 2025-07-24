import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  
  // Si ya estamos en una ruta con idioma, continuar
  if (pathname.startsWith('/es') || pathname.startsWith('/en')) {
    return next();
  }
  
  // Si estamos en la raíz, detectar idioma del navegador
  if (pathname === '/') {
    const acceptLanguage = context.request.headers.get('accept-language');
    let preferredLang = 'es'; // default
    
    if (acceptLanguage) {
      // Parsear el header Accept-Language
      const languages = acceptLanguage
        .split(',')
        .map(lang => {
          const [language, quality = '1'] = lang.trim().split(';q=');
          return { language: language.split('-')[0], quality: parseFloat(quality) };
        })
        .sort((a, b) => b.quality - a.quality);
      
      // Buscar el primer idioma soportado
      const supportedLang = languages.find(lang => ['es', 'en'].includes(lang.language));
      if (supportedLang) {
        preferredLang = supportedLang.language;
      }
    }
    
    // Redirigir al idioma preferido
    return context.redirect(`/${preferredLang}`);
  }
  
  return next();
}); 