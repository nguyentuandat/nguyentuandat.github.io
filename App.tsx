import React, { useState, useEffect } from 'react';
import { RESUME_DATA, Icons } from './constants';
import ChatWidget from './components/ChatWidget';
import Section from './components/Section';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-gray-50 text-gray-700 font-sans selection:bg-purple-500 selection:text-white transition-colors duration-300 dark:bg-[#0f111a] dark:text-gray-300 print:text-black print:bg-[linear-gradient(90deg,#f3f4f6_0%,#f3f4f6_30%,white_30%,white_100%)] ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        
        {/* Action Buttons - Hidden in Print */}
        <div className="fixed top-6 right-6 z-50 flex gap-4 print:hidden">
          <button 
            onClick={toggleTheme}
            className="bg-white/10 backdrop-blur-md hover:bg-black/5 dark:hover:bg-white/20 text-gray-700 dark:text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-white/10"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Icons.Sun /> : <Icons.Moon />}
          </button>

          <button 
            onClick={handlePrint}
            className="bg-gray-900 dark:bg-white/10 backdrop-blur-md hover:bg-gray-700 dark:hover:bg-white/20 text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-transparent dark:border-white/10 group"
            title="Printable / Save as PDF"
          >
            <Icons.Printer />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              Printable Version
            </span>
          </button>
        </div>

        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row min-h-screen shadow-2xl print:shadow-none print:block transition-shadow duration-300">
          
          {/* SIDEBAR (LEFT) */}
          <aside className="w-full md:w-[350px] lg:w-[400px] bg-white p-8 shrink-0 border-r border-gray-200 relative transition-colors duration-300 dark:bg-[#151621] dark:border-white/5 print:w-[30%] print:float-left print:bg-transparent print:text-black print:border-r print:border-gray-200 print:p-6 print:min-h-full">
            
            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

            {/* SCROLLABLE CONTENT (Header + Intro) */}
            <div className="space-y-10 mb-10">
              {/* Profile Header */}
              <Section className="flex flex-col items-center text-center space-y-4 pt-4">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-2xl transition-all duration-500 group-hover:scale-105 dark:border-white/10">
                    <img 
                      src="/public/avatar.png"
                      onError={(e) => {
                        e.currentTarget.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=DatNguyen&backgroundColor=1e1b4b";
                      }}
                      alt={RESUME_DATA.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="space-y-1">
                  <h1 className="text-3xl font-bold text-gray-900 tracking-tight dark:text-white">{RESUME_DATA.name}</h1>
                  <p className="text-purple-600 font-medium tracking-wide uppercase text-sm dark:text-purple-400">{RESUME_DATA.title}</p>
                </div>
              </Section>

              {/* Intro */}
              <Section delay={100}>
                <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left dark:text-gray-400 print:text-gray-700">
                  {RESUME_DATA.summary}
                </p>
              </Section>
            </div>

            {/* STICKY CONTENT (Contact + Socials + Languages) */}
            <div className="sticky top-8 space-y-10 print:static">
              {/* Contact Info */}
              <Section delay={200} className="space-y-4">
                <div className="h-px w-full bg-gray-200 mb-6 dark:bg-white/10"></div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-4 group">
                    <div className="p-2 bg-gray-100 rounded-lg text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-colors dark:bg-white/5 dark:text-purple-400 print:bg-gray-50 print:text-purple-800">
                      <Icons.Mail />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase tracking-wider dark:text-gray-500">Email</span>
                      <a href={`mailto:${RESUME_DATA.email}`} className="text-gray-700 hover:text-gray-900 transition-colors dark:text-gray-300 dark:hover:text-white print:text-black">{RESUME_DATA.email}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-2 bg-gray-100 rounded-lg text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-colors dark:bg-white/5 dark:text-purple-400 print:bg-gray-50 print:text-purple-800">
                      <Icons.Phone />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase tracking-wider dark:text-gray-500">Phone</span>
                      <span className="text-gray-700 dark:text-gray-300 print:text-black">{RESUME_DATA.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="p-2 bg-gray-100 rounded-lg text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-colors dark:bg-white/5 dark:text-purple-400 print:bg-gray-50 print:text-purple-800">
                      <Icons.MapPin />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase tracking-wider dark:text-gray-500">Address</span>
                      <span className="text-gray-700 dark:text-gray-300 print:text-black">{RESUME_DATA.address}</span>
                    </div>
                  </div>
                </div>
              </Section>

              {/* Socials */}
              <Section delay={300}>
                <h3 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider dark:text-white print:text-black">Socials</h3>
                <div className="space-y-3 text-sm">
                  {RESUME_DATA.socials.map(social => (
                    <a 
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all hover:translate-x-1 group dark:bg-white/5 dark:hover:bg-white/10 print:bg-transparent print:p-0 print:gap-2"
                    >
                      <div className="text-purple-600 group-hover:text-gray-900 transition-colors dark:text-purple-400 dark:group-hover:text-white print:text-purple-800">{social.icon}</div>
                      <div className="flex flex-col">
                        <span className="text-gray-700 font-medium group-hover:text-gray-900 dark:text-gray-200 dark:group-hover:text-white print:text-black">{social.platform}</span>
                        <span className="text-xs text-gray-500 print:text-gray-600">{social.username}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </Section>

              {/* Languages */}
              <Section delay={400}>
                <h3 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider dark:text-white print:text-black">Languages</h3>
                <div className="space-y-3">
                  {RESUME_DATA.languages.map(lang => (
                    <div key={lang.language} className="flex justify-between items-center text-sm border-b border-gray-200 pb-2 last:border-0 dark:border-white/5">
                      <span className="text-gray-700 font-medium dark:text-gray-300 print:text-black">{lang.language}</span>
                      <span className="text-gray-500 text-xs bg-gray-100 px-2 py-1 rounded-full dark:bg-white/5 print:bg-gray-100 print:text-gray-700">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          </aside>

          {/* MAIN CONTENT (RIGHT) */}
          <main className="flex-1 p-8 md:p-12 lg:p-16 bg-gray-50 space-y-16 transition-colors duration-300 dark:bg-[#0f111a] print:w-[70%] print:float-right print:p-8 print:pl-12 print:bg-transparent print:text-black">
            
            {/* Experience */}
            <Section delay={100} className="print:text-black">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black">Experience</h2>
              </div>
              
              <div className="space-y-10 border-l-2 border-gray-200 ml-3 dark:border-white/5 print:border-gray-200">
                {RESUME_DATA.experience.map((exp, idx) => (
                  <div key={exp.id} className="relative pl-8 group print:break-inside-avoid">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-4 border-gray-50 bg-gray-400 group-hover:bg-purple-500 transition-colors dark:border-[#0f111a] dark:bg-gray-600 print:bg-black print:border-white"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 text-xs font-bold text-purple-700 bg-purple-100 rounded-full border border-purple-200 dark:bg-purple-600/20 dark:text-purple-300 dark:border-purple-500/20 print:bg-gray-100 print:text-black print:border-gray-300">
                          {exp.period}
                        </span>
                        <span className="text-xs text-gray-500 font-mono flex items-center gap-1 print:text-gray-600">
                          <Icons.MapPin /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-purple-600 transition-colors dark:text-white dark:group-hover:text-purple-400 print:text-black">
                      {exp.role}
                    </h3>
                    <div className="text-lg text-gray-500 mb-4 font-medium dark:text-gray-400 print:text-gray-700">{exp.company}</div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 dark:text-gray-400 print:text-black">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Skills */}
            <Section delay={300} className="print:break-inside-avoid">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-pink-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black">Skills</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {RESUME_DATA.skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-gray-300 transition-colors dark:bg-[#151621] dark:border-white/5 dark:hover:border-white/10 dark:shadow-none print:bg-white print:border-gray-200 print:shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-purple-600 dark:text-purple-400 print:text-black">
                      {skillGroup.icon}
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white print:text-black">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item) => (
                        <span 
                          key={item} 
                          className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-200 hover:border-purple-300 hover:text-purple-900 transition-all cursor-default dark:text-gray-300 dark:bg-white/5 dark:border-white/5 dark:hover:bg-white/10 dark:hover:border-purple-500/30 dark:hover:text-white print:bg-gray-100 print:text-black print:border-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Education */}
            <Section delay={400} className="print:break-inside-avoid">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black">Education</h2>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-start gap-4 transition-colors dark:bg-[#151621] dark:border-white/5 dark:shadow-none print:bg-white print:border-gray-200">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-500 dark:bg-blue-500/10 dark:text-blue-400 print:bg-gray-100 print:text-black">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white print:text-black">{RESUME_DATA.education[0].institution}</h3>
                  <p className="text-purple-600 font-medium dark:text-purple-400 print:text-gray-700">{RESUME_DATA.education[0].degree}</p>
                  <p className="text-sm text-gray-500 mt-1">{RESUME_DATA.education[0].year}</p>
                </div>
              </div>
            </Section>

            {/* Tools */}
            <Section delay={500} className="print:break-inside-avoid">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-green-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white print:text-black">Tools</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {RESUME_DATA.tools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-all group cursor-default hover:shadow-md dark:bg-[#151621] dark:border-white/5 dark:hover:bg-white/5 dark:shadow-none print:bg-white print:border-gray-200">
                    <span className="text-gray-900 font-semibold text-sm mb-1 dark:text-white print:text-black">{tool.name}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider text-center print:text-gray-600">{tool.category}</span>
                  </div>
                ))}
              </div>
            </Section>

          </main>
        </div>

        <ChatWidget />

        <footer className="text-center py-8 text-gray-500 text-sm print:hidden">
          <p>© {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default App;