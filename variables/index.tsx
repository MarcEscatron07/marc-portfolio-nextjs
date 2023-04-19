interface IHEADER_LINKS {
    id: string,
    name: string,
    link: string
}

interface IHOME_HEADERS {
    text: string
}

/** CONST VARIABLES */
const HEADER_LINKS: IHEADER_LINKS[] = [
    { id: 'I', name: 'About', link: '/#about' },
    { id: 'II', name: 'Experience', link: '/#experience' },
    { id: 'III', name: 'Projects', link: '/#projects' },
    { id: 'IV', name: 'Contact', link: '/#contact' },
];

const HOME_HEADERS: IHOME_HEADERS[] = [
    { text: 'Marc Benedict Escatron' },
    { text: 'Web Developer' },
    { text: 'A Frontend focused developer specializing in single-page applications and in writing efficient & maintainable code.' },
];
/** CONST VARIABLES */

/** LET VARIABLES */

/** LET VARIABLES */



export {
    HEADER_LINKS,
    HOME_HEADERS
}