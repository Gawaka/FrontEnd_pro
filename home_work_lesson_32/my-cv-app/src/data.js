
const projectsData = [
    {
        id: 1,
        title: 'D&D Character & Scenario Manager',
        description: 'Веб-додаток для гравців у Dungeons & Dragons. Реалізовано інтерактивні листи персонажів та бази сценаріїв. Використано React, TypeScript, кастомні хуки. Інтерфейс стилізовано за допомогою модульного SCSS. Проєкт розгорнуто та підтримується на платформі Vercel.',
        tags: ['React', 'TypeScript', 'SCSS Modules', 'Custom Hooks'],
        demoLink: 'https://dnd-database-roan.vercel.app/',
        githubLink: 'https://github.com/Gawaka/dnd_database',
        accentColor: 'secondary.light',
        textColor: 'secondary.main',
        preview: '/projectsPreview/dnd.png'
    },
    {
        id: 2,
        title: 'Excuse Generator App',
        description: 'SPA додаток, створений на базі Vite та React. Управління станом (слайси) налаштовано через Redux Toolkit з персистенцією даних у Local Storage. Проєкт розгорнуто та підтримується на платформі Vercel.',
        tags: ['Vite', 'React', 'Redux Toolkit', 'Vercel'],
        demoLink: 'https://excuse-gen-phi.vercel.app/',
        githubLink: 'https://github.com/Gawaka/FrontEnd_pro/tree/main/home_work_lesson_27/excuse-gen',
        accentColor: 'primary.light',
        textColor: 'primary.main',
        preview: '/projectsPreview/excuse.png'
    },
    {
        id: 3,
        title: 'SWAPI',
        description: 'SPA додаток, створений на базі Vite та React з використанням API SWAPI. Управління станом (слайси) налаштовано через Redux Toolkit. Проєкт розгорнуто та підтримується на платформі Vercel.',
        tags: ['Vite', 'React', 'Redux Toolkit', 'Vercel'],
        demoLink: 'https://front-end-pro-six.vercel.app/',
        githubLink: 'https://github.com/Gawaka/FrontEnd_pro/tree/main/home_work_lesson_30/my-project/src',
        accentColor: 'secondary.light',
        textColor: 'primary.main',
        preview: '/projectsPreview/swapi.png'
    },
        {
        id: 3,
        title: 'My CV',
        description: 'SPA додаток, створений на базі Vite та React з використанням. Розробка власного резюме із використанням MUI(Material Design).',
        tags: ['Vite', 'React', 'Vercel', 'MUI'],
        demoLink: 'https://vercel.com/gawakas-projects/my-cv/4HMqM1PA15XniyJapzSUP48XX29J',
        githubLink: 'https://github.com/Gawaka/FrontEnd_pro/tree/main/home_work_lesson_32/my-cv-app',
        accentColor: 'primary.light',
        textColor: 'primary.main',
        preview: '/projectsPreview/cv.png'
    },
];

const locationMap = 'https://www.google.com/maps/place/%D0%9A%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D1%87%D1%83%D0%BA,+%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+39600/@49.0932452,33.274383,11z/data=!3m1!4b1!4m6!3m5!1s0x40d753ab9b0218df:0x49204e009e9c5b1c!8m2!3d49.065783!4d33.410033!16zL20vMDQ0NzJo?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D';


export {projectsData, locationMap};