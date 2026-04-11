# 🚀 Angular Microfrontends with Module Federation (Enterprise Architecture)

Production-grade Microfrontend architecture built using **Angular 21 (Standalone Components)** and **Webpack Module Federation**.

This project demonstrates how to design, build, and scale **enterprise-level frontend systems** using **microfrontends**, enabling independent deployments, team autonomy, and high scalability.

---

## 🧠 What are Microfrontends?

Microfrontends are:

> “A composition of micro apps that can be independently deployed and owned by independent teams.” 

They bring **microservices principles to frontend architecture**, solving problems of large monolithic SPAs like:

* Slow builds
* Tight coupling
* Difficult scaling
* Team dependency conflicts

---

## 🏗️ Architecture Overview

This project follows a **Module Federation-based Microfrontend Architecture**:

### 🔹 Host (App Shell)

* Angular 21 standalone app
* Handles routing and layout
* Dynamically loads remotes

### 🔹 Remote Apps

* Angular Microfrontend (mf2)
* React Microfrontend (mf1)
* Independently deployed

### 🔹 Shared Layer

* UI components
* Utilities
* Global communication (event-driven / storage)

---

## 🧩 Architecture Pattern Used

### ✅ Micro Apps Pattern (Module Federation)

* Runtime integration
* No full page reloads
* Dynamic loading of remote apps

👉 Recommended for large-scale enterprise apps 

---

## ⚙️ Tech Stack

### Frontend

* Angular 21 (Standalone APIs)
* React (Microfrontend)
* TypeScript

### Styling

* TailwindCSS
* Angular Material

### Microfrontend

* Webpack 5 Module Federation

### State Management

* Lightweight shared state (sessionStorage / events)

### Testing

* Vitest (Unit)
* Playwright (E2E)

### DevOps

* Docker + Nginx
* CI/CD ready

---

## 📁 Project Structure

```bash
root/
 ├── host/              # Angular Host (App Shell)
 ├── mf-angular/        # Angular Remote
 ├── mf-react/          # React Remote
 ├── shared/            # Shared libs (UI, utils)
```

---

## 🚀 Getting Started

### 1. Clone Repo

```bash
git clone https://github.com/sigmakumarwadbude/angular-react-mfe-module-federation.git
cd angular-microfrontends-module-federation-enterprise
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Run Applications

```bash
# Start host
cd host && npm start

# Start Angular remote
cd mf-angular && npm start

# Start React remote
cd mf-react && npm start
```

---

## 🚧 Issues Faced & Fixes

These are real issues encountered during the POC development of this microfrontend project. Each includes the problem, root cause, fix, and key lesson learned to help other developers avoid common pitfalls.

### 1. Infinite dev server compile loop

**Problem:** Dev server keeps recompiling endlessly, making development impossible.

**Cause:** Module Federation combined with dev server reload loop due to missing publicHost configuration.

**Fix:** Set `publicHost` in angular.json and disable `liveReload` and `hmr` in dev server options.

```javascript
// angular.json
{
  "projects": {
    "host": {
      "architect": {
        "serve": {
          "options": {
            "buildTarget": "host:build:development",
            "liveReload": false,
            "hmr": false
          }
        }
      }
    }
  }
}
```

**Lesson Learned:** Always configure `publicHost` for MF dev servers to prevent reload loops.

### 2. Cannot find module 'mf2/Component'

**Problem:** TypeScript compilation fails with "Cannot find module 'mf2/Component'" errors.

**Cause:** TypeScript cannot resolve federated modules at build time since they're loaded dynamically.

**Fix:** Declare the module in `decl.d.ts` to provide type information.

```typescript
// src/decl.d.ts
declare module 'mf2/Component';
```

**Lesson Learned:** Use declaration files for federated modules to satisfy TypeScript's static analysis.

### 3. RemoteEntry not loading (404 / incorrect path)

**Problem:** Remote app fails to load with 404 errors on `remoteEntry.js`.

**Cause:** Wrong remote URL or port mismatch in webpack remotes configuration.

**Fix:** Validate the `remoteEntry.js` URL and ensure webpack remotes config matches actual dev server ports.

```javascript
// webpack.config.js
ModuleFederationPlugin({
  remotes: {
    mf2: 'http://localhost:4202/remoteEntry.js'
  }
})
```

**Lesson Learned:** Double-check remote URLs and ports against actual running applications.

### 5. Dev server instability / infinite rebuild

**Problem:** Dev server crashes frequently or rebuilds infinitely without changes.

**Cause:** Missing `publicHost` or using incorrect dev-server builder for Module Federation.

**Fix:** Use `@angular-architects/module-federation:dev-server` builder instead of standard Angular dev server.

```json
// angular.json
"serve": {
  "builder": "@angular-architects/module-federation:dev-server",
  "options": {
    "publicHost": "http://localhost:4200"
  }
}
```

**Lesson Learned:** Module Federation requires specialized dev server configuration for stability.

---

## 🌐 Applications

| App        | Port |
| ---------- | ---- |
| Host       | 4200 |
| Angular MF | 4201 |
| React MF   | 3000 |

---

## 🔗 Module Federation Flow

* Host loads remotes dynamically via `remoteEntry.js`
* Remotes expose modules
* Shared dependencies reduce bundle size

---

## 🧪 Features

* ✅ Angular 21 standalone architecture
* ✅ Module Federation runtime integration
* ✅ Multi-framework support (Angular + React)
* ✅ Independent deployments
* ✅ Shared UI library
* ✅ Scalable enterprise structure

---

## 🧑‍💻 Git Best Practices

### 🌿 Branch Strategy

```text
main
 ├── feat/*
 ├── fix/*
 ├── chore/*
```

---

### ✍️ Commit Convention

```text
feat(host): setup module federation
feat(mf-angular): add product module
fix(shared): resolve dependency issue
```

---

### 🔀 PR Template

```text
## What
- Added Angular remote microfrontend

## Why
- Enable modular architecture

## Testing
- Verified host loads remote successfully
```

---

## 📈 Why Microfrontends?

✔ Independent deployments
✔ Faster development cycles
✔ Team autonomy
✔ Progressive upgrades
✔ Better scalability

⚠️ Use only when app complexity justifies it 

---

## ⚠️ Key Principles Followed

* Domain-driven teams
* Independent deployments
* Runtime integration (NOT build-time)
* Avoid distributed monolith
* Technology flexibility

---

## 🧠 Learning Outcome

By exploring this repo, you will understand:

* Microfrontend architecture patterns
* Module Federation internals
* Angular + React interoperability
* Enterprise frontend design

---

## ⭐ Future Enhancements

* Nx Monorepo support
* Shared state via Zustand / NgRx
* SSR support
* Kubernetes deployment

---

## 👨‍💻 Author

**Sigma Wadbude**
Senior Full Stack Developer (MEAN | Microservices | Angular)

---

## ⭐ Support

If you like this project:

👉 Star ⭐ the repo
👉 Share with your network
👉 Use it in your projects

---

## 📚 References

* Microfrontend Architecture Concepts 
* Multi-SPA & Module Federation Patterns 

---

🔥 *Build scalable frontends like enterprise systems*
