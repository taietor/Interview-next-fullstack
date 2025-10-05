import { Question } from './types'

export const frontendQuestions: Question[] = [
  {
    id: 'react-1',
    question: 'Qual è la differenza principale tra useState e useRef in React?',
    options: [
      'useState è per dati primitivi, useRef per oggetti',
      'useState causa re-render quando cambia, useRef no',
      'useState è sincrono, useRef è asincrono',
      'Non c\'è differenza significativa'
    ],
    correct: 1,
    explanation: 'useState causa un re-render del componente quando il suo valore cambia, mentre useRef mantiene un riferimento mutabile che non causa re-render quando viene modificato. useRef è utile per accedere a elementi DOM o mantenere valori tra render senza triggeare aggiornamenti.',
    difficulty: 'medium',
    category: 'frontend',
    tags: ['hooks', 'state', 'ref']
  },
  {
    id: 'react-2',
    question: 'Come si implementa un custom hook per gestire il localStorage?',
    code: `// Completa questo custom hook
function useLocalStorage<T>(key: string, initialValue: T) {
  // _____ implementazione _____
}`,
    options: [
      'Usando solo useState',
      'Usando useState + useEffect per sincronizzare',
      'Usando useRef per evitare re-render',
      'Usando useCallback per le performance'
    ],
    correct: 1,
    explanation: `Un custom hook per localStorage dovrebbe:
1. Usare useState per lo stato locale
2. Usare useEffect per sincronizzare con localStorage
3. Gestire errori di parsing/serializzazione
4. Ritornare il valore e una funzione setter

Esempio:
\`\`\`typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue] as const
}
\`\`\``,
    difficulty: 'hard',
    category: 'frontend',
    tags: ['custom-hooks', 'localStorage', 'typescript']
  },
  {
    id: 'nextjs-1',
    question: 'Qual è la differenza tra getServerSideProps e getStaticProps in Next.js?',
    options: [
      'getServerSideProps è per API routes, getStaticProps per pagine',
      'getServerSideProps esegue ad ogni richiesta, getStaticProps al build time',
      'getServerSideProps è per produzione, getStaticProps per sviluppo',
      'Sono identici, solo nomi diversi'
    ],
    correct: 1,
    explanation: `getServerSideProps esegue sul server ad ogni richiesta, permettendo dati sempre freschi ma con latenza maggiore. getStaticProps esegue al build time (e con ISR), generando pagine statiche velocissime ma con dati potenzialmente non aggiornati.

Usa getServerSideProps quando:
- I dati cambiano frequentemente
- Hai bisogno di dati specifici per ogni richiesta
- SEO è importante ma la velocità non è critica

Usa getStaticProps quando:
- I dati cambiano raramente
- La velocità è prioritaria
- Puoi pre-generare il contenuto`,
    difficulty: 'medium',
    category: 'frontend',
    tags: ['ssr', 'ssg', 'data-fetching']
  },
  {
    id: 'typescript-1',
    question: 'Cosa fa questo tipo TypeScript?',
    code: `type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, any>
    ? DeepReadonly<T[P]>
    : T[P]
}`,
    options: [
      'Rende un oggetto parzialmente readonly',
      'Rende un oggetto e tutte le sue proprietà annidate readonly',
      'Crea una copia profonda di un oggetto',
      'Verifica se un oggetto è readonly'
    ],
    correct: 1,
    explanation: `Questo è un tipo ricorsivo che rende readonly un oggetto e tutte le sue proprietà annidate:

1. \`readonly [P in keyof T]\` - mappa tutte le proprietà rendendole readonly
2. \`T[P] extends Record<string, any>\` - controlla se la proprietà è un oggetto
3. \`? DeepReadonly<T[P]> : T[P]\` - se è un oggetto, applica ricorsivamente DeepReadonly

Esempio d'uso:
\`\`\`typescript
interface User {
  name: string
  address: {
    street: string
    city: string
  }
}

type ReadonlyUser = DeepReadonly<User>
// Risultato:
// {
//   readonly name: string
//   readonly address: {
//     readonly street: string
//     readonly city: string
//   }
// }
\`\`\``,
    difficulty: 'hard',
    category: 'frontend',
    tags: ['utility-types', 'conditional-types', 'recursion']
  },
  {
    id: 'css-1',
    question: 'Quale tecnica CSS è migliore per creare un layout a griglia responsive?',
    options: [
      'Flexbox con flex-wrap',
      'CSS Grid con grid-template-columns: repeat(auto-fit, minmax())',
      'Float con media queries',
      'Position absolute con calc()'
    ],
    correct: 1,
    explanation: `CSS Grid con \`grid-template-columns: repeat(auto-fit, minmax(min-width, 1fr))\` è la soluzione più elegante:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

Vantaggi:
- **auto-fit**: crea automaticamente il numero ottimale di colonne
- **minmax()**: garantisce una larghezza minima e massima
- **1fr**: distribuzione equa dello spazio rimanente
- **gap**: spazio consistente tra elementi

Flexbox è ottimo per layout 1D, ma Grid è superiore per layout 2D complessi.`,
    difficulty: 'medium',
    category: 'frontend',
    tags: ['grid', 'responsive', 'layout']
  },
  {
    id: 'performance-1',
    question: 'Qual è il modo più efficace per ottimizzare le performance di una React app?',
    options: [
      'Usare sempre React.memo su tutti i componenti',
      'Implementare lazy loading e code splitting strategico',
      'Utilizzare solo functional components',
      'Evitare completamente lo state'
    ],
    correct: 1,
    explanation: `Il lazy loading e code splitting strategico hanno il maggior impatto:

**1. Code Splitting con React.lazy:**
\`\`\`typescript
const LazyComponent = React.lazy(() => import('./HeavyComponent'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  )
}
\`\`\`

**2. Route-based splitting con Next.js:**
- Le pagine sono automaticamente code-splitted
- Importa solo il codice necessario per ogni rotta

**3. Component-based splitting:**
\`\`\`typescript
const Modal = React.lazy(() => import('./Modal'))
// Si carica solo quando serve
\`\`\`

**Altri ottimizzazioni:**
- React.memo solo su componenti che re-renderizzano spesso
- useMemo/useCallback per calcoli costosi
- Ottimizzazione immagini (next/image)
- Bundle analysis con webpack-bundle-analyzer`,
    difficulty: 'hard',
    category: 'frontend',
    tags: ['lazy-loading', 'code-splitting', 'optimization']
  }
]

export const backendQuestions: Question[] = [
  {
    id: 'node-1',
    question: 'Qual è la differenza tra process.nextTick() e setImmediate() in Node.js?',
    code: `console.log('start')

process.nextTick(() => console.log('nextTick'))
setImmediate(() => console.log('setImmediate'))

console.log('end')`,
    options: [
      'process.nextTick esegue dopo, setImmediate prima',
      'process.nextTick esegue nella prossima iterazione, setImmediate nella successiva',
      'Sono identici',
      'process.nextTick è sincrono, setImmediate asincrono'
    ],
    correct: 1,
    explanation: `**Event Loop Priority:**

1. **process.nextTick()**: Ha la priorità più alta, esegue alla fine della fase corrente
2. **setImmediate()**: Esegue nella fase "check" del prossimo ciclo

**Output del codice:**
\`\`\`
start
end
nextTick
setImmediate
\`\`\`

**Quando usarli:**
- **process.nextTick**: Per garantire che il codice esegua prima di qualsiasi altro callback asincrono
- **setImmediate**: Per eseguire callback dopo gli eventi I/O della fase corrente

**Attenzione:** Troppi process.nextTick possono bloccare l'event loop!`,
    difficulty: 'hard',
    category: 'backend',
    tags: ['event-loop', 'async', 'performance']
  },
  {
    id: 'api-1',
    question: 'Come implementi la paginazione in una REST API?',
    options: [
      'Usando query parameters ?page=1&limit=10',
      'Usando headers per i metadati di paginazione',
      'Entrambi gli approcci sopra',
      'Usando solo offset e count'
    ],
    correct: 2,
    explanation: `**Best Practice per Paginazione REST:**

**1. Query Parameters:**
\`\`\`
GET /api/users?page=2&limit=20&sort=created_at&order=desc
\`\`\`

**2. Response Headers:**
\`\`\`
X-Total-Count: 1500
X-Page: 2
X-Per-Page: 20
X-Total-Pages: 75
Link: </api/users?page=1>; rel="first",
      </api/users?page=3>; rel="next",
      </api/users?page=75>; rel="last"
\`\`\`

**3. Response Body:**
\`\`\`json
{
  "data": [...],
  "pagination": {
    "current_page": 2,
    "per_page": 20,
    "total": 1500,
    "total_pages": 75,
    "has_next": true,
    "has_prev": true
  }
}
\`\`\`

**Implementazione con Prisma:**
\`\`\`typescript
const page = parseInt(req.query.page) || 1
const limit = parseInt(req.query.limit) || 10
const skip = (page - 1) * limit

const [users, total] = await Promise.all([
  prisma.user.findMany({
    skip,
    take: limit,
    orderBy: { createdAt: 'desc' }
  }),
  prisma.user.count()
])
\`\`\``,
    difficulty: 'medium',
    category: 'backend',
    tags: ['rest', 'pagination', 'prisma']
  }
]

export const databaseQuestions: Question[] = [
  {
    id: 'prisma-1',
    question: 'Come ottimizzi le query N+1 con Prisma?',
    code: `// Problema N+1
const posts = await prisma.post.findMany()
for (const post of posts) {
  const author = await prisma.user.findUnique({
    where: { id: post.authorId }
  })
}`,
    options: [
      'Usando transactions',
      'Usando include o select nelle query',
      'Usando raw SQL',
      'Non è possibile ottimizzare'
    ],
    correct: 1,
    explanation: `**Soluzioni per N+1 Query Problem:**

**1. Include Relations:**
\`\`\`typescript
const posts = await prisma.post.findMany({
  include: {
    author: true,
    comments: {
      include: {
        user: true
      }
    }
  }
})
\`\`\`

**2. Select Specific Fields:**
\`\`\`typescript
const posts = await prisma.post.findMany({
  select: {
    id: true,
    title: true,
    author: {
      select: {
        name: true,
        email: true
      }
    }
  }
})
\`\`\`

**3. Nested Writes (per creazioni):**
\`\`\`typescript
const post = await prisma.post.create({
  data: {
    title: "Hello World",
    author: {
      connect: { id: authorId }
    },
    comments: {
      create: [
        { content: "Great post!", userId: 1 }
      ]
    }
  },
  include: {
    author: true,
    comments: true
  }
})
\`\`\`

Prisma automaticamente ottimizza le query usando JOINs quando possibile.`,
    difficulty: 'hard',
    category: 'database',
    tags: ['query-optimization', 'n+1', 'relations']
  }
]

export const devopsQuestions: Question[] = [
  {
    id: 'docker-1',
    question: 'Qual è la differenza tra COPY e ADD in un Dockerfile?',
    options: [
      'COPY è per file locali, ADD può scaricare da URL',
      'ADD è deprecato, usa sempre COPY',
      'Sono identici',
      'COPY è più veloce di ADD'
    ],
    correct: 0,
    explanation: `**COPY vs ADD:**

**COPY (Raccomandato):**
- Copia solo file/directory locali
- Più prevedibile e sicuro
- Sintassi: \`COPY src dest\`

**ADD (Più potente ma rischioso):**
- Copia file locali
- Può scaricare file da URL
- Auto-estrae archivi tar
- Sintassi: \`ADD src dest\`

**Best Practice:**
\`\`\`dockerfile
# ✅ Preferisci COPY
COPY package*.json ./
COPY src/ ./src/

# ❌ Evita ADD a meno che non serva auto-estrazione
ADD https://example.com/file.tar.gz /tmp/
\`\`\`

**Motivi per preferire COPY:**
1. **Sicurezza**: Non esegue operazioni inaspettate
2. **Prevedibilità**: Fa esattamente quello che dice
3. **Cache**: Migliore cache Docker
4. **Debugging**: Più facile da debuggare`,
    difficulty: 'medium',
    category: 'devops',
    tags: ['dockerfile', 'best-practices', 'security']
  }
]

// Funzioni per il fallback (quando il database non è disponibile)
export function getQuestionsByCategory(category: string): Question[] {
  switch (category.toLowerCase()) {
    case 'frontend':
      return frontendQuestions
    case 'backend':
      return backendQuestions
    case 'database':
      return databaseQuestions
    case 'devops':
      return devopsQuestions
    default:
      return []
  }
}

// Le domande sono già esportate sopra come export const

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}