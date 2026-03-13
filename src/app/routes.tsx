import { createBrowserRouter } from 'react-router';
import { AppProvider } from './contexts/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </div>
    </AppProvider>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: '/projects',
    element: (
      <Layout>
        <Projects />
      </Layout>
    )
  },
  {
    path: '/skills',
    element: (
      <Layout>
        <Skills />
      </Layout>
    )
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <Contact />
      </Layout>
    )
  },
  {
    path: '*',
    element: (
      <Layout>
        <NotFound />
      </Layout>
    )
  }
]);