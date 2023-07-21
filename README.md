# VerifyMyAge Test Automation

## Introduction

This repository contains automated tests for VerifyMyAge, a web application that verifies the user's age based on the provided date of birth. The tests are written using Cypress, a modern end-to-end testing framework for web applications.

## Setup

### Prerequisites

Before running the tests, you need to have the following software installed on your system:

- **Node.js**: You can download and install Node.js from the official website: https://nodejs.org

- **Git**: You can download and install Git from the official website: https://git-scm.com

### Installation and configuration

1. Clone the repository to your local machine:

```bash
git clone https://github.com/gumg90/verifyMyAge.git
cd verifyMyAge
```
2.  Install dependencies
```bash
npm install
```
```bash
npm install -g allure
```
3. Env Vars
- copy de .env.example and rename to .env, change the env var CONTEXT for api to execute backend test or web to execute frontend test

### Execution

1.  Run headless mode
```bash
npm run cy:run
```
2.  Run UI mode (OBS: If you want to change the context of the test to api or web, you will need to change the env var CONTEXT and restart cypress)
```bash
npm run cy:open
```
3. Execute in actions CI/CD
 - Access action tab
 - Click in "Pipe CI"
 - Click "workflow-dispatch"
 - Select of context to need execute
 - End start


