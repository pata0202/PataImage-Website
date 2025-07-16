export enum ReviewAction {
    next = "next",
    previous = "previous",
}

export class Review {
    seq: number = 1;
    name: string = "";
    title: string = "";
    review: string = "";
    image: string = "";
}
