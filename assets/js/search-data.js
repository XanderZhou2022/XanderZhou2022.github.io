// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research, course projects, and software prototypes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-social-work",
          title: "Social Work",
          description: "Social practice, volunteer service, and community engagement.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/social_work/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching Assistant experience and course materials.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-received-hkbu-ph-d-offer",
          title: 'Received HKBU Ph.D. Offer',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-01-16-hkbu-offer/";
            },},{id: "news-fincards-accepted-to-acl-2026-findings",
          title: 'FinCARDS Accepted to ACL 2026 Findings',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-04-06-fincards-acl-findings/";
            },},{id: "news-finreporting-accepted-to-acl-2026-demo",
          title: 'FinReporting Accepted to ACL 2026 Demo',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-05-06-finreporting-acl-demo/";
            },},{id: "news-life-trajectory-paper-accepted-to-icsc-2026-as-oral",
          title: 'Life Trajectory Paper Accepted to ICSC 2026 as Oral',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-06-24-life-trajectories-icsc-oral/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
