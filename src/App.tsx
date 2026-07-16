/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Background } from './components/Background';

// Content
import siteData from './content/site.json';
import projectsData from './content/projects.json';
import skillsData from './content/skills.json';
import servicesData from './content/services.json';
import contactData from './content/contact.json';

export default function App() {
  return (
    <div className="min-h-screen text-brand-primary selection:bg-brand-blue/30 selection:text-white relative">
      <Background />
      <Navbar />
      
      <main className="relative z-10">
        <Hero data={siteData.hero} />
        <Projects projects={projectsData} />
        <Services data={servicesData} skills={skillsData} />
        <Contact data={contactData} />
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-white/5 text-brand-secondary/60 text-sm bg-black/20">
        <p>© 2026 {siteData.hero.title} | Creative Video Editor & Motion Graphics</p>
      </footer>
    </div>
  );
}
