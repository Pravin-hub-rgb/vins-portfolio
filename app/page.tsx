// export default function Home() {
//   return (
//     <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-16">
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
//         <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
//           This is the main content area that should change with the theme.
//         </p>
//       </div>
//     </div>
//   );
// }
import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Contact />
    </main>
  );
}