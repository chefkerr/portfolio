// ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Edit this file to update text across the entire site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Abderrahmane Achak",
  initials: "AA",
  title: "Software Engineering Student",
  roles: [
    "I build intelligent software.",
    "I create AI-powered applications.",
    "I solve real-world problems with RAG.",
  ],
  location: "Salé, Morocco",
  email: "achakabderrahmane@gmail.com",
  github: "https://github.com/chefkerr",
  githubUser: "chefkerr",
  linkedin: "https://www.linkedin.com/in/abderrahmane-achak-9642b3297/",
  bio: "I am a Software Engineering student passionate about software development, artificial intelligence, and data science. I enjoy building innovative, intelligent applications that solve real-world problems by combining modern web technologies with AI solutions. Through academic and professional projects, I have developed strong skills in full-stack development, machine learning, and generative AI. My goal is to continuously grow as an engineer while contributing to impactful and innovative technology projects.",
  seeking: "Passionate about coding from an early age, I created this portfolio to share my journey and projects.",
};



export type SkillCategory = {
  id: string;
  label: string;
  accent: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    label: "Artificial Intelligence",
    accent: "signal",
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning (CNN)", level: 80 },
      { name: "NLP", level: 80 },
      { name: "LangChain / LangGraph", level: 82 },
      { name: "RAG", level: 92 },
      { name: "Ollama / LLM local", level: 88 },
      { name: "Prompt Engineering", level: 88 },
      { name: "AI Agents", level: 75 },
      { name: "ChromaDB", level: 85 },
      { name: "Generative AI", level: 85 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    accent: "signal2",
    skills: [
      { name: "Django / DRF", level: 90 },
      { name: "Python", level: 92 },
      { name: "Node.js / Express", level: 70 },
      { name: "PHP", level: 65 },
      { name: "ASP.NET", level: 55 },
      { name: "FastAPI", level: 75 },
      { name: "Java", level: 60 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    accent: "signal",
    skills: [
      { name: "React", level: 85 },
      { name: "React Native", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "HTML / CSS", level: 90 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    id: "data",
    label: "Databases & Data",
    accent: "amber",
    skills: [
      { name: "MongoDB / NoSQL", level: 85 },
      { name: "SQL Server", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Oracle / PL-SQL", level: 65 },
      { name: "ChromaDB", level: 85 },
      { name: "Pandas / NumPy", level: 88 },
      { name: "Power BI", level: 75 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Methods",
    accent: "signal2",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "UML / Merise", level: 85 },
      { name: "Agile / Scrum", level: 88 },
      { name: "ServiceNow", level: 78 },
      { name: "Linux / Unix", level: 75 },
    ],
  },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    id: "dxc-tma",
    company: "DXC Technology — for CDG",
    role: "Engineering Intern — AI Diagnostic Assistant for Application Maintenance",
    period: "July – August 2026",
    location: "DXC-CDG, Rabat ",
    description:
      "Designed and developed an intelligent diagnostic assistant for Application Maintenance (TMA), based on a RAG architecture paired with a locally run LLM through Ollama, to meet CDG's strict data-confidentiality requirements.",
    bullets: [
      "Built the complete document-preparation pipeline: extraction with pdfplumber, cleaning, three chunks per incident, embedding generation, and ChromaDB indexing (120 chunks from 40 records).",
      "Developed a threshold-based semantic-search engine, refined through ten correction iterations in real conditions, with aggregate scoring and lexical and LLM verification for ambiguous results.",
      "Created six specialized prompts for conversational contexts including diagnosis, follow-up, politeness, and out-of-scope requests.",
      "Developed the complete Django REST Framework and React web interface: chat, incident submission, administrator approval flow, and monitoring dashboard.",
      "Led Agile Scrum delivery independently across two 15-day sprints, including requirements documentation and complete UML modeling.",
    ],
    stack: ["Python", "Django REST Framework", "React", "Ollama", "ChromaDB", "SQLite", "UML", "Scrum"],
  },
  {
    id: "dxc-servicenow",
    company: "DXC Technology — CDG",
    role: "Intern — ServiceNow Development",
    period: "August – September 2025",
    location: "DXC, Rabat / Casablanca",
    description:
      "Designed and implemented a ServiceNow Service Catalog with a modern Request Portal, providing complete request traceability and automated process tracking.",
    bullets: [
      "Configured and automated approval workflows, business rules, and notifications.",
      "Developed a Request Portal providing full request traceability.",
      "Worked in an Agile framework: requirements specification, UML modeling, and sprint management.",
    ],
    stack: ["ServiceNow", "UML", "Agile/Scrum"],
  },
  {
    id: "redal",
    company: "REDAL",
    role: "Intern — Full-Stack Developer",
    period: "July – August 2025",
    location: "Rabat",
    description:
      "Smart wastewater terminal management system: a complete Django/MVT web application for centralized supervision and real-time monitoring of terminals in Rabat.",
    bullets: [
      "Designed a Django/MVT application with three distinct interfaces for administrators, technicians, and customers.",
      "Implemented automated billing and a real-time alert system.",
      "Produced UML models, unit and functional tests, and access controls.",
    ],
    stack: ["Django", "Python", "scikit-learn", "MongoDB", "UML"],
  },
  {
    id: "emsi-ml",
    company: "EMSI",
    role: "Academic Project — Demand Forecasting (ML)",
    period: "2025 – 2026",
    location: "EMSI, Rabat",
    description:
      "Developed and compared machine-learning models for daily demand forecasting, deployed through an interactive Streamlit interface.",
    bullets: [
      "Compared linear regression, KNN, SVR, and decision-tree models (R² ≈ 0.93).",
      "Deployed through Streamlit with MongoDB storage.",
      "Integrated ethical best practices and GDPR compliance.",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "Streamlit", "MongoDB"],
  },
];

export type Project = {
  slug: string;
  title: string;
  tag: string;
  category: string[];
  summary: string;
  description: string;
 images: string[];
  stack: string[];
  github?: string;
  demo?: string;
  docs?: string;
  featured: boolean;
  status: "Completed" | "In progress";
  year: string;
  caseStudy?: {
    objective: string;
    architecture: string[];
    challenges: { problem: string; solution: string }[];
    features: string[];
    results: string[];
    lessons: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "tma-rag-assistant",
    title: "Assistant IA de diagnostic TMA",
    tag: "RAG · LLM local",
    category: ["AI", "Machine Learning", "Django", "React","API"],
    summary:
      "Conversational RAG assistant for application-maintenance teams, running entirely locally to protect client-data confidentiality.",
    description:
      "Built during a two-month internship at DXC Technology for CDG. The solution uses a Retrieval-Augmented Generation (RAG) architecture paired with a locally run LLM through Ollama, enabling application-maintenance engineers to describe an incident in natural language and receive a structured diagnosis with likely causes, impacts, recommendations, and sources—while keeping people at the center of the final decision.",
    images: ["/projects/capture_login.png", "/projects/capture_chat.png", "/projects/capture_dashboard.png","/projects/chat.jpg"],
    stack: ["Python", "Django REST Framework", "React", "Ollama", "ChromaDB", "SQLite", "pdfplumber"],
    github: undefined,
    demo: undefined,
    featured: true,
    status: "Completed",
    year: "2026",
    caseStudy: {
      objective:
        "Réduire le temps moyen de résolution (MTTR) des équipes TMA en automatisant la recherche d'incidents similaires et la génération d'un premier diagnostic, sans jamais transmettre de données sensibles à un service cloud externe.",
      architecture: [
        "Frontend React (SPA) — interface de chat, historique, formulaires de soumission",
        "Backend Django REST Framework — orchestration, authentification par token, API REST",
        "Moteur RAG (search_engine.py + prompt_builder.py) — recherche sémantique et construction de prompts contextuels",
        "Ollama en local — génération des embeddings (nomic-embed-text, 768D) et du diagnostic (llama3.2:1b / llama3:8b)",
        "ChromaDB — base vectorielle pour la base de connaissances (120 chunks indexés)",
        "SQLite — persistance des conversations, messages et soumissions d'incidents",
      ],
      challenges: [
        {
          problem: "Des incidents non pertinents remontaient en tête de résultats.",
          solution: "Passage d'un score par chunk isolé à un score agrégé par incident (somme des similarités de tous ses chunks).",
        },
        {
          problem: "De simples coïncidences lexicales faisaient remonter à tort des incidents sans rapport.",
          solution: "Introduction d'une zone de score ambiguë déclenchant une double vérification : filtre lexical déterministe + vérification binaire par le LLM.",
        },
        {
          problem: "Le reclassement groupé de plusieurs candidats se révélait peu fiable.",
          solution: "Passage à une vérification séquentielle, du meilleur score au plus faible.",
        },
        {
          problem: "Les messages de suivi courts déclenchaient une nouvelle recherche RAG inutile.",
          solution: "Détection dédiée des messages de suivi, réutilisant le contexte déjà établi dans la conversation.",
        },
        {
          problem: "Le modèle 8B provoquait des erreurs CUDA sur l'environnement de développement.",
          solution: "Bascule sur le modèle léger llama3.2:1b par défaut, avec option de désactivation GPU en secours.",
        },
      ],
      features: [
        "Diagnostic conversationnel avec détection automatique du type de message (incident, politesse, suivi, confirmation)",
        "Score de confiance à 3 niveaux (hors périmètre / zone ambiguë / confiance directe)",
        "Circuit de soumission et de validation administrateur enrichissant automatiquement la base",
        "Tableau de bord de supervision : couverture de la base, temps de réponse, comparaison de modèles LLM",
        "Traçabilité complète de chaque échange (SQLite)",
      ],
      results: [
        "120 chunks indexés à partir de 40 fiches d'incidents historiques",
        "Temps de réponse moyen d'environ 35 secondes en local",
        "Taux de couverture de la base d'environ 77% sur les tests réalisés",
        "8 des 8 objectifs fonctionnels du cahier des charges pleinement atteints",
      ],
      lessons: [
        "Une part importante du travail sur un système RAG consiste à observer le comportement réel du LLM et ajuster itérativement seuils, prompts et filtres — pas seulement à corriger du code.",
        "L'exécution locale d'un LLM impose des compromis assumés sur la puissance du modèle, en échange d'une confidentialité totale des données.",
      ],
    },
  },
  {
    slug: "ai-learning-path-rag",
    title: "AI Learning Path RAG",
    tag: "Web · Generative AI",
    category: ["Web", "AI", "RAG"],
    summary:
    "An intelligent web application that transforms a PDF course into a complete personalized study path through a RAG pipeline combining ChromaDB and Google Gemini.",
    description:
    "An EMSI project (Computer Engineering and Networks, 4 AI DATA class) designed to make revision from PDF course material easier. The user uploads a course, and the application extracts its content, splits it into semantic passages, indexes it in a vector database, and uses a generative-AI model to create a structured summary, multiple-choice quizzes, flashcards, a personalized study plan, and an educational chatbot grounded in the course's exact content.",
      images: ["/projects/ai agent/resume_.jpg", "/projects/ai agent/qcm.jpg", "/projects/ai agent/planning.jpg", "/projects/ai agent/chat.jpg", "/projects/ai agent/rag.jpg"],
    stack: [
    "Python",
    "FastAPI",
    "React",
    "ChromaDB",
    "LangChain",
    "Google Gemini",
    "PyMuPDF",
    "Pydantic",
    "SQLite",
    "Uvicorn",
    ],
    github: undefined,
    demo: undefined,
      featured: true,
    status: "Completed",
    year: "2025-2026",
    caseStudy: {
    objective:
      "Concevoir une plateforme capable de transformer automatiquement tout cours PDF en un parcours de révision complet et personnalisé (résumé, QCM, flashcards, planning, recommandations, chatbot), grâce à une architecture RAG garantissant la pertinence et l'exactitude des contenus générés.",
        architecture: [
      "Backend FastAPI (Python 3.10+) exposant une API REST asynchrone",
      "Frontend React 18 (via CDN, sans JSX ni bundler) avec navigation par onglets",
      "Pipeline RAG : extraction PyMuPDF → chunking LangChain → embeddings → indexation ChromaDB → recherche vectorielle → génération augmentée",
      "Cinq agents IA spécialisés : SummaryAgent, QuizAgent, FlashcardAgent, PlannerAgent, RecommendationAgent, plus un ChatbotAgent",
      "Modèle Google Gemini pour la génération de contenu et les embeddings (text-embedding-004)",
      "Base vectorielle ChromaDB (une collection par document indexé)",
      "Stockage des métadonnées en SQLite, configuration via python-dotenv",
      "Validation stricte de toutes les sorties IA via des modèles Pydantic",
      "Mode de secours local (fallback) pour chaque agent en cas d'indisponibilité de Gemini",
    ],
    challenges: [
      {
        problem:
          "Garantir que les réponses générées par le LLM restent fidèles au contenu réel du cours et évitent les hallucinations.",
        solution:
          "Mise en place d'un pipeline RAG complet : recherche des k passages les plus pertinents dans ChromaDB par similarité cosinus, puis injection de ce contexte dans les prompts de chaque agent, avec obligation de s'appuyer uniquement sur le contexte fourni.",
      },
      {
        problem:
          "Assurer la disponibilité de l'application même en cas de panne ou d'indétection de l'API Gemini.",
        solution:
          "Implémentation d'un système de double mode avec des fonctions de secours pour chaque agent (fallback_summary, fallback_quiz, fallback_flashcards, fallback_planning, local_chat_answer) et un embedding pseudo-aléatoire déterministe basé sur le hachage MD5 du texte.",
      },
      {
        problem:
          "Fiabiliser les sorties structurées (JSON) produites par un LLM, souvent bruitées par du texte parasite ou des formats invalides.",
        solution:
          "Fonction parse_model_list() qui extrait le bloc JSON, nettoie les balises Markdown, parse avec gestion d'exceptions, valide chaque élément via Pydantic (QuizItem, Flashcard, etc.) et filtre les éléments invalides sans faire échouer toute la requête.",
      },
      {
        problem:
          "Personnaliser finement le contenu généré (résumé, QCM, planning) selon le niveau, les points faibles et les disponibilités de chaque étudiant.",
        solution:
          "Injection systématique du profil apprenant (niveau, temps disponible, méthode préférée, points faibles, objectif, nombre de jours) dans les prompts de chaque agent, avec une logique de personnalisation dédiée (ex. plus de temps sur les définitions pour un niveau faible, exercices avancés pour un niveau fort).",
      },
    ],
    features: [
      "Upload et extraction automatique de PDF (texte page par page via PyMuPDF)",
      "Découpage sémantique en chunks (1200 caractères, chevauchement de 180) via LangChain",
      "Indexation vectorielle par document dans ChromaDB avec recherche par similarité cosinus",
      "Résumé structuré du cours (idée générale, notions clés, méthode, erreurs fréquentes)",
      "Génération de 8 QCM avec 4 choix, correction et explication par question",
      "10 flashcards recto/verso pour la mémorisation active (répétition espacée)",
      "Planning de révision journalier personnalisé avec tâches chronométrées et livrables",
      "Recommandations personnalisées selon le profil et les points faibles",
      "Chatbot pédagogique RAG avec affichage des sources utilisées pour la traçabilité",
      "Interface React interactive avec onglets (Résumé, QCM, Flashcards, Planning, Conseils, Sources RAG)",
    ],
    results: [
      "Pipeline RAG complet et fonctionnel, de l'ingestion du PDF à la génération augmentée",
      "Cinq agents IA spécialisés opérationnels avec sorties validées par Pydantic",
      "Mode de secours local garantissant la disponibilité de l'application sans connexion à Gemini",
      "Interface React légère et interactive, sans étape de build",
      "Application testée sur des PDF de tailles variées (1 à 200 pages) et sur plusieurs navigateurs",
    ],
    lessons: [
      "L'architecture RAG permet de contraindre un LLM à s'appuyer sur des sources exactes, réduisant significativement les hallucinations.",
      "La conception de prompts précis et structurés (prompt engineering) est déterminante pour obtenir des sorties JSON exploitables.",
      "Prévoir un mode de secours dès la conception renforce la robustesse d'une application dépendante d'une API IA externe.",
      "L'organisation en agents spécialisés facilite la maintenabilité et l'extensibilité du système face à de nouveaux besoins pédagogiques.",
    ],
  },
  },
  {
  slug: "weather-data-flow-management-datalake",
  title: "Weather Data Flow Management",
  tag: "Data Engineering · Data Lake",
  category: ["Data Engineering", "ETL", "Business Intelligence"],
  summary:
    "An end-to-end data-architecture pipeline for weather data from Moroccan cities, structured around the Bronze/Silver/Gold Data Lake paradigm, with Airflow orchestration and Power BI reporting.",
  description:
    "An EMSI project (Computer Engineering and Networks, fourth year, 4 AI DATA G2 class) completed for the Data Architecture module. It consists of designing an end-to-end data pipeline that uses the OpenWeatherMap API to collect, transform, and enrich weather data for four Moroccan cities: Marrakech, Tangier, Dakhla, and Essaouira. The architecture follows a three-layer Data Lake approach—Bronze, Silver, and Gold—with S3-compatible MinIO object storage, daily orchestration through Apache Airflow, analytical reporting in Microsoft Power BI, and a local Flask dashboard for fast monitoring.",
  images: [
    "/projects/weather-pipeline/dash.png",
    "/projects/weather-pipeline/powerbi-dashboard.jpg",
    "/projects/weather-pipeline/3.png",
    "/projects/weather-pipeline/minio.png",
  ],
  stack: [
    "Python",
    "Apache Airflow",
    "MinIO (S3)",
    "boto3",
    "Power BI",
    "Flask",
    "OpenWeatherMap API",
  ],
  github: undefined,
  demo: undefined,
  featured: true,
  status: "Completed",
  year: "2025-2026",
  caseStudy: {
    objective:
      "Construire un pipeline de données complet permettant la collecte automatisée, le stockage structuré, l'enrichissement analytique et la restitution décisionnelle des données météorologiques de quatre villes marocaines, en garantissant la traçabilité complète des données depuis leur source jusqu'aux tableaux de bord.",
    architecture: [
      "Architecture Data Lake en médaillon : couches Bronze (données brutes), Silver (données nettoyées et typées) et Gold (données enrichies avec KPI)",
      "Stockage objet MinIO (compatible S3) organisé par ville et par date, exploité via le SDK boto3 en Python",
      "Ingestion périodique des données depuis l'API OpenWeatherMap (température, humidité, vent, pression)",
      "Transformation Silver : conversion des types, contrôle de cohérence des valeurs, extraction et formatage des timestamps en ISO 8601",
      "Enrichissement Gold : calcul du weather_score (KPI composite pondérant température, humidité et vent normalisés), classement des villes et identification de la meilleure ville",
      "Orchestration du pipeline via un DAG Apache Airflow (ingestion_bronze → transformation_silver → enrich_gold → quality_checks), planifié quotidiennement à 06h00",
      "Reporting analytique via Power BI, alimenté par le fichier CSV de la couche Gold",
      "Dashboard Flask local (web_app.py + templates Jinja2) pour une visualisation rapide des données Bronze",
    ],
    challenges: [
      {
        problem:
          "Structurer un flux de données brutes issues d'une API externe en un format exploitable et fiable pour l'analyse, tout en garantissant la qualité des données à chaque étape.",
        solution:
          "Mise en place du paradigme Bronze/Silver/Gold avec des règles de qualité strictes à chaque transformation : validation des plages de valeurs (température entre -20 et 60°C, humidité entre 0 et 100%), rejet des enregistrements incomplets, et typage rigoureux des champs.",
      },
      {
        problem:
          "Comparer et classer objectivement les villes selon leur attractivité météorologique à partir de plusieurs variables hétérogènes (température, humidité, vent).",
        solution:
          "Conception d'un indicateur composite, le weather_score, combinant les trois variables normalisées avec des pondérations configurables (α, β, γ), permettant un classement homogène et l'identification automatique de la meilleure ville (is_best_city).",
      },
      {
        problem:
          "Automatiser l'exécution quotidienne et fiable de l'ensemble du pipeline (ingestion, transformation, enrichissement, contrôle qualité) sans intervention manuelle.",
        solution:
          "Développement d'un DAG Apache Airflow avec 4 tâches séquentielles, une politique de retry (3 tentatives, délai de 5 minutes) et une planification cron quotidienne, garantissant la résilience et la traçabilité des exécutions.",
      },
      {
        problem:
          "Gérer les incompatibilités de format décimal entre le CSV généré (convention anglo-saxonne) et Power BI en version française, provoquant des erreurs d'import.",
        solution:
          "Documentation d'une procédure de conversion dans Power Query : application des paramètres régionaux Anglais (États-Unis) sur les colonnes décimales (temperature, wind_speed, weather_score) avant import.",
      },
    ],
    features: [
      "Collecte automatisée des données météo pour 4 villes marocaines via l'API OpenWeatherMap",
      "Stockage hiérarchique et partitionné (par ville et par date) dans MinIO",
      "Pipeline ETL complet avec transformations Silver (nettoyage) et Gold (enrichissement)",
      "Calcul d'un score météo composite (weather_score) et classement automatique des villes",
      "Orchestration et planification automatique du pipeline via Apache Airflow, avec déclenchement manuel possible",
      "Tableau de bord Power BI interactif : température par ville, classement, carte géographique, évolution temporelle",
      "Interface Flask locale pour un monitoring rapide des données brutes",
      "Contrôles qualité automatisés intégrés comme étape finale du pipeline",
    ],
    results: [
      "Pipeline Bronze → Silver → Gold → Reporting entièrement fonctionnel et automatisé pour 4 villes marocaines",
      "DAG Airflow opérationnel avec statut Succès systématique et durée d'exécution stable (~32,7 secondes)",
      "Dashboard Power BI officiel exploitant le fichier weather_analytics.csv avec classement dynamique des villes",
      "Interface Flask locale permettant une visualisation immédiate des données Bronze sans attendre le cycle complet",
      "Console MinIO confirmant une organisation cohérente des objets stockés selon l'architecture médaillon (bronze, silver, gold, weather_raw)",
    ],
    lessons: [
      "Le paradigme Data Lake Bronze/Silver/Gold permet de séparer clairement les responsabilités et d'améliorer progressivement la qualité des données à chaque étape.",
      "La compatibilité S3 de MinIO facilite grandement l'utilisation d'outils standards (boto3) sans dépendance à un fournisseur cloud, idéale pour le développement local.",
      "L'orchestration via Airflow, avec gestion des retries et planification, est essentielle pour garantir la fiabilité d'un pipeline exécuté quotidiennement sans supervision humaine.",
      "Les détails régionaux (séparateurs décimaux) entre les outils (Python/CSV vs Power BI) doivent être anticipés dès la conception du reporting pour éviter des erreurs d'import silencieuses.",
    ],
  },
  },
  {
  slug: "prevision-demande-ml-ethique-ia",
  title: "Prévision de la Demande Journalière & Éthique de l'IA",
  tag: "Machine Learning · Streamlit",
  category: ["Machine Learning", "Data Science", "Web"],
  summary:
    "A daily-demand forecasting application based on several machine-learning algorithms, featuring a Streamlit web interface and an in-depth analysis of the ethical and regulatory issues, including GDPR, surrounding AI use.",
  description:
    "An EMSI assessment project (Computer Engineering and Networks, fourth year) completed for the Artificial Intelligence & Machine Learning module. It aims to forecast a product's daily demand from historical sales data in order to optimize inventory management, production planning, and operational costs. Several regression algorithms were implemented, compared, and evaluated with scikit-learn, then integrated into an interactive web interface built with Streamlit. The project also considers the ethical and legal aspects of AI use, including GDPR compliance, bias-risk analysis, and the need to preserve human judgment in decision-making.",
  images: [
    "/projects/AI_ML/stat.jpg",
    "/projects/AI_ML/index.jpg",
    "/projects/AI_ML/index_2.jpg",
    "/projects/AI_ML/mongo.jpg",
    "/projects/AI_ML/choix.jpg",
  ],
  stack: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
    "Streamlit",
    "MongoDB",
  ],
  github: undefined,
  demo: undefined,
  featured: true,
  status: "Completed",
  year: "2025-2026",
  caseStudy: {
    objective:
      "Développer un modèle de Machine Learning capable de prédire avec précision et fiabilité la demande journalière d'un produit à partir de données historiques (5000 lignes), tout en respectant les normes éthiques et légales liées à l'utilisation de l'IA, notamment la conformité au RGPD et la préservation du jugement humain dans le processus décisionnel.",
    architecture: [
      "Préparation et exploration des données avec Pandas et NumPy (nettoyage, encodage, split train/test 80/20)",
      "Implémentation et comparaison de 5 modèles de régression via scikit-learn : Régression Linéaire Multiple, Régression Polynomiale, K-Nearest Neighbors, SVR (noyau RBF), Arbre de Décision (avec et sans élagage)",
      "Visualisation des données et des résultats avec Matplotlib",
      "Interface web interactive développée avec Streamlit (saisie des paramètres, choix du modèle, prédiction en temps réel)",
      "Base de données MongoDB pour le stockage et l'historisation des prédictions (format document NoSQL)",
      "Analyse éthique et réglementaire intégrée au processus (identification des données personnelles, RGPD, biais)",
    ],
    challenges: [
      {
        problem:
          "Identifier le modèle de Machine Learning offrant le meilleur compromis entre performance prédictive, interprétabilité et complexité, parmi plusieurs algorithmes aux caractéristiques très différentes.",
        solution:
          "Comparaison systématique de 6 configurations de modèles (linéaire, polynomial, KNN, SVR, arbre avant/après élagage) sur la base du MSE, du R², de l'interprétabilité et de la complexité, aboutissant à un tableau comparatif détaillé.",
      },
      {
        problem:
          "L'arbre de décision, avant régularisation, présentait un risque de surapprentissage (R² ≈ 0,977, MSE ≈ 74,19) malgré une bonne capacité explicative.",
        solution:
          "Application d'un élagage (pruning) avec un paramètre optimal ccp_alpha ≈ 0,05, réduisant la complexité du modèle et améliorant ses performances (R² ≈ 0,987, MSE ≈ 41,86).",
      },
      {
        problem:
          "Certaines données du dataset (store_id, historiques de ventes) pouvaient constituer des informations commerciales sensibles au sens du RGPD, sans pour autant identifier directement des individus.",
        solution:
          "Analyse détaillée de chaque variable au regard du RGPD, justification de leur usage par la finalité du projet, et mise en place d'une réflexion sur la protection des informations sensibles.",
      },
      {
        problem:
          "Les modèles complexes (KNN, SVR) fonctionnent comme des boîtes noires, rendant leurs prédictions difficiles à expliquer et réduisant la confiance des décideurs.",
        solution:
          "Priorisation de modèles interprétables (régression linéaire, arbre de décision élagué) pour un usage professionnel, et mise en place d'un cadre de supervision humaine pour valider les prédictions automatisées.",
      },
    ],
    features: [
      "Saisie des paramètres de prédiction (jour de la semaine, mois, promotion, jour férié, ID magasin, demande de base)",
      "Choix du modèle de Machine Learning parmi les 6 algorithmes entraînés",
      "Prédiction de la demande en temps réel avec affichage immédiat du résultat",
      "Historique complet des prédictions stocké dans MongoDB, avec filtres par modèle et par date",
      "Tableau de bord avec indicateurs clés (total des prédictions, moyenne, min, max)",
      "Visualisations graphiques des performances de chaque modèle (nuages de points, courbes R²/MSE selon K, arbres de décision)",
      "Analyse éthique intégrée : cartographie des risques (discrimination indirecte, erreurs de prédiction, manque de transparence) avec mesures de limitation associées",
    ],
    results: [
      "Régression Linéaire Multiple identifiée comme meilleur modèle global : R² = 0,9893, MSE = 34,88, avec une très forte interprétabilité",
      "Arbre de Décision élagué comme meilleure alternative interprétable : R² = 0,9872, MSE = 41,86 après optimisation du paramètre ccp_alpha",
      "KNN et SVR écartés pour un usage en production en raison de leur MSE élevé (194,19 et 228,74) et de leur faible interprétabilité",
      "Application web fonctionnelle permettant un workflow complet : entraînement, sauvegarde, prédiction et suivi historique des modèles",
      "Cadre éthique structuré (tableau des risques, mesures de limitation) garantissant une utilisation responsable du modèle en tant qu'aide à la décision",
    ],
    lessons: [
      "La performance brute d'un modèle (R²/MSE) ne suffit pas : l'interprétabilité et la complexité doivent être évaluées conjointement pour un usage professionnel réel.",
      "L'élagage des arbres de décision est un levier efficace pour réduire le surapprentissage tout en conservant une bonne capacité explicative.",
      "L'intégration des enjeux RGPD et éthiques dès la conception (privacy by design) est aussi importante que la performance technique du modèle.",
      "Un modèle de Machine Learning doit rester un outil d'aide à la décision : la supervision humaine reste indispensable pour gérer les cas atypiques et les responsabilités légales.",
    ],
  },
  },
  {
    slug: "madimarket",
    title: "MadiMarket",
    tag: "E-commerce",
    category: ["Web", "Django"],
    summary:
      "A complete e-commerce platform with catalog, cart, and order management, built with Django and MongoDB.",
    description:
      "An e-commerce application developed with Django for the back end, MongoDB as the database, and an HTML/CSS/JavaScript interface. The project covers product-catalog management, the shopping journey, and order processing.",
    images: ["/projects/1.png", "/projects/all.jpg", "/projects/8.png","/projects/7.png","/projects/13.png","/projects/commande.jpg"],
    stack: ["Django", "MongoDB", "HTML", "CSS", "JavaScript"],
    github: undefined,
    demo: undefined,
    featured: true,
    status: "Completed",
    year: "2025",
    caseStudy: {
      objective:
        "Construire une plateforme e-commerce fonctionnelle de bout en bout : catalogue produits, panier, gestion des commandes, avec une base de données NoSQL adaptée à un catalogue évolutif.",
      architecture: [
        "Backend Django — logique métier, gestion du catalogue et des commandes",
        "MongoDB — stockage NoSQL flexible pour les produits et les commandes",
        "Frontend HTML / CSS / JavaScript — interface d'achat et navigation du catalogue",
      ],
      challenges: [
        {
          problem: "Intégrer une base NoSQL (MongoDB) dans un projet Django, historiquement pensé pour du relationnel.",
          solution: "Mise en place d'une couche d'accès aux données dédiée pour ponter Django et MongoDB.",
        },
      ],
      features: [
        "Catalogue produits avec navigation et recherche",
        "Panier d'achat",
        "Gestion des commandes",
      ],
      results: [
        "Application e-commerce fonctionnelle de bout en bout",
      ],
      lessons: [
        "Choisir la bonne base de données selon la structure des données (catalogue évolutif → NoSQL) plutôt que par défaut.",
      ],
    },
  },
  {
    slug: "redal-bornes-intelligentes",
  title: "Smart Reclaimed Water Terminal — REDAL",
  tag: "Web · Geolocation",
  category: ["Web", "Django","API"],
    summary:
      "A web application for monitoring smart wastewater terminals, developed as an academic project inspired by REDAL Rabat's operations.",
    description:
      "An academic project inspired by REDAL's operations, developed in a context of growing urbanization and pressure on water resources. The Django-based application supports centralized management, real-time monitoring, and usage simulation for smart terminals distributed across Rabat, with three distinct user interfaces for administrators, technicians, and customers.",
    images: ["/projects/redal/index.jpg","/projects/redal/maps.jpg","/projects/redal/sum.jpg","/projects/redal/dashbord ad.jpg","/projects/redal/dashte.jpg","/projects/redal/borne.jpg","/projects/redal/admin.jpg"],
    stack: ["Python", "Django", "MySQL", "Geolocation API", "HTML/CSS", "Bootstrap"],
    github: undefined,
    demo: undefined,
    featured: true,
    status: "Completed",
    year: "2025",
    caseStudy: {
      objective:
        "Moderniser la gestion des eaux usées à travers un système intelligent de supervision des bornes de collecte : gestion centralisée, suivi en temps réel et simulation d'utilisation des bornes réparties dans la ville de Rabat.",
      architecture: [
        "Application web Django (architecture MVC)",
        "Base de données MySQL",
        "Intégration d'une API de géolocalisation pour le suivi en temps réel des bornes",
        "Trois interfaces distinctes : administrateur, technicien, client",
        "Interface responsive en HTML/CSS et Bootstrap",
      ],
      challenges: [
        {
          problem: "Suivre en temps réel la localisation et l'état de bornes réparties sur toute la ville de Rabat.",
          solution:
            "Intégration d'une API de géolocalisation permettant la visualisation et le suivi en temps réel des bornes sur la plateforme.",
        },
        {
          problem: "Offrir une expérience adaptée à trois profils d'utilisateurs aux besoins très différents.",
          solution:
            "Conception de trois interfaces dédiées (administrateur, technicien, client), chacune avec ses propres fonctionnalités : visualisation, simulation de consommation, facturation, gestion des maintenances et alertes.",
        },
      ],
      features: [
        "Visualisation et suivi en temps réel des bornes (géolocalisation)",
        "Simulation de consommation",
        "Facturation automatisée",
        "Gestion des maintenances et système d'alertes",
        "Traçabilité complète des opérations",
        "Modélisation UML, développement itératif MVC, tests unitaires et fonctionnels",
      ],
      results: [
        "Application web complète et responsive avec 3 interfaces fonctionnelles",
        "Suivi en temps réel opérationnel via API de géolocalisation",
        "Sécurisation des accès selon le rôle de l'utilisateur",
      ],
      lessons: [
        "Une démarche rigoureuse (analyse des besoins, modélisation UML, développement itératif) facilite l'intégration de fonctionnalités complexes comme la géolocalisation temps réel.",
        "Adapter une interface à plusieurs profils d'utilisateurs demande de penser les permissions et les parcours dès la modélisation, pas après coup.",
      ],
    },
  },
  {
  slug: "classification-images-sportives-deep-learning",
  title: "Sports Image Classification with Deep Learning",
  tag: "AI · Deep Learning",
  category: ["AI", "Deep Learning", "Computer Vision","Machine Learning"],
  summary:
    "An automated classification system for 100 sports disciplines using transfer learning with EfficientNetB0, deployed through an interactive Streamlit web interface.",
  description:
    "An academic project completed for the Deep Learning module at EMSI (Artificial Intelligence and Data Science program). Its goal is to design, train, and deploy a system that can identify 100 sports disciplines from a single photograph despite a very limited training dataset of 100 images per class. The model combines transfer learning and fine-tuning with EfficientNetB0 pre-trained on ImageNet, trained in two phases, and deployed through a Streamlit web interface for real-time predictions.",
  images: ["/projects/deep/deep.jpg"],
  stack: [
    "Python",
    "TensorFlow",
    "Keras",
    "EfficientNetB0",
    "NumPy",
    "Matplotlib/Seaborn",
    "scikit-learn",
    "Streamlit",
    "Pillow",
  ],
  github: undefined,
  demo: undefined,
  featured: true,
  status: "Completed",
  year: "2025-2026",
  caseStudy: {
    objective:
      "Concevoir un modèle de classification d'images capable d'identifier correctement 100 disciplines sportives malgré une faible volumétrie de données (100 images/classe), un risque élevé de sur-apprentissage et une grande similarité visuelle entre certaines classes.",
    architecture: [
      "Pipeline de données via tf.data (image_dataset_from_directory), optimisé avec cache() et prefetch()",
      "Couche d'augmentation de données (flip, rotation ±15°, zoom ±15%, contraste et luminosité ±10%)",
      "Backbone EfficientNetB0 pré-entraîné sur ImageNet (include_top=False)",
      "Tête de classification : GlobalAveragePooling2D → BatchNormalization → Dense(256, ReLU) → Dropout(0.4) → Dense(100, Softmax)",
      "Entraînement en deux phases : head training (backbone gelé) puis fine-tuning partiel (100 dernières couches dégelées)",
      "Interface web Streamlit (app.py) avec thème sombre athlétique et typographie Bebas Neue",
    ],
    challenges: [
      {
        problem: "Très faible volumétrie de données (100 images/classe pour 100 classes) entraînant un risque élevé de sur-apprentissage.",
        solution:
          "Application du Transfer Learning avec EfficientNetB0, combiné à une augmentation de données (flip, rotation, zoom, contraste, luminosité) et à un Dropout de 0.4.",
      },
      {
        problem: "Instabilité des métriques de validation, avec seulement 5 images de validation par classe générant une forte variance.",
        solution:
          "Augmentation de la patience de l'EarlyStopping (patience=5 puis 7) pour éviter un arrêt prématuré de l'entraînement.",
      },
      {
        problem: "Calibrage difficile du fine-tuning : un dégel trop agressif du backbone causait du sur-apprentissage.",
        solution:
          "Plusieurs expériences ont permis de fixer le dégel aux 100 dernières couches du backbone avec un taux d'apprentissage réduit (α2 = 10⁻⁴, 10 fois plus faible qu'en phase 1).",
      },
      {
        problem: "Chemin vers results.json codé en dur avec des séparateurs Windows, rendant l'application non portable.",
        solution: "Remplacement par pathlib.Path pour un chemin indépendant du système d'exploitation.",
      },
      {
        problem: "Ambiguïté visuelle entre certaines classes proches (ski vs snowboard, judo vs lutte).",
        solution:
          "Limitation identifiée comme perspective d'amélioration, nécessitant des données supplémentaires ou des architectures plus fines.",
      },
    ],
    features: [
      "Classification automatique parmi 100 disciplines sportives",
      "Score de confiance (probabilité softmax) pour chaque classe",
      "Interface web avec upload d'image et affichage des résultats en temps réel",
      "Historique des 5 dernières prédictions de la session",
      "Indicateur de confiance adaptatif (vert/jaune/rouge selon le seuil)",
      "Visualisations générées automatiquement : courbes d'apprentissage, matrice de confusion, accuracy par classe, exemples de prédictions",
      "Sauvegarde automatique du meilleur modèle (.keras)",
    ],
    results: [
      "Accuracy globale sur le jeu de test : 97%",
      "Précision macro : 0.975",
      "Loss sur le jeu de test : 0.0947",
      "Interface Streamlit fonctionnelle avec prédiction en temps réel et badge de confiance adaptatif",
    ],
    lessons: [
      "Le Transfer Learning combiné à l'augmentation de données permet d'obtenir de très bonnes performances même avec un jeu de données restreint.",
      "Un entraînement en deux phases (head training puis fine-tuning progressif) limite le sur-apprentissage tout en adaptant le backbone à un nouveau domaine.",
      "La portabilité du code (chemins, dépendances) doit être anticipée dès le développement pour faciliter le déploiement.",
    ],
  },
},
  {
  slug: "django-school-management-system",
  title: "School Management System",
  tag: "Web · Django",
  category: ["Web", "Django"],
  summary:
    "A complete school-management web application developed with Django, offering dedicated interfaces for administrators, teachers, and students to centralize grades, absences, and timetables.",
  description:
    "A final-year project completed at EMSI (Computer Engineering and Networks, class 3IIR11) to automate and optimize school management. Built with Django using the MVT architecture, the system supports three user types—administrators, teachers, and students—each with an interface and features tailored to their needs: user and room management, grade entry, timetable viewing, absence tracking, and personal-information management.",
  images: ["/projects/portal/login.jpg","/projects/portal/inter3_3.png","/projects/portal/inter2_2.png","/projects/portal/em.jpg"],
  stack: [
    "Python",
    "Django",
    "SQLite",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap 5",
  ],
  github: undefined,
  demo: undefined,
  featured: true,
  status: "Completed",
  year: "2024-2025",
  caseStudy: {
    objective:
      "Concevoir un système de gestion scolaire capable de centraliser les données des établissements (étudiants, professeurs, notes, absences, emplois du temps) afin d'automatiser les processus administratifs traditionnellement dispersés, sujets aux erreurs humaines et chronophages.",
    architecture: [
      "Architecture Django basée sur le modèle MVT (Model-View-Template)",
      "Backend Python 3.11+ avec ORM Django pour la gestion de la base de données",
      "Base de données relationnelle SQLite (environnement de développement)",
      "Frontend HTML5, CSS3, JavaScript et Bootstrap 5 pour une interface responsive",
      "Système d'authentification personnalisé et différencié selon trois profils (Admin, Professeur, Étudiant)",
      "Modélisation UML complète : diagrammes de cas d'utilisation, de classes et de séquence",
      "Optimisation des performances via select_related(), pagination et agrégations en base de données",
    ],
    challenges: [
      {
        problem: "Gestion dispersée et manuelle des informations scolaires (notes, absences, emplois du temps), source d'erreurs, de duplication et de perte de temps.",
        solution:
          "Centralisation de toutes les données dans un système unique basé sur une base de données relationnelle avec des entités clairement modélisées (Admin, Professeur, Étudiant, Matière, Note, EmploiDuTemps, Absence).",
      },
      {
        problem: "Adapter l'accès et les fonctionnalités à trois profils d'utilisateurs très différents (administrateurs, professeurs, étudiants) avec des besoins et des droits distincts.",
        solution:
          "Mise en place d'un système d'authentification multi-profils avec des tableaux de bord et interfaces dédiés à chaque rôle, ainsi qu'un contrôle d'accès basé sur les sessions et permissions.",
      },
      {
        problem: "Assurer la cohérence et l'intégrité des données (CIN uniques, conflits d'horaires, notes valides, dates cohérentes).",
        solution:
          "Définition de contraintes d'intégrité au niveau des modèles Django : unicité des CIN, validation temporelle des créneaux (heure de fin > heure de début), vérification des chevauchements de salles/classes, plage de notes de 0 à 20.",
      },
      {
        problem: "Optimiser les performances des requêtes pour l'affichage de listes filtrées de notes et d'emplois du temps avec de gros volumes de données.",
        solution:
          "Utilisation systématique de select_related() pour limiter les requêtes N+1, pagination des résultats et calculs statistiques (moyennes, min, max) déportés en base via aggregate().",
      },
    ],
    features: [
      "Authentification sécurisée différenciée par profil (nom + CIN pour les étudiants, identifiants professionnels pour les professeurs, accès privilégié pour les administrateurs)",
      "Gestion CRUD complète des utilisateurs, matières, classes et salles (côté administrateur)",
      "Saisie et modification des notes par les professeurs, avec calcul automatique des moyennes",
      "Consultation des notes, absences, emploi du temps et informations personnelles par les étudiants",
      "Gestion dynamique des emplois du temps avec détection des conflits d'horaires",
      "Suivi des absences avec statut de justification",
      "Tableaux de bord personnalisés par profil (total notes, moyenne générale, total absences, etc.)",
      "Filtrage et tri avancés des notes et emplois du temps (par matière, étudiant, classe)",
      "Export des données et génération de rapports (administrateur)",
    ],
    results: [
      "Système multi-utilisateurs fonctionnel avec trois profils distincts et authentification sécurisée",
      "Interface responsive et intuitive, adaptée à chaque type d'utilisateur",
      "Base de données relationnelle cohérente avec contraintes d'intégrité (unicité CIN, validation des créneaux horaires, notes entre 0 et 20)",
      "Requêtes optimisées (select_related, pagination) assurant une navigation fluide",
      "Modélisation UML complète (cas d'utilisation, classes, plus de 10 diagrammes de séquence) documentant l'ensemble des scénarios métier",
    ],
    lessons: [
      "Le modèle MVT de Django impose une séparation claire des responsabilités qui facilite la maintenabilité et l'évolution du code.",
      "Une modélisation UML rigoureuse en amont (cas d'utilisation, classes, séquences) accélère considérablement l'implémentation en clarifiant les interactions entre acteurs et système.",
      "La gestion de plusieurs profils utilisateurs avec des droits différenciés doit être pensée dès la conception de la base de données et de l'architecture d'authentification.",
      "L'optimisation des requêtes (select_related, agrégations SQL) est essentielle dès que le volume de données et le nombre d'utilisateurs simultanés augmentent.",
    ],
  },
},
  
];

export const education = [
  {
    school: "Moroccan School of Engineering Sciences (EMSI)",
    degree: "Computer Engineering and Networks — AI & Data specialization",
    period: "2022 – 2027",
    location: "Rabat, Morocco",
    description:
      "General engineering education in computer science, specializing in Artificial Intelligence and Data. Member of the Honoris United Universities network.",
  },
  {
    school: "Groupe Scolaire Al Maarif",
    degree: "Mathematics Baccalaureate",
    period: "2021 – 2022",
    location: "Salé, Morocco",
    description: "Scientific education with a focus on mathematics.",
  },
];

export const certifications = [
  {
    name: "React Native",
    issuer: "Meta — Coursera",
    year: "2025",
  },
  {
    name: "React Basics",
    issuer: "Meta — Coursera",
    year: "2025",
  },
  {
    name: "Python for Data Science & AI",
    issuer: "IBM — Coursera",
    year: "2024",
  },
  {
    name: "L'atelier Unix",
    issuer: "The Johns Hopkins University — Coursera",
    year: "2024",
  },
  {
    name: "Object-Oriented Programming in C++",
    issuer: "EPFL",
    year: "2024",
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Fluent" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
