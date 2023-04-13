export interface Annotations {
    bold?:boolean;
    italic?:boolean;
    strikethrough?:boolean;
    underline?:boolean;
    color?:string
}

export interface RichText {
    type: string;
    text: {
        content: string;
        link: null | string;
    };
    annotations: Annotations;
    plain_text: string;
    href: string | null;
}

export interface bookmark {
    caption: RichText[];
    url: string;
}

export interface breadcrumb { //빈객체임
}

export interface bulleted_list_item {
    rich_text: RichText[],
    color: string,
    "children":[{
        "type": "paragraph"
    }]
}

export interface Code {
    caption: RichText[];
    rich_text: RichText[];
    language: string;
}
