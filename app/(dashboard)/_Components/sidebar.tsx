'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight, Home, Lock, Puzzle, BarChart3, Database, Play, Grid, Star, Settings, Menu, X } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

export default function Component() {
  const [openSections, setOpenSections] = useState({
    build: false,
    run: false,
    analytics: false,
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (sidebarOpen && window.innerWidth < 1024) {
        const sidebar = document.getElementById('sidebar')
        if (sidebar && !sidebar.contains(event.target as Node)) {
          setSidebarOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [sidebarOpen])

  return (
    <div className="flex h-screen bg-[#202124] text-gray-300">
      {/* sidebar */}
      <aside id="sidebar" className={`fixed inset-y-0 left-0 z-50 w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col flex-shrink-0 border-r border-gray-700 bg-[#202124]`}>
        <div className="flex-grow overflow-y-auto">
          <div className="p-4 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 192"
              className="w-8 h-8"
            >
              <path
                d="M96 16l-80 144h160l-80-144z"
                fill="#FFA000"
              />
              <path
                d="M96 16l-80 144h80V16z"
                fill="#F57C00"
              />
              <path
                d="M16 160l43.86-41.14L96 160H16z"
                fill="#FFCA28"
              />
            </svg>
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Any-Watch</span>
          </div>

          <nav className="mt-4">
            <div className="flex items-center justify-between p-3 bg-[#1a73e8] text-white rounded-r-full">
              <div className="flex items-center">
                <Home className="w-5 h-5 mr-3" />
                Project Overview
              </div>
              <button onClick={() => alert('Settings clicked')} aria-label="Settings">
                <Settings className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-1">
              <div className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-800">
                <Star className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-medium">Build with Gemini</span>
                <span className="text-xs bg-blue-600 px-1 rounded">NEW</span>
              </div>

              <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase">Project shortcuts</div>

              <button className="w-full flex items-center px-4 py-2 hover:bg-gray-800">
                <Lock className="w-5 h-5 mr-3" />
                Authentication
              </button>

              <button className="w-full flex items-center px-4 py-2 hover:bg-gray-800">
                <Puzzle className="w-5 h-5 mr-3" />
                Extensions
              </button>

              <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase mt-4">Product categories</div>

              <div>
                <button
                  onClick={() => toggleSection('build')}
                  className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-800"
                >
                  <div className="flex items-center">
                    <Database className="w-5 h-5 mr-3" />
                    <span>Build</span>
                  </div>
                  {openSections.build ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {openSections.build && (
                  <div className="ml-12 mt-1 space-y-1">
                    <button className="w-full text-left py-2 hover:bg-gray-800 text-sm">Realtime Database</button>
                    <button className="w-full text-left py-2 hover:bg-gray-800 text-sm">Authentication</button>
                    <button className="w-full text-left py-2 hover:bg-gray-800 text-sm">Storage</button>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleSection('run')}
                  className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-800"
                >
                  <div className="flex items-center">
                    <Play className="w-5 h-5 mr-3" />
                    <span>Run</span>
                  </div>
                  {openSections.run ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {openSections.run && (
                  <div className="ml-12 mt-1 space-y-1">
                    <button className="w-full text-left py-2 hover:bg-gray-800 text-sm">Hosting</button>
                    <button className="w-full text-left py-2 hover:bg-gray-800 text-sm">Functions</button>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleSection('analytics')}
                  className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-800"
                >
                  <div className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-3" />
                    <span>Analytics</span>
                  </div>
                  {openSections.analytics ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {openSections.analytics && (
                  <div className="ml-12 mt-1 space-y-1">
                    <button className="w-full text-left py-2 hover:bg-gray-800 text-sm">Dashboard</button>
                    <button className="w-full text-left py-2 hover:bg-gray-800 text-sm">Events</button>
                  </div>
                )}
              </div>

              <button className="w-full flex items-center px-4 py-2 hover:bg-gray-800">
                <Grid className="w-5 h-5 mr-3" />
                All products
              </button>
            </div>

            <div className="mt-6 px-4">
              <div className="text-xs font-medium text-gray-500 uppercase">Related development tools</div>
              <div className="mt-2 space-y-1">
                <button className="w-full text-left py-2 hover:bg-gray-800 text-sm flex items-center">
                  <span className="w-5 h-5 mr-3 text-blue-400">ID</span>
                  IDX
                </button>
                <button className="w-full text-left py-2 hover:bg-gray-800 text-sm flex items-center">
                  <span className="w-5 h-5 mr-3 text-green-400">✓</span>
                  Checks
                </button>
              </div>
            </div>
          </nav>
        </div>

        <div className="p-4 bg-gray-800">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">Spark</div>
              <div className="text-sm text-gray-400">No-cost ($0/month)</div>
            </div>
            <button className="px-3 py-1 bg-[#1a73e8] text-white rounded text-sm hover:bg-blue-600 transition-colors">Upgrade</button>
          </div>
        </div>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        <header className="bg-[#202124] border-b border-gray-700 p-4 flex items-center justify-between">
          <button onClick={toggleSidebar} className="lg:hidden text-white">
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className=''>
            <UserButton afterSignOutUrl="/" />
            <h1 className="font-extrabold text-transparent text-3xl sm:text-2x1 xl:text-4xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-transparent h-full">
              Any-Watch
            </h1>



          </div>

        </header>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
      </div>
    </div>
  )
}