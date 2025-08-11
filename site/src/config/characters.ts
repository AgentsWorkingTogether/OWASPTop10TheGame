// Configuración centralizada de personajes del juego
// Este archivo puede ser importado por cualquier componente que necesite información de personajes

export interface Character {
  key: string;
  name: string;
  description: string;
  details: string;
  type: 'good' | 'bad';
}

// Definir los personajes disponibles (sin imágenes para evitar problemas de import)
export const characters: Character[] = [
  {
    key: 'ciso',
    name: 'CISO',
    description: 'El Chief Information Security Officer. Líder estratégico responsable de establecer y mantener la postura de seguridad de la organización.',
    details: 'Define políticas de seguridad, gestiona incidentes y asegura el cumplimiento normativo. Su visión estratégica es fundamental para proteger los activos críticos.',
    type: 'good'
  },
  {
    key: 'pentester',
    name: 'PENTESTER',
    description: 'Especialista en pruebas de penetración. Evalúa la seguridad de sistemas y aplicaciones simulando ataques reales para identificar vulnerabilidades.',
    details: 'Utiliza técnicas de hacking ético, herramientas de auditoría y metodologías estructuradas para descubrir fallos de seguridad antes de que sean explotados por atacantes reales.',
    type: 'good'
  },
  {
    key: 'cloud_security',
    name: 'CLOUD SECURITY',
    description: 'Especialista en seguridad de la nube. Protege infraestructuras cloud, aplicaciones SaaS y datos distribuidos en entornos virtuales.',
    details: 'Implementa controles de seguridad específicos para cloud, gestiona identidades y accesos, y asegura la conformidad con estándares de seguridad en la nube.',
    type: 'good'
  },
  {
    key: 'script_kiddie',
    name: 'SCRIPT KIDDIE',
    description: 'Atacante inexperto que utiliza herramientas y scripts predefinidos sin comprender completamente su funcionamiento.',
    details: 'Aunque carece de conocimientos técnicos profundos, puede ser peligroso al explotar vulnerabilidades conocidas y causar daños significativos a sistemas mal configurados.',
    type: 'bad'
  },
  {
    key: 'cracker',
    name: 'CRACKER',
    description: 'Hacker malicioso con conocimientos técnicos avanzados. Se especializa en romper sistemas de seguridad y acceder ilegalmente a información protegida.',
    details: 'Utiliza técnicas sofisticadas de hacking, ingeniería social y exploits de día cero. Su objetivo es comprometer sistemas, robar datos sensibles y causar daños significativos a las organizaciones.',
    type: 'bad'
  },
  {
    key: 'cyberterrorist',
    name: 'CYBERTERRORIST',
    description: 'Extremadamente peligroso, utiliza ciberataques para causar daños masivos y caos en sistemas críticos.',
    details: 'Su objetivo principal es interrumpir servicios esenciales, causar pánico social y generar impacto mediático. Utiliza técnicas avanzadas de hacking, malware sofisticado y ataques coordinados contra infraestructura crítica.',
    type: 'bad'
  },
  {
    key: 'threat_hunter',
    name: 'THREAT HUNTER',
    description: 'Especialista en caza de amenazas. Dedicado a buscar proactivamente indicadores de compromiso y actividades maliciosas en sistemas.',
    details: 'Utiliza herramientas avanzadas de análisis forense, inteligencia de amenazas y técnicas de detección para identificar y neutralizar ataques antes de que causen daños significativos.',
    type: 'good'
  },
  {
    key: 'hacktivist',
    name: 'HACKTIVIST',
    description: 'Activista digital que utiliza técnicas de hacking para promover causas sociales o políticas.',
    details: 'Aunque sus motivos pueden estar justificados, sus métodos incluyen ciberataques, defacement de sitios web y filtraciones de datos para crear conciencia sobre sus causas.',
    type: 'bad'
  },
  {
    key: 'malware_analyst',
    name: 'MALWARE ANALYST',
    description: 'Especialista en análisis de malware. Dedicado a estudiar y diseccionar software malicioso para entender su funcionamiento y crear contramedidas.',
    details: 'Utiliza herramientas de análisis estático y dinámico, entornos de sandboxing y técnicas de ingeniería inversa para identificar patrones de ataque y desarrollar firmas de detección.',
    type: 'good'
  },
  {
    key: 'incident_responder',
    name: 'INCIDENT RESPONDER',
    description: 'Especialista en respuesta a incidentes de seguridad. Coordina y ejecuta la respuesta inmediata a ciberataques y brechas de seguridad.',
    details: 'Implementa procedimientos de contención, recopila evidencia forense, coordina con equipos internos y externos, y restaura la operatividad de los sistemas afectados.',
    type: 'good'
  }
];

// Función helper para obtener un personaje por su clave
export function getCharacterByKey(key: string): Character | undefined {
  return characters.find(char => char.key === key);
}

// Función helper para obtener todos los personajes
export function getAllCharacters(): Character[] {
  return characters;
}

// Función helper para obtener solo las claves de los personajes
export function getCharacterKeys(): string[] {
  return characters.map(char => char.key);
}

// Función helper para obtener solo los nombres de los personajes
export function getCharacterNames(): string[] {
  return characters.map(char => char.name);
}

// Función helper para obtener personajes por tipo
export function getCharactersByType(type: 'good' | 'bad'): Character[] {
  return characters.filter(char => char.type === type);
}

// Función helper para obtener solo los "buenos" (defensores)
export function getGoodGuys(): Character[] {
  return getCharactersByType('good');
}

// Función helper para obtener solo los "malos" (atacantes)
export function getBadGuys(): Character[] {
  return getCharactersByType('bad');
}
