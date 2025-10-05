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
  },
  {
    id: 'react-3',
    question: 'Quando dovresti usare useCallback invece di useMemo?',
    options: [
      'Sempre, sono intercambiabili',
      'useCallback per funzioni, useMemo per valori',
      'useCallback è deprecato, usa solo useMemo',
      'Non c\'è differenza pratica'
    ],
    correct: 1,
    explanation: `**useCallback**: memorizza una funzione
**useMemo**: memorizza il risultato di un calcolo

\`\`\`typescript
// ✅ useCallback per funzioni
const handleClick = useCallback(() => {
  doSomething(id)
}, [id])

// ✅ useMemo per valori calcolati
const expensiveValue = useMemo(() => {
  return complexCalculation(data)
}, [data])
\`\`\``,
    difficulty: 'easy',
    category: 'frontend',
    tags: ['hooks', 'performance', 'memoization']
  },
  {
    id: 'react-4',
    question: 'Come gestisci gli errori in React?',
    options: [
      'Solo con try/catch',
      'Error Boundaries e try/catch',
      'Solo con console.error',
      'React gestisce tutto automaticamente'
    ],
    correct: 1,
    explanation: `**Error Boundaries** catturano errori durante il rendering:

\`\`\`typescript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
\`\`\``,
    difficulty: 'medium',
    category: 'frontend',
    tags: ['error-handling', 'error-boundaries']
  },
  {
    id: 'nextjs-2',
    question: 'Qual è la differenza tra Pages Router e App Router in Next.js?',
    options: [
      'Sono identici',
      'App Router supporta React Server Components',
      'Pages Router è più veloce',
      'App Router è solo per TypeScript'
    ],
    correct: 1,
    explanation: `**App Router (Next.js 13+):**
- React Server Components nativi
- Layout nidificati
- Streaming e Suspense
- File system routing migliorato

**Pages Router (tradizionale):**
- Client Components di default
- getServerSideProps/getStaticProps
- Più semplice ma meno flessibile`,
    difficulty: 'easy',
    category: 'frontend',
    tags: ['nextjs', 'routing', 'architecture']
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
  },
  {
    id: 'node-2',
    question: 'Cosa sono le Streams in Node.js?',
    options: [
      'Solo per leggere file',
      'Interfacce per gestire dati che fluiscono nel tempo',
      'Un tipo di database',
      'Solo per HTTP requests'
    ],
    correct: 1,
    explanation: `**Streams** permettono di processare dati in modo incrementale:

\`\`\`javascript
const fs = require('fs')

// Readable stream
const readStream = fs.createReadStream('input.txt')

// Writable stream  
const writeStream = fs.createWriteStream('output.txt')

// Pipe per connettere streams
readStream.pipe(writeStream)
\`\`\`

**Vantaggi:**
- Memoria efficiente per file grandi
- Processamento in tempo reale
- Composabilità con pipe()`,
    difficulty: 'easy',
    category: 'backend',
    tags: ['streams', 'nodejs', 'performance']
  },
  {
    id: 'express-1',
    question: 'Come implementi middleware di autenticazione in Express?',
    options: [
      'Solo con session storage',
      'Middleware che verifica JWT token',
      'Solo con cookies',
      'Autenticazione non è possibile'
    ],
    correct: 1,
    explanation: `**Middleware di autenticazione:**

\`\`\`javascript
const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

// Utilizzo
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route', user: req.user })
})
\`\`\``,
    difficulty: 'medium',
    category: 'backend',
    tags: ['express', 'authentication', 'jwt', 'middleware']
  },
  {
    id: 'api-2',
    question: 'Qual è la differenza tra PUT e PATCH in REST?',
    options: [
      'Sono identici',
      'PUT sostituisce completamente, PATCH parzialmente',
      'PUT è per creare, PATCH per aggiornare',
      'PATCH è deprecato'
    ],
    correct: 1,
    explanation: `**PUT**: Sostituisce l'intera risorsa
**PATCH**: Aggiorna solo i campi specificati

\`\`\`javascript
// PUT - sostituisce tutto
PUT /users/123
{
  "name": "Mario",
  "email": "mario@example.com",
  "age": 30
}

// PATCH - aggiorna solo alcuni campi  
PATCH /users/123
{
  "email": "nuovo@example.com"
}
\`\`\``,
    difficulty: 'easy',
    category: 'backend',
    tags: ['rest', 'http-methods', 'api-design']
  },
  {
    id: 'security-1',
    question: 'Come previeni attacchi CSRF?',
    options: [
      'Solo con HTTPS',
      'Token CSRF e SameSite cookies',
      'Solo con autenticazione',
      'Non è possibile prevenirli'
    ],
    correct: 1,
    explanation: `**CSRF Protection:**

1. **CSRF Tokens:**
\`\`\`javascript
app.use(csrf())
app.get('/form', (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() })
})
\`\`\`

2. **SameSite Cookies:**
\`\`\`javascript
app.use(session({
  cookie: { sameSite: 'strict' }
}))
\`\`\`

3. **Origin/Referer Headers Check**`,
    difficulty: 'hard',
    category: 'backend',
    tags: ['security', 'csrf', 'cookies']
  },
  {
    id: 'async-1',
    question: 'Qual è la differenza tra Promise.all() e Promise.allSettled()?',
    options: [
      'Sono identici',
      'Promise.all fallisce se una promessa fallisce, allSettled no',
      'allSettled è più veloce',
      'Promise.all è deprecato'
    ],
    correct: 1,
    explanation: `**Promise.all()**: Fallisce se qualsiasi promessa fallisce
**Promise.allSettled()**: Aspetta che tutte le promesse si completino

\`\`\`javascript
// Promise.all - si ferma al primo errore
try {
  const results = await Promise.all([
    fetch('/api/users'),
    fetch('/api/posts'),
    fetch('/api/invalid') // Se fallisce, tutto fallisce
  ])
} catch (error) {
  console.log('Una richiesta è fallita')
}

// Promise.allSettled - continua sempre
const results = await Promise.allSettled([
  fetch('/api/users'),
  fetch('/api/posts'), 
  fetch('/api/invalid')
])

results.forEach((result, index) => {
  if (result.status === 'fulfilled') {
    console.log(\`Request \${index} succeeded:\`, result.value)
  } else {
    console.log(\`Request \${index} failed:\`, result.reason)
  }
})
\`\`\``,
    difficulty: 'medium',
    category: 'backend',
    tags: ['promises', 'async', 'error-handling']
  },
  {
    id: 'testing-1',
    question: 'Come testi le API con Jest?',
    options: [
      'Solo con console.log',
      'Usando supertest per HTTP requests',
      'Non è possibile testare API',
      'Solo test manuali'
    ],
    correct: 1,
    explanation: `**API Testing con Jest + Supertest:**

\`\`\`javascript
const request = require('supertest')
const app = require('../app')

describe('POST /api/users', () => {
  it('should create a new user', async () => {
    const userData = {
      name: 'Test User',
      email: 'test@example.com'
    }

    const response = await request(app)
      .post('/api/users')
      .send(userData)
      .expect(201)

    expect(response.body.name).toBe('Test User')
    expect(response.body.email).toBe('test@example.com')
  })

  it('should return 400 for invalid data', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: '' })
      .expect(400)

    expect(response.body.error).toBeDefined()
  })
})
\`\`\``,
    difficulty: 'medium',
    category: 'backend',
    tags: ['testing', 'jest', 'supertest', 'api']
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
  },
  {
    id: 'sql-1',
    question: 'Qual è la differenza tra INNER JOIN e LEFT JOIN?',
    options: [
      'Sono identici',
      'INNER JOIN ritorna solo righe con match, LEFT JOIN tutte le righe della tabella sinistra',
      'LEFT JOIN è più veloce',
      'INNER JOIN è deprecato'
    ],
    correct: 1,
    explanation: `**INNER JOIN**: Ritorna solo le righe che hanno corrispondenza in entrambe le tabelle
**LEFT JOIN**: Ritorna tutte le righe della tabella sinistra, anche senza match

\`\`\`sql
-- INNER JOIN
SELECT u.name, p.title 
FROM users u 
INNER JOIN posts p ON u.id = p.user_id;
-- Solo utenti che hanno scritto post

-- LEFT JOIN  
SELECT u.name, p.title 
FROM users u 
LEFT JOIN posts p ON u.id = p.user_id;
-- Tutti gli utenti, anche quelli senza post
\`\`\``,
    difficulty: 'easy',
    category: 'database',
    tags: ['sql', 'joins']
  },
  {
    id: 'prisma-2',
    question: 'Come implementi transazioni con Prisma?',
    options: [
      'Non supporta le transazioni',
      'Usando $transaction()',
      'Solo con raw SQL',
      'Automatic transactions sempre'
    ],
    correct: 1,
    explanation: `**Transazioni in Prisma:**

\`\`\`typescript
// Array di operazioni
const result = await prisma.$transaction([
  prisma.user.create({
    data: { name: 'Alice', email: 'alice@example.com' }
  }),
  prisma.post.create({
    data: { title: 'Hello World', userId: 1 }
  })
])

// Funzione callback
await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({
    data: { name: 'Bob', email: 'bob@example.com' }
  })
  
  await tx.post.create({
    data: { title: 'Post di Bob', userId: user.id }
  })
})
\`\`\``,
    difficulty: 'medium',
    category: 'database',
    tags: ['prisma', 'transactions']
  },
  {
    id: 'indexing-1',
    question: 'Quando dovresti creare un indice su una colonna?',
    options: [
      'Su tutte le colonne sempre',
      'Su colonne usate frequentemente in WHERE, ORDER BY, JOIN',
      'Mai, rallentano le query',
      'Solo sulle primary key'
    ],
    correct: 1,
    explanation: `**Quando creare indici:**

✅ **Crea indici su:**
- Colonne in WHERE clause frequenti
- Colonne in ORDER BY
- Colonne in JOIN conditions
- Foreign keys

❌ **Evita indici su:**
- Colonne che cambiano spesso (molte INSERT/UPDATE)
- Colonne con pochi valori distinti
- Tabelle piccole

\`\`\`sql
-- Esempio: query frequente
SELECT * FROM orders WHERE customer_id = 123 ORDER BY created_at;

-- Indici utili:
CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_orders_created_at ON orders(created_at);
\`\`\``,
    difficulty: 'medium',
    category: 'database',
    tags: ['indexing', 'performance', 'sql']
  },
  {
    id: 'normalization-1', 
    question: 'Cos\'è la normalizzazione del database?',
    options: [
      'Convertire tutto in maiuscolo',
      'Organizzare dati per ridurre ridondanza',
      'Creare backup',
      'Ottimizzare le query'
    ],
    correct: 1,
    explanation: `**Normalizzazione**: Processo di organizzazione dei dati per ridurre ridondanza e dipendenze

**Prima Forma Normale (1NF):**
- Ogni colonna contiene valori atomici
- No gruppi ripetuti

**Seconda Forma Normale (2NF):**
- 1NF + dipendenze funzionali complete dalla chiave primaria

**Terza Forma Normale (3NF):**
- 2NF + no dipendenze transitive

\`\`\`sql
-- Non normalizzato
CREATE TABLE orders (
  id INT,
  customer_name VARCHAR(100),
  customer_email VARCHAR(100),
  product_name VARCHAR(100),
  product_price DECIMAL(10,2)
);

-- Normalizzato
CREATE TABLE customers (id, name, email);
CREATE TABLE products (id, name, price);  
CREATE TABLE orders (id, customer_id, product_id);
\`\`\``,
    difficulty: 'easy',
    category: 'database',
    tags: ['normalization', 'database-design']
  },
  {
    id: 'aggregation-1',
    question: 'Come funzionano le funzioni aggregate in SQL?',
    options: [
      'Solo con GROUP BY',
      'COUNT, SUM, AVG, MIN, MAX operano su gruppi di righe',
      'Solo per numeri',
      'Non esistono in SQL moderno'
    ],
    correct: 1,
    explanation: `**Funzioni Aggregate** operano su insiemi di valori:

\`\`\`sql
-- Aggregazioni semplici
SELECT 
  COUNT(*) as total_orders,
  SUM(amount) as total_revenue,
  AVG(amount) as avg_order_value,
  MIN(created_at) as first_order,
  MAX(created_at) as last_order
FROM orders;

-- Con GROUP BY
SELECT 
  customer_id,
  COUNT(*) as order_count,
  SUM(amount) as total_spent
FROM orders 
GROUP BY customer_id
HAVING COUNT(*) > 5;
\`\`\`

**HAVING** filtra gruppi dopo l'aggregazione
**WHERE** filtra righe prima dell'aggregazione`,
    difficulty: 'easy',
    category: 'database',
    tags: ['sql', 'aggregation', 'group-by']
  },
  {
    id: 'mongodb-1',
    question: 'Qual è la differenza principale tra SQL e NoSQL?',
    options: [
      'NoSQL è più veloce sempre',
      'SQL usa schema fisso, NoSQL schema flessibile',
      'SQL è deprecato',
      'Non c\'è differenza'
    ],
    correct: 1,
    explanation: `**SQL (Relazionale):**
- Schema fisso predefinito
- ACID compliance
- JOIN complessi
- Ottimo per dati strutturati

**NoSQL (MongoDB, etc.):**
- Schema flessibile
- Eventual consistency
- Documenti nidificati
- Ottimo per dati semi-strutturati

\`\`\`javascript
// MongoDB - documento flessibile
{
  _id: ObjectId("..."),
  name: "Mario Rossi",
  email: "mario@example.com",
  addresses: [
    { type: "home", city: "Roma" },
    { type: "work", city: "Milano" }
  ]
}
\`\`\``,
    difficulty: 'easy',
    category: 'database',
    tags: ['sql', 'nosql', 'mongodb']
  },
  {
    id: 'backup-1',
    question: 'Quali sono le strategie di backup per database?',
    options: [
      'Solo backup completo',
      'Full, Incremental, Differential backup',
      'Solo export CSV',
      'Backup non sono necessari'
    ],
    correct: 1,
    explanation: `**Strategie di Backup:**

**Full Backup:**
- Backup completo di tutto il database
- Più lento ma recovery semplice

**Incremental Backup:**
- Solo i cambiamenti dall'ultimo backup
- Veloce ma recovery complesso

**Differential Backup:**
- Cambiamenti dall'ultimo full backup
- Compromesso tra velocità e semplicità

\`\`\`bash
# PostgreSQL examples
pg_dump mydb > backup_full.sql
pg_dump --incremental mydb > backup_inc.sql
\`\`\`

**Best Practice:**
- Backup automatici schedulati
- Test di recovery regolari
- Backup off-site per disaster recovery`,
    difficulty: 'medium',
    category: 'database',
    tags: ['backup', 'recovery', 'maintenance']
  },
  {
    id: 'acid-1',
    question: 'Cosa significa ACID nei database?',
    options: [
      'Un tipo di database',
      'Atomicity, Consistency, Isolation, Durability',
      'Solo per PostgreSQL', 
      'Una funzione SQL'
    ],
    correct: 1,
    explanation: `**ACID Properties:**

**Atomicity**: Transazione è tutto o niente
- Se una parte fallisce, tutto viene rollback

**Consistency**: Database rimane in stato valido
- Vincoli e regole sempre rispettati

**Isolation**: Transazioni non si interferiscono
- Ogni transazione vede stato consistente

**Durability**: Dati salvati sono permanenti
- Sopravvivono a crash del sistema

\`\`\`sql
BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2; 
COMMIT; -- Tutto succede o niente succede
\`\`\``,
    difficulty: 'medium',
    category: 'database',
    tags: ['acid', 'transactions', 'database-theory']
  },
  {
    id: 'performance-db-1',
    question: 'Come ottimizzi le performance di query lente?',
    options: [
      'Aggiungere più RAM sempre',
      'EXPLAIN plan, indici, query rewrite',
      'Solo aumentare timeout',
      'Usare sempre SELECT *'
    ],
    correct: 1,
    explanation: `**Ottimizzazione Query:**

1. **EXPLAIN Plan Analysis:**
\`\`\`sql
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';
\`\`\`

2. **Indici Strategici:**
\`\`\`sql
CREATE INDEX idx_users_email ON users(email);
\`\`\`

3. **Query Rewrite:**
\`\`\`sql
-- ❌ Lento
SELECT * FROM orders WHERE YEAR(created_at) = 2023;

-- ✅ Veloce (può usare indice)
SELECT * FROM orders 
WHERE created_at >= '2023-01-01' 
AND created_at < '2024-01-01';
\`\`\`

4. **Limit Results:**
\`\`\`sql
SELECT id, name FROM users ORDER BY created_at DESC LIMIT 100;
\`\`\``,
    difficulty: 'hard',
    category: 'database',
    tags: ['performance', 'query-optimization', 'explain']
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
  },
  {
    id: 'docker-2',
    question: 'Come ottimizzi la dimensione di un\'immagine Docker?',
    options: [
      'Usare sempre ubuntu:latest',
      'Multi-stage builds e immagini alpine',
      'Aggiungere più layer',
      'Non è possibile ottimizzare'
    ],
    correct: 1,
    explanation: `**Ottimizzazione Docker Images:**

**1. Multi-stage builds:**
\`\`\`dockerfile
# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/build ./build
COPY package*.json ./
RUN npm ci --only=production
CMD ["npm", "start"]
\`\`\`

**2. Immagini Alpine (più piccole)**
**3. .dockerignore per escludere file**
**4. Combinare RUN commands**`,
    difficulty: 'easy',
    category: 'devops',
    tags: ['docker', 'optimization', 'alpine']
  },
  {
    id: 'kubernetes-1',
    question: 'Cos\'è un Pod in Kubernetes?',
    options: [
      'Un singolo container',
      'La più piccola unità deployabile che può contenere uno o più container',
      'Un tipo di storage',
      'Una rete virtuale'
    ],
    correct: 1,
    explanation: `**Pod in Kubernetes:**

- Più piccola unità deployabile
- Può contenere uno o più container
- Container nel stesso Pod condividono:
  - Indirizzo IP
  - Storage volumes  
  - Ciclo di vita

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app
spec:
  containers:
  - name: web
    image: nginx:1.20
    ports:
    - containerPort: 80
  - name: sidecar
    image: busybox
\`\`\`

**Best Practice**: Un container per Pod nella maggior parte dei casi`,
    difficulty: 'easy',
    category: 'devops',
    tags: ['kubernetes', 'pods', 'containers']
  },
  {
    id: 'aws-1',
    question: 'Qual è la differenza tra EC2 e Lambda?',
    options: [
      'Sono identici',
      'EC2 sono server virtuali, Lambda è serverless',
      'Lambda è più caro sempre',
      'EC2 è deprecato'
    ],
    correct: 1,
    explanation: `**EC2 vs Lambda:**

**EC2 (Elastic Compute Cloud):**
- Server virtuali tradizionali
- Controllo completo del sistema
- Paghi per il tempo di esecuzione
- Gestisci scaling, patching, monitoring

**Lambda (Serverless):**
- Esegui solo codice senza server
- Scaling automatico
- Paghi solo per esecuzioni
- AWS gestisce infrastruttura

**Quando usare:**
- **EC2**: App long-running, controllo OS, workload prevedibili
- **Lambda**: API, elaborazione eventi, workload sporadici`,
    difficulty: 'easy',
    category: 'devops',
    tags: ['aws', 'ec2', 'lambda', 'serverless']
  },
  {
    id: 'cicd-1',
    question: 'Cos\'è CI/CD?',
    options: [
      'Continuous Integration / Continuous Deployment',
      'Un tipo di database',
      'Solo per test',
      'Cloud Infrastructure'
    ],
    correct: 0,
    explanation: `**CI/CD Pipeline:**

**Continuous Integration (CI):**
- Merge code frequenti
- Build automatici
- Test automatici
- Feedback rapido

**Continuous Deployment (CD):**
- Deploy automatico in production
- Rollback automatico se problemi

\`\`\`yaml
# GitHub Actions example
name: CI/CD
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - run: npm test
  
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
    - run: npm run deploy
\`\`\``,
    difficulty: 'easy',
    category: 'devops',
    tags: ['cicd', 'automation', 'deployment']
  },
  {
    id: 'monitoring-1',
    question: 'Quali metriche sono importanti per monitorare un\'applicazione?',
    options: [
      'Solo CPU e RAM',
      'CPU, RAM, Response Time, Error Rate, Throughput',
      'Solo log files',
      'Non serve monitoraggio'
    ],
    correct: 1,
    explanation: `**Metriche Essenziali (RED Method):**

**Rate**: Richieste per secondo
**Errors**: Percentuale di errori  
**Duration**: Tempo di risposta

**Altre metriche importanti:**
- CPU, Memory, Disk usage
- Database connections
- Cache hit ratio
- Business metrics

\`\`\`javascript
// Esempio con Prometheus
const promClient = require('prom-client')

const httpDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status']
})
\`\`\``,
    difficulty: 'medium',
    category: 'devops',
    tags: ['monitoring', 'metrics', 'observability']
  },
  {
    id: 'terraform-1',
    question: 'Cos\'è Infrastructure as Code (IaC)?',
    options: [
      'Scrivere codice solo per applicazioni',
      'Gestire infrastruttura tramite file di configurazione',
      'Solo per cloud AWS',
      'Deprecated approach'
    ],
    correct: 1,
    explanation: `**Infrastructure as Code:**

Gestire infrastruttura con codice invece di configurazione manuale

**Vantaggi:**
- Riproducibilità
- Version control
- Rollback facili
- Documentazione automatica

\`\`\`hcl
# Terraform example
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1d0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "Web Server"
  }
}
\`\`\`

**Strumenti**: Terraform, CloudFormation, Ansible`,
    difficulty: 'medium',
    category: 'devops',
    tags: ['iac', 'terraform', 'automation']
  },
  {
    id: 'security-devops-1',
    question: 'Come implementi sicurezza in un pipeline DevOps?',
    options: [
      'Solo alla fine del deploy',
      'DevSecOps: security integrata in ogni fase',
      'Non è necessaria',
      'Solo password'
    ],
    correct: 1,
    explanation: `**DevSecOps Practices:**

**Shift Left Security:**
- Security testing in early stages
- Static code analysis (SAST)
- Dependency scanning
- Container image scanning

\`\`\`yaml
# Pipeline con security checks
stages:
  - name: Security Scan
    steps:
    - name: SAST
      run: sonarqube-scan
    - name: Dependency Check
      run: npm audit
    - name: Container Scan
      run: trivy scan image:latest
\`\`\`

**Secrets Management:**
- HashiCorp Vault
- AWS Secrets Manager
- Azure Key Vault`,
    difficulty: 'hard',
    category: 'devops',
    tags: ['security', 'devsecops', 'scanning']
  },
  {
    id: 'load-balancing-1',
    question: 'Qual è la differenza tra Load Balancer Layer 4 e Layer 7?',
    options: [
      'Non c\'è differenza',
      'L4 opera su TCP/UDP, L7 su HTTP/HTTPS',
      'L7 è sempre più veloce',
      'L4 è deprecato'
    ],
    correct: 1,
    explanation: `**Layer 4 vs Layer 7 Load Balancing:**

**Layer 4 (Transport):**
- Opera su TCP/UDP
- Routing basato su IP e porta
- Più veloce, meno overhead
- Non vede contenuto HTTP

**Layer 7 (Application):**
- Opera su HTTP/HTTPS
- Routing basato su URL, headers, cookies
- Features avanzate (SSL termination, caching)
- Content-aware routing

\`\`\`nginx
# Layer 7 example (Nginx)
upstream backend {
  server 192.168.1.10:8080;
  server 192.168.1.11:8080;
}

server {
  location /api/ {
    proxy_pass http://backend;
  }
}
\`\`\``,
    difficulty: 'medium',
    category: 'devops',
    tags: ['load-balancing', 'networking', 'nginx']
  },
  {
    id: 'backup-devops-1',
    question: 'Quali sono le best practice per backup in ambienti cloud?',
    options: [
      'Backup locale sempre',
      '3-2-1 rule: 3 copie, 2 media, 1 offsite',
      'Solo snapshot',
      'Backup non servono in cloud'
    ],
    correct: 1,
    explanation: `**3-2-1 Backup Rule:**

- **3** copie dei dati importanti
- **2** diversi tipi di media
- **1** copia offsite

**Strategie Cloud:**
\`\`\`bash
# AWS S3 backup
aws s3 sync /data s3://backup-bucket --delete

# Automated snapshots
aws ec2 create-snapshot --volume-id vol-12345
\`\`\`

**Best Practices:**
- Backup automatici schedulati
- Test di restore regolari
- Encryption at rest e in transit
- Cross-region replication
- Retention policies`,
    difficulty: 'medium',
    category: 'devops',
    tags: ['backup', 'disaster-recovery', 'cloud']
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