export interface Blocks {
    object:string;
    results:Block[];
    next_cursor:string | null;
    has_more:boolean;
    type:string;

}

interface Block {
    object:string;
    id:string;
    parent:Parent;
    created_by:Created_by;
    last_edited_by:Created_by;
    has_children:boolean;
    archived:boolean;
    type:string;
    [key:string]:TableContent|BlockContent|string|Parent|Created_by|boolean;
}

interface TableContent {
    table_width: number;
    has_column_header: boolean;
    has_row_header: boolean;
}

interface Parent {
    type:string;
    page_id:string;
}

interface Created_by {
    object:string;
    id:string;
}

interface BlockContent {
    rich_text: RichText;
    is_toggleable: boolean;
    color: string;
}

interface RichText {
    type: string;
    text: {
        content: string;
        link: null | string;
    };
    annotations: Annotations;
    plain_text: string;
    href: string | null;
}

interface Annotations {
    bold?:boolean;
    italic?:boolean;
    strikethrough?:boolean;
    underline?:boolean;
    color?:string
}