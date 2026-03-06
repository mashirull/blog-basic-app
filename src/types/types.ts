export  interface Blog {
    id?: number,
    title: string
    slug ?: string
    excerpt: string
    content?: string
    date:string
    image : string
    category  : string

}

export interface Comment {
    blogId : number
    commentText : string
    name : string
    date : string
}