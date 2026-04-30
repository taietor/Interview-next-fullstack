import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  Brain, 
  Zap, 
  Settings, 
  Code, 
  BookOpen, 
  Target, 
  Lightbulb,
  ChevronRight,
  Download,
  GitBranch,
  Terminal,
  FileText,
  Layers,
  Database,
  Globe,
  Shield,
  Cpu,
  ExternalLink,
  Star,
  Check,
  X
} from 'lucide-react'
import Link from 'next/link'

export default function CopilotGuidePage() {
  const techniques = [
    {
      id: 'mcp-setup',
      title: 'Model Context Protocol (MCP)',
      description: 'Configura MCP per fornire contesto personalizzato al tuo Copilot',
      icon: Database,
      difficulty: 'Avanzato',
      time: '30-45 min'
    },
    {
      id: 'local-training',
      title: 'Addestramento Locale',
      description: 'Tecniche per addestrare Copilot sui tuoi pattern di codice',
      icon: Cpu,
      difficulty: 'Esperto',
      time: '60+ min'
    },
    {
      id: 'custom-instructions',
      title: 'Istruzioni Personalizzate',
      description: 'Crea istruzioni specifiche per il tuo stile di codifica',
      icon: FileText,
      difficulty: 'Intermedio',
      time: '15-20 min'
    },
    {
      id: 'context-optimization',
      title: 'Ottimizzazione del Contesto',
      description: 'Massimizza la comprensione del codice da parte di Copilot',
      icon: Target,
      difficulty: 'Intermedio',
      time: '20-30 min'
    },
    {
      id: 'workspace-config',
      title: 'Configurazione Workspace',
      description: 'Configura il workspace per risultati ottimali',
      icon: Settings,
      difficulty: 'Principiante',
      time: '10-15 min'
    },
    {
      id: 'advanced-prompting',
      title: 'Prompt Engineering',
      description: 'Tecniche avanzate per comunicare con Copilot',
      icon: Lightbulb,
      difficulty: 'Intermedio',
      time: '15-25 min'
    },
    {
      id: 'codespaces-web',
      title: 'Copilot senza VS Code installato',
      description: "Usa Copilot via browser o Codespaces quando l'estensione è bloccata al lavoro",
      icon: Globe,
      difficulty: 'Principiante',
      time: '5 min'
    },
    {
      id: 'alternatives',
      title: 'Alternative a Copilot',
      description: 'I migliori strumenti AI per VS Code quando Copilot non è disponibile',
      icon: Star,
      difficulty: 'Principiante',
      time: '10 min'
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Principiante':
        return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300'
      case 'Intermedio':
        return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300'
      case 'Avanzato':
        return 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300'
      case 'Esperto':
        return 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300'
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Brain className="h-12 w-12 text-primary-600 dark:text-primary-400 mr-3" />
                <Zap className="h-8 w-8 text-yellow-500" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Potenzia il tuo GitHub Copilot
              </h1>
              <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-8">
                Guida completa per configurare MCP, addestrare localmente Copilot e utilizzare 
                tecniche avanzate per scrivere codice come un esperto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#getting-started"
                  className="btn-primary px-8 py-3 inline-flex items-center"
                >
                  Inizia Subito
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#techniques"
                  className="btn-secondary px-8 py-3 inline-flex items-center"
                >
                  Vedi Tecniche
                  <BookOpen className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start Section */}
        <section id="getting-started" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Start
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Inizia immediatamente con le configurazioni essenziali
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 text-center">
                <Download className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  1. Installa MCP
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Configura il Model Context Protocol per integrazioni avanzate
                </p>
                <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm block">
                  npm install @modelcontextprotocol/sdk
                </code>
              </div>

              <div className="card p-6 text-center">
                <Settings className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  2. Configura VS Code
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Ottimizza le impostazioni per risultati migliori
                </p>
                <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm block">
                  settings.json
                </code>
              </div>

              <div className="card p-6 text-center">
                <Target className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  3. Personalizza
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Crea istruzioni specifiche per il tuo stile
                </p>
                <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm block">
                  .copilot/instructions.md
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Techniques Section */}
        <section id="techniques" className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Tecniche Avanzate
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Padroneggia queste tecniche per ottenere il massimo da Copilot
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techniques.map((technique) => {
                const Icon = technique.icon
                return (
                  <div key={technique.id} className="card p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(technique.difficulty)}`}>
                          {technique.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {technique.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {technique.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        ⏱️ {technique.time}
                      </span>
                      <a
                        href={`#${technique.id}`}
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium inline-flex items-center"
                      >
                        Scopri di più
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* MCP Configuration Section */}
        <section id="mcp-setup" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Model Context Protocol (MCP)
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                MCP permette a Copilot di accedere a contesto personalizzato dal tuo progetto
              </p>
            </div>

            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Terminal className="h-6 w-6 mr-3 text-primary-600 dark:text-primary-400" />
                  Configurazione Iniziale
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      1. Installa le dipendenze
                    </h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`# Installa MCP SDK
npm install @modelcontextprotocol/sdk

# Installa tool per VS Code
npm install -g @vscode/vsce

# Configura server MCP locale
npx create-mcp-server my-copilot-context`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      2. Crea il server MCP
                    </h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`// mcp-server.js
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server(
  {
    name: 'my-copilot-context',
    version: '0.1.0'
  },
  {
    capabilities: {
      resources: {},
      tools: {},
      prompts: {}
    }
  }
);

// Aggiungi le tue risorse personalizzate
server.setRequestHandler('resources/list', async () => {
  return {
    resources: [
      {
        uri: 'file://./project-context.md',
        name: 'Project Context',
        description: 'Context about this project'
      }
    ]
  };
});

// Avvia il server
const transport = new StdioServerTransport();
await server.connect(transport);`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      3. Configura VS Code
                    </h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`// settings.json in VS Code
{
  "github.copilot.advanced": {
    "debug.overrideEngine": "codex",
    "debug.testOverrideProxyUrl": "http://localhost:3000",
    "debug.overrideProxyUrl": "http://localhost:3000"
  },
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": false,
    "markdown": true
  }
}`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Training Section */}
        <section id="local-training" className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Addestramento Locale
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Tecniche per far apprendere i tuoi pattern di codice a Copilot
              </p>
            </div>

            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Cpu className="h-6 w-6 mr-3 text-primary-600 dark:text-primary-400" />
                  Creazione del Dataset Personalizzato
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Struttura del Dataset
                    </h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`training-data/
├── examples/
│   ├── react-components/
│   ├── api-endpoints/
│   ├── database-queries/
│   └── utils/
├── patterns/
│   ├── naming-conventions.md
│   ├── code-structure.md
│   └── best-practices.md
└── context/
    ├── project-overview.md
    └── architecture.md`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Script di Estrazione
                    </h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">
{`// extract-patterns.js
import fs from 'fs';
import path from 'path';

function extractCodePatterns(dir) {
  const patterns = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    files.forEach(file => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isFile() && file.endsWith('.tsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        patterns.push({
          file: filePath,
          content: content,
          patterns: extractPatterns(content)
        });
      }
    });
  }
  
  return patterns;
}`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Fine-tuning con OpenAI
                </h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">
{`// fine-tune-copilot.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function fineTuneModel() {
  // 1. Prepara il dataset in formato JSONL
  const trainingData = prepareTrainingData();
  
  // 2. Carica il file per il fine-tuning
  const file = await openai.files.create({
    file: fs.createReadStream('training-data.jsonl'),
    purpose: 'fine-tune'
  });

  // 3. Avvia il fine-tuning
  const fineTune = await openai.fineTuning.jobs.create({
    training_file: file.id,
    model: 'gpt-3.5-turbo',
    hyperparameters: {
      n_epochs: 3,
      batch_size: 1,
      learning_rate_multiplier: 0.1
    }
  });

  console.log('Fine-tuning job created:', fineTune.id);
}`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Instructions Section */}
        <section id="custom-instructions" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Istruzioni Personalizzate
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Crea istruzioni specifiche per il tuo stile di programmazione
              </p>
            </div>

            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FileText className="h-6 w-6 mr-3 text-primary-600 dark:text-primary-400" />
                  File .copilot/instructions.md
                </h3>

                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                  <code className="text-sm whitespace-pre-wrap">
{`# Istruzioni per GitHub Copilot

## Stile di Codifica

### React/Next.js
- Usa sempre TypeScript con strict mode
- Preferisci functional components con hooks
- Usa Tailwind CSS per lo styling
- Implementa error boundaries dove necessario
- Separare logica di business dai componenti UI

### Naming Conventions
- Componenti: PascalCase (es. UserProfile)
- File: kebab-case per pagine, PascalCase per componenti
- Variabili e funzioni: camelCase
- Costanti: UPPER_SNAKE_CASE
- Database: snake_case per tabelle e colonne

### Architettura
- Segui il pattern di separazione server/client components
- Usa custom hooks per logica riutilizzabile
- Implementa proper error handling
- Preferisci composizione over inheritance

### Database
- Usa Prisma per ORM
- Implementa proper indexes
- Usa transazioni per operazioni atomiche
- Validazione dati sia client che server side

### Performance
- Usa React.memo per componenti pesanti
- Implementa lazy loading per componenti grandi
- Ottimizza immagini con next/image
- Usa ISR per contenuti semi-statici

## Esempi di Pattern Preferiti

### Component Structure
\`\`\`tsx
interface Props {
  // Props sempre tipizzate
}

export default function ComponentName({ prop }: Props) {
  // Hooks in ordine: state, context, effects
  const [state, setState] = useState()
  const context = useContext()
  
  useEffect(() => {
    // Side effects
  }, [])
  
  // Handler functions
  const handleAction = useCallback(() => {
    // Logic here
  }, [])
  
  return (
    <div className="responsive classes">
      {/* JSX content */}
    </div>
  )
}
\`\`\`

### API Routes
\`\`\`tsx
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Logic here
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
\`\`\`

## Commenti e Documentazione
- JSDoc per funzioni pubbliche
- Commenti inline solo per logica complessa
- README dettagliato per ogni feature
- Esempi d'uso nei commenti`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context Optimization Section */}
        <section id="context-optimization" className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ottimizzazione del Contesto
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Tecniche per massimizzare la comprensione del codice da parte di Copilot
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  📁 Struttura File Ottimale
                </h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                  <code>
{`src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Route groups
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   ├── forms/             # Form components
│   └── layout/            # Layout components
├── lib/
│   ├── utils.ts           # Utility functions
│   ├── validations.ts     # Zod schemas
│   └── db.ts              # Database config
└── types/                 # TypeScript definitions`}
                  </code>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  🔗 File Correlati
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Mantieni file correlati nella stessa directory</li>
                  <li>• Usa naming consistente per file correlati</li>
                  <li>• Includi index files per re-export</li>
                  <li>• Usa barrel exports per moduli</li>
                  <li>• Mantieni file di test accanto al codice</li>
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  💡 Commenti Strategici
                </h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                  <code>
{`// TODO: Implementare caching Redis
// FIXME: Race condition nel useEffect
// NOTE: Questo pattern è specifico per Next.js 13+
// HACK: Workaround temporaneo per bug di libreria

/**
 * Hook personalizzato per gestire form complessi
 * @param initialValues - Valori iniziali del form
 * @returns form state e handlers
 */`}
                  </code>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  🎯 Context Windows
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Mantieni file sotto 500 righe quando possibile</li>
                  <li>• Usa imports espliciti invece di wildcard</li>
                  <li>• Includi esempi d'uso nei commenti</li>
                  <li>• Documenta le dipendenze esterne</li>
                  <li>• Usa nomi descrittivi per variabili e funzioni</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Prompting Section */}
        <section id="advanced-prompting" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Prompt Engineering Avanzato
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Come comunicare efficacemente con Copilot per ottenere risultati ottimali
              </p>
            </div>

            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Tecniche di Prompting
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium text-green-600 dark:text-green-400 mb-4">
                      ✅ Esempi Efficaci
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <code className="text-sm text-green-800 dark:text-green-300">
                          // Crea un hook personalizzato per gestire form con validazione Zod
                        </code>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <code className="text-sm text-green-800 dark:text-green-300">
                          // Implementa un server action per update utente con error handling
                        </code>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <code className="text-sm text-green-800 dark:text-green-300">
                          // Componente modale riutilizzabile con portal e focus trap
                        </code>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-red-600 dark:text-red-400 mb-4">
                      ❌ Esempi Inefficaci
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <code className="text-sm text-red-800 dark:text-red-300">
                          // Fai qualcosa
                        </code>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <code className="text-sm text-red-800 dark:text-red-300">
                          // Fix this
                        </code>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <code className="text-sm text-red-800 dark:text-red-300">
                          // Add function here
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Pattern di Comunicazione
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      1. Context + Action + Specification
                    </h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                      <code className="text-sm">
{`// [CONTEXT] In questo componente Next.js per e-commerce
// [ACTION] Crea una funzione 
// [SPECIFICATION] che calcoli il prezzo scontato considerando:
// - Sconto percentuale
// - Sconto fisso 
// - Sconto per quantità (bulk discount)
// - IVA da aggiungere al totale
// Ritorna oggetto con breakdown dettagliato`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      2. Example-Driven Development
                    </h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                      <code className="text-sm">
{`// Seguendo questo pattern per API success:
// { success: true, data: [...], meta: { total, page } }
// E questo per errors:
// { success: false, error: "message", code: "ERROR_CODE" }
// Crea middleware Express per standardizzare le risposte`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      3. Constraint-Based Prompting
                    </h4>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                      <code className="text-sm">
{`// REQUIREMENTS:
// - TypeScript strict mode
// - No any types
// - Handle loading/error states
// - Accessible (ARIA labels)
// - Mobile responsive
// - Support dark mode
// Crea componente DataTable con sorting e filtering`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips and Best Practices */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Tips e Best Practices
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Consigli pratici per massimizzare l'efficacia di Copilot
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card p-6">
                <Lightbulb className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Workflow Ottimale
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Scrivi test prima del codice</li>
                  <li>• Usa nomi descrittivi per tutto</li>
                  <li>• Mantieni file focalizzati</li>
                  <li>• Commenta l'intento, non l'implementazione</li>
                </ul>
              </div>

              <div className="card p-6">
                <Shield className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Sicurezza
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Rivedi sempre il codice generato</li>
                  <li>• Non condividere API keys nei prompt</li>
                  <li>• Usa environment variables</li>
                  <li>• Implementa proper validation</li>
                </ul>
              </div>

              <div className="card p-6">
                <Globe className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Collaborazione
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Condividi istruzioni con il team</li>
                  <li>• Usa convenzioni consistenti</li>
                  <li>• Documenta pattern personalizzati</li>
                  <li>• Fai code review regolari</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Codespaces & Web Copilot Section */}
        <section id="codespaces-web" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Globe className="h-8 w-8 mr-3 text-primary-600 dark:text-primary-400" />
                Copilot senza VS Code installato
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Se al lavoro non puoi usare l&apos;estensione Copilot in VS Code, hai due alternative
                ufficiali: il sito <strong>github.com/copilot</strong> e <strong>GitHub Codespaces</strong>.
                Entrambe non richiedono di collegare il tuo GitHub personale all&apos;installazione locale di VS Code.
              </p>
            </div>

            <div className="space-y-8">
              {/* Question 1: web ask */}
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Zap className="h-6 w-6 mr-3 text-yellow-500" />
                  Usare Copilot dal browser (Ask / Chat)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Sì: puoi usare Copilot direttamente da{' '}
                  <a
                    href="https://github.com/copilot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 underline hover:text-primary-700"
                  >
                    github.com/copilot
                  </a>{' '}
                  senza installare nulla sul PC aziendale. La modalità <em>Ask</em> funziona come una chat:
                  puoi incollare porzioni di codice e porre domande. L&apos;accesso avviene tramite il tuo
                  account GitHub personale dal browser, quindi non tocca le impostazioni di VS Code aziendali.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                  <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-2">✅ Come funziona</p>
                  <ol className="text-sm text-blue-700 dark:text-blue-400 space-y-1 list-decimal list-inside">
                    <li>Vai su <strong>github.com/copilot</strong> dal browser del tuo PC aziendale</li>
                    <li>Accedi con il tuo account GitHub personale</li>
                    <li>Incolla il codice che vuoi analizzare nella chat</li>
                    <li>Chiedi ciò che ti serve: spiegazioni, refactoring, bug fix, esempi</li>
                  </ol>
                </div>
              </div>

              {/* Question 2: how to share code / Codespaces */}
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <GitBranch className="h-6 w-6 mr-3 text-primary-600 dark:text-primary-400" />
                  Come far vedere il codice a Copilot senza collegare GitHub a VS Code
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Hai tre opzioni principali, dalla più semplice alla più potente:
                </p>
                <div className="space-y-6">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      1. Incolla il codice direttamente nella chat
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      Il metodo più rapido: copia il file o la funzione e incollala nella chat di github.com/copilot.
                      Copilot legge il testo direttamente, senza bisogno di accesso al repository.
                    </p>
                    <div className="bg-gray-900 text-gray-100 p-3 rounded-lg">
                      <code className="text-sm">
                        {`// Incolla il tuo codice nella chat e chiedi:
// "Spiega cosa fa questa funzione"
// "C'è un bug in questo codice?"
// "Come posso ottimizzare questa query?"`}
                      </code>
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      2. GitHub Codespaces — VS Code nel browser
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      GitHub Codespaces ti fornisce un VS Code completo che gira <strong>nel browser</strong>,
                      con Copilot già integrato e l&apos;intero repository disponibile. Non installi nulla sul PC
                      aziendale e non devi collegare il tuo GitHub personale all&apos;installazione locale di VS Code.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-4">
                      <p className="text-sm text-green-800 dark:text-green-300 font-medium mb-2">🚀 Come avviare un Codespace</p>
                      <ol className="text-sm text-green-700 dark:text-green-400 space-y-1 list-decimal list-inside">
                        <li>Vai sulla pagina del repository su <strong>github.com</strong></li>
                        <li>Clicca su <strong>&lt;&gt; Code</strong> → scheda <strong>Codespaces</strong></li>
                        <li>Clicca <strong>Create codespace on main</strong></li>
                        <li>Si apre VS Code nel browser con tutto il codice già caricato</li>
                        <li>Copilot è disponibile nella sidebar sinistra (icona chat)</li>
                      </ol>
                    </div>
                    <div className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
                      <code className="text-sm whitespace-pre">{`# In Codespaces hai:
# ✅ VS Code completo nel browser
# ✅ Copilot Chat e autocompletamento attivi
# ✅ Terminale integrato con Node.js, npm, git
# ✅ Accesso a tutto il repository
# ✅ Nessuna installazione locale richiesta`}</code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary table */}
              <div className="card p-8 bg-primary-50 dark:bg-primary-900/10 border border-primary-200 dark:border-primary-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  📊 Riepilogo — Quale opzione scegliere?
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="pb-3 pr-4 font-semibold text-gray-900 dark:text-white">Metodo</th>
                        <th className="pb-3 pr-4 font-semibold text-gray-900 dark:text-white">Installa nulla</th>
                        <th className="pb-3 pr-4 font-semibold text-gray-900 dark:text-white">Accesso al repo completo</th>
                        <th className="pb-3 font-semibold text-gray-900 dark:text-white">Copilot disponibile</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-300">
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 pr-4">Chat web (github.com/copilot)</td>
                        <td className="py-2 pr-4">✅</td>
                        <td className="py-2 pr-4">❌ (solo testo incollato)</td>
                        <td className="py-2">✅</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-2 pr-4">GitHub Codespaces (browser)</td>
                        <td className="py-2 pr-4">✅</td>
                        <td className="py-2 pr-4">✅</td>
                        <td className="py-2">✅</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">Codespaces + VS Code Desktop</td>
                        <td className="py-2 pr-4">⚠️ VS Code già installato</td>
                        <td className="py-2 pr-4">✅</td>
                        <td className="py-2">✅</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternatives to Copilot Section */}
        <section id="alternatives" className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Star className="h-8 w-8 mr-3 text-yellow-500" />
                Alternative a GitHub Copilot
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Se Copilot non è disponibile o hai raggiunto il limite di richieste, questi strumenti AI
                offrono un&apos;esperienza simile — alcuni completamente gratuiti — direttamente in VS Code.
              </p>
            </div>

            <div className="space-y-6">
              {/* Codeium */}
              <div className="card p-6 border-l-4 border-green-500">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Codeium</h3>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                        Gratuito
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                        Consigliato
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      La migliore alternativa gratuita a Copilot. Offre autocompletamento AI, chat integrata
                      in VS Code, e supporto per oltre 70 linguaggi. Nessun limite di richieste nel piano free.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        Autocompletamento in tempo reale
                      </div>
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        Chat AI nel VS Code
                      </div>
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        Funziona anche in JetBrains, Vim
                      </div>
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        Piano free senza limiti di richieste
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://codeium.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 hover:underline whitespace-nowrap"
                  >
                    codeium.com <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Continue.dev */}
              <div className="card p-6 border-l-4 border-purple-500">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Continue.dev</h3>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                        Open Source
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      Estensione VS Code open source che ti permette di scegliere il modello AI che preferisci:
                      Claude, GPT-4, Gemini, o modelli locali tramite Ollama. Ideale se vuoi totale controllo
                      sul modello usato.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        Connetti Claude, GPT-4, Gemini
                      </div>
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        Modelli locali con Ollama (offline)
                      </div>
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        Chat + autocompletamento in VS Code
                      </div>
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        Dati non condivisi (privacy)
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://continue.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 hover:underline whitespace-nowrap"
                  >
                    continue.dev <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Amazon Q Developer */}
              <div className="card p-6 border-l-4 border-orange-500">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Amazon Q Developer</h3>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                        Piano Free
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      Ex AWS CodeWhisperer, ora potenziato con chat AI. Il piano gratuito include
                      autocompletamento illimitato e fino a 50 chat al mese. Estensione disponibile
                      per VS Code e JetBrains.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        Autocompletamento illimitato (free)
                      </div>
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        50 chat/mese nel piano free
                      </div>
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        Ottimo per progetti AWS
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
                        <X className="h-4 w-4 flex-shrink-0" />
                        Richiede account AWS
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://aws.amazon.com/q/developer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 hover:underline whitespace-nowrap"
                  >
                    aws.amazon.com/q <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Tabnine */}
              <div className="card p-6 border-l-4 border-blue-500">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tabnine</h3>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
                        Free / Pro
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      Uno dei più longevi tool AI per coding. Il piano free offre autocompletamento di base.
                      Punto di forza: può girare <strong>completamente in locale</strong>, ottimo per ambienti
                      aziendali con restrizioni sulla privacy dei dati.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        Può girare completamente offline
                      </div>
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        Privacy-first (no dati inviati)
                      </div>
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        VS Code, JetBrains, Vim
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
                        <X className="h-4 w-4 flex-shrink-0" />
                        Chat AI solo nel piano Pro
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://www.tabnine.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 hover:underline whitespace-nowrap"
                  >
                    tabnine.com <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Ollama + Continue (local) */}
              <div className="card p-6 border-l-4 border-gray-500">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Ollama + Continue (locale)</h3>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                        100% Gratuito
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                        Offline
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      La soluzione più privata: modelli AI che girano sul tuo PC, zero costi, zero limiti,
                      nessun dato inviato online. Installa Ollama per scaricare modelli come Llama 3, CodeGemma,
                      DeepSeek Coder, poi collegalo a Continue.dev in VS Code.
                    </p>
                    <div className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto mb-4">
                      <code className="text-sm whitespace-pre">{`# 1. Installa Ollama (ollama.com)
curl -fsSL https://ollama.com/install.sh | sh

# 2. Scarica un modello per il coding
ollama pull codellama
# oppure: ollama pull deepseek-coder

# 3. Installa l'estensione Continue.dev su VS Code
# 4. In Continue, scegli "Ollama" come provider`}</code>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        Completamente offline e gratuito
                      </div>
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Check className="h-4 w-4 flex-shrink-0" />
                        Nessun limite di richieste
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
                        <X className="h-4 w-4 flex-shrink-0" />
                        Richiede GPU o PC potente
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500">
                        <X className="h-4 w-4 flex-shrink-0" />
                        Qualità inferiore ai cloud model
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://ollama.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 hover:underline whitespace-nowrap"
                  >
                    ollama.com <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Comparison table */}
              <div className="card p-8 bg-gray-50 dark:bg-gray-900/50">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  📊 Confronto rapido
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="pb-3 pr-4 font-semibold text-gray-900 dark:text-white">Strumento</th>
                        <th className="pb-3 pr-4 font-semibold text-gray-900 dark:text-white">Costo</th>
                        <th className="pb-3 pr-4 font-semibold text-gray-900 dark:text-white">Chat in VS Code</th>
                        <th className="pb-3 pr-4 font-semibold text-gray-900 dark:text-white">Autocomplete</th>
                        <th className="pb-3 font-semibold text-gray-900 dark:text-white">Privacy</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-800">
                      <tr>
                        <td className="py-2 pr-4 font-medium">Codeium</td>
                        <td className="py-2 pr-4">Gratis</td>
                        <td className="py-2 pr-4">✅</td>
                        <td className="py-2 pr-4">✅ Illimitato</td>
                        <td className="py-2">⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-medium">Continue + Claude/GPT</td>
                        <td className="py-2 pr-4">API key (pay-as-you-go)</td>
                        <td className="py-2 pr-4">✅</td>
                        <td className="py-2 pr-4">✅</td>
                        <td className="py-2">⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-medium">Amazon Q Developer</td>
                        <td className="py-2 pr-4">Gratis / Pro</td>
                        <td className="py-2 pr-4">✅ (50/mese free)</td>
                        <td className="py-2 pr-4">✅ Illimitato</td>
                        <td className="py-2">⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-medium">Tabnine</td>
                        <td className="py-2 pr-4">Gratis / Pro</td>
                        <td className="py-2 pr-4">⚠️ Solo Pro</td>
                        <td className="py-2 pr-4">✅</td>
                        <td className="py-2">⭐⭐⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 font-medium">Ollama + Continue</td>
                        <td className="py-2 pr-4">100% Gratis</td>
                        <td className="py-2 pr-4">✅</td>
                        <td className="py-2 pr-4">✅ Illimitato</td>
                        <td className="py-2">⭐⭐⭐⭐⭐</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  💡 <strong>Consiglio:</strong> inizia con <strong>Codeium</strong> (zero configurazione, subito operativo)
                  e se vuoi più controllo prova <strong>Continue.dev</strong> con i tuoi modelli preferiti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="card p-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Pronto a Potenziare il tuo Copilot?
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
                Inizia subito a implementare queste tecniche e vedrai un miglioramento 
                immediato nella qualità del codice generato.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quiz/frontend"
                  className="btn-primary px-8 py-3"
                >
                  Testa le tue Competenze
                </Link>
                
                <Link
                  href="/examples"
                  className="btn-secondary px-8 py-3"
                >
                  Vedi Esempi Pratici
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}