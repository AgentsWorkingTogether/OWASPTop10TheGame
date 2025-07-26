export type Language = 'es' | 'en';

export const languages: Language[] = ['es', 'en'];

// Traducciones directamente en el archivo (enfoque temporal)
export const translations = {
  es: {
    meta: {
      title: "OWASP Top 10 The Game - El Juego de Mesa de Ciberseguridad",
      description: "OWASP Top 10 The Game - El Juego de Mesa de Ciberseguridad"
    },
    header: {
      title: "OWASP TOP 10",
      subtitle: "The Game"
    },
    nav: {
      home: "Inicio",
      game: "El Juego",
      characters: "Personajes",
      components: "Componentes",
      rules: "Reglamento",
      team_building: "Extension-Team Building"
    },
    home: {
      title: "La Ciberseguridad <br>Nunca fue tan divertida.",
      subtitle: "El juego de mesa <strong>Print & Play</strong> para aprender sobre las listas de amenazas OWASP Top 10.",
      subtitle2: "Defiende tus sistemas, explota las amenazas y conviértete en una leyenda",
      button: "Descarga, Imprime y Juega"
    },
    about: {
      title: "CONFIDENCIAL: <br>Informe de Situación",
      subject: "Asunto:",
      game_name: "OWASP Top 10 \"The Game\".",
      objective: "Objetivo:",
      objective_desc: "Eres un profesional de la ciberseguridad y tu misión es proteger los activos de tu organización.",
      description: "Usa tus conocimientos sobre las 10 vulnerabilidades más críticas para desplegar defensas, lanzar ataques y sabotear a tus oponentes. Cada partida es única, cada decisión cuenta. ¿Tienes lo que hay que tener?"
    },
    characters: {
      title: "Personajes",
      pentester: {
        name: "PENTESTER",
        description: "Especialista en pruebas de penetración. Evalúa la seguridad de sistemas y aplicaciones simulando ataques reales para identificar vulnerabilidades.",
        details: "Utiliza técnicas de hacking ético, herramientas de auditoría y metodologías estructuradas para descubrir fallos de seguridad antes de que sean explotados por atacantes reales."
      },
      ciso: {
        name: "CISO",
        description: "El Chief Information Security Officer. Líder estratégico responsable de establecer y mantener la postura de seguridad de la organización.",
        details: "Define políticas de seguridad, gestiona incidentes y asegura el cumplimiento normativo. Su visión estratégica es fundamental para proteger los activos críticos."
      },
      cloud_security: {
        name: "CLOUD SECURITY",
        description: "Especialista en seguridad de la nube. Protege infraestructuras cloud, aplicaciones SaaS y datos distribuidos en entornos virtuales.",
        details: "Implementa controles de seguridad específicos para cloud, gestiona identidades y accesos, y asegura la conformidad con estándares de seguridad en la nube."
      },
      script_kiddie: {
        name: "SCRIPT KIDDIE",
        description: "Atacante inexperto que utiliza herramientas y scripts predefinidos sin comprender completamente su funcionamiento.",
        details: "Aunque carece de conocimientos técnicos profundos, puede ser peligroso al explotar vulnerabilidades conocidas y causar daños significativos a sistemas mal configurados."
      },
      cracker: {
        name: "CRACKER",
        description: "Hacker malicioso con conocimientos técnicos avanzados. Se especializa en romper sistemas de seguridad y acceder ilegalmente a información protegida.",
        details: "Utiliza técnicas sofisticadas de hacking, ingeniería social y exploits de día cero. Su objetivo es comprometer sistemas, robar datos sensibles y causar daños significativos a las organizaciones."
      },
      cyberterrorist: {
        name: "CYBERTERRORIST",
        description: "Atacante extremadamente peligroso que utiliza ataques cibernéticos para causar daños masivos y caos en sistemas críticos.",
        details: "Su objetivo principal es interrumpir servicios esenciales, causar pánico social y generar impacto mediático. Utiliza técnicas avanzadas de hacking, malware sofisticado y ataques coordinados contra infraestructuras críticas."
      },
      threat_hunter: {
        name: "THREAT HUNTER",
        description: "Especialista en caza de amenazas. Se dedica a buscar proactivamente indicadores de compromiso y actividades maliciosas en los sistemas.",
        details: "Utiliza herramientas avanzadas de análisis forense, inteligencia de amenazas y técnicas de detección para identificar y neutralizar ataques antes de que causen daños significativos."
      },
      hacktivist: {
        name: "HACKTIVIST",
        description: "Activista digital que utiliza técnicas de hacking para promover causas sociales o políticas.",
        details: "Aunque sus motivos pueden ser justificados, sus métodos incluyen ataques cibernéticos, defacement de sitios web y filtraciones de datos para crear conciencia sobre sus causas."
      },
      malware_analyst: {
        name: "MALWARE ANALYST",
        description: "Especialista en análisis de malware. Se dedica a estudiar y descomponer software malicioso para entender su funcionamiento y crear contramedidas.",
        details: "Utiliza herramientas de análisis estático y dinámico, entornos de sandboxing y técnicas de ingeniería inversa para identificar patrones de ataque y desarrollar firmas de detección."
      },
      incident_responder: {
        name: "INCIDENT RESPONDER",
        description: "Especialista en respuesta a incidentes de seguridad. Se encarga de contener, erradicar y recuperar sistemas afectados por ataques cibernéticos.",
        details: "Coordina la respuesta inmediata a incidentes, preserva evidencia forense, implementa medidas de contención y restaura los servicios afectados minimizando el impacto en la organización."
      }
    },
    components: {
      title: "Componentes",
      action_cards: {
        title: "Cartas de Acción",
        description: "Estas son las cartas fundamentales del juego que determinan las acciones de cada jugador en cada ronda.",
        protection: {
          title: "Carta de Protección",
          description: "Representa una acción defensiva. Cuando se juega esta carta, el jugador está intentando proteger una amenaza del sistema contra posibles ataques."
        },
        attack: {
          title: "Carta de Ataque",
          description: "Representa una acción ofensiva. Cuando se juega esta carta, el jugador está intentando explotar una vulnerabilidad del sistema."
        }
      },
      leader: {
        title: "Líder",
        description: "El líder es el coordinador del equipo de seguridad. Su rol es fundamental para organizar las defensas y coordinar las acciones del grupo.",
        responsibilities: {
          title: "Responsabilidades",
          description: "Coordina las acciones del equipo, distribuye las cartas de acción, y toma decisiones estratégicas sobre qué amenazas priorizar."
        },
        skills: {
          title: "Habilidades",
          description: "Comunicación efectiva, pensamiento estratégico y capacidad para motivar al equipo hacia objetivos comunes de seguridad."
        }
      },
      trust_indicator: {
        title: "Marcador de Confianza",
        description: "El marcador de confianza es un indicador visual que muestra el nivel de confianza y colaboración entre los miembros del equipo de seguridad. Las fichas azules marcan el nivel actual de confianza del equipo.",
        high: {
          title: "Alto Nivel",
          description: "Indica que el equipo está trabajando de manera colaborativa y efectiva, con buena comunicación y coordinación entre todos los miembros."
        },
        medium: {
          title: "Nivel Medio",
          description: "Muestra que hay cierta colaboración pero se pueden mejorar los niveles de comunicación y coordinación del equipo."
        },
        low: {
          title: "Bajo Nivel",
          description: "Indica problemas de comunicación, falta de coordinación o conflictos que pueden afectar la efectividad del equipo de seguridad."
        }
      },
      action_protocol: {
        title: "Protocolo de Actuación",
        kickoff_title: "KICKOFF",
        kickoff_desc: "Reunión inicial donde se selecciona el mapa del sistema, se contratan empleados y se elige al primer líder del equipo de seguridad.",
        followup_title: "REUNIÓN DE SEGUIMIENTO",
        followup_desc: "Permite reiniciar los trabajos, elegir nuevo líder, nuevo equipo y sobre todo mejorar la confianza entre todos para los nuevos desafíos.",
        retrospective_title: "REUNIÓN DE RETROSPECTIVA",
        retrospective_desc: "Reunión final donde todos se ven las caras y ponen en común sin ningún tipo de tapujos lo que se ha hecho mal y lo que se ha hecho bien.",
        button: "Leer Reglamento Completo"
      },
      system_map: {
        title: "El Mapa de Sistema",
        desc: "El mapa del sistema es la representación visual de la infraestructura que el equipo de seguridad debe proteger. Muestra las diferentes áreas y componentes que pueden ser vulnerables a ataques.",
        threat_areas: {
          title: "Áreas de Amenaza",
          desc: "Cada círculo en el mapa representa una amenaza específica del sistema que debe ser identificada y protegida por el equipo."
        },
        qr_codes: {
          title: "Códigos QR",
          desc: "Cada amenaza contiene un código QR que proporciona información detallada sobre la vulnerabilidad y cómo mitigarla."
        },
        green_tokens: {
          title: "Fichas OWASP Verdes",
          desc: "Cuando se colocan en el mapa, representan las vulnerabilidades del OWASP Top 10 que han sido identificadas y mitigadas exitosamente por el equipo de seguridad."
        },
        red_tokens: {
          title: "Fichas OWASP Rojas",
          desc: "Cuando se colocan en el mapa, representan las vulnerabilidades del OWASP Top 10 que ya han sido explotadas por los atacantes."
        }
      }
    },
    rules: {
      title: "Reglamento Completo",
             map_selection: {
         title: "Fase de Selección de Mapa del Sistema",
         desc: "En esta fase hay que seleccionar la tarjeta de mapa del sistema que el grupo de expertos va a estudiar y proteger. En este mapa aparecerán unos círculos situados en diferentes zonas que serán las amenazas que tiene este sistema.",
         qr_info: "En el interior tienen un código QR y un identificador. Si capturas ese QR podrás leer sobre esa amenaza, aprenderás sobre ella y también cómo se puede mitigar.",
         numbers_info: "Junto a cada amenaza en su parte derecha aparecen una serie de números. Estos números tendrán una base y un exponente.",
         base_info: "La base será el número de integrantes del equipo que se mandará a defender esa amenaza.",
         exponent_info: "El exponente será un número o rango de números, que deberá coincidir con el número de trabajadores que han sido contratados por la empresa."
       },
       hiring: {
         title: "Fase de Contratación",
         desc: "La siguiente tabla muestra el número de cartas que se deben usar dependiendo del número de expertos que va a contratar la empresa:",
         table: {
           experts: "Expertos",
           good: "Buenos",
           not_good: "No tan Buenos"
         },
         procedure: {
           title: "Procedimiento:",
           step1: "Mantén las cartas de los buenos seleccionadas separadas de las cartas de los no tan buenos seleccionadas.",
           step2: "Con las demás crea un mazo de cartas descartadas.",
           step3: "En el mazo de cartas de los buenos debes añadir la carta del CISO si no estuviera anteriormente.",
           step4: "Si ya estuviera la carta de CISO añade una carta de los buenos a tu elección adicional al mazo de los buenos.",
           step5: "Si la empresa ya hubiera contratado a los 10 expertos no sería necesario realizar esta tarea.",
           step6: "En el caso contrario ahora tendrás una carta de más de los buenos y tendrás que mezclar bocabajo dicho mazo y descartar una carta sin que nadie vea cuál es.",
           step7: "Una vez hecho el descarte junta todas las cartas de los buenos que quedan y las de los no tan buenos y mézclalas todas.",
           step8: "Reparte una carta a cada persona. Estas cartas no se podrán enseñar a nadie, solo el dueño de la carta podrá mirarla."
         }
       },
       secrets: {
         title: "Fase de Secretos",
         standard_procedure: {
           title: "Procedimiento estándar:",
           step1: "Se cierran los ojos y solo los no tan buenos abren los ojos. De esta forma conocen a sus compañeros.",
           step2: "Ahora cierran los ojos y levantan el pulgar los no tan buenos para que el CISO abra los ojos y descubra quienes son los no tan buenos.",
           step3: "El CISO deberá nuevamente cerrar los ojos y los no tan bueno deberán de bajar los pulgares.",
           step4: "Finalmente todos los empleados abren los ojos."
         },
         blind_variant: {
           title: "Variante a ciegas:",
           step1: "Inicias con todos con los ojos cerrados.",
           step2: "Los no tan buenos levantan el pulgar sin abrir los ojos y el CISO abre los ojos.",
           step3: "El CISO deberá nuevamente cerrar los ojos y los no tan bueno deberán de bajar los pulgares."
         },
                    note: "Nota:",
           secrets_note: "Puede darse el caso que nadie tuviera la carta de CISO pero hay que seguir haciendo este procedimiento porque esto no se sabrá hasta que termine el juego."
         },
         kickoff: {
           title: "Reunión de Kickoff",
           desc: "En esta reunión todos los empleados contratados se conocen y por primera vez pueden hablar entre ellos. Podrán decir lo que quieran, sin ningún tipo de restricción. Tan solo no podrán enseñar su carta a nadie.",
           system_study: {
             title: "Estudio del Sistema",
             desc: "Tendrán que estudiar el mapa y entender bien lo que ofrece este sistema."
           },
           leader_election: {
             title: "Elección del Líder",
             desc: "Tendrán que ponerse de acuerdo para elegir un líder. Para ello tendrán que votar al unísono apuntando con el dedo a la persona que cada uno decida.",
             step1: "El que más votos tenga será el nuevo líder.",
             step2: "En el caso de empate todos tendrán que volver a votar un líder entre los empleados que han quedado empatados con más votos.",
             step3: "Antes de volver a votar tendréis que quitar del marcador de confianza tantas fichas azules como líderes elegidos menos 1.",
             step4: "Si se vuelve a votar y sigue habiendo empate se seguirán quitando fichas azules siguiendo el mismo criterio.",
             step5: "En el caso que se tenga que quitar una ficha azul al marcador de confianza y ya no quedan, los no tan buenos habrán ganado la partida."
           },
           threat_selection: {
             title: "Selección de Amenaza y Equipo",
             desc1: "El líder ahora será el que decida qué amenaza será la primera en proteger y si alguien tiene alguna duda sobre esa amenaza será el encargado de explicarla.",
             desc2: "Una vez seleccionada debe elegir el equipo que se encargará de protegerla. El número de integrantes de ese equipo tendrá que ser el valor de la base cuyo exponente esté dentro del rango o sea el valor de los empleados que ha contratado la empresa.",
             desc3: "Para elegirlos el líder deberá entregarles a cada uno una carta de credenciales de acceso y dos cartas de acción: la carta de ataque y la carta de protección."
           }
         },
         action_phase: {
           title: "Fase de Acción",
           desc: "Es el momento de proteger el sistema de esa amenaza latente. Para ello los integrantes del equipo elegidos deberán seleccionar en secreto entre una de las cartas de acción.",
           good_guys: "Los Buenos",
           good_guys_desc: "Que pertenecen al equipo, es decir, que tienen la carta de credencial de acceso, como es de esperar, elegirán la carta de acción de proteger aunque nada les impide elegir la carta de atacar si así lo entienden por estrategia.",
           bad_guys: "Los No Tan Buenos",
           bad_guys_desc: "A los que se les ha entregado la carta de credenciales de acceso, igualmente deberán elegir una de esas cartas de acción pero a estos les interesa que la amenaza sea explotada.",
           final_desc: "Todos los integrantes de ese equipo entregan su carta de acción elegida al líder y este las mezclará sin que nadie, incluso el propio líder, vea que carta ha entregado cada integrante."
         },
         results_phase: {
           title: "Fase Informe de Resultados",
           desc: "El líder reúne a todos los empleados y comienza a levantar las cartas de acción de una en una.",
           threat_exploited: {
             title: "Amenaza Explotada",
             desc: "Si al menos una de las cartas de acción que muestra es una carta de ataque la amenaza ha sido explotada y se coloca una ficha de OWASP de color rojo sobre el círculo de dicha amenaza."
           },
           threat_contained: {
             title: "Amenaza Contenida",
             desc: "Por el contrario si todas las cartas de acción levantadas son de protección la amenaza se ha contenido y mitigado y se debe colocar una ficha de OWASP verde."
           },
           important_notes: {
             title: "Notas importantes:",
             note1: "En algunas amenazas explotarlas será mucho más complicado de lo normal siendo necesario al menos dos cartas de acción de ataque. Estas amenazas están marcadas con un doble círculo.",
             variant_title: "Variante:",
             variant_desc: "Las cartas de acción serán levantadas de una en una pero el líder puede decidir si ya se ha explotado la amenaza no seguir levantando cartas. Si hace esta acción deberá quitarse una ficha azul del marcador de confianza."
           },
           protection_layers: {
             title: "Capas de Protección",
             desc: "En algunos mapas existen capas o niveles de protección y las amenazas se encuentran repartidas dentro de estos niveles. Estas capas se diferencian por el número de nivel que aparecerá en el lado izquierdo de cada uno de los círculos de las amenazas.",
             level1: "Una capa de nivel 1 será la capa más expuesta del sistema.",
             level3: "Una capa de nivel 3 será la capa más interna del sistema.",
             protection: "Si los buenos consiguen proteger todas y cada una de las amenazas de una capa entonces las capas interiores sobre las que no se ha hecho nada aún pasarán a estar protegidas.",
             exploited: "Si por el contrario una amenaza de una capa ya está explotada esa capa ya no se podrá proteger en su totalidad."
           }
         },
         retrospective: {
           title: "Reunión de Retrospectiva",
           desc: "Esta reunión se activa cuando:",
           good_guys_victory: "Victoria de los Buenos",
           good_guys_victory_desc: "Si el número de amenazas protegidas es mayor a la suma de las amenazas no protegidas más las que quedan por decidir los buenos han conseguido proteger el sistema en su totalidad.",
           bad_guys_victory: "Victoria de los No Tan Buenos",
           bad_guys_victory_desc: "Si el número de amenazas explotadas es mayor o igual al número de amenazas protegidas más las que quedan por hacer algo entonces los no tan buenos han hackeado el sistema.",
           last_chance: "Última Oportunidad de los No Tan Buenos",
           last_chance_desc: "En el caso que el sistema haya sido protegido, los no tan buenos tienen una última oportunidad: decir quién entre todos los empleados es el CISO.",
           last_chance_step1: "Para ello todos los empleados tendrán que votar al unísono apuntando con el dedo.",
           last_chance_step2: "Solo contarán los votos de los no tan buenos que revelarán su carta después de que todos los empleados hayan votado.",
           last_chance_step3: "Si todos los no tan buenos apuntan al CISO, son los ganadores.",
           last_chance_step4: "Si uno o más de los no tan buenos fallan, habrán perdido definitivamente.",
           last_chance_step5: "Si cada uno de los no tan buenos apunta a sí mismo y no hay CISO contratado como empleado, los no tan buenos habrán ganado la partida.",
           important_note: "Importante:",
           important_note_desc: "Las cartas no se deben revelar aún hasta después de esta fase."
         },
         followup: {
           title: "Reunión de Seguimiento",
           desc: "En el caso que no se cumplan los criterios para activar la reunión de retrospectiva se activan las reuniones de seguimiento.",
           procedure_title: "Procedimiento:",
           step1: "Estas reuniones reinician la ronda.",
           step2: "Provocan que se añada una ficha azul al marcador de confianza.",
           step3: "Las cartas de credenciales de acceso se devuelven al líder y las cartas de acción también se le devuelven sin que nadie las vea.",
           step4: "El líder debe mezclarlas al recibirlas junto con las que ya tenía.",
           step5: "Es momento de elegir un nuevo líder de nuevo y empezar el proceso."
                  },
         action_phases: {
           action_phase: {
             title: "Fase de Acción",
             desc: "Es hora de proteger el sistema de esa amenaza latente. Para ello los integrantes del equipo seleccionado deben elegir secretamente entre una de las cartas de acción.",
             good_guys_desc: "Quienes pertenecen al equipo, es decir, quienes tienen la carta de credenciales de acceso, como es de esperar, elegirán la carta de acción de protección, aunque nada les impide elegir la carta de ataque si lo entienden como estrategia.",
             bad_guys_desc: "Quienes han sido dados la carta de credenciales de acceso también deben elegir una de esas cartas de acción, pero estos están interesados en que la amenaza sea explotada.",
             final_desc: "Todos los integrantes de ese equipo entregan su carta de acción elegida al líder y este las mezclará sin que nadie, incluso el propio líder, vea que carta ha entregado cada integrante."
           },
           results_phase: {
             title: "Fase Informe de Resultados",
             desc: "El líder reúne a todos los empleados y comienza a levantar las cartas de acción de una en una.",
             threat_exploited: {
               title: "Amenaza Explotada",
               desc: "Si al menos una de las cartas de acción que muestra es una carta de ataque la amenaza ha sido explotada y se coloca una ficha de OWASP de color rojo sobre el círculo de dicha amenaza."
             },
             threat_contained: {
               title: "Amenaza Contenida",
               desc: "Por el contrario si todas las cartas de acción levantadas son de protección la amenaza se ha contenido y mitigado y se debe colocar una ficha de OWASP verde."
             },
             important_notes: {
               title: "Notas importantes:",
               note1: "En algunas amenazas explotarlas será mucho más complicado de lo normal siendo necesario al menos dos cartas de acción de ataque. Estas amenazas están marcadas con un doble círculo.",
               variant_title: "Variante:",
               variant_desc: "Las cartas de acción serán levantadas de una en una pero el líder puede decidir si ya se ha explotado la amenaza no seguir levantando cartas. Si hace esta acción deberá quitarse una ficha azul del marcador de confianza."
             },
             protection_layers: {
               title: "Capas de Protección",
               desc: "En algunos mapas existen capas o niveles de protección y las amenazas se encuentran repartidas dentro de estos niveles. Estas capas se diferencian por el número de nivel que aparecerá en el lado izquierdo de cada uno de los círculos de las amenazas.",
               level1: "Una capa de nivel 1 será la capa más expuesta del sistema.",
               level3: "Una capa de nivel 3 será la capa más interna del sistema.",
               protection: "Si los buenos consiguen proteger todas y cada una de las amenazas de una capa entonces las capas interiores sobre las que no se ha hecho nada aún pasarán a estar protegidas.",
               exploited: "Si por el contrario una amenaza de una capa ya está explotada esa capa ya no se podrá proteger en su totalidad."
             }
           },
           retrospective: {
             title: "Reunión de Retrospectiva",
             desc: "Esta reunión se activa cuando:",
             good_guys_victory: {
               title: "Victoria de los Buenos",
               desc: "Si el número de amenazas protegidas es mayor a la suma de las amenazas no protegidas más las que quedan por decidir los buenos han conseguido proteger el sistema en su totalidad."
             },
             bad_guys_victory: {
               title: "Victoria de los No Tan Buenos",
               desc: "Si el número de amenazas explotadas es mayor o igual al número de amenazas protegidas más las que quedan por hacer algo entonces los no tan buenos han hackeado el sistema."
             },
             last_chance: {
               title: "Última Oportunidad de los No Tan Buenos",
               desc: "En el caso de haberse protegido el sistema los no tan buenos tienen una última oportunidad: decir quién de todos los empleados es el CISO.",
               step1: "Para ello tendrán que votar todos los empleados al unísono señalando con el dedo.",
               step2: "Solo contarán los votos de los no tan buenos que descubrirán su carta después de haber votado todos los empleados.",
               step3: "Si todos los no tan buenos señalan al CISO ellos son los vencedores.",
               step4: "Si uno o más de los no tan buenos falla habrán perdido definitivamente.",
               step5: "Si se señalan cada uno de los no tan buenos a sí mismo y no existe ningún CISO contratado como empleado habrán ganado la partida los no tan buenos."
             },
             important_note: "Importante:",
             important_note_desc: "No se deben levantar las cartas todavía hasta después de esta fase."
           },
           followup: {
             title: "Reunión de Seguimiento",
             desc: "En el caso de no cumplirse el criterio para activar la reunión de retrospectiva se activan las reuniones de seguimiento.",
             procedure: {
               title: "Procedimiento:",
               step1: "Estas reuniones reinician la ronda.",
               step2: "Hacen que se añada una ficha azul al marcador de confianza.",
               step3: "Se devuelven al líder las cartas de credencial de acceso y también se le devuelven las cartas de acción sin que nadie las vea.",
               step4: "El líder deberá mezclarlas al recibirlas junto con las que ya tenía.",
               step5: "Es hora de volver a elegir a un nuevo líder y comenzar de nuevo el proceso."
             }
           }
         },
         team_building: {
           title: "Extensión - Team Building",
           desc: "En este modo de juego las cartas de Team Building serán repartidas de la forma que se describe a continuación en la reunión de kickoff o en las reuniones de seguimiento por el nuevo líder justo después de haber sido elegido.",
           deck_preparation: {
             title: "Preparación del Mazo",
             desc1: "Primero se debe preparar al principio de la reunión de kickoff el mazo de cartas de team building dependiendo del número de empleados contratados.",
             desc2: "Para ello se debe observar los números que aparecen junto al círculo en su parte derecha en cada una de las cartas de team building. Selecciona para crear el mazo las cartas que tengan en su exponente el número o rango de números de empleados que ha contratado la empresa."
           },
           card_distribution: {
             title: "Reparto de Cartas",
             desc1: "Una vez creado este mazo y elegido al líder, este sacará de este mazo previamente mezclado:",
             cards_3: "3 cartas",
             cards_2: "2 cartas",
             for_8to10: "para empresas que han contratado 8-9-10 empleados",
             for_5to7: "para 5-6-7 empleados contratados",
             desc2: "Solo él las podrá ver. Seguidamente entregará estas cartas a otro empleado que las mezclará y las entregará en el orden que indique el líder a los empleados que elija, pero ni él ni su ayudante podrán ver qué carta es la que se entrega a cada empleado."
           },
           card_usage: {
             title: "Uso de las Cartas",
             desc1: "Una vez elegidos los integrantes del equipo aquellos que tengan una carta de team building y sean del equipo, de uno en uno, deberán enseñarla a todos siguiendo el orden del sentido de las agujas del reloj desde la posición en la que se encuentra el líder.",
             desc2: "Cada integrante deberá aplicar su efecto si es de tipo \"inmediatamente\" o decidir si quiere o no aplicar su efecto en esta ronda si es de tipo \"1 solo uso\". Si decide no aplicar su efecto debe dejar la carta visible.",
             desc3: "Es posible que ya existieran cartas de team building previamente asignadas de rondas anteriores, si alguna de ellas es de alguno de los integrantes del equipo podrán aplicar su efecto si así lo deciden."
           },
           cards_list: {
             title: "Listado de Cartas de Team Building",
             confidence: {
               title: "Confidence (Inmediatamente)",
               desc: "Si el líder te asigna esta carta tendrás que pedirle que enseñe su carta de empleado a cualquier empleado que tu decidas, incluso a ti mismo. (En el caso en que la fase de secretos se hubieran conocido los no tan buenos es el líder el que elige a quien enseñársela)",
               effect: "Efecto:",
               effect_desc: "Esta carta obliga a añadir una ficha azul al marcador de confianza.<br>Devuelve tu carta al mazo de descartes."
             },
             take_control: {
               title: "Take Control (Inmediatamente)",
               desc: "Si el líder te asigna esta carta pasarás a ser el nuevo líder y tienes que elegir nuevamente amenaza y equipo. Este nuevo líder bloquea el proceso y uso de las cartas de team building en esta ronda. Si alguien tiene una carta de \"inmediatamente\" tendrá que descartarla inmediatamente.",
               effect: "Efecto:",
               effect_desc: "Esta carta obliga a quitar una ficha azul del marcador de confianza.<br>Devuelve tu carta al mazo de descartes."
             },
             rejection: {
               title: "Rejection (1 solo uso)",
               desc: "Si el líder te asigna esta carta y te seleccionan en un equipo debes repudiar la elección de líder y decidirlo tu directamente reiniciando la elección de amenaza y equipo y proceso de entrega de cartas de team building. Si alguien tiene una carta de \"inmediatamente\" tendrá que descartarla inmediatamente.",
               effect: "Efecto:",
               effect_desc: "Usar esta carta obliga a quitar una ficha azul del marcador de confianza.<br>Al usarla devuelve tu carta al mazo de descartes."
             },
             peer_review: {
               title: "Peer Review (1 solo uso)",
               desc: "Si tienes esta carta y te seleccionan para un equipo podrás elegir a otra persona que no está dentro del equipo para que sea parte de él y se le entregue una carta de credenciales de acceso siendo integrante de pleno derecho aunque se supere el número de integrantes de equipo indicado en la amenaza (Excepto en equipos que ya son de 5 integrantes que no tendrán efecto).<br>Al usarla devuelve tu carta al mazo de descartes."
             },
             accept_responsibility: {
               title: "To Accept Responsibility (1 solo uso)",
               desc: "Si el líder te asigna esta carta y te seleccionan para un equipo debes elegir cambiar una persona del equipo por otra que tu decidas que no ha sido seleccionada.<br>Al usarla devuelve tu carta al mazo de descartes."
             },
             random_seed: {
               title: "Random Seed (1 solo uso)",
               desc: "Si el líder te asigna esta carta y te seleccionan para un equipo debes elegir un integrante del equipo, o incluso tu mismo y ser tú el que elige a ciegas su carta de acción.<br>Al usarla devuelve tu carta al mazo de descartes."
             },
             shadower: {
               title: "Shadower (1 solo uso)",
               desc: "Si el líder te asigna esta carta y te seleccionan para un equipo debes elegir a un integrante y solo tu ver la carta de acción elegida por ese integrante. Deberás decir en alto el nombre del empleado que vas a observar para que llegada la fase de acción te muestre dicha carta.<br>Al usarla devuelve tu carta al mazo de descartes."
             },
             busted: {
               title: "Busted (1 solo uso)",
               desc: "Si el líder te asigna esta carta y te seleccionan para un equipo puedes si así lo deseas cambiar el estado de una amenaza ya protegida a atacada. Para ello deberás dar la vuelta la ficha de esa amenaza de verde a roja.",
               effect: "Efecto:",
               effect_desc: "Usar esta carta obliga a quitar una ficha azul del marcador de confianza.<br>Al usarla devuelve tu carta al mazo de descartes."
             },
             perseverance: {
               title: "Perseverance (1 solo uso)",
               desc: "Si el líder te asigna esta carta y te seleccionan para un equipo puedes si así lo deseas cambiar el estado de una amenaza ya atacada a protegida. Para ello deberás dar la vuelta la ficha de esa amenaza de roja a verde.",
               effect: "Efecto:",
               effect_desc: "Usar esta carta obliga a añadir una ficha azul del marcador de confianza.<br>Al usarla devuelve tu carta al mazo de descartes."
             },
             security_tool: {
               title: "Security Tool (Toda la partida)",
               desc: "Si el líder te asigna esta carta y te seleccionan para un equipo puedes eliminar una carta de ataque en la fase de informe de resultado si así lo decides.",
               desc2: "Pueden existir mapas en los que directamente esta herramienta protege amenazas que tengan en la parte superior izquierda del círculo un símbolo de herramienta. No será necesario hacer la fase de acción si decides usar el efecto de esta carta, directamente podrás poner una ficha verde sobre la amenaza."
             }
           }
         }
       },
       footer: {
         copy: "&copy; 2025 OWASP Top 10 \"The Game\". Licencia Open Source.",
         owasp: "Un proyecto inspirado y en colaboración con la comunidad <a href='https://owasp.org/' target='_blank' rel='noopener noreferrer' class='font-bold hover:underline' style='color: var(--color-primary);'>OWASP</a>."
       }
     },
     en: {
    meta: {
      title: "OWASP Top 10 The Game - The Cybersecurity Board Game",
      description: "OWASP Top 10 The Game - The Cybersecurity Board Game"
    },
    header: {
      title: "OWASP TOP 10",
      subtitle: "The Game"
    },
    nav: {
      home: "Home",
      game: "The Game",
      characters: "Characters",
      components: "Components",
      rules: "Rules",
      team_building: "Extension-Team Building"
    },
    home: {
      title: "Cybersecurity<br>Has Never Been This Fun.",
      subtitle: "The <strong>Print & Play</strong> board game to learn about the OWASP Top 10 threat lists.",
      subtitle2: "Defend your systems, exploit threats and become a legend",
      button: "Download, Print & Play"
    },
    about: {
      title: "CONFIDENTIAL:<br>Situation Report",
      subject: "Subject:",
      game_name: "OWASP Top 10 \"The Game\".",
      objective: "Objective:",
      objective_desc: "You are a cybersecurity professional and your mission is to protect your organization's assets.",
      description: "Use your knowledge of the 10 most critical vulnerabilities to deploy defenses, launch attacks and sabotage your opponents. Each game is unique, every decision counts. Do you have what it takes?"
    },
    characters: {
      title: "Characters",
      pentester: {
        name: "PENTESTER",
        description: "Penetration testing specialist. Evaluates the security of systems and applications by simulating real attacks to identify vulnerabilities.",
        details: "Uses ethical hacking techniques, auditing tools and structured methodologies to discover security flaws before they are exploited by real attackers."
      },
      ciso: {
        name: "CISO",
        description: "The Chief Information Security Officer. Strategic leader responsible for establishing and maintaining the organization's security posture.",
        details: "Defines security policies, manages incidents and ensures regulatory compliance. Their strategic vision is fundamental to protecting critical assets."
      },
      cloud_security: {
        name: "CLOUD SECURITY",
        description: "Cloud security specialist. Protects cloud infrastructures, SaaS applications and distributed data in virtual environments.",
        details: "Implements cloud-specific security controls, manages identities and access, and ensures compliance with cloud security standards."
      },
      script_kiddie: {
        name: "SCRIPT KIDDIE",
        description: "Inexperienced attacker who uses predefined tools and scripts without fully understanding their operation.",
        details: "Although lacking deep technical knowledge, they can be dangerous by exploiting known vulnerabilities and causing significant damage to poorly configured systems."
      },
      cracker: {
        name: "CRACKER",
        description: "Malicious hacker with advanced technical knowledge. Specializes in breaking security systems and illegally accessing protected information.",
        details: "Uses sophisticated hacking techniques, social engineering and zero-day exploits. Their goal is to compromise systems, steal sensitive data and cause significant damage to organizations."
      },
      cyberterrorist: {
        name: "CYBERTERRORIST",
        description: "Extremely dangerous attacker who uses cyber attacks to cause massive damage and chaos in critical systems.",
        details: "Their main objective is to disrupt essential services, cause social panic and generate media impact. They use advanced hacking techniques, sophisticated malware and coordinated attacks against critical infrastructure."
      },
      threat_hunter: {
        name: "THREAT HUNTER",
        description: "Threat hunting specialist. Dedicated to proactively searching for indicators of compromise and malicious activities in systems.",
        details: "Uses advanced forensic analysis tools, threat intelligence and detection techniques to identify and neutralize attacks before they cause significant damage."
      },
      hacktivist: {
        name: "HACKTIVIST",
        description: "Digital activist who uses hacking techniques to promote social or political causes.",
        details: "Although their motives may be justified, their methods include cyber attacks, website defacement and data leaks to raise awareness about their causes."
      },
      malware_analyst: {
        name: "MALWARE ANALYST",
        description: "Malware analysis specialist. Dedicated to studying and dissecting malicious software to understand its operation and create countermeasures.",
        details: "Uses static and dynamic analysis tools, sandboxing environments and reverse engineering techniques to identify attack patterns and develop detection signatures."
      },
      incident_responder: {
        name: "INCIDENT RESPONDER",
        description: "Security incident response specialist. Responsible for containing, eradicating and recovering systems affected by cyber attacks.",
        details: "Coordinates immediate response to incidents, preserves forensic evidence, implements containment measures and restores affected services minimizing impact on the organization."
      }
    },
    components: {
      title: "Components",
      action_cards: {
        title: "Action Cards",
        description: "These are the fundamental cards of the game that determine each player's actions in each round.",
        protection: {
          title: "Protection Card",
          description: "Represents a defensive action. When this card is played, the player is trying to protect a system threat against possible attacks."
        },
        attack: {
          title: "Attack Card",
          description: "Represents an offensive action. When this card is played, the player is trying to exploit a system vulnerability."
        }
      },
      leader: {
        title: "Leader",
        description: "The leader is the coordinator of the security team. Their role is fundamental to organizing defenses and coordinating the group's actions.",
        responsibilities: {
          title: "Responsibilities",
          description: "Coordinates team actions, distributes action cards, and makes strategic decisions about which threats to prioritize."
        },
        skills: {
          title: "Skills",
          description: "Effective communication, strategic thinking and ability to motivate the team towards common security objectives."
        }
      },
      trust_indicator: {
        title: "Trust Indicator",
        description: "The trust indicator is a visual indicator that shows the level of trust and collaboration between security team members. The blue tokens mark the team's current trust level.",
        high: {
          title: "High Level",
          description: "Indicates that the team is working collaboratively and effectively, with good communication and coordination among all members."
        },
        medium: {
          title: "Medium Level",
          description: "Shows that there is some collaboration but communication and coordination levels can be improved."
        },
        low: {
          title: "Low Level",
          description: "Indicates communication problems, lack of coordination or conflicts that can affect the effectiveness of the security team."
        }
      },
      action_protocol: {
        title: "Action Protocol",
        kickoff_title: "KICKOFF",
        kickoff_desc: "Initial meeting where the system map is selected, employees are hired, and the first security team leader is chosen.",
        followup_title: "FOLLOW-UP MEETING",
        followup_desc: "Allows restarting tasks, choosing a new leader, new team, and above all improving trust among everyone for new challenges.",
        retrospective_title: "RETROSPECTIVE MEETING",
        retrospective_desc: "Final meeting where everyone faces each other and discusses openly what was done wrong and what was done right.",
        button: "Read Complete Rules"
      },
      system_map: {
        title: "The System Map",
        desc: "The system map is the visual representation of the infrastructure that the security team must protect. It shows the different areas and components that may be vulnerable to attacks.",
        threat_areas: {
          title: "Threat Areas",
          desc: "Each circle on the map represents a specific threat to the system that must be identified and protected by the team."
        },
        qr_codes: {
          title: "QR Codes",
          desc: "Each threat contains a QR code that provides detailed information about the vulnerability and how to mitigate it."
        },
        green_tokens: {
          title: "OWASP Green Tokens",
          desc: "When placed on the map, they represent OWASP Top 10 vulnerabilities that have been identified and successfully mitigated by the security team."
        },
        red_tokens: {
          title: "OWASP Red Tokens",
          desc: "When placed on the map, they represent OWASP Top 10 vulnerabilities that have already been exploited by attackers."
        }
      }
    },
    rules: {
      title: "Complete Rulebook",
             map_selection: {
         title: "System Map Selection Phase",
         desc: "In this phase, the system map card that the group of experts will study and protect must be selected. On this map, circles located in different areas will appear, which will be the threats that this system has.",
         qr_info: "Inside they have a QR code and an identifier. If you capture that QR, you can read about that threat, learn about it, and also how it can be mitigated.",
         numbers_info: "Next to each threat on its right side appear a series of numbers. These numbers will have a base and an exponent.",
         base_info: "The base will be the number of team members that will be sent to defend that threat.",
         exponent_info: "The exponent will be a number or range of numbers, which must match the number of workers that have been hired by the company."
       },
       hiring: {
         title: "Hiring Phase",
         desc: "The following table shows the number of cards that should be used depending on the number of experts that the company will hire:",
         table: {
           experts: "Experts",
           good: "The Good Guys",
           not_good: "The Bad Guys"
         },
         procedure: {
           title: "Procedure:",
           step1: "Keep the selected good guys cards separate from the selected bad guys cards.",
           step2: "With the rest, create a deck of discarded cards.",
           step3: "In the good guys card deck, you must add the CISO card if it wasn't there before.",
           step4: "If the CISO card was already there, add one good guys card of your choice to the good guys deck.",
           step5: "If the company has already hired all 10 experts, this task would not be necessary.",
           step6: "Otherwise, you will now have one extra good guys card and you will have to shuffle that deck face down and discard one card without anyone seeing which one it is.",
           step7: "Once the discard is done, join all the remaining good guys cards and the bad guys cards and shuffle them all.",
           step8: "Deal one card to each person. These cards cannot be shown to anyone, only the card owner can look at it."
         }
       },
       secrets: {
         title: "Secrets Phase",
         standard_procedure: {
           title: "Standard procedure:",
           step1: "Everyone closes their eyes and only the bad guys open their eyes. This way they know their companions.",
           step2: "Now they close their eyes and the bad guys raise their thumbs so the CISO opens their eyes and discovers who the bad guys are.",
           step3: "The CISO must close their eyes again and the bad guys must lower their thumbs.",
           step4: "Finally all employees open their eyes."
         },
         blind_variant: {
           title: "Blind variant:",
           step1: "You start with everyone with their eyes closed.",
           step2: "The bad guys raise their thumbs without opening their eyes and the CISO opens their eyes.",
           step3: "The CISO must close their eyes again and the bad guys must lower their thumbs."
         },
                    note: "Note:",
           secrets_note: "It may be the case that no one has the CISO card, but this procedure must continue to be followed because this will not be known until the game ends."
         },
         kickoff: {
           title: "Kickoff Meeting",
           desc: "In this meeting, all hired employees meet each other and for the first time can talk to each other. They can say whatever they want, without any restrictions. They just cannot show their card to anyone.",
           system_study: {
             title: "System Study",
             desc: "They will have to study the map and understand well what this system offers."
           },
           leader_election: {
             title: "Leader Election",
             desc: "They will have to agree to choose a leader. To do this, they will have to vote unanimously by pointing with their finger to the person that each one decides.",
             step1: "The one with the most votes will be the new leader.",
             step2: "In case of a tie, everyone will have to vote again for a leader among the employees who have tied with the most votes.",
             step3: "Before voting again, you will have to remove from the trust indicator as many blue tokens as elected leaders minus 1.",
             step4: "If you vote again and there is still a tie, blue tokens will continue to be removed following the same criteria.",
             step5: "In the case that a blue token has to be removed from the trust indicator and there are none left, the bad guys will have won the game."
           },
           threat_selection: {
             title: "Threat and Team Selection",
             desc1: "The leader will now be the one who decides which threat will be the first to protect and if anyone has any doubts about that threat, they will be responsible for explaining it.",
             desc2: "Once selected, they must choose the team that will be responsible for protecting it. The number of members of that team will have to be the value of the base whose exponent is within the range or is the value of the employees that the company has hired.",
             desc3: "To choose them, the leader must give each one an access credentials card and two action cards: the attack card and the protection card."
           }
         },
         action_phase: {
           title: "Action Phase",
           desc: "It's time to protect the system from that latent threat. For this, the selected team members must secretly choose between one of the action cards.",
           good_guys: "The Good Guys",
           good_guys_desc: "Who belong to the team, that is, who have the access credentials card, as expected, will choose the protection action card, although nothing prevents them from choosing the attack card if they understand it as strategy.",
           bad_guys: "The Bad Guys",
           bad_guys_desc: "Those who have been given the access credentials card must also choose one of those action cards, but these are interested in the threat being exploited.",
           final_desc: "All members of that team hand over their chosen action card to the leader and he will shuffle them without anyone, including the leader himself, seeing which card each member has delivered."
         },
         results_phase: {
           title: "Results Report Phase",
           desc: "The leader gathers all employees and begins to reveal the action cards one by one.",
           threat_exploited: {
             title: "Threat Exploited",
             desc: "If at least one of the action cards shown is an attack card, the threat has been exploited and a red OWASP token is placed on the circle of that threat."
           },
           threat_contained: {
             title: "Threat Contained",
             desc: "On the contrary, if all the revealed action cards are protection cards, the threat has been contained and mitigated and a green OWASP token must be placed."
           },
           important_notes: {
             title: "Important notes:",
             note1: "In some threats, exploiting them will be much more complicated than normal, requiring at least two attack action cards. These threats are marked with a double circle.",
             variant_title: "Variant:",
             variant_desc: "The action cards will be revealed one by one, but the leader can decide if the threat has already been exploited not to continue revealing cards. If they do this action, they must remove a blue token from the trust indicator."
           },
           protection_layers: {
             title: "Protection Layers",
             desc: "In some maps there are protection layers or levels and threats are distributed within these levels. These layers are differentiated by the level number that will appear on the left side of each of the threat circles.",
             level1: "A level 1 layer will be the most exposed layer of the system.",
             level3: "A level 3 layer will be the most internal layer of the system.",
             protection: "If the good guys manage to protect each and every threat in a layer, then the inner layers on which nothing has been done yet will become protected.",
             exploited: "If, on the contrary, a threat in a layer is already exploited, that layer can no longer be fully protected."
           }
         },
         retrospective: {
           title: "Retrospective Meeting",
           desc: "This meeting is activated when:",
           good_guys_victory: "Good Guys Victory",
           good_guys_victory_desc: "If the number of protected threats is greater than the sum of unprotected threats plus those remaining to be decided, the good guys have successfully protected the system entirely.",
           bad_guys_victory: "Bad Guys Victory",
           bad_guys_victory_desc: "If the number of exploited threats is greater than or equal to the number of protected threats plus those remaining to do something, then the bad guys have hacked the system.",
           last_chance: "Last Chance for the Bad Guys",
           last_chance_desc: "In the case that the system has been protected, the bad guys have one last chance: to say who among all the employees is the CISO.",
           last_chance_step1: "For this, all employees will have to vote unanimously by pointing with their finger.",
           last_chance_step2: "Only the votes of the bad guys who will reveal their card after all employees have voted will count.",
           last_chance_step3: "If all the bad guys point to the CISO, they are the winners.",
           last_chance_step4: "If one or more of the bad guys fail, they will have lost definitively.",
           last_chance_step5: "If each of the bad guys points to themselves and there is no CISO hired as an employee, the bad guys will have won the game.",
           important_note: "Important:",
           important_note_desc: "Cards should not be revealed yet until after this phase."
         },
         followup: {
           title: "Follow-up Meeting",
           desc: "In the case that the criteria to activate the retrospective meeting are not met, follow-up meetings are activated.",
           procedure_title: "Procedure:",
           step1: "These meetings restart the round.",
           step2: "They cause a blue token to be added to the trust indicator.",
           step3: "The access credentials cards are returned to the leader and the action cards are also returned to him without anyone seeing them.",
           step4: "The leader must shuffle them when receiving them along with the ones he already had.",
           step5: "It's time to choose a new leader again and start the process over."
         },
         team_building: {
           title: "Extension - Team Building",
           desc: "In this game mode, Team Building cards will be distributed as described below in the kickoff meeting or in follow-up meetings by the new leader immediately after being elected.",
           deck_preparation: {
             title: "Deck Preparation",
             desc1: "First, the team building card deck must be prepared at the beginning of the kickoff meeting depending on the number of employees hired.",
             desc2: "For this, you must observe the numbers that appear next to the circle on its right side on each of the team building cards. Select to create the deck the cards that have in their exponent the number or range of numbers of employees that the company has hired."
           },
           card_distribution: {
             title: "Card Distribution",
             desc1: "Once this deck is created and the leader is chosen, they will draw from this previously shuffled deck:",
             cards_3: "3 cards",
             cards_2: "2 cards",
             for_8to10: "for companies that have hired 8-9-10 employees",
             for_5to7: "for 5-6-7 hired employees",
             desc2: "Only they will be able to see them. Then they will hand these cards to another employee who will shuffle them and deliver them in the order indicated by the leader to the employees they choose, but neither they nor their assistant will be able to see which card is delivered to each employee."
           },
           card_usage: {
             title: "Card Usage",
             desc1: "Once the team members are chosen, those who have a team building card and are part of the team, one by one, must show it to everyone following the clockwise order from the position where the leader is located.",
             desc2: "Each member must apply their effect if it is of \"immediately\" type or decide whether they want to apply their effect in this round if it is of \"1 use only\" type. If they decide not to apply their effect, they must leave the card visible.",
             desc3: "It is possible that team building cards were previously assigned from previous rounds, if any of them belong to one of the team members, they can apply their effect if they so decide."
           },
           cards_list: {
             title: "Team Building Cards List",
             confidence: {
               title: "Confidence (Immediately)",
               desc: "If the leader assigns you this card, you will have to ask them to show their employee card to any employee you decide, including yourself. (In the case that the bad guys were known in the secrets phase, it is the leader who chooses who to show it to)",
               effect: "Effect:",
               effect_desc: "This card forces you to add a blue token to the trust indicator.<br>Return your card to the discard deck."
             },
             take_control: {
               title: "Take Control (Immediately)",
               desc: "If the leader assigns you this card, you will become the new leader and you have to choose threat and team again. This new leader blocks the process and use of team building cards in this round. If someone has an \"immediately\" card, they will have to discard it immediately.",
               effect: "Effect:",
               effect_desc: "This card forces you to remove a blue token from the trust indicator.<br>Return your card to the discard deck."
             },
             rejection: {
               title: "Rejection (1 use only)",
               desc: "If the leader assigns you this card and you are selected for a team, you must reject the leader's choice and decide it yourself directly, restarting the threat and team selection and team building card distribution process. If someone has an \"immediately\" card, they will have to discard it immediately.",
               effect: "Effect:",
               effect_desc: "Using this card forces you to remove a blue token from the trust indicator.<br>When using it, return your card to the discard deck."
             },
             peer_review: {
               title: "Peer Review (1 use only)",
               desc: "If you have this card and you are selected for a team, you can choose another person who is not on the team to be part of it and be given an access credentials card, being a full member even if the number of team members indicated in the threat is exceeded (Except for teams that are already 5 members, which will have no effect).<br>When used, return your card to the discard deck."
             },
             accept_responsibility: {
               title: "To Accept Responsibility (1 use only)",
               desc: "If the leader assigns you this card and you are selected for a team, you must choose to change one person on the team for another that you decide who has not been selected.<br>When used, return your card to the discard deck."
             },
             random_seed: {
               title: "Random Seed (1 use only)",
               desc: "If the leader assigns you this card and you are selected for a team, you must choose a team member, or even yourself, and be the one who blindly chooses their action card.<br>When used, return your card to the discard deck."
             },
             shadower: {
               title: "Shadower (1 use only)",
               desc: "If the leader assigns you this card and you are selected for a team, you must choose a member and only you will see the action card chosen by that member. You must say out loud the name of the employee you are going to observe so that when the action phase arrives, they show you that card.<br>When used, return your card to the discard deck."
             },
             busted: {
               title: "Busted (1 use only)",
               desc: "If the leader assigns you this card and you are selected for a team, you can, if you so wish, change the status of an already protected threat to attacked. To do this, you must flip that threat's token from green to red.",
               effect: "Effect:",
               effect_desc: "Using this card forces you to remove a blue token from the trust indicator.<br>When used, return your card to the discard deck."
             },
             perseverance: {
               title: "Perseverance (1 use only)",
               desc: "If the leader assigns you this card and you are selected for a team, you can, if you so wish, change the status of an already attacked threat to protected. To do this, you must flip that threat's token from red to green.",
               effect: "Effect:",
               effect_desc: "Using this card forces you to add a blue token to the trust indicator.<br>When used, return your card to the discard deck."
             },
             security_tool: {
               title: "Security Tool (Entire game)",
               desc: "If the leader assigns you this card and you are selected for a team, you can eliminate an attack card in the results report phase if you so decide.",
               desc2: "There may be maps where this tool directly protects threats that have a tool symbol in the upper left part of the circle. It will not be necessary to do the action phase if you decide to use the effect of this card, you can directly place a green token on the threat."
             }
           }
         }
       },
       footer: {
         copy: "&copy; 2025 OWASP Top 10 \"The Game\". Open Source License.",
         owasp: "A project inspired by and in collaboration with the <a href='https://owasp.org/' target='_blank' rel='noopener noreferrer' class='font-bold hover:underline' style='color: var(--color-primary);'>OWASP</a> community."
       }
  }
} as const;

export async function getTranslations(lang: Language) {
  return translations[lang];
}

export function getTranslationKey(translations: any, key: string): string {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
} 