interface IHEADER_LINKS {
    name: string,
    link: string
}

interface IHOME_HEADERS {
    text: string
}

/** CONST VARIABLES */
const HEADER_LINKS: IHEADER_LINKS[] = [
    { name: 'About', link: '/#about' },
    { name: 'Experience', link: '/#experience' },
    { name: 'Projects', link: '/#projects' },
    { name: 'Contact', link: '/#contact' },
];

const HOME_HEADERS: IHOME_HEADERS[] = [
    { text: 'Marc Benedict Escatron' },
    { text: 'Frontend Web Developer' },
    { text: 'A Frontend focused Web Developer specializing in single-page applications and in writing efficient & maintainable code.' },
];
/** CONST VARIABLES */

/** LET VARIABLES */
/** LET VARIABLES */



export {
    HEADER_LINKS,
    HOME_HEADERS
}