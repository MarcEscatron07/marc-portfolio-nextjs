interface IHEADER_LINKS {
    order: string,
    name: string,
    url: string
}

interface IHOME_HEADERS {
    text: string
}

/** CONST VARIABLES */
const HEADER_LINKS: IHEADER_LINKS[] = [
    { order: 'I', name: 'About', url: '/#about' },
    { order: 'II', name: 'Experience', url: '/#experience' },
    { order: 'III', name: 'Projects', url: '/#projects' },
    { order: 'IV', name: 'Contact', url: '/#contact' },
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