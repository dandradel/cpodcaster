# Podcaster App
Podcaster is an application builded in a Hexagonal architecture which is connected with Apple's Podcasts API.

NOTE: There is an issue in our service folder which is right now inside infrastructure folder but it really should be on domain folder. CRA don't let me import files outside the src folder.

## Tech stack
- React
- Typescript
- Redux Toolkit (RTK)
- Material UI
- React Testing Library
- Playwright
- Axios
- React router v6
- Linters: Eslint + Prettier

## Installation
To use this template

- Clone this project
- Rename project as you want
- Install dependencies from `package.json` to your machine
- From the root:
  ```bash
    $ npm install
  ```
## Running the project and tests

- Run project in development mode:
  ```bash
    $  npm start
  ```

- Run project in production mode
  ```bash
    $  npm run build
    $  npm install -g serve
    $  serve -s build
  ```

- Run unit tests in project

  ```bash
    $  npm test or npm test -- <testFile>

  ```

- Run e2e Playwright tests in a browser

  ```bash
  $  npm run test:playwright

  ```

## Entities
 - Podcasts
 - Episode
 - 
## Model

<img width="1231" alt="258149859-676c5950-d60a-4899-8f1d-0b1a5222a9b4" src="https://github.com/user-attachments/assets/5cd86f49-4612-4be3-8971-7de502250edc">
<img width="990" alt="258149833-4f5cb8bc-02c1-450f-80e8-71e701a381ed" src="https://github.com/user-attachments/assets/aa3089f4-af8c-4f50-ae3e-4c318f251ef8">


