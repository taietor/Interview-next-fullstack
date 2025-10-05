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
  Cpu
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