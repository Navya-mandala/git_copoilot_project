# Playwright Automation Framework

## Project Overview

This project is an **end-to-end test automation framework** built using **Playwright with TypeScript**.
It demonstrates real-time automation concepts like **Page Object Model (POM)**, **Fixtures**, and **Data-Driven Testing**.

---

## Technologies Used

* Playwright
* TypeScript
* GitHub Copilot (for faster code generation)
* Node.js

---

##  Project Structure

```
tests/        → Test cases  
pages/        → Page Object Model classes  
fixtures/     → Custom reusable fixtures  
test-data/    → JSON files for data-driven testing  
```

---

##  Test Scenarios

* Valid login test
* Invalid login test
* Data-driven login validation

---

## How to Run

### Install dependencies

```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install
```

### Run all tests

```bash
npx playwright test
```

### Run specific browser

```bash
npx playwright test --project=chromium
```

---

##  Reports

Generate HTML report:

```bash
npx playwright test --reporter=html
```

Open report:

```bash
npx playwright show-report
```

---

##  Features

* Page Object Model (POM) design
* Custom fixtures for reusable setup
* Data-driven testing using JSON
* Cross-browser testing (Chromium, Firefox, WebKit)

---

##  Copilot Usage

GitHub Copilot was used to:

* Generate test scripts
* Create Page Object Model classes
* Build reusable fixtures
* Improve code productivity

---



