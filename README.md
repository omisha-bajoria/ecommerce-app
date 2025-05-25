# Ecommerce App (Frontend) : Forever - Fashion Storefront

A modern, responsive e-commerce frontend built using **React**, **Vite**, and **Tailwind CSS**. Designed for clean UI/UX and structured for scalability, this project mimics a complete online shopping experience — from browsing to checkout.

## Live Demo

🔗 [https://ecommerce-app-red-eta.vercel.app/](https://ecommerce-app-red-eta.vercel.app/)

---

## Tech Stack

- **React** – Component-based architecture
- **Vite** – Fast development & builds
- **Tailwind CSS** – Utility-first styling
- **React Router** – Client-side routing
- **Context API** – State management (via `ShopContext`)
- **React Toastify** – Feedback notifications
- **Vercel** – Deployment and hosting

---

## Key Features

- **Cart Management**: Add/remove items, quantity controls, size variations, subtotal & shipping logic
- **Product Pages**: Dynamic rendering with image, size selection, price & related products
- **Search Functionality**: Lightweight product search
- **Newsletter Signup**: Email capture via UI
- **Order Placement Flow**: Place orders, see confirmation
- **Fully Responsive**: Mobile-first design

---

## Folder Structure

### Components

| File                | Description |
|---------------------|-------------|
| `BestSeller.jsx`    | Displays best-selling products |
| `CartTotal.jsx`     | Computes and shows total cart value |
| `Footer.jsx`        | Page footer |
| `Hero.jsx`          | Hero/banner section on homepage |
| `LatestCollection.jsx` | Displays newest products |
| `Navbar.jsx`        | Top navigation bar |
| `Newsletterbox.jsx` | Newsletter email input |
| `OurPolicy.jsx`     | Brief policy details |
| `ProductItem.jsx`   | Renders individual product cards |
| `RelatedProducts.jsx` | Shown on product detail page |
| `SearchBar.jsx`     | Search UI |
| `Title.jsx`         | Section title component |

### Pages

| File                | Description |
|---------------------|-------------|
| `Home.jsx`          | Landing page with featured items |
| `Product.jsx`       | Product detail page |
| `Cart.jsx`          | Shopping cart |
| `PlaceOrder.jsx`    | Final checkout |
| `Orders.jsx`        | Displays placed orders |
| `Contact.jsx`       | Contact form and address |
| `Login.jsx`         | Login/Signup UI |
| `About.jsx`         | About the store |
| `Collection.jsx`    | Product listings by category |

### Context

| File                | Description |
|---------------------|-------------|
| `ShopContext.jsx`   | Manages cart state, product data, and global logic |

---

## Highlights

- Component-based architecture with separation of concerns
- Clean and modern UI using Tailwind utility classes
- Custom cart logic using Context API
- Fully client-rendered and deployed via Vercel
- Semantic HTML and accessible design practices followed
