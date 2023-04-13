export interface Tables {
    [key:string]:Table;
}

export interface Table {
    object:string;
    next_cursor: string | null;
    has_more: boolean
    type: string;
    results: Rows[];
}

export interface Rows {
    object: string;
    id: string;
    parent: {
        type: string;
        block_id: string;
    };
    created_time: string;
    last_edited_time: string;
    created_by: Created_by;
    last_edited_by: Created_by;
    has_children: boolean;
    archived: boolean;
    type: string;
    table_row:TableRow;
}

export interface Created_by {
    object:string;
    id:string;
}

export interface TableRow {
    cells:RichText[][]
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

export interface Annotations {
    bold?:boolean;
    italic?:boolean;
    strikethrough?:boolean;
    underline?:boolean;
    color?:string
}