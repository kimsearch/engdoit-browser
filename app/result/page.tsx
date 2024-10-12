import { ArrowLeft, Star } from 'lucide-react'

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center bg-gray-900 text-white p-4">
        <ArrowLeft className="w-6 h-6" />
        <Star className="w-6 h-6 text-yellow-400 fill-current" />
      </header>

      {/* Progress bar */}
      <div className="bg-gray-200 h-2">
        <div className="bg-blue-500 h-full w-full"></div>
      </div>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
          <div className="aspect-w-1 aspect-h-1 mb-4">
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
          </div>
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-lg font-semibold">
              GOOD ~
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 space-y-2">
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
          틀린 문제 복습하기
        </button>
        <button className="w-full bg-gray-300 text-gray-800 py-2 rounded-lg">
          나가기
        </button>
      </footer>
    </div>
  )
}