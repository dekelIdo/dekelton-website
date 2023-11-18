export interface Link {
    title: string;
    routerLink: RouterLink;
}
type RouterLink = "about-me"|"personal-projects"|"contact-me"|"education"