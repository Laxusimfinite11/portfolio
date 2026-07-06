'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Facebook, Instagram, Mail, ArrowRight, Code2, Palette, Monitor, Zap, ExternalLink, Send, Menu, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { Button } from './components/ui/button';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { toast } from 'sonner';
import { Toaster } from './components/ui/sonner';
import profileImage from './assets/40c1c4e5f84807ff0bc7b39aef702da935373c4c.png';

type ProjectScreen = {
  title: string;
  image: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  codeUrl?: string;
  gallery?: ProjectScreen[];
  techStack?: string[];
};

const techStackItems = [
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'Laravel',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  },
  {
    name: 'Django',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Postman',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  },
  {
    name: 'Herd',
    logo: 'https://herd.laravel.com/favicon.ico',
  },
];

const paldDescription =
  'PALD Portal is a role-based event registration and management system built for handling delegate sign-ups, payment verification, QR ticketing, and attendance tracking in one streamlined platform. It helps admins, staff, and participants manage church events more efficiently through a secure and organized digital workflow.';

const paldScreens: ProjectScreen[] = [
  {
    title: 'Super Admin Dashboard',
    image: '/projects/pald/admin-dashboard.png',
  },
  {
    title: 'Delegates and Positions',
    image: '/projects/pald/delegates.png',
  },
  {
    title: 'Payment Verification',
    image: '/projects/pald/payment-verification.png',
  },
  {
    title: 'Financial Summary',
    image: '/projects/pald/financial-summary.png',
  },
  {
    title: 'Manage Events',
    image: '/projects/pald/manage-events.png',
  },
  {
    title: 'Churches Directory',
    image: '/projects/pald/churches.png',
  },
  {
    title: 'Email Logs',
    image: '/projects/pald/email-logs.png',
  },
  {
    title: 'System Settings',
    image: '/projects/pald/system-settings.png',
  },
  {
    title: 'Admin Login',
    image: '/projects/pald/admin-login.png',
  },
];

const paldTechStack = ['Laravel', 'Postman', 'React', 'Django', 'Herd'];

const cremaDescription =
  'CremaPOS is a coffee shop point-of-sale system built with Laravel, Inertia.js, and React. It streamlines daily cafe operations with features for order processing, product and category management, inventory tracking, staff management, sales reporting, and receipt generation.';

const cremaScreens: ProjectScreen[] = [
  {
    title: 'Point of Sale',
    image: '/projects/crema/point-of-sale.png',
  },
  {
    title: 'Dashboard',
    image: '/projects/crema/dashboard.png',
  },
  {
    title: 'Product Management',
    image: '/projects/crema/products.png',
  },
  {
    title: 'Category Management',
    image: '/projects/crema/categories.png',
  },
  {
    title: 'Order History',
    image: '/projects/crema/orders.png',
  },
  {
    title: 'Sales Analytics',
    image: '/projects/crema/sales-analytics.png',
  },
  {
    title: 'Staff Management',
    image: '/projects/crema/staff.png',
  },
  {
    title: 'Activity Logs',
    image: '/projects/crema/activity-logs.png',
  },
  {
    title: 'System Settings',
    image: '/projects/crema/settings.png',
  },
  {
    title: 'Staff Login',
    image: '/projects/crema/staff-login.png',
  },
  {
    title: 'Admin Login',
    image: '/projects/crema/admin-login.png',
  },
];

const cremaTechStack = ['Laravel', 'Inertia.js', 'React'];

const unangHakbangDescription =
  'A nonprofit preschool website for Unang Hakbang sa Pangarap that highlights its mission of providing culturally grounded early education for indigenous children in Southern Palawan. Built with Laravel, the site features donation and volunteer forms, news and gallery pages, testimonials, and an admin dashboard for managing content and community engagement.';

const unangHakbangScreens: ProjectScreen[] = [
  {
    title: 'Home Page',
    image: '/projects/unang-hakbang/home.png',
  },
  {
    title: 'Donate Form',
    image: '/projects/unang-hakbang/donate.png',
  },
  {
    title: 'Volunteer Form',
    image: '/projects/unang-hakbang/volunteer.png',
  },
  {
    title: 'Our Journey',
    image: '/projects/unang-hakbang/about-journey.png',
  },
  {
    title: 'Vision and Mission',
    image: '/projects/unang-hakbang/about-impact.png',
  },
  {
    title: 'How We Make a Difference',
    image: '/projects/unang-hakbang/home-difference.png',
  },
  {
    title: 'Living Legacy',
    image: '/projects/unang-hakbang/home-legacy.png',
  },
  {
    title: 'Call to Action',
    image: '/projects/unang-hakbang/home-call-to-action.png',
  },
];

const unangHakbangTechStack = ['Laravel'];

const projects: Project[] = [
  {
    title: 'PALD Online Website',
    description: paldDescription,
    image: paldScreens[0].image,
    gallery: paldScreens,
    techStack: paldTechStack,
  },
  {
    title: 'Crema POS',
    description: cremaDescription,
    image: cremaScreens[0].image,
    gallery: cremaScreens,
    techStack: cremaTechStack,
  },
  {
    title: 'Unang Hakbang',
    description: unangHakbangDescription,
    image: unangHakbangScreens[0].image,
    gallery: unangHakbangScreens,
    techStack: unangHakbangTechStack,
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectSlides, setActiveProjectSlides] = useState<Record<string, number>>({});
  const [galleryProjectIndex, setGalleryProjectIndex] = useState<number | null>(null);
  const [selectedGallerySlide, setSelectedGallerySlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveProjectSlides((current) => (
        projects.reduce<Record<string, number>>((nextSlides, project) => {
          if (!project.gallery?.length) {
            return nextSlides;
          }

          const currentSlide = current[project.title] ?? 0;
          nextSlides[project.title] = (currentSlide + 1) % project.gallery.length;
          return nextSlides;
        }, { ...current })
      ));
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  // Close overlays when clicking escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') {
        return;
      }

      if (galleryProjectIndex !== null) {
        setGalleryProjectIndex(null);
        return;
      }

      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [galleryProjectIndex, mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open email client with pre-filled data
    window.location.href = `mailto:laxustaladro@gmail.com?subject=${subject}&body=${body}`;

    // Show success message
    toast.success('Opening your email client...');

    // Clear form
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const galleryProject = galleryProjectIndex === null ? null : projects[galleryProjectIndex];
  const galleryScreens = galleryProject?.gallery ?? [];
  const selectedGalleryScreen = galleryScreens[selectedGallerySlide] ?? galleryScreens[0];

  const openProjectGallery = (projectIndex: number, slideIndex: number) => {
    setSelectedGallerySlide(slideIndex);
    setGalleryProjectIndex(projectIndex);
  };

  const closeProjectGallery = () => {
    setGalleryProjectIndex(null);
    setSelectedGallerySlide(0);
  };

  const setProjectPreviewSlide = (project: Project, slideIndex: number) => {
    setActiveProjectSlides((current) => ({
      ...current,
      [project.title]: slideIndex,
    }));
  };

  const moveProjectPreview = (project: Project, direction: number) => {
    const galleryLength = project.gallery?.length ?? 0;

    if (!galleryLength) {
      return;
    }

    setActiveProjectSlides((current) => {
      const currentSlide = current[project.title] ?? 0;
      return {
        ...current,
        [project.title]: (
          currentSlide + direction + galleryLength
        ) % galleryLength,
      };
    });
  };

  const moveSelectedGallerySlide = (direction: number) => {
    if (!galleryScreens.length) {
      return;
    }

    setSelectedGallerySlide((current) => (
      current + direction + galleryScreens.length
    ) % galleryScreens.length);
  };

  return (
    <div className="dark h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-foreground select-none flex flex-col">
      <Toaster position="top-right" />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent font-semibold text-base sm:text-lg cursor-pointer hover:opacity-80 transition-opacity"
          >
            Lexus D. Taladro
          </motion.button>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex gap-8"
          >
            {['Home', 'Services', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-sm text-foreground/70 hover:text-foreground transition-colors group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variant="ghost"
            size="sm"
            className="md:hidden text-foreground"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto snap-y snap-mandatory scrollbar-none">

        {/* Hero Section */}
        <section
          id="home"
          className="h-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 snap-start shrink-0"
        >
          <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Picture - Shows first on mobile, second on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative flex justify-center order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl select-none">
                  <img
                    src={profileImage.src}
                    alt="Lexus D. Taladro"
                    className="w-full h-full object-cover object-[center_20%] pointer-events-none select-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              </div>
            </motion.div>

            {/* Text Content - Shows second on mobile, first on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 border border-white/5">
                <span className="text-xs sm:text-sm text-foreground/70">
                  👋 Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Lexus D. Taladro
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70">
                Web Developer & Computer Science Graduate
              </p>
              <p className="text-sm sm:text-base text-foreground/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Bachelor of Science in Computer Science graduate from Palawan State
                University. I specialize in building clean, functional, and
                visually appealing web applications with a focus on modern UI design,
                performance, and exceptional user experience. I also have hands-on
                experience building servers from old PCs to deploy websites and tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                >
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="h-full min-h-screen overflow-y-auto scrollbar-none flex items-start lg:items-center justify-center py-24 lg:py-20 px-4 sm:px-6 snap-start shrink-0">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
              <p className="text-sm sm:text-base text-foreground/60 max-w-2xl mx-auto px-4">
                Technologies and tools I work with to bring ideas to life
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 lg:gap-5"
            >
              {techStackItems.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 shadow-sm sm:h-14 sm:w-14">
                    <ImageWithFallback
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-center text-foreground/70 group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="h-full min-h-screen overflow-y-auto scrollbar-none flex items-start lg:items-center justify-center py-24 lg:py-20 px-6 snap-start shrink-0">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">What I Offer</h2>
              <p className="text-foreground/60 max-w-2xl mx-auto">
                Professional services tailored to bring your digital vision to life
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Code2 className="h-8 w-8" />,
                  title: 'Web Development',
                  description:
                    'Building modern, scalable web applications using the latest technologies and best practices.',
                },
                {
                  icon: <Palette className="h-8 w-8" />,
                  title: 'UI/UX Design',
                  description:
                    'Crafting intuitive and beautiful user interfaces that provide exceptional user experiences.',
                },
                {
                  icon: <Monitor className="h-8 w-8" />,
                  title: 'Responsive Websites',
                  description:
                    'Creating websites that look and work perfectly across all devices and screen sizes.',
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: 'Performance Optimization',
                  description:
                    'Optimizing applications for speed, efficiency, and the best possible user experience.',
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="h-full min-h-screen overflow-y-auto scrollbar-none flex items-start lg:items-center justify-center py-24 lg:py-20 px-6 snap-start shrink-0">
          <div className="mx-auto w-full max-w-[88rem]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Projects</h2>
              <p className="text-foreground/60 max-w-2xl mx-auto">
                A selection of recent work showcasing my skills and creativity
              </p>
            </motion.div>

            <div className="mx-auto mb-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,28rem),28rem))] justify-center gap-6">
              {projects.map((project, index) => {
                const hasGallery = Boolean(project.gallery?.length);
                const activeSlide = activeProjectSlides[project.title] ?? 0;
                const currentProjectScreen = project.gallery?.[activeSlide] ?? project.gallery?.[0];

                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                  >
                    <div
                      className={`relative h-52 overflow-hidden ${hasGallery ? 'cursor-pointer' : ''}`}
                      onClick={() => {
                        if (hasGallery) {
                          openProjectGallery(index, activeSlide);
                        }
                      }}
                    >
                      {hasGallery && currentProjectScreen ? (
                        <>
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentProjectScreen.image}
                              initial={{ opacity: 0, scale: 1.04 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.98 }}
                              transition={{ duration: 0.35 }}
                              className="absolute inset-0"
                            >
                              <ImageWithFallback
                                src={currentProjectScreen.image}
                                alt={currentProjectScreen.title}
                                className="w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
                              />
                            </motion.div>
                          </AnimatePresence>
                          <div className="absolute left-3 bottom-3 max-w-[calc(100%-5rem)] rounded-full bg-slate-950/85 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-sm">
                            {currentProjectScreen.title}
                          </div>
                          <div className="absolute right-3 bottom-3 flex items-center gap-1.5">
                            {project.gallery?.map((screen, screenIndex) => (
                              <button
                                key={screen.title}
                                type="button"
                                aria-label={`Show ${screen.title}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setProjectPreviewSlide(project, screenIndex);
                                }}
                                className={`h-2 rounded-full transition-all ${screenIndex === activeSlide
                                  ? 'w-5 bg-blue-400'
                                  : 'w-2 bg-white/60 hover:bg-white'
                                  }`}
                              />
                            ))}
                          </div>
                          <button
                            type="button"
                            aria-label={`Previous ${project.title} screenshot`}
                            onClick={(e) => {
                              e.stopPropagation();
                              moveProjectPreview(project, -1);
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/70 p-2 text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity hover:bg-slate-900 group-hover:opacity-100"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            aria-label={`Next ${project.title} screenshot`}
                            onClick={(e) => {
                              e.stopPropagation();
                              moveProjectPreview(project, 1);
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/70 p-2 text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity hover:bg-slate-900 group-hover:opacity-100"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </>
                      ) : (
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {hasGallery ? (
                          <Button
                            size="sm"
                            className="bg-blue-500 hover:bg-blue-600 text-white border-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              openProjectGallery(index, activeSlide);
                            }}
                          >
                            <Images className="h-4 w-4 mr-2" />
                            View Screens
                          </Button>
                        ) : (
                          <>
                            <Button
                              size="sm"
                              className="bg-blue-500 hover:bg-blue-600 text-white border-0"
                              onClick={() => window.open(project.demoUrl, '_blank')}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                              onClick={() => window.open(project.codeUrl, '_blank')}
                            >
                              <Code2 className="h-4 w-4 mr-2" />
                              View Code
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-foreground/60 leading-relaxed">
                        {project.description}
                      </p>
                      {project.techStack && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-blue-400/20 bg-blue-400/10 px-2.5 py-1 text-xs font-medium text-blue-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      {hasGallery && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="mt-4 w-full border-white/10 bg-white/5 hover:bg-white/10"
                          onClick={() => openProjectGallery(index, activeSlide)}
                        >
                          <Images className="h-4 w-4 mr-2" />
                          View Project Screens
                        </Button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {projects.length > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <Button
                  variant="outline"
                  className="border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section Wrapper to include Footer in one snap slide if possible, or separate */}
        <div className="h-full min-h-screen snap-start shrink-0 overflow-y-auto scrollbar-none">
          <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-foreground/60 max-w-2xl mx-auto mb-2">
                  Have a project in mind or just want to chat? Send your inquiries directly to my email
                </p>
                <a
                  href="mailto:laxustaladro@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  laxustaladro@gmail.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-foreground/70">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="bg-white/5 border-white/10 focus:border-blue-500/50 backdrop-blur-sm transition-colors select-text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-foreground/70">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="bg-white/5 border-white/10 focus:border-blue-500/50 backdrop-blur-sm transition-colors select-text"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-foreground/70">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or inquiry..."
                      required
                      rows={6}
                      className="bg-white/5 border-white/10 focus:border-blue-500/50 backdrop-blur-sm transition-colors resize-none select-text"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Github className="h-5 w-5" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="text-sm">Facebook</span>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="text-sm">Instagram</span>
                    </a>
                    <a
                      href="mailto:laxustaladro@gmail.com"
                      className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="text-sm">Email</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-foreground/60 text-sm">
                  © 2026 Lexus D. Taladro — Web Developer
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors hover:scale-110 duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors hover:scale-110 duration-300"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors hover:scale-110 duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:laxustaladro@gmail.com"
                    className="text-foreground/60 hover:text-foreground transition-colors hover:scale-110 duration-300"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>

      {/* Project Gallery */}
      <AnimatePresence>
        {galleryProject && selectedGalleryScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] overflow-y-auto bg-slate-950/90 px-4 py-6 backdrop-blur-xl sm:px-6"
            role="dialog"
            aria-modal="true"
            aria-label={`${galleryProject.title} project screenshots`}
            onClick={closeProjectGallery}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative mx-auto w-full max-w-7xl rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label={`Close ${galleryProject.title} gallery`}
                onClick={closeProjectGallery}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedGalleryScreen.image}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -24 }}
                        transition={{ duration: 0.25 }}
                        className="relative aspect-video"
                      >
                        <ImageWithFallback
                          src={selectedGalleryScreen.image}
                          alt={selectedGalleryScreen.title}
                          className="h-full w-full object-contain"
                        />
                        <div className="absolute left-4 top-4 rounded-full bg-slate-950/85 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
                          {selectedGalleryScreen.title}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <button
                      type="button"
                      aria-label={`Previous ${galleryProject.title} gallery screen`}
                      onClick={() => moveSelectedGallerySlide(-1)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/80 p-3 text-white shadow-lg transition-colors hover:bg-slate-900"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      aria-label={`Next ${galleryProject.title} gallery screen`}
                      onClick={() => moveSelectedGallerySlide(1)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/80 p-3 text-white shadow-lg transition-colors hover:bg-slate-900"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {galleryScreens.map((screen, screenIndex) => (
                      <button
                        key={screen.title}
                        type="button"
                        aria-label={`Open ${screen.title}`}
                        onClick={() => setSelectedGallerySlide(screenIndex)}
                        className={`h-2.5 rounded-full transition-all ${screenIndex === selectedGallerySlide
                          ? 'w-8 bg-blue-400'
                          : 'w-2.5 bg-white/30 hover:bg-white/70'
                          }`}
                      />
                    ))}
                  </div>
                </div>

                <aside className="space-y-5">
                  <div className="pr-12">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                      Project Gallery
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      {galleryProject.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {galleryProject.description}
                    </p>
                    {galleryProject.techStack && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {galleryProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="grid max-h-[440px] gap-3 overflow-y-auto pr-1 scrollbar-none sm:grid-cols-2 lg:grid-cols-1">
                    {galleryScreens.map((screen, screenIndex) => (
                      <button
                        key={screen.title}
                        type="button"
                        onClick={() => setSelectedGallerySlide(screenIndex)}
                        className={`group overflow-hidden rounded-xl border text-left transition-all ${screenIndex === selectedGallerySlide
                          ? 'border-blue-400 bg-blue-500/10'
                          : 'border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10'
                          }`}
                      >
                        <div className="aspect-video overflow-hidden bg-slate-950">
                          <ImageWithFallback
                            src={screen.image}
                            alt={screen.title}
                            className="h-full w-full object-cover object-left-top transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="px-3 py-2 text-sm font-medium text-white">
                          {screen.title}
                        </div>
                      </button>
                    ))}
                  </div>
                </aside>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-[60] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
                <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent font-semibold text-base sm:text-lg">
                  Lexus D. Taladro
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen(false);
                  }}
                  variant="ghost"
                  size="sm"
                  className="text-foreground"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <nav className="flex flex-col gap-8 px-6">
                  {['Home', 'Services', 'Projects', 'Contact'].map((item, index) => (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToSection(item.toLowerCase());
                        setMobileMenuOpen(false);
                      }}
                      className="text-2xl sm:text-3xl font-semibold text-foreground/70 hover:text-foreground transition-colors text-left"
                    >
                      {item}
                    </motion.button>
                  ))}
                </nav>
              </div>

              <div className="px-6 py-8 border-t border-white/10">
                <div className="flex items-center justify-center gap-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="mailto:laxustaladro@gmail.com"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
}
