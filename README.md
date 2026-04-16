# ColmeIA-

QA Technical Test - Colmeia

Overview

This repository contains the results of an exploratory QA analysis performed on the Colmeia test application.

The objective was to identify functional, usability, and security issues, as well as to validate core system behaviors.

---

Scope

The following areas were covered during testing:

 Authentication and access control
 Navigation and user flows
 Database (CRUD operations)
 Data persistence
 UI interactions
 Basic performance and console analysis

---

Bugs Identified

All identified issues are documented here:


---

Test Cases

Test cases were created to validate the main system flows and edge cases.



---

Test Approach

Methodology

* Exploratory testing
* Functional validation
* Negative and edge case testing

Tools Used

* Browser DevTools (Console)
* Google Chrome
* Cypress (On vscode)
---

Security Findings

A critical vulnerability was identified:

-Users can access protected routes and perform actions without authentication.

This *can* indicate a failure in backend access control validation.


---

Automation (Cypress)

Basic automated tests were implemented to validate key flows and reproduce critical issues.

To run locally:

```bash
npm install
npx cypress open
```

---


---

Conclusion

The application presents critical issues in authentication, data persistence, and feature reliability.

The issue that I found can relate to:

* Access control
* Backend integration
* Core feature stability

---

