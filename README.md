# Notion-To_React

The notion-to-react library is a tool that allows you to seamlessly integrate data from the Notion API into your React applications.


## Usage

```ts
import NotionPost from './lib/NotionPost';
const blocks = {
    "object": "list",
    "results": [], //Notion Api https://developers.notion.com/
    "next_cursor": null,
    "has_more": false,
    "type": "block",
    "block": {},
    "developer_survey": "https://notionup.typeform.com/to/bllBsoI4?utm_source=postman"
}

const tables = {
    "faac729b-37ad-43d4-a3df-ed9d58412e90":{ //Table Block ID
        //Table Block Json
        "object": "list",
        "results": [],
        "next_cursor": null,
        "has_more": false,
        "type": "block",
        "block": {},
        "developer_survey": "https://notionup.typeform.com/to/bllBsoI4?utm_source=postman"
    }
}

function App() {
  return (
    <div className="App">
        <NotionPost blocks={blocks} tables={tables} />
    </div>
  );
}
```

## Option

If you want to use the table, use the tables option

```ts
const tables = {
    "faac729b-37ad-43d4-a3df-ed9d58412e90":{ //Table Block ID
        //Table Block Json
        "object": "list",
        "results": [],
        "next_cursor": null,
        "has_more": false,
        "type": "block",
        "block": {},
        "developer_survey": "https://notionup.typeform.com/to/bllBsoI4?utm_source=postman"
    }
}

function App() {
  return (
    <div className="App">
        <NotionPost blocks={blocks} tables={tables} />
    </div>
  );
}
```

## Supported Blocks

The majority of Notion blocks and collection views are fully supported.

| Block Type               | Supported  | Notes                                                                                                            |
| ------------------------ | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| Bookmark                 | ✔️         | Replaced by Link                                                                                                 |
| Bulleted List            | ✔️         |                                                                                                                  |
| Callout                  | ✔️         |                                                                                                                  |
| Code                     | ✔️         |                                                                                                                  |
| Divider                  | ✔️         |                                                                                                                  |
| Equation                 | ✔️         |                                                                                                                  |
| Heading 1                | ✔️         |                                                                                                                  |
| Heading 2                | ✔️         |                                                                                                                  |
| Heading 3                | ✔️         |                                                                                                                  |
| Image                    | ✔️         |                                                                                                                  |
| Numbered List Item       | ❌         | Replaced by Bulleted List                                                                                        |
| Paragraph                | ✔️         | [react-katex](https://github.com/MatejBransky/react-katex)                                                       |
| Quote                    | ✔️         |                                                                                                                  |
| Table                    | ✔️         |                                                                                                                  |
| To Do                    | ✔️         |                                                                                                                  |
| Video                    | ✔️         |                                                                                                                  |
| Toggle                   | ❌         |                                                                                                                  |
| PDF                      | ❌         |                                                                                                                  |
| Sync                     | ❌         |                                                                                                                  |
| Column                   | ❌         |                                                                                                                  |