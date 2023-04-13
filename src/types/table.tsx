export interface Tables {
    [key:string]:Table;
}

interface Table {
    object:string;
    // "next_cursor": null,
    // "has_more": false,
    // "type": "block",
    // "block": {}
}