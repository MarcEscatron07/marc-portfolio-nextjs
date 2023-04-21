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
    { id: 'h3', text: 'A Frontend developer specializing in single-page applications and in writing efficient & maintainable code.' },
];

const ABOUT_PARAGRAPHS: IABOUT_PARAGRAPHS[] = [
    { id: 'p1', text: "Hey there! I'm Marc Benedict and I've been creating web applications for over 2 years." },
    { id: 'p1', text: "My journey in Web Development began in 2019 when I enrolled in Zuitt -- a coding bootcamp in the Philippines." },
    { id: 'p1', text: "The bootcamp lasted for 3 months and it helped me get my first job as a Junior Web Developer in a private company." },
    { id: 'p2', text: "Fast-forward to today, I've had the privilege to work with great developers who helped me mature in my career." },
    { id: 'p2', text: "And now, I am currently working as an IT Programmer in the local government of Tagbilaran City, Bohol." },
    { id: 'p3', text: "Here are the technologies I have used over the course of my career:" },
];

const ABOUT_SKILLS: IABOUT_SKILLS[] = [
    { id: 'html', text: 'HTML', image: '/images/web_technologies/html5-icon.svg' },
    { id: 'css', text: 'CSS', image: '/images/web_technologies/css3-icon.svg' },
    { id: 'sass', text: 'Sass', image: '/images/web_technologies/sass-lang-icon.svg' },
    { id: 'bootstrap', text: 'Bootstrap', image: '/images/web_technologies/bootstrap-4.svg' },
    { id: 'js', text: 'JavaScript', image: '/images/web_technologies/javascript.svg' },
    { id: 'jquery', text: 'jQuery', image: '/images/web_technologies/jquery-vertical.svg' },
    { id: 'react', text: 'React', image: '/images/web_technologies/react.svg' },
    { id: 'php', text: 'PHP', image: '/images/web_technologies/php-vertical.svg' },
    { id: 'laravel', text: 'Laravel', image: '/images/web_technologies/laravel-2.svg' },
    { id: 'mysql', text: 'MySQL', image: '/images/web_technologies/mysql-5.svg' },
    { id: 'nodejs', text: 'NodeJS', image: '/images/web_technologies/nodejs-icon.svg' },
    // { id: 'expressjs', text: 'ExpressJS', image: '/images/web_technologies/expressjs-ar21.svg' },
    // { id: 'mongodb', text: 'MongoDB', image: '/images/web_technologies/mongodb-icon.svg' },
    // { id: 'graphql', text: 'GraphQL', image: '/images/web_technologies/graphql.svg' },
    { id: 'git', text: 'Git', image: '/images/web_technologies/git-icon.svg' },
];
/** CONST VARIABLES */

/** LET VARIABLES */

/** LET VARIABLES */



export {
    HEADER_LINKS,
    HOME_HEADERS,
    ABOUT_PARAGRAPHS,
    ABOUT_SKILLS
}