export type ServiceType = {
    type: string
    title: string
    text: string
    image: { src: string, alt: string }
}
export const services = [
    {
        type: "textile_bag",
        title: "Látkové tašky s potiskem",
        text: "Dlouhá význam s sionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě",
        image: { src: "services/man-with-machine.png", alt: "Textile bags with print on it" },
    },
    {
        type: "textile_bag",
        title: "Látkové tašky bez potisku",
        text: "Dlouhá význam s sionismu ty, jí antény i sezona",
        image: { src: "services/bakery.png", alt: "Textile bags without print" },
    },
    {
        type: "paper_bag",
        title: "Bílé papírové tašky",
        text: "Dlouhá význam s sionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě",
        image: { src: "services/man-with-bag.png", alt: "White paper bags" },
    },
    {
        type: "paper_bag",
        title: "Barevné papírové tašky na dárky",
        text: "Dlouhá význam s sionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě",
        image: { src: "services/colorful-bags.png", alt: "Colorful gift bags" },
    },
    {
        type: "paper_bag",
        title: "Papírové tašky z recyklovatelného materiálu",
        text: "Dlouhá význam s sionismu ty, jí antény i sezona",
        image: { src: "services/man-with-bag.png", alt: "Recycled paper bags" },
    },
    {
        type: "plastic_bag",
        title: "Igelitové sáčky s logem",
        text: "Dlouhá význam s sionismu ty, jí antény i sezona, bílá malých izolovány uvést masové vodě",
        image: { src: "services/man-with-machine.png", alt: "Small plastic bags" },
    },
    {
        type: "plastic_bag",
        title: "Velké igelitové tašky s potiskem",
        text: "Dlouhá význam s sionismu ty, jí antény i sezona",
        image: { src: "services/bakery.png", alt: "Plastic bags with print on it" },
    },
]