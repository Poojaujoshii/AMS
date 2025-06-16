# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





src/
├── App.jsx                 # Root component for routing setup
├── main.jsx               # Entry point that mounts <App /> to DOM
├── index.css              # Global styles
├── routes/                # Route definitions for different user roles
│   ├── AdminRoutes.jsx
│   └── EmployeeRoutes.jsx
├── layouts/               # Layout wrappers (with Navbar, Sidebar etc.)
│   ├── AdminLayout.jsx
│   └── EmployeeLayout.jsx
├── pages/
│   ├── Login.jsx
│   ├── admin/
│   │   ├── Dashboard.jsx
│   │   ├── Assets.jsx
│   │   ├── Employees.jsx
│   │   ├── Assignments.jsx
│   │   └── Requests.jsx
│   └── employee/
│       ├── Dashboard.jsx
│       ├── MyAssets.jsx
│       ├── RequestAsset.jsx
│       └── Requests.jsx
├── components/            # Reusable UI components
│   ├── Sidebar.jsx
│   ├── Navbar.jsx
│   ├── AssetTable.jsx
│   └── AssetForm.jsx
└── utils/
    └── ProtectedRoute.jsx # Auth-based route protection logic
