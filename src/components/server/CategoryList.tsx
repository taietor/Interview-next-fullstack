import { QuestionService } from '@/services/questionService'
import Link from 'next/link'
import { ChevronRight, Clock, Users, Target } from 'lucide-react'

interface CategoryListProps {
  showStats?: boolean
}

export async function CategoryList({ showStats = true }: CategoryListProps) {
  const categories = await Promise.all([
    QuestionService.getCategoryStats('frontend'),
    QuestionService.getCategoryStats('backend'),
    QuestionService.getCategoryStats('database'),
    QuestionService.getCategoryStats('devops'),
  ])

  const categoryData = [
    {
      slug: 'frontend',
      name: 'Frontend Development',
      description: 'React, Next.js, TypeScript, CSS, HTML',
      icon: '🎨',
      color: 'from-blue-500 to-purple-600',
      stats: categories[0]
    },
    {
      slug: 'backend',
      name: 'Backend Development',
      description: 'Node.js, Express, API, Microservizi',
      icon: '⚙️',
      color: 'from-green-500 to-blue-500',
      stats: categories[1]
    },
    {
      slug: 'database',
      name: 'Database & Storage',
      description: 'SQL, PostgreSQL, MongoDB, Prisma',
      icon: '🗄️',
      color: 'from-yellow-500 to-orange-500',
      stats: categories[2]
    },
    {
      slug: 'devops',
      name: 'DevOps & Cloud',
      description: 'Docker, AWS, Azure, CI/CD',
      icon: '☁️',
      color: 'from-purple-500 to-pink-500',
      stats: categories[3]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categoryData.map((category) => (
        <Link 
          key={category.slug}
          href={`/quiz/${category.slug}`}
          className="group"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600">
            {/* Header with gradient */}
            <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl">{category.icon}</div>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {category.description}
              </p>
              
              {showStats && (
                <div className="space-y-3">
                  {/* Total Questions */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <Target className="w-4 h-4" />
                      <span>Domande totali</span>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {category.stats.total}
                    </span>
                  </div>
                  
                  {/* Difficulty Breakdown */}
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
                      <div className="font-medium text-green-700 dark:text-green-400">
                        {category.stats.byDifficulty.easy || 0}
                      </div>
                      <div className="text-green-600 dark:text-green-300">Facile</div>
                    </div>
                    <div className="text-center p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                      <div className="font-medium text-yellow-700 dark:text-yellow-400">
                        {category.stats.byDifficulty.medium || 0}
                      </div>
                      <div className="text-yellow-600 dark:text-yellow-300">Medio</div>
                    </div>
                    <div className="text-center p-2 bg-red-50 dark:bg-red-900/20 rounded">
                      <div className="font-medium text-red-700 dark:text-red-400">
                        {category.stats.byDifficulty.hard || 0}
                      </div>
                      <div className="text-red-600 dark:text-red-300">Difficile</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {Object.keys(category.stats.byTag).slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {Object.keys(category.stats.byTag).length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                        +{Object.keys(category.stats.byTag).length - 3}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-100 dark:border-gray-600">
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>~15-30 min</span>
                </div>
                <span className="text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300">
                  Inizia Quiz →
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}