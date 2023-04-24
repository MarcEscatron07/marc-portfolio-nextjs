interface IHEADER_LINKS {
    id: string,
    name: string,
    url: string
}
interface IHOME_HEADERS {
    id: string,
    text: string
}
interface IABOUT_PARAGRAPHS {
    id: string,
    text: string
}
interface IABOUT_SKILLS {
    id: string,
    text: string,
    image: string
}
interface IEXPERIENCE_TIMELINE {
    id: string,
    title: string,
    subtitle: string,
    texts: string[]
}

/** CONST VARIABLES */
const HEADER_LINKS: IHEADER_LINKS[] = [
    { id: '01.', name: 'About', url: '/#about' },
    { id: '02.', name: 'Experience', url: '/#experience' },
    { id: '03.', name: 'Projects', url: '/#projects' },
    { id: '04.', name: 'Contact', url: '/#contact' },
];

const HOME_HEADERS: IHOME_HEADERS[] = [
    { id: 'h1', text: 'Marc Benedict Escatron' },
    { id: 'h2', text: 'Web Developer' },
    { id: 'h3', text: 'A Frontend focused web developer specializing in single-page applications and in writing efficient & maintainable code.' },
];

const ABOUT_PARAGRAPHS: IABOUT_PARAGRAPHS[] = [
    { id: 'p1', text: "Hey there! I'm Marc Benedict and I've been creating web applications for over 2 years." },
    { id: 'p1', text: "My journey in Web Development began in 2019 when I enrolled in Zuitt -- a coding bootcamp in the Philippines." },
    { id: 'p1', text: "The bootcamp lasted for 3 months and it helped me get my first job as a Junior Web Developer in a private company." },
    { id: 'p2', text: "Fast-forward to today, I've had the privilege to work with great developers who helped me mature in my career." },
    { id: 'p2', text: "And currently, I am working as an IT Programmer in the local government of Tagbilaran City, Bohol." },
    { id: 'p3', text: "Here are some of the technologies I have used over the course of my career:" },
];

const ABOUT_SKILLS: IABOUT_SKILLS[] = [
    { id: 'html', text: 'HTML', image: '/images/technologies/html5-logo.png' },
    { id: 'css', text: 'CSS', image: '/images/technologies/css3-logo.png' },
    { id: 'sass', text: 'Sass', image: '/images/technologies/sass-lang-logo.png' },
    { id: 'bootstrap', text: 'Bootstrap', image: '/images/technologies/bootstrap-4-logo.png' },
    { id: 'js', text: 'JavaScript', image: '/images/technologies/javascript-logo.png' },
    { id: 'jquery', text: 'jQuery', image: '/images/technologies/jquery-alt-logo.png' },
    { id: 'react', text: 'React', image: '/images/technologies/react-logo.png' },
    { id: 'php', text: 'PHP', image: '/images/technologies/php-logo.png' },
    { id: 'laravel', text: 'Laravel', image: '/images/technologies/laravel-logo.png' },
    { id: 'mysql', text: 'MySQL', image: '/images/technologies/mysql-5-logo.png' },
    { id: 'nodejs', text: 'NodeJS', image: '/images/technologies/nodejs-logo.png' },
    // { id: 'expressjs', text: 'ExpressJS', image: '/images/technologies/expressjs-logo.png' },
    // { id: 'mongodb', text: 'MongoDB', image: '/images/technologies/mongodb-logo.png' },
    // { id: 'graphql', text: 'GraphQL', image: '/images/technologies/graphql-logo.png' },
    { id: 'git', text: 'Git', image: '/images/technologies/git-logo.png' },
];

const EXPERIENCE_TIMELINE: IEXPERIENCE_TIMELINE[] = [
    {
        id: 'ticto',
        title: 'Tagbilaran Information & Communications Technology Office (T.I.C.T.O.)',
        subtitle: 'IT Programmer | JAN 2023 - Present',
        texts: [
            'Prepare and write programs according to the specifications determined primarily by Senior Programmers of the City Government.',
            'Conceive, design and test logical structures for solving problems by computer and convert into logical series of instructions that the computer can follow.',
            'Coordinate with the IT Team in the preparation of designs and programs for applicability.',
            'Recommend possible latest trend in computer programs and designs.',
            'Maintain files, records and documents of approved computer programs and submit reports when necessary.',
            'Regularly assess and analyze the usability of the programs and designs for development and upgrading.'
        ]
    },
    {
        id: 'xurpas',
        title: 'Xurpas, Inc.',
        subtitle: 'Junior Web Developer | MAR 2020 - DEC 2021',
        texts: [
            'Developed, tested and maintained the frontend of web applications.',
            'Assisted the development team with all aspects of website and application design.',
            'Collaborated with other developers to implement new and useful web features.',
            'Coordinated with UI/UX Designers, QA Testers and Project Managers to transform creative concepts into reality for clients.',
            'Participated in stand-up meetings to have better progress in development with our clients\' feedback.',
            'Kept up-to-date with the latest technologies and programming trends.',
        ]
    }
];
/** CONST VARIABLES */

/** LET VARIABLES */

/** LET VARIABLES */



export {
    HEADER_LINKS,
    HOME_HEADERS,
    ABOUT_PARAGRAPHS,
    ABOUT_SKILLS,
    EXPERIENCE_TIMELINE
}