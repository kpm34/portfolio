# n8n Expression & Configuration Reference

Quick reference for n8n workflow automation. Based on official docs and tested patterns.

## Expression Syntax

### Basic Access
```javascript
// Current node data
{{ $json.fieldName }}
{{ $json.nested.property }}
{{ $json['field with spaces'] }}

// Reference other nodes
{{ $node["Node Name"].json.field }}
{{ $('Node Name').item.json.field }}  // Alternative syntax
```

### Webhook Data Structure
**IMPORTANT**: Webhook data is under `.body`, NOT at root!

```javascript
// Webhook node output structure:
{
  "headers": {...},
  "params": {...},
  "query": {...},
  "body": {           // <-- USER DATA IS HERE
    "name": "John",
    "email": "john@example.com"
  }
}

// WRONG
{{ $json.name }}

// CORRECT
{{ $json.body.name }}
{{ $json.body.email }}
```

## HTTP Request Node

### Known Bug (Issue #15996)
The `specifyBody: "json"` with `jsonBody` has a bug where expressions get serialized as strings.

### Correct JSON Body Syntax
Wrap entire object in `{{ }}` - NOT using `=` prefix:

```javascript
// CORRECT - Object literal in expression
{{
{
  company: $json.body.company,
  role: $json.body.role,
  status: "applied",
  timestamp: $now.toISO()
}
}}

// WRONG - Don't use = prefix with objects
={{ {...} }}
=JSON.stringify({...})
```

### POST with Headers Example
```json
{
  "method": "POST",
  "url": "https://api.example.com/endpoint",
  "authentication": "noAuth",
  "sendHeaders": true,
  "headerParameters": {
    "parameters": [
      {"name": "Content-Type", "value": "application/json"},
      {"name": "Authorization", "value": "Bearer YOUR_API_KEY"}
    ]
  },
  "sendBody": true,
  "specifyBody": "json",
  "jsonBody": "{{ { key: $json.body.value } }}"
}
```

## Set Node

### Manual Mode - Fixed Values
```json
{
  "mode": "manual",
  "duplicateItem": false,
  "assignments": {
    "assignments": [
      {"name": "status", "value": "active", "type": "string"},
      {"name": "count", "value": 100, "type": "number"}
    ]
  }
}
```

### With Expressions
```json
{
  "assignments": {
    "assignments": [
      {
        "name": "fullName",
        "value": "={{ $json.body.firstName }} {{ $json.body.lastName }}",
        "type": "string"
      }
    ]
  }
}
```

## Webhook Node

### Basic Configuration
```json
{
  "httpMethod": "POST",
  "path": "my-webhook",
  "responseMode": "lastNode",  // or "responseNode" with Respond node
  "options": {}
}
```

### Response Modes
- `lastNode` - Returns output from last node in workflow
- `responseNode` - Requires a "Respond to Webhook" node
- `onReceived` - Immediately returns 200 OK

## Common Patterns

### String Interpolation
```javascript
// Inside expression
{{ "Hello " + $json.body.name }}

// Mixed static and dynamic
Hello {{ $json.body.name }}!
```

### Conditional/Ternary
```javascript
{{ $json.body.status === 'active' ? 'Active User' : 'Inactive' }}
```

### Default Values
```javascript
{{ $json.body.email || 'no-email@example.com' }}
```

### Date/Time
```javascript
{{ $now.toISO() }}
{{ $now.toFormat('yyyy-MM-dd') }}
{{ $now.plus({days: 7}).toISO() }}
```

## Debugging Tips

1. **Test expressions in n8n UI** - Use the expression editor to see live preview
2. **Check execution logs** - n8n UI shows input/output for each node
3. **Simplify first** - Start with hardcoded values, then add expressions
4. **Log data** - Use Set node to inspect data structure

## MCP Tools Available

### API Operations (mcp__n8n__*)
- `list_workflows` - Get all workflows
- `get_workflow` - Get workflow by ID
- `create_workflow` - Create new workflow
- `update_workflow` - Update existing workflow
- `activate_workflow` / `deactivate_workflow`
- `list_executions` / `get_execution`
- `run_webhook` - Trigger webhook workflow

### Documentation (mcp__n8n_docs__*) - After restart
- Node search and documentation
- Config validation
- Template search (2,709 templates)
- Property schemas

## Sources
- [n8n Expression Docs](https://docs.n8n.io/code/expressions/)
- [HTTP Request Node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/)
- [Data Structure](https://docs.n8n.io/data/data-structure/)
- [GitHub Issue #15996](https://github.com/n8n-io/n8n/issues/15996) - JSON body bug
