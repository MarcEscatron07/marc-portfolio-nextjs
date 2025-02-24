import { 
	DiGit,
	DiHtml5,
	DiCss3,
	DiBootstrap,
	DiJavascript1,
	DiJqueryLogo,
	DiSass,
	DiPhp,
	DiLaravel,
	DiMysql,
	DiHeroku,
	DiMongodb,
	DiReact,
	DiNodejsSmall
} from "react-icons/di";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


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
    order: number,
    title: string,
    subtitle: string,
    texts: string[]
}
interface IPROJECTS_APPLICATION {
    id: string,
    logo: string,
    title: string,
    text: string,
    repo: string,
    url: string,
    technologies: {icon: any, name: string, }[]
}
interface ICONTACT_SOCIALS {
    id: string,
    title: string,
    url: string,
    icon: any
}


const HEADER_LINKS: IHEADER_LINKS[] = [
    { id: '|.', name: 'About', url: '/#about' },
    { id: '||.', name: 'Experience', url: '/#experience' },
    { id: '|||.', name: 'Projects', url: '/#projects' },
    { id: '||||.', name: 'Contact', url: '/#contact' },
];

const HEADER_RESUME: string = '/files/marc-escatron-resume.pdf';

const HOME_HEADERS: IHOME_HEADERS[] = [
    { id: 'h1', text: 'Marc Benedict Escatron' },
    { id: 'h2', text: 'Frontend Web Developer' },
    { id: 'h3', text: 'I specialize in creating single-page applications and in writing efficient & maintainable code.' },
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
        id: 'xurpas',
        order: 1,
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
    },
    {
        id: 'ticto',
        order: 2,
        title: 'Tagbilaran Information & Communications Technology Office (T.I.C.T.O.)',
        subtitle: 'IT Programmer | JAN 2023 - Present',
        texts: [
            'Prepare and write programs according to the specifications determined primarily by Senior Programmers of the City Government.',
            'Conceive, design and test logical structures for solving problems which the computer can follow.',
            'Coordinate with the IT Team in the preparation of designs and programs for applicability.',
            'Recommend possible latest trend in computer programs and designs.',
            'Maintain files, records and documents of approved computer programs and submit reports when necessary.',
            'Regularly assess and analyze the usability of the programs and designs for development and upgrading.'
        ]
    }
];

const PROJECTS_APPLICATION: IPROJECTS_APPLICATION[] = [
    {
        id: 'lcshop',
        // logo: '/images/projects/lcshop.png',
        logo: '/images/projects/lcshop-v2.png',
        title: 'LCShop',
        text: 'LCShop is an online store that sells eSports merchandise associated with a popular video game called ‘League of Legends’.',
        // repo: 'https://gitlab.com/MarcEscatron07/lcshop-capstone-1',
        // url: 'https://lcshop-capstone-1.vercel.app/',
        repo: 'https://gitlab.com/MarcEscatron07/lcshop-capstone-1-react',
        url: 'https://lcshop-capstone-1-react.vercel.app/',
        technologies: [
            { icon: <DiGit/>, name: "Git" },
			{ icon: <DiHtml5/>, name: "HTML" },
			{ icon: <DiCss3/>, name: "CSS"  },
			{ icon: <DiBootstrap/>, name: "Bootstrap" },
			{ icon: <DiJavascript1/>, name: "JavaScript" },
			{ icon: <DiJqueryLogo/>, name: "jQuery" },
			// { icon: <DiHeroku/>, name: "Heroku" },
            { icon: null, name: "Vercel" },
        ]
     },
    {
        id: 'townportal',
        logo: '/images/projects/townportal-v2.png',
        title: 'Town Portal',
        text: 'Town Portal is an asset management system that manages the data of the users and equipments used in an internet cafe.',
        repo: 'https://gitlab.com/MarcEscatron07/townportal-capstone-2-lv8',
        url: 'https://townportal-capstone-2-lv8.vercel.app/',
        technologies: [
            { icon: <DiGit/>, name: "Git" },
			{ icon: <DiHtml5/>, name: "HTML" },
			{ icon: <DiCss3/>, name: "CSS" },
			{ icon: <DiBootstrap/>, name: "Bootstrap" },
			{ icon: <DiSass/>, name: "Sass" },
			{ icon: <DiJavascript1/>, name: "JavaScript" },
			{ icon: <DiJqueryLogo/>, name: "jQuery" },
			{ icon: <DiPhp/>, name: "PHP" },
			{ icon: <DiLaravel/>, name: "Laravel" },
			{ icon: <DiMysql/>, name: "MySQL" },
			// { icon: <DiHeroku/>, name: "Heroku" },
            { icon: null, name: "Vercel" },
        ]
    },
    // {
    //     id: 'ferryfast',
    //     logo: '/images/projects/ferryfast.png',
    //     title: 'FerryFast',
    //     text: 'FerryFast is an online fastcraft booking system which allows the user to have a fast and easy booking experience.',
    //     repo: 'https://gitlab.com/MarcEscatron07/ferryfast-capstone-3',
    //     url: 'https://ferryfast-capstone-3-v2.herokuapp.com/admin',
    //     technologies: [
    //         { icon: <DiGit/>, name: "Git" },
	// 		{ icon: <DiHtml5/>, name: "HTML" },
	// 		{ icon: <DiCss3/>, name: "CSS" },
	// 		{ icon: <DiBootstrap/>, name: "Bootstrap" },
	// 		{ icon: <DiMongodb/>, name: "MongoDB" },
	// 		{ icon: <DiReact/>, name: "React" },
	// 		{ icon: <DiNodejsSmall/>, name: "NodeJS" },
	// 		{ icon: <DiHeroku/>, name: "Heroku" },
    //     ]
    // },
    {
        id: 'tagbike',
        logo: '/images/projects/tagbike.png',
        title: 'Tagbike',
        text: 'Tagbike is an online bike rental system for the citizens of Tagbilaran City and allow them to rent bicycles from the government with ease.',
        repo: 'https://gitlab.com/MarcEscatron07/tagbike-nextjs',
        url: 'https://tagbike-nextjs.vercel.app/',
        technologies: [
            { icon: <DiGit/>, name: "Git" },
			{ icon: <DiHtml5/>, name: "HTML" },
			{ icon: <DiCss3/>, name: "CSS" },
			{ icon: <DiBootstrap/>, name: "Bootstrap" },
			{ icon: <DiMysql/>, name: "MySQL" },
			{ icon: <DiReact/>, name: "React" },
			{ icon: null, name: "Material UI" },
			{ icon: null, name: "NextJS" },
			{ icon: null, name: "Vercel" },
        ]
    },
    {
        id: 'tcfb-admin-lv9',
        logo: '/images/projects/tagbilaran-seal.png',
        title: 'Tagbilaran Customer Feedback',
        text: 'Tagbilaran Customer Feedback is a system that gathers feedbacks from customers that have been served by the offices in the City Hall of Tagbilaran.',
        repo: 'https://gitlab.com/MarcEscatron07/tcfb-admin-lv9',
        url: 'https://tcfb-admin-lv9.vercel.app/',
        technologies: [
            { icon: <DiGit/>, name: "Git" },
			{ icon: <DiHtml5/>, name: "HTML" },
			{ icon: <DiCss3/>, name: "CSS" },			
            { icon: <DiJavascript1/>, name: "JavaScript" },
            { icon: <DiJqueryLogo/>, name: "jQuery" },
			{ icon: <DiMysql/>, name: "MySQL" },
			{ icon: <DiPhp/>, name: "PHP" },
			{ icon: <DiLaravel/>, name: "Laravel" },
			{ icon: <DiReact/>, name: "React" },
			{ icon: null, name: "Electron" },
            { icon: null, name: "Tailwind CSS" },
			{ icon: null, name: "Vercel" },
        ]
    },
];

const CONTACT_HEADER: string = "Feel free to drop a message and I will respond as soon as possible!";

const CONTACT_SOCIALS: ICONTACT_SOCIALS[] = [
    {
        id: 'facebook',
        title: 'Facebook',
        url: 'https://www.facebook.com/marcusbenz07/',
        icon: faFacebook
    },
    {
        id: 'twitter',
        title: 'Twitter',
        url: 'https://twitter.com/marcusbenz07',
        icon: faTwitter
    },
    {
        id: 'instagram',
        title: 'Instagram',
        url: 'https://www.instagram.com/marcusbenz07/',
        icon: faInstagram
    },
    {
        id: 'linkedin',
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/marcusbenz07/',
        icon: faLinkedin
    },
];



export {
    HEADER_LINKS,
    HEADER_RESUME,
    HOME_HEADERS,
    ABOUT_PARAGRAPHS,
    ABOUT_SKILLS,
    EXPERIENCE_TIMELINE,
    PROJECTS_APPLICATION,
    CONTACT_HEADER,
    CONTACT_SOCIALS
}