# Blend Fashion CRUD — React + Vite + TailwindCSS + DaisyUI

A single-page e-commerce CRUD application built with **React (Vite)**, **TailwindCSS (latest)**, **DaisyUI**, **React Router**, and **Context API**.  
Product data is fetched from the **Fake Store API** and client-side CRUD operations are supported (Create / Read / Update / Delete).

---

## Live demo
(Deploy to Vercel — see *Deployment* below)

---

## Features

- Fetch products from Fake Store API (`https://fakestoreapi.com/`)
- Home: product grid with image, title, price
- Product details page (unique route `/product/:id`)
- Add Product (form) — client-side creation added to context state
- Edit Product (prefilled form) — client-side update
- Delete Product (from details) — client-side removal + redirect
- Search / Category filter / Price sort
- Loading & error states
- Form validation with inline error messages
- Responsive layout using Tailwind + DaisyUI
- Global state via Context API
- Clean component architecture

---

## Tech stack

- React + Vite
- TailwindCSS + DaisyUI
- Axios
- React Router DOM
- Fake Store API

---

## Project structure

src/
├─ api/
│ └─ apiService.js
├─ assets/
├─ context/
│ └─ ProductContext.jsx
├─ components/
│ ├─ Navbar.jsx
│ ├─ ProductCard.jsx
│ ├─ Loader.jsx
│ └─ ProductForm.jsx
├─ pages/
│ ├─ Home.jsx
│ ├─ ProductDetails.jsx
│ ├─ AddProduct.jsx
│ └─ EditProduct.jsx
├─ routes/
│ └─ AppRoutes.jsx
├─ App.jsx
└─ main.jsx


---

## Install & run (development)

```bash
# 1. clone repo
git clone <your-repo-url>
cd ecommerce crud

# 2. install
npm install

# 3. dev
npm run dev
```

