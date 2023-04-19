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

/** CONST VARIABLES */
const HEADER_LINKS: IHEADER_LINKS[] = [
    { id: 'I', name: 'About', url: '/#about' },
    { id: 'II', name: 'Experience', url: '/#experience' },
    { id: 'III', name: 'Projects', url: '/#projects' },
    { id: 'IV', name: 'Contact', url: '/#contact' },
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
/** CONST VARIABLES */

/** LET VARIABLES */

/** LET VARIABLES */



export {
    HEADER_LINKS,
    HOME_HEADERS,
    ABOUT_PARAGRAPHS
}