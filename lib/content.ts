export type Lang = "fr" | "en"

const fr = {
  nav: {
    home: "Accueil",
    about: "À propos",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    education: "Formation",
    certificates: "Certificats",
    languages: "Langues",
    contact: "Contact",
  },
  hero: {
    greeting: "Bonjour, je suis",
    nameFirst: "Marwa",
    nameLast: "Lamdaghri",
    title: "Ingénieure d'État en Géoinformation",
    roles: ["Développeuse Full Stack", "Développeuse Web SIG", "Passionnée de géospatial"],
    tagline:
      "Je conçois des applications web modernes et performantes, en alliant développement full stack et expertise SIG.",
    available: "Diplômée 2026 — Disponible pour opportunités",
    downloadCv: "Télécharger CV",
    contactMe: "Me contacter",
    scroll: "Défiler",
  },
  about: {
    title: "À propos de moi",
    stats: [
      { value: 12, suffix: "", label: "Modules développés (PFE MarchicaMed)" },
      { value: 3, suffix: "", label: "Stages professionnels" },
      { value: 15, suffix: "+", label: "Projets académiques" },
      { value: 4, suffix: "", label: "Langues parlées" },
    ],
    paragraphs: [
      "Diplômée d'État ingénieure en Géoinformation de la Faculté des Sciences et Techniques de Tanger (Université Abdelmalek Essaâdi, promotion 2026), je combine une expertise SIG approfondie avec le développement full stack pour concevoir des applications cartographiques modernes et performantes.",
      "Mon projet de fin d'études chez MarchicaMed m'a permis de mener de bout en bout la conception et le développement d'une plateforme WebSIG d'entreprise de 12 modules : interopérabilité CAO/SIG (conversion DWG/DXF vers GeoJSON), contrôle budgétaire selon la nomenclature TGR, assistant conversationnel IA et authentification LDAP.",
      "Je parle couramment plusieurs langues (français, anglais, arabe, tamazight) et je suis titulaire du permis B, ce qui me rend mobile et adaptable dans mes missions professionnelles.",
    ],
  },
  skills: {
    title: "Compétences",
    subtitle: "Un profil hybride SIG / développement web full stack",
    categories: [
      {
        icon: "code",
        name: "Développement",
        skills: ["Java 17", "Spring Boot 3", "Angular", "TypeScript", "JavaScript", "Python", "React", "Next.js", "Node.js", "Express", "Django", "HTML/CSS"],
      },
      {
        icon: "satellite",
        name: "SIG & Télédétection",
        skills: ["QGIS", "ArcGIS", "Google Earth Engine", "ENVI", "SNAP", "ERDAS"],
      },
      {
        icon: "map",
        name: "Cartographie web",
        skills: ["Leaflet", "OpenLayers", "Mapbox", "Leaflet-Geoman", "proj4j"],
      },
      {
        icon: "database",
        name: "Bases de données",
        skills: ["PostgreSQL / PostGIS", "SQLite", "MySQL", "GeoServer", "Liquibase"],
      },
      {
        icon: "shield",
        name: "Sécurité",
        skills: ["JWT", "LDAP / Active Directory", "RBAC", "CSRF / XSS"],
      },
      {
        icon: "brain",
        name: "Intelligence artificielle",
        skills: ["Groq API", "LLM (Llama 3.3 70B)"],
      },
      {
        icon: "tools",
        name: "Outils & Méthodes",
        skills: ["Docker", "Git / GitHub", "Scrum", "UML", "Merise"],
      },
    ],
  },
  education: {
    title: "Formation",
    items: [
      {
        degree: "Diplôme d'Ingénieur d'État en Géoinformation",
        institution: "Faculté des Sciences et Techniques de Tanger (FSTT) — Université Abdelmalek Essaâdi",
        location: "Tanger, Maroc",
        period: "2023 – 2026",
        description:
          "Formation spécialisée en géoinformation, analyse spatiale, SIG et développement d'applications géographiques. Diplôme obtenu en 2026.",
      },
      {
        degree: "DEUST (Diplôme Universitaire d'Études Scientifiques et Techniques)",
        institution: "Faculté des Sciences et Techniques d'Al Hoceima",
        location: "Al Hoceima, Maroc",
        period: "2021 – 2023",
        description:
          "Formation scientifique et technique de premier cycle avec spécialisation en géoinformation.",
      },
      {
        degree: "Baccalauréat Sciences Mathématiques A",
        institution: "Lycée Ibn Al Haytam",
        location: "Aarouit, Nador, Maroc",
        period: "2021",
        description:
          "Baccalauréat scientifique avec spécialité Sciences Mathématiques A.",
      },
    ],
  },
  experience: {
    title: "Expérience professionnelle",
    viewDetails: "Voir le détail des réalisations",
    hideDetails: "Réduire",
    items: [
      {
        id: "pfe",
        featured: true,
        badge: "Stage PFE · Projet vedette",
        title: "Ingénieure en développement logiciel — Full Stack",
        company: "MarchicaMed — Société de Développement Stratégique de la Lagune de Marchica",
        location: "Nador, Maroc · Direction des Systèmes d'Information",
        period: "Fév. – Juin 2026",
        subject:
          "Développement d'une plateforme WebSIG de pilotage de projets territoriaux avec interopérabilité CAO/SIG",
        summary:
          "Conception et développement complet d'une application web sur mesure couvrant 12 modules fonctionnels : suivi budgétaire selon la nomenclature TGR marocaine, pipeline d'interopérabilité CAO/SIG (DWG/DXF → GeoJSON), assistant conversationnel IA et authentification d'entreprise LDAP.",
        details: [
          "Gestion des projets, phases, tickets et documents",
          "Contrôle budgétaire à 5 niveaux (nomenclature TGR marocaine) avec versionnage et snapshots immuables",
          "Circuit de validation des demandes d'exécution budgétaire",
          "Pipeline d'interopérabilité CAO/SIG : conversion automatique DWG/DXF → GeoJSON avec détection automatique du système de coordonnées (Lambert Maroc EPSG:26191, UTM 30N, WGS84) et reprojection via proj4j",
          "Visualisation interactive des plans architecturaux sur carte Leaflet directement dans le navigateur, sans licence AutoCAD",
          "Carte multi-projets géolocalisée avec délimitation de zones géographiques",
          "Assistant conversationnel en langage naturel (Groq API + Llama 3.3 70B) avec contrôle d'accès par rôle",
          "Authentification LDAP/Active Directory + JWT + RBAC",
          "Microservice de gestion des fichiers mutualisé",
          "Notifications email asynchrones",
          "Audit automatique (Hibernate Envers) et migrations (Liquibase)",
        ],
        stack: ["Angular 20", "Spring Boot 3", "Java 17", "PostgreSQL 15", "Liquibase", "Leaflet.js · Geoman", "proj4j", "ODA File Converter", "Groq API · Llama 3.3 70B", "LDAP · JWT · RBAC", "Docker", "Git / GitHub"],
        method: "Scrum — 8 sprints de 2 semaines",
        supervisors:
          "Encadrant professionnel : M. Elkotb Zakaria (MarchicaMed) · Encadrante pédagogique : Mme El Bouhadi Ouafae (FST Tanger, UAE)",
      },
      {
        id: "geofly",
        featured: false,
        badge: "Stage",
        title: "Développement d'une application web SIG",
        company: "GeoFly SARL",
        location: "Témara, Maroc",
        period: "Juil. – Août 2025",
        subject: "",
        summary:
          "Conception d'une plateforme web SIG pour la gestion et le suivi des marchés publics, avec architecture full stack et cartographie interactive 2D/3D.",
        details: [
          "Conception d'une plateforme web SIG pour la gestion et le suivi des marchés publics",
          "Architecture complète React.js (frontend) / Node.js (backend)",
          "Intégration de cartes interactives 2D/3D via des API SIG",
          "Rédaction du cahier des charges, déploiement et documentation technique",
        ],
        stack: ["React.js", "Node.js", "Express.js", "PostgreSQL / PostGIS", "GeoServer", "Leaflet", "Mapbox GL JS"],
        method: "",
        supervisors: "",
      },
      {
        id: "topomod",
        featured: false,
        badge: "Stage d'initiation",
        title: "Topographie",
        company: "TOPO-MOD",
        location: "Al Hoceima, Maroc",
        period: "Juil. – Sept. 2024",
        subject: "",
        summary:
          "Initiation à la topographie professionnelle : dessin de plans, traitement de données géospatiales et cartographie thématique.",
        details: [
          "Élaboration de plans topographiques sur AutoCAD",
          "Traitement et mise à jour de données géospatiales",
          "Production de plans et de cartes thématiques à partir des données collectées",
        ],
        stack: ["AutoCAD", "Topographie", "Cartographie thématique"],
        method: "",
        supervisors: "",
      },
    ],
  },
  projects: {
    title: "Projets",
    subtitle: "Projets professionnels et académiques — filtrez par domaine",
    viewGallery: "Voir les captures",
    noMedia: "Captures bientôt disponibles",
    highlightsLabel: "Points clés",
    filters: [
      { id: "all", label: "Tous" },
      { id: "websig", label: "Web SIG" },
      { id: "fullstack", label: "Full Stack" },
      { id: "remote", label: "Télédétection" },
      { id: "gis", label: "Analyse SIG" },
    ],
    featuredBadge: "Projet de fin d'études",
    featured: {
      title: "MarchicaMed — Plateforme WebSIG de pilotage de projets territoriaux",
      category: "websig",
      description:
        "Projet de fin d'études réalisé chez MarchicaMed (Nador) : application d'entreprise complète de gestion de projets territoriaux couvrant 12 modules fonctionnels — contrôle budgétaire à 5 niveaux selon la nomenclature TGR, pipeline d'interopérabilité CAO/SIG convertissant automatiquement les plans DWG/DXF en GeoJSON reprojetés, visualisation des plans architecturaux sur carte Leaflet sans licence AutoCAD, assistant conversationnel IA (Groq API + Llama 3.3 70B) et authentification LDAP/JWT/RBAC.",
      highlights: [
        "Pipeline CAO/SIG : conversion automatique DWG/DXF → GeoJSON (proj4j)",
        "Assistant IA en langage naturel (Groq API · Llama 3.3 70B)",
        "Contrôle budgétaire TGR à 5 niveaux, versionné et audité",
        "Carte multi-projets & visualisation de plans sur Leaflet",
      ],
      technologies: ["Angular 20", "Spring Boot 3", "Java 17", "PostgreSQL / PostGIS", "Liquibase", "Leaflet.js · Geoman", "proj4j", "Groq API", "Docker"],
      github: "",
      demo: "",
      images: [
        { src: "/projects/PFE/login.png", alt: "Page de connexion sécurisée (LDAP/JWT)" },
        { src: "/projects/PFE/liste-projets.png", alt: "Liste et gestion des projets" },
        { src: "/projects/PFE/details-phase.png", alt: "Détails d'une phase de projet" },
        { src: "/projects/PFE/carteDesProjets(Dgd)(vues-carte).png", alt: "Carte multi-projets géolocalisée" },
        { src: "/projects/PFE/click-sur-carte(detailsprj-lien-pageprj).png", alt: "Accès aux détails d'un projet depuis la carte" },
        { src: "/projects/PFE/details-objetsurcarte.png", alt: "Détails d'un objet géolocalisé sur la carte" },
        { src: "/projects/PFE/resultat-zoom.png", alt: "Résultat de zoom sur une zone du projet" },
        { src: "/projects/PFE/zoom-par-wone.png", alt: "Zoom par zone géographique" },
        { src: "/projects/PFE/ong-zone-dessin(zonne).png", alt: "Délimitation et dessin de zones géographiques (Leaflet-Geoman)" },
        { src: "/projects/PFE/triParstatus-recherche-carteProjets.png", alt: "Tri par statut et recherche sur la carte des projets" },
        { src: "/projects/PFE/visu-dxf.png", alt: "Visualisation d'un plan DWG/DXF converti en GeoJSON sur carte Leaflet" },
        { src: "/projects/PFE/chatbot-ghanimi(membre).png", alt: "Assistant conversationnel IA  (Groq API + Llama 3.3)" },
      ] as { src: string; alt: string }[],
      videos: [] as { src: string; alt: string }[],
    },
    items: [
      {
        title: "Solution WebSIG de gestion et suivi des marchés publics — GeoFly",
        category: "websig",
        description:
          "Développement complet d'une solution WebGIS de gestion, suivi et visualisation des marchés publics pour GeoFly : interface d'authentification, tableau de bord, cartes 2D/3D, gestion des marchés associés, notifications email et système CRUD complet.",
        technologies: ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL/PostGIS", "GeoServer", "Leaflet", "Mapbox", "TailwindCSS", "REST API", "JWT"],
        github: "",
        demo: "",
        images: [
          { src: "/projects/PFA/img1.png", alt: "Vue générale de la plateforme GeoFly" },
          { src: "/projects/PFA/img2.png", alt: "Seconde vue générale de la plateforme" },
          { src: "/projects/PFA/connexionpage.png", alt: "Page de connexion" },
          { src: "/projects/PFA/Dashboard22.png", alt: "Tableau de bord principal" },
          { src: "/projects/PFA/vue_tableau.png", alt: "Gestion des marchés en vue tableau" },
          { src: "/projects/PFA/detail.png", alt: "Détails d'un marché" },
          { src: "/projects/PFA/map_2d.png", alt: "Carte SIG 2D" },
          { src: "/projects/PFA/map_3D.png", alt: "Carte SIG 3D" },
          { src: "/projects/PFA/dessin_2d.png", alt: "Dessin d'un marché en 2D" },
          { src: "/projects/PFA/page.png", alt: "Page de gestion des utilisateurs" },
        ],
        videos: [],
      },
      {
        title: "Application Android — Signalement de défauts d'infrastructure",
        category: "fullstack",
        description:
          "Application mobile de signalement des défauts d'assainissement avec photos et géolocalisation : interface de connexion, signalement avec capture photo, sélection de la localisation sur carte interactive et consultation des signalements précédents.",
        technologies: ["Android Studio", "Java", "Géolocalisation", "Base de données", "Authentification"],
        github: "",
        demo: "",
        images: [],
        videos: [
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sigSignalement-2qvMLzVw3x5mo5jWRWIVunQ6HLLV7p.mp4",
            alt: "Démonstration de l'application de signalement",
          },
        ],
      },
      {
        title: "Plugin QGIS — Validation des dérogations d'urbanisme",
        category: "gis",
        description:
          "Plugin QGIS développé en Python pour l'aide à la décision sur les dérogations d'urbanisme : analyse automatique des contraintes spatiales et réglementaires — vérification de la surface minimale (1 ha), buffer de 1 km, évitement des terrains protégés et limite de 5 dérogations par zone.",
        technologies: ["Python", "PyQGIS", "Qt Designer", "Analyse spatiale", "SIG"],
        github: "",
        demo: "",
        images: [
          { src: "/projects/qgis-plugin/interface-main.jpg", alt: "Interface QGIS principale avec les couches spatiales" },
          { src: "/projects/qgis-plugin/dialog-empty.jpg", alt: "Formulaire de saisie du plugin" },
          { src: "/projects/qgis-plugin/dialog-analysis.jpg", alt: "Analyse en cours avec la zone de recherche" },
          { src: "/projects/qgis-plugin/results-success.jpg", alt: "Résultats — projet conforme sans conflit" },
          { src: "/projects/qgis-plugin/results-conflict.jpg", alt: "Résultats — conflits détectés nécessitant révision" },
          { src: "/projects/qgis-plugin/map-intersections.jpg", alt: "Carte des intersections avec les zones protégées" },
        ],
        videos: [],
      },
      {
        title: "Google Earth Engine — Impact de l'urbanisation sur les espaces verts",
        category: "remote",
        description:
          "Analyse de l'urbanisation de Tanger entre 2016 et 2023 et son impact sur la disparition des espaces verts : traitement d'images satellitaires sous Google Earth Engine, détection des changements d'occupation du sol (NDVI/NDBI) et génération d'un rapport d'analyse.",
        technologies: ["Google Earth Engine", "Télédétection", "JavaScript", "Analyse temporelle"],
        github: "",
        demo: "",
        images: [
          { src: "/projects/GEE/ndvi1.png", alt: "Évolution NDVI (végétation) – Année 2016" },
          { src: "/projects/GEE/ndvi2.png", alt: "Évolution NDVI (végétation) – Année 2023" },
          { src: "/projects/GEE/diffNdbi.png", alt: "Carte des différences NDVI (2016–2023)" },
          { src: "/projects/GEE/ndbi1.png", alt: "Évolution NDBI (urbanisation) – Année 2016" },
          { src: "/projects/GEE/ndbi2.png", alt: "Évolution NDBI (urbanisation) – Année 2023" },
          { src: "/projects/GEE/betonise.png", alt: "Carte des zones urbanisées (2016–2023)" },
        ],
        videos: [],
      },
      {
        title: "Dynamiques régionales de Marrakech-Safi",
        category: "gis",
        description:
          "Projet d'équipe analysant les dynamiques socio-économiques, les impacts environnementaux et les aménagements infrastructuriers de la région Marrakech-Safi : interpolation spatiale, analyse de réseau et traitement de données de télédétection.",
        technologies: ["QGIS", "ArcGIS", "Python", "Analyse spatiale", "Télédétection"],
        github: "",
        demo: "",
        images: [
          { src: "/projects/marrakech/carte.jpg", alt: "Production d'eau et nombre d'abonnés en 2020 dans la région Marrakech-Safi" },
          { src: "/projects/marrakech/carte2.jpg", alt: "Énergie consommée et énergies renouvelables en 2020" },
          { src: "/projects/marrakech/carte3.jpg", alt: "Réseau routier et constructions routières en 2021" },
          { src: "/projects/marrakech/carte4.jpg", alt: "Capacité normale des barrages et leur taux de remplissage en 2021" },
        ],
        videos: [],
      },
      {
        title: "Application VBA — Calculs topographiques automatisés",
        category: "gis",
        description:
          "Application Excel utilisant VBA pour automatiser les calculs topographiques : nivellement, transformations de coordonnées, calculs de distances et d'azimuts. Interface intuitive de saisie terrain et génération instantanée de résultats précis.",
        technologies: ["VBA", "Excel", "Topographie", "Systèmes de coordonnées"],
        github: "",
        demo: "",
        images: [],
        videos: [],
      },
      {
        title: "Analyse spatiale de la distribution de la criminalité",
        category: "gis",
        description:
          "Analyse statistique de la distribution spatiale de 24 points de criminalité sur une zone d'étude de 64 km² : méthode des quadrats et méthode du plus proche voisin pour identifier les schémas et concentrations d'activité.",
        technologies: ["Analyse spatiale", "Statistiques", "SIG", "Méthodes quantitatives"],
        github: "",
        demo: "",
        images: [
          { src: "/mas.png", alt: "Nuage de points de coordonnées (X,Y)" },
        ],
        videos: [],
      },
      {
        title: "Localisation optimale d'une station d'épuration (Ouazzane)",
        category: "gis",
        description:
          "Analyse spatiale multicritère pour déterminer l'emplacement optimal d'une station d'épuration des eaux usées à Ouazzane : automatisation via ArcMap Model Builder, visualisation 3D sous ArcScene, critères d'altitude, proximité des cours d'eau et distance aux zones résidentielles.",
        technologies: ["ArcMap", "Model Builder", "ArcScene", "Analyse multicritère", "SIG"],
        github: "",
        demo: "",
        images: [],
        videos: [
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20video%20-%20Made%20with%20Clipchamp-zgVDJMCzPvvmXu6PfhPD7aem6YnId9.mp4",
            alt: "Démonstration des résultats",
          },
        ],
      },
      {
        title: "Site e-commerce",
        category: "fullstack",
        description:
          "Développement d'un site e-commerce avec fonctionnalités CRUD complètes pour la gestion des commandes, clients et produits : rôles administrateur/client, filtres de recherche avancés et interface moderne.",
        technologies: ["HTML", "CSS", "JavaScript", "Base de données"],
        github: "",
        demo: "",
        images: [],
        videos: [],
      },
      {
        title: "Application Python — Conversion de coordonnées géodésiques",
        category: "gis",
        description:
          "Application Python avec interface Tkinter pour la conversion de coordonnées géodésiques et le calcul de surfaces : résolution des problèmes direct/inverse sur sphères et ellipsoïdes (Clarke 1880, WGS84) par les méthodes Puissant et Gauss, affichage cartographique dynamique et calcul de la superficie du Maroc.",
        technologies: ["Python", "Tkinter", "Géodésie", "Cartographie", "Calculs géométriques"],
        github: "",
        demo: "",
        images: [],
        videos: [],
      },
      {
        title: "Analyse multicritère — Localisation d'une école (ArcMap)",
        category: "gis",
        description:
          "Recherche du site optimal pour une nouvelle école à Stowe (Vermont) : analyse multicritère pondérée prenant en compte la distance aux écoles existantes, la pente du terrain, la proximité des sites récréatifs et l'aptitude des sols, à partir de données raster (MNT, occupation du sol) et vectorielles (routes, écoles).",
        technologies: ["ArcMap", "Analyse multicritère", "Raster", "Pondération", "SIG"],
        github: "",
        demo: "",
        images: [
          { src: "/projects/newSchool/model1.jpg", alt: "Model Builder pour trouver le site optimal" },
          { src: "/projects/newSchool/site.jpg", alt: "Carte finale du site optimal pour la nouvelle école" },
        ],
        videos: [],
      },
      {
        title: "Étude de l'érosion côtière — Baie de Tanger",
        category: "gis",
        description:
          "Étude de l'instabilité du littoral de la baie de Tanger menaçant les infrastructures urbaines : géoréférencement de photos aériennes multi-dates (1963 et 1996) et de cartes topographiques, identification des zones prioritaires de protection entre le port de Tanger-ville et la zone Gandouri.",
        technologies: ["ArcMap", "Géoréférencement", "Photos aériennes", "Analyse temporelle", "Cartographie"],
        github: "",
        demo: "",
        images: [
          { src: "/projects/cote/cote.jpg", alt: "Carte du littoral en 1963 et 1996 et zones à risque à Tanger" },
        ],
        videos: [],
      },
      {
        title: "Levé topographique — Parking FST Tanger",
        category: "gis",
        description:
          "Levé topographique complet du parking de la Faculté des Sciences et Techniques de Tanger : collecte des données terrain, mesures de précision, traitement des données et élaboration de plans topographiques détaillés.",
        technologies: ["Topographie", "Station totale", "GPS", "AutoCAD", "Levé terrain"],
        github: "",
        demo: "",
        images: [
          { src: "/projects/leve.jpg", alt: "Levé du parking de la Faculté des Sciences et Techniques de Tanger" },
        ],
        videos: [],
      },
    ],
  },
  certificates: {
    title: "Certificats & Distinctions",
    items: [
      {
        title: "Getting Started with Spatial Analysis",
        organization: "ESRI",
        description:
          "Cette formation m'a initiée aux principes fondamentaux de l'analyse spatiale et à ses six grandes catégories, pour mieux comprendre et interpréter les phénomènes géographiques.",
        date: "2025",
        image: "/certificates/cer1ESRI.png",
      },
      {
        title: "Getting Information from a GIS Map",
        organization: "ESRI",
        description:
          "Ce cours présente les bases de la lecture, de l'analyse et de l'interprétation des cartes SIG, afin de comprendre l'information spatiale et répondre à des questions concrètes à partir d'une carte numérique.",
        date: "2025",
        image: "/certificates/Getting Information from a GIS Map_Certificate_11202025.png",
      },
      {
        title: "Python for Everyone",
        organization: "ESRI",
        description:
          "Développement de compétences essentielles en script Python appliqué au SIG, notamment dans les environnements ArcGIS Pro et ArcMap.",
        date: "2025",
        image: "/certificates/Python for Everyone_Certificate_11192025.png",
      },
      {
        title: "Certificate of Appreciation - Legends Science Week",
        organization: "The Legends Club",
        description:
          "Reconnaissance pour ma contribution précieuse à l'événement Legends Science Week : participation active et engagement ayant contribué à la réussite globale de l'événement.",
        date: "2024",
        image: "/certificates/legends-science-week.jpg",
      },
      {
        title: "Certificate of Recognition - FICAT",
        organization: "Organisation des Jeunes Africains (OJA)",
        description:
          "Reconnaissance de mon engagement et ma disponibilité en tant que membre du comité d'organisation de la 12ᵉ édition du Festival International de la Culture Africaine de Tanger (FICAT).",
        date: "2024",
        image: "/certificates/ficat-recognition.jpg",
      },
      {
        title: "Certificate of Appreciation – The Legends Club (ONOUSC, Tanger)",
        organization: "Organisation des Jeunes Africains (OJA)",
        description:
          "Distinction pour ma contribution exceptionnelle au service organisation du club : dévouement, travail d'équipe et engagement ayant contribué au succès des activités du club.",
        date: "2025",
        image: "/certificates/certificat4.jpg",
      },
    ],
  },
  languagesSection: {
    title: "Langues",
    items: [
      { name: "Français", level: "Niveau professionnel" },
      { name: "Anglais", level: "Niveau professionnel" },
      { name: "Arabe", level: "Langue maternelle" },
      { name: "Tamazight", level: "Langue maternelle" },
    ],
  },
  contact: {
    title: "Contact",
    intro:
      "Diplômée 2026 en Géoinformation, je recherche des opportunités en développement web SIG et full stack. N'hésitez pas à me contacter pour discuter de collaborations ou pour toute question !",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
    locationLabel: "Localisation",
    locationValue: "Nador, Maroc",
    sendEmail: "Envoyer un email",
    followMe: "Retrouvez-moi sur",
    rights: "Marwa Lamdaghri. Tous droits réservés.",
    note: "Permis B • Disponible immédiatement",
    mapCaption: "Les lieux de mon parcours, sur une carte",
  },
}

export type Content = typeof fr

const en: Content = {
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    certificates: "Certificates",
    languages: "Languages",
    contact: "Contact",
  },
  hero: {
    greeting: "Hello, I am",
    nameFirst: "Marwa",
    nameLast: "Lamdaghri",
    title: "State Engineer in Geoinformation",
    roles: ["Full Stack Developer", "Web GIS Developer", "Geospatial enthusiast"],
    tagline:
      "I design modern, high-performance web applications, combining full stack development with GIS expertise.",
    available: "2026 Graduate — Available for opportunities",
    downloadCv: "Download CV",
    contactMe: "Contact me",
    scroll: "Scroll",
  },
  about: {
    title: "About Me",
    stats: [
      { value: 12, suffix: "", label: "Modules developed (MarchicaMed PFE)" },
      { value: 3, suffix: "", label: "Professional internships" },
      { value: 15, suffix: "+", label: "Academic projects" },
      { value: 4, suffix: "", label: "Languages spoken" },
    ],
    paragraphs: [
      "I am a State Engineer in Geoinformation, graduated in 2026 from the Faculty of Sciences and Techniques of Tangier (Abdelmalek Essaâdi University). I combine deep GIS expertise with full stack development to build modern, high-performance mapping applications.",
      "My final-year project at MarchicaMed gave me end-to-end ownership of a 12-module enterprise WebSIG platform: CAD/GIS interoperability (DWG/DXF to GeoJSON conversion), budget control following the Moroccan TGR nomenclature, an AI conversational assistant and LDAP enterprise authentication.",
      "I am fluent in several languages (French, English, Arabic, Tamazight) and hold a category B driving license, making me mobile and adaptable in my professional assignments.",
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "A hybrid GIS / full stack web development profile",
    categories: fr.skills.categories.map((c) => ({
      ...c,
      name:
        c.icon === "code"
          ? "Development"
          : c.icon === "satellite"
            ? "GIS & Remote Sensing"
            : c.icon === "map"
              ? "Web Cartography"
              : c.icon === "database"
                ? "Databases"
                : c.icon === "shield"
                  ? "Security"
                  : c.icon === "brain"
                    ? "Artificial Intelligence"
                    : "Tools & Methods",
    })),
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "State Engineering Degree in Geoinformation",
        institution: "Faculty of Sciences and Techniques of Tangier (FSTT) — Abdelmalek Essaâdi University",
        location: "Tangier, Morocco",
        period: "2023 – 2026",
        description:
          "Specialized training in geoinformation, spatial analysis, GIS and geographic application development. Degree obtained in 2026.",
      },
      {
        degree: "University Diploma in Scientific and Technical Studies (DEUST)",
        institution: "Faculty of Sciences and Techniques of Al Hoceima",
        location: "Al Hoceima, Morocco",
        period: "2021 – 2023",
        description:
          "Undergraduate scientific and technical training with a specialization in geoinformation.",
      },
      {
        degree: "Baccalaureate in Mathematical Sciences A",
        institution: "Ibn Al Haytam High School",
        location: "Aarouit, Nador, Morocco",
        period: "2021",
        description:
          "Scientific baccalaureate with a specialization in Mathematical Sciences A.",
      },
    ],
  },
  experience: {
    title: "Professional Experience",
    viewDetails: "View achievement details",
    hideDetails: "Show less",
    items: [
      {
        id: "pfe",
        featured: true,
        badge: "Final Year Project Internship · Featured",
        title: "Software Development Engineer — Full Stack",
        company: "MarchicaMed — Strategic Development Society of the Marchica Lagoon",
        location: "Nador, Morocco · Information Systems Department",
        period: "Feb – Jun 2026",
        subject:
          "Development of a WebSIG platform for territorial project steering with CAD/GIS interoperability",
        summary:
          "Complete design and development of a custom web application covering 12 functional modules: budget monitoring following the Moroccan TGR nomenclature, a CAD/GIS interoperability pipeline (DWG/DXF → GeoJSON), an AI conversational assistant and enterprise LDAP authentication.",
        details: [
          "Management of projects, phases, tickets and documents",
          "5-level budget control (Moroccan TGR nomenclature) with versioning and immutable snapshots",
          "Validation workflow for budget execution requests",
          "CAD/GIS interoperability pipeline: automatic DWG/DXF → GeoJSON conversion with automatic coordinate system detection (Morocco Lambert EPSG:26191, UTM 30N, WGS84) and reprojection via proj4j",
          "Interactive visualization of architectural plans on a Leaflet map directly in the browser, without an AutoCAD license",
          "Multi-project geolocated map with geographic zone delineation",
          "Natural-language conversational assistant (Groq API + Llama 3.3 70B) with role-based access control",
          "LDAP/Active Directory authentication + JWT + RBAC",
          "Shared file management microservice",
          "Asynchronous email notifications",
          "Automatic audit trail (Hibernate Envers) and migrations (Liquibase)",
        ],
        stack: ["Angular 20", "Spring Boot 3", "Java 17", "PostgreSQL 15", "Liquibase", "Leaflet.js · Geoman", "proj4j", "ODA File Converter", "Groq API · Llama 3.3 70B", "LDAP · JWT · RBAC", "Docker", "Git / GitHub"],
        method: "Scrum — 8 two-week sprints",
        supervisors:
          "Professional supervisor: Mr. Elkotb Zakaria (MarchicaMed) · Academic supervisor: Mrs. El Bouhadi Ouafae (FST Tangier, UAE)",
      },
      {
        id: "geofly",
        featured: false,
        badge: "Internship",
        title: "Web GIS Application Development",
        company: "GeoFly SARL",
        location: "Témara, Morocco",
        period: "Jul – Aug 2025",
        subject: "",
        summary:
          "Design of a web GIS platform for public procurement management and monitoring, with a full stack architecture and interactive 2D/3D mapping.",
        details: [
          "Design of a web GIS platform for public market management and monitoring",
          "Complete React.js (frontend) / Node.js (backend) architecture",
          "Integration of interactive 2D/3D maps through GIS APIs",
          "Writing specifications, deployment and technical documentation",
        ],
        stack: ["React.js", "Node.js", "Express.js", "PostgreSQL / PostGIS", "GeoServer", "Leaflet", "Mapbox GL JS"],
        method: "",
        supervisors: "",
      },
      {
        id: "topomod",
        featured: false,
        badge: "Introductory internship",
        title: "Topography",
        company: "TOPO-MOD",
        location: "Al Hoceima, Morocco",
        period: "Jul – Sep 2024",
        subject: "",
        summary:
          "Introduction to professional topography: plan drawing, geospatial data processing and thematic cartography.",
        details: [
          "Production of topographic plans on AutoCAD",
          "Processing and updating of geospatial data",
          "Creation of plans and thematic maps from collected data",
        ],
        stack: ["AutoCAD", "Topography", "Thematic cartography"],
        method: "",
        supervisors: "",
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "Professional and academic projects — filter by field",
    viewGallery: "View screenshots",
    noMedia: "Screenshots coming soon",
    highlightsLabel: "Key points",
    filters: [
      { id: "all", label: "All" },
      { id: "websig", label: "Web GIS" },
      { id: "fullstack", label: "Full Stack" },
      { id: "remote", label: "Remote Sensing" },
      { id: "gis", label: "GIS Analysis" },
    ],
    featuredBadge: "Final Year Project",
    featured: {
      title: "MarchicaMed — WebSIG platform for territorial project steering",
      category: "websig",
      description:
        "Final-year project carried out at MarchicaMed (Nador): a complete enterprise application for territorial project management covering 12 functional modules — 5-level budget control following the Moroccan TGR nomenclature, a CAD/GIS interoperability pipeline automatically converting DWG/DXF drawings into reprojected GeoJSON, interactive visualization of architectural plans on a Leaflet map without an AutoCAD license, an AI conversational assistant (Groq API + Llama 3.3 70B) and LDAP/JWT/RBAC authentication.",
      highlights: [
        "CAD/GIS pipeline: automatic DWG/DXF → GeoJSON conversion (proj4j)",
        "Natural-language AI assistant (Groq API · Llama 3.3 70B)",
        "Versioned and audited 5-level TGR budget control",
        "Multi-project map & plan visualization on Leaflet",
      ],
      technologies: ["Angular 20", "Spring Boot 3", "Java 17", "PostgreSQL / PostGIS", "Liquibase", "Leaflet.js · Geoman", "proj4j", "Groq API", "Docker"],
      github: "",
      demo: "",
      images: [
        { src: "/projects/PFE/login.png", alt: "Secure login page (LDAP/JWT)" },
        { src: "/projects/PFE/liste-projets.png", alt: "Project list and management" },
        { src: "/projects/PFE/details-phase.png", alt: "Project phase details" },
        { src: "/projects/PFE/carteDesProjets(Dgd)(vues-carte).png", alt: "Geolocated multi-project map" },
        { src: "/projects/PFE/click-sur-carte(detailsprj-lien-pageprj).png", alt: "Project details access from the map" },
        { src: "/projects/PFE/details-objetsurcarte.png", alt: "Details of a geolocated object on the map" },
        { src: "/projects/PFE/resultat-zoom.png", alt: "Zoom result on a project area" },
        { src: "/projects/PFE/zoom-par-wone.png", alt: "Zoom by geographic zone" },
        { src: "/projects/PFE/ong-zone-dessin(zonne).png", alt: "Geographic zone delineation and drawing (Leaflet-Geoman)" },
        { src: "/projects/PFE/triParstatus-recherche-carteProjets.png", alt: "Status filtering and search on the projects map" },
        { src: "/projects/PFE/visu-dxf.png", alt: "DWG/DXF plan converted to GeoJSON visualized on a Leaflet map" },
        { src: "/projects/PFE/chatbot-ghanimi(membre).png", alt: "'Ghanimi' AI conversational assistant (Groq API + Llama 3.3)" },
      ],
      videos: [],
    },
    items: [
      {
        title: "Web GIS Solution for Public Procurement Management — GeoFly",
        category: "websig",
        description:
          "Complete development of a WebGIS solution for public market management, monitoring and visualization for GeoFly: authentication interface, dashboard, 2D/3D maps, associated market management, email notifications and a full CRUD system.",
        technologies: ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL/PostGIS", "GeoServer", "Leaflet", "Mapbox", "TailwindCSS", "REST API", "JWT"],
        github: "",
        demo: "",
        images: [
          { src: "/projects/PFA/img1.png", alt: "General overview of the GEOFLY platform" },
          { src: "/projects/PFA/img2.png", alt: "Second general overview of the platform" },
          { src: "/projects/PFA/connexionpage.png", alt: "Login page" },
          { src: "/projects/PFA/Dashboard22.png", alt: "Main dashboard" },
          { src: "/projects/PFA/vue_tableau.png", alt: "Market management in table view" },
          { src: "/projects/PFA/detail.png", alt: "Market details" },
          { src: "/projects/PFA/map_2d.png", alt: "2D GIS map" },
          { src: "/projects/PFA/map_3D.png", alt: "3D GIS map" },
          { src: "/projects/PFA/dessin_2d.png", alt: "2D market drawing" },
          { src: "/projects/PFA/page.png", alt: "User management page" },
        ],
        videos: [],
      },
      {
        title: "Android Application — Infrastructure Defect Reporting",
        category: "fullstack",
        description:
          "Mobile application for reporting sanitation infrastructure defects with photos and geolocation: login interface, reporting with photo capture, location selection on an interactive map and display of previous reports.",
        technologies: ["Android Studio", "Java", "Geolocation", "Database", "Authentication"],
        github: "",
        demo: "",
        images: [],
        videos: [
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sigSignalement-2qvMLzVw3x5mo5jWRWIVunQ6HLLV7p.mp4",
            alt: "Reporting application demonstration",
          },
        ],
      },
      {
        title: "QGIS Plugin — Urban Planning Exemption Validation",
        category: "gis",
        description:
          "QGIS plugin developed in Python for decision support on urban planning exemptions: automatic analysis of spatial and regulatory constraints — minimum area check (1 ha), 1 km buffer, avoidance of protected lands and a limit of 5 exemptions per zone.",
        technologies: ["Python", "PyQGIS", "Qt Designer", "Spatial Analysis", "GIS"],
        github: "",
        demo: "",
        images: [
          { src: "/projects/qgis-plugin/interface-main.jpg", alt: "Main QGIS interface with all spatial layers" },
          { src: "/projects/qgis-plugin/dialog-empty.jpg", alt: "Plugin input form" },
          { src: "/projects/qgis-plugin/dialog-analysis.jpg", alt: "Analysis in progress with search area displayed" },
          { src: "/projects/qgis-plugin/results-success.jpg", alt: "Results — compliant project without conflicts" },
          { src: "/projects/qgis-plugin/results-conflict.jpg", alt: "Results — conflicts detected requiring revision" },
          { src: "/projects/qgis-plugin/map-intersections.jpg", alt: "Map of intersections with protected areas" },
        ],
        videos: [],
      },
      {
        title: "Google Earth Engine — Urbanization Impact on Green Spaces",
        category: "remote",
        description:
          "Analysis of Tangier's urbanization between 2016 and 2023 and its impact on green space loss: satellite image processing in Google Earth Engine, land use change detection (NDVI/NDBI) and analysis report generation.",
        technologies: ["Google Earth Engine", "Remote Sensing", "JavaScript", "Temporal Analysis"],
        github: "",
        demo: "",
        images: [
          { src: "/projects/GEE/ndvi1.png", alt: "NDVI vegetation evolution – Year 2016" },
          { src: "/projects/GEE/ndvi2.png", alt: "NDVI vegetation evolution – Year 2023" },
          { src: "/projects/GEE/diffNdbi.png", alt: "NDVI difference map (2016–2023)" },
          { src: "/projects/GEE/ndbi1.png", alt: "NDBI urbanization evolution – Year 2016" },
          { src: "/projects/GEE/ndbi2.png", alt: "NDBI urbanization evolution – Year 2023" },
          { src: "/projects/GEE/betonise.png", alt: "Urbanized areas map (2016–2023)" },
        ],
        videos: [],
      },
      {
        title: "Marrakech-Safi Regional Dynamics Analysis",
        category: "gis",
        description:
          "Team project analyzing socio-economic dynamics, environmental impacts and infrastructure developments in the Marrakech-Safi region: spatial interpolation, network analysis and remote sensing data processing.",
        technologies: ["QGIS", "ArcGIS", "Python", "Spatial Analysis", "Remote Sensing"],
        github: "",
        demo: "",
        images: [
          { src: "/projects/marrakech/carte.jpg", alt: "Water production and number of consumers in 2020 in the Marrakech-Safi region" },
          { src: "/projects/marrakech/carte2.jpg", alt: "Energy consumed and renewable energies in 2020" },
          { src: "/projects/marrakech/carte3.jpg", alt: "Road network and road construction in 2021" },
          { src: "/projects/marrakech/carte4.jpg", alt: "Normal capacity of dams and their filling rate in 2021" },
        ],
        videos: [],
      },
      {
        title: "VBA Application — Automated Topographic Calculations",
        category: "gis",
        description:
          "Excel application using VBA to automate topographic calculations: leveling, coordinate transformations, distance and azimuth calculations. Intuitive field data entry interface with instant generation of precise results.",
        technologies: ["VBA", "Excel", "Topography", "Coordinate systems"],
        github: "",
        demo: "",
        images: [],
        videos: [],
      },
      {
        title: "Spatial Analysis of Crime Distribution",
        category: "gis",
        description:
          "Statistical analysis of the spatial distribution of 24 crime points in a 64 km² study area: quadrat method and nearest neighbor method to identify patterns and concentrations of criminal activity.",
        technologies: ["Spatial Analysis", "Statistics", "GIS", "Quantitative methods"],
        github: "",
        demo: "",
        images: [
          { src: "/mas.png", alt: "Point cloud of coordinates (X,Y)" },
        ],
        videos: [],
      },
      {
        title: "Optimal Location of a Wastewater Treatment Plant (Ouazzane)",
        category: "gis",
        description:
          "Multi-criteria spatial analysis to determine the optimal location for a wastewater treatment plant in Ouazzane: automation with ArcMap Model Builder, 3D visualization in ArcScene, criteria including altitude, proximity to rivers and distance from residential areas.",
        technologies: ["ArcMap", "Model Builder", "ArcScene", "Multi-criteria Analysis", "GIS"],
        github: "",
        demo: "",
        images: [],
        videos: [
          {
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20video%20-%20Made%20with%20Clipchamp-zgVDJMCzPvvmXu6PfhPD7aem6YnId9.mp4",
            alt: "Results demonstration",
          },
        ],
      },
      {
        title: "E-commerce Website",
        category: "fullstack",
        description:
          "E-commerce website with complete CRUD functionalities for order, customer and product management: admin/customer roles, advanced search filters and a modern user interface.",
        technologies: ["HTML", "CSS", "JavaScript", "Database"],
        github: "",
        demo: "",
        images: [],
        videos: [],
      },
      {
        title: "Python Application — Geodetic Coordinate Conversion",
        category: "gis",
        description:
          "Python application with a Tkinter interface for geodetic coordinate conversion and area calculation: solving direct/inverse problems on spheres and ellipsoids (Clarke 1880, WGS84) using Puissant and Gauss methods, dynamic map display and computation of Morocco's surface area.",
        technologies: ["Python", "Tkinter", "Geodesy", "Cartography", "Geometric calculations"],
        github: "",
        demo: "",
        images: [],
        videos: [],
      },
      {
        title: "Multi-criteria Analysis — School Location (ArcMap)",
        category: "gis",
        description:
          "Finding the optimal site for a new school in Stowe, Vermont: weighted multi-criteria analysis considering distance from existing schools, terrain slope, proximity to recreational sites and soil suitability, using raster (DEM, land use) and vector (roads, schools) data.",
        technologies: ["ArcMap", "Multi-criteria Analysis", "Raster", "Weighting", "GIS"],
        github: "",
        demo: "",
        images: [
          { src: "/projects/newSchool/model1.jpg", alt: "Model builder used to find the optimal site" },
          { src: "/projects/newSchool/site.jpg", alt: "Final map of the optimal site for the new school" },
        ],
        videos: [],
      },
      {
        title: "Coastal Erosion Study — Tangier Bay",
        category: "gis",
        description:
          "Study of coastline instability in Tangier Bay threatening urban infrastructure: georeferencing of multi-date aerial photos (1963 and 1996) and topographic maps, identification of priority protection areas between the Tangier-ville port and the Gandouri area.",
        technologies: ["ArcMap", "Georeferencing", "Aerial photos", "Temporal analysis", "Cartography"],
        github: "",
        demo: "",
        images: [
          { src: "/projects/cote/cote.jpg", alt: "Map showing coastline in 1963 and 1996 and risk areas in Tangier" },
        ],
        videos: [],
      },
      {
        title: "Topographic Survey — FST Tangier Parking",
        category: "gis",
        description:
          "Complete topographic survey of the parking lot of the Faculty of Sciences and Techniques of Tangier: field data collection, precise measurements, data processing and production of detailed topographic plans.",
        technologies: ["Topography", "Total station", "GPS", "AutoCAD", "Field survey"],
        github: "",
        demo: "",
        images: [
          { src: "/projects/leve.jpg", alt: "Survey of the Faculty of Sciences and Techniques of Tangier parking lot" },
        ],
        videos: [],
      },
    ],
  },
  certificates: {
    title: "Certificates & Achievements",
    items: [
      {
        title: "Getting Started with Spatial Analysis",
        organization: "ESRI",
        description:
          "This course introduced me to the fundamental principles of spatial analysis and its six major categories, helping me better understand and interpret geographic phenomena.",
        date: "2025",
        image: "/certificates/cer1ESRI.png",
      },
      {
        title: "Getting Information from a GIS Map",
        organization: "ESRI",
        description:
          "This course covers the basics of reading, analyzing and interpreting GIS maps, so as to understand spatial information and answer real-world questions from a digital map.",
        date: "2025",
        image: "/certificates/Getting Information from a GIS Map_Certificate_11202025.png",
      },
      {
        title: "Python for Everyone",
        organization: "ESRI",
        description:
          "This course allowed me to develop essential Python scripting skills applied to GIS, particularly within ArcGIS Pro and ArcMap environments.",
        date: "2025",
        image: "/certificates/Python for Everyone_Certificate_11192025.png",
      },
      {
        title: "Certificate of Appreciation - Legends Science Week",
        organization: "The Legends Club",
        description:
          "Recognition for my valuable contribution to the Legends Science Week event: active participation and dedication that greatly enriched the overall success of the event.",
        date: "2024",
        image: "/certificates/legends-science-week.jpg",
      },
      {
        title: "Certificate of Recognition - FICAT",
        organization: "Organisation des Jeunes Africains (OJA)",
        description:
          "Recognition for my commitment and availability as a member of the organizing committee of the 12th edition of the International Festival of African Culture of Tangier (FICAT).",
        date: "2024",
        image: "/certificates/ficat-recognition.jpg",
      },
      {
        title: "Certificate of Appreciation – The Legends Club (ONOUSC, Tangier)",
        organization: "Organisation des Jeunes Africains (OJA)",
        description:
          "Recognition for exceptional contribution to the club's organizational department, highlighting dedication, teamwork and commitment that contributed to the success of the club's events and activities.",
        date: "2025",
        image: "/certificates/certificat4.jpg",
      },
    ],
  },
  languagesSection: {
    title: "Languages",
    items: [
      { name: "French", level: "Professional proficiency" },
      { name: "English", level: "Professional proficiency" },
      { name: "Arabic", level: "Native language" },
      { name: "Tamazight", level: "Native language" },
    ],
  },
  contact: {
    title: "Contact",
    intro:
      "I graduated in 2026 in Geoinformation and I am looking for opportunities in web GIS and full stack development. Feel free to contact me to discuss collaboration opportunities or any questions!",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    locationValue: "Nador, Morocco",
    sendEmail: "Send Email",
    followMe: "Find me on",
    rights: "Marwa Lamdaghri. All rights reserved.",
    note: "Driving License B • Available immediately",
    mapCaption: "The places of my journey, on a map",
  },
}

export const content: Record<Lang, Content> = { fr, en }

