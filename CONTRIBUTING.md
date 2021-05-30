# Contributing to WYIN frontend

## Table of contents

- [Workflow]
- [What you need first]
- [Getting started]

## Workflow

The preferred method of contributing is the [Forking Workflow](https://docs.gitlab.com/ee/user/project/repository/forking_workflow.html)

We use [JIRA](https://www.atlassian.com/software/jira)

Commit messages should be named after JIRA tickets e.g. WYIN-xx xxxx xxxx xxxx

## What you need first

node.js >= 10.16
npm >= 5.6
[Download and install both](https://nodejs.org/)

## Getting started

1. Download all the files from this repository
2. Go to your project folder
3. Install all dependencies

```
npm install
```

4. How to run linter

```
npm run lint
```

5. Run server

```
npm start
```

(http://localhost:3000)

## How to use local backend
Create `.env.local` file and add this line:
```
REACT_APP_WYIN_BE_FEED_API="http://localhost:8080"
```

[README](./README.md)

[workflow]: #workflow
[what you need first]: #what-you-need-first
[getting started]: #getting-started
