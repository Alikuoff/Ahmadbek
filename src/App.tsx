import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Download, ChevronDown, Github, Database, Code2, BrainCircuit, MonitorDot, Cpu } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-800 text-white relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-navy-900/90 backdrop-blur-sm z-50 border-b border-cyan-400/20 h-20 md:h-24">
        <div className="container mx-auto px-4 flex justify-between items-center h-full">
          <div className="flex items-center gap-2">
            <img 
              src="/images/me.jpg" 
              alt="Avatar" 
              className="w-8 h-8 rounded-full"
            />
            <span className="text-cyan-400 font-bold text-lg">AS</span>
          </div>
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className={`w-6 h-1 bg-cyan-400 mb-1 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`w-6 h-1 bg-cyan-400 mb-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-1 bg-cyan-400 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </button>
          <div className={`hidden md:flex md:flex-row space-x-6`}>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#education">Education</NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-navy-900/90 p-4 flex flex-col items-center justify-center z-40 space-y-4">
          <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
          <NavLink href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</NavLink>
          <NavLink href="#education" onClick={() => setIsMenuOpen(false)}>Education</NavLink>
        </div>
      )}

      {/* Hero Section */}
      <header id="home" className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <div className="inline-block px-4 py-2 bg-cyan-400/10 rounded-full text-cyan-400 text-sm font-medium mb-6">
              Senior Business Intelligence Developer
            </div>
            <h1 className="text-5xl font-bold mb-4">Ahmadbek Sotimboyev</h1>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Business Intelligence professional with more than 4+ years of experience in the full data delivery pipeline, 
              specializing in database design, maintenance, and advanced analytics.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <ContactButton href="tel:+998937548417" icon={<Phone size={20} />} text="+998 93 754 8417" />
              <ContactButton href="mailto:ahmadbeksotimboyev@gmail.com" icon={<Mail size={20} />} text="Email" />
              <ContactButton href="https://www.linkedin.com" icon={<Linkedin size={20} />} text="LinkedIn" />
              <ContactButton href="https://github.com" icon={<Github size={20} />} text="GitHub" />
            </div>
            <a 
              href="../post/resume.doc" 
              download 
              className="bg-cyan-400 hover:bg-cyan-500 text-navy-800 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-transform transform hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-lg opacity-20"></div>
              <div className="relative bg-navy-800 p-8 rounded-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all transform hover:-translate-y-1">
                <div className="grid grid-cols-3 gap-6">
                  <DashboardCard icon={<Database className="text-cyan-400" size={24} />} title="Data Engineering" />
                  <DashboardCard icon={<BrainCircuit className="text-cyan-400" size={24} />} title="BI Development" />
                  <DashboardCard icon={<MonitorDot className="text-cyan-400" size={24} />} title="Visualization" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <ChevronDown size={40} className="text-cyan-400 animate-bounce" />
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="bg-navy-800/50 py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>Technical Expertise</SectionTitle>
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-navy-900/50 rounded-lg p-1">
              {['all', 'database', 'bi', 'analysis'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeTab === tab
                      ? 'bg-cyan-400 text-navy-900'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              title="Database & SQL" 
              icon={<Database className="text-cyan-400" size={24} />}
              skills={["Advanced T-SQL", "Database Design", "Performance Tuning", "Stored Procedures", "ETL Development"]}
              visible={activeTab === 'all' || activeTab === 'database'}
            />
            <SkillCard 
              title="Business Intelligence"
              icon={<Cpu className="text-cyan-400" size={24} />}
              skills={["SSMS", "SSIS", "SSRS", "Power BI", "Tableau"]}
              visible={activeTab === 'all' || activeTab === 'bi'}
            />
            <SkillCard 
              title="Data Analysis"
              icon={<Code2 className="text-cyan-400" size={24} />}
              skills={["Data Modeling", "Data Warehousing", "Data Validation", "Report Development", "Dashboard Creation"]}
              visible={activeTab === 'all' || activeTab === 'analysis'}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>Professional Experience</SectionTitle>
          <div className="space-y-12">
            <ExperienceCard 
              title="SR. SQL/BI Developer"
              company="Soft Sourcess SS, Khorezm"
              period="March 2022 - Jan 2024"
              description="Led BI infrastructure development handling large datasets using T-SQL, SSIS, and various reporting tools. Created complex analytical queries and developed comprehensive data warehouse solutions."
              skills={["T-SQL", "SSIS", "Data Warehouse", "Performance Tuning"]}
            />
            <ExperienceCard 
              title="SR. BI Developer"
              company="MAAB Innovation LLC, Tashkent"
              period="March 2020 – March 2022"
              description="Gathered and analyzed business requirements, developed long-term BI solutions using T-SQL, SSIS, and Power BI. Performed SQL performance tuning and created comprehensive reporting systems."
              skills={["Power BI", "SQL", "ETL", "Data Modeling"]}
            />
            <ExperienceCard 
              title="SR. SQL/BI Developer"
              company="Freelancer"
              period="2024 Jan - Present"
              description="Worked on multiple concurrent projects, specializing in SQL, Power BI, and data visualization. Implemented complex data solutions and created comprehensive business intelligence dashboards."
              skills={["Tableau", "PostgreSQL", "MySQL", "Dashboard Design"]}
            />
          </div>
        </div>
      </section>

      {/* Image Scroll Section
      <section className="py-10 bg-navy-800/50">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden w-full">
            <div className="flex flex-nowrap slide-track">
              <div className="w-full md:w-[1240px] md:h-[700px] animate-fade-in">
                <img src="/images/first.jpg" alt="Image 1" className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
              <div className="w-full md:w-[1240px] md:h-[700px] animate-fade-in delay-3000">
                <img src="/images/second.jpg" alt="Image 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
              <div className="w-full md:w-[1240px] md:h-[700px] animate-fade-in ">
                <img src="/images/third.jpg" alt="Image 3" className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Education Section */}
      <section id="education" className="bg-navy-800/50 py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>Education</SectionTitle>
          <div className="max-w-2xl mx-auto">
            <div className="bg-navy-900/50 rounded-lg p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2">PDP University, Tashkent</h3>
              <p className="text-cyan-400 mb-4">MSc degree (2023-2027)</p>
              <p className="text-gray-300">Focusing on advanced data analysis and business intelligence systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 border-t border-cyan-400/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400">© 2024 Ahmadbek Sotimboyev. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="block text-gray-300 hover:text-cyan-400 transition-colors text-xl"
    >
      {children}
    </a>
  );
}

function ContactButton({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <a 
      href={href}
      className="flex items-center gap-2 bg-navy-900/50 hover:bg-navy-900 text-cyan-400 px-4 py-2 rounded-lg transition-colors border border-cyan-400/30 hover:border-cyan-400/60"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">{children}</h2>
      <div className="mt-4 flex justify-center">
        <div className="w-16 h-1 bg-cyan-400 rounded-full"></div>
      </div>
    </div>
  );
}

function DashboardCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="bg-navy-900/50 p-4 rounded-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all transform hover:-translate-y-1">
      <div className="flex flex-col items-center text-center gap-2">
        {icon}
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
    </div>
  );
}

function SkillCard({ title, icon, skills, visible = true }: { 
  title: string; 
  icon: React.ReactNode;
  skills: string[];
  visible?: boolean;
}) {
  if (!visible) return null;
  
  return (
    <div className="bg-navy-900/50 p-6 rounded-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceCard({ title, company, period, description, skills }: { 
  title: string; 
  company: string; 
  period: string; 
  description: string;
  skills: string[];
}) {
  return (
    <div className="bg-navy-900/50 p-8 rounded-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all transform hover:-translate-y-1">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-cyan-400 mb-1">{company}</p>
      <p className="text-sm text-gray-400 mb-4">{period}</p>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;