# 💡 E-Cell UIET KUK — Entrepreneurship Landing Page

A modern, responsive landing page concept for the **Entrepreneurship Cell at UIET Kurukshetra University (UIET KUK)**. The website introduces the E-Cell community, highlights its entrepreneurial mission, showcases sample events and team members, and encourages students to connect and get involved.

---

## ✨ Features

- **Responsive navigation** — desktop navigation links and a toggleable mobile menu.
- **Hero section** — entrepreneurship-focused introduction with calls to action for joining E-Cell and exploring events.
- **About section** — explains the E-Cell mission and highlights innovation, mentorship, networking, and skill development.
- **Events section** — displays sample workshop, idea-pitching, and networking event cards with dates, times, and venues.
- **Team section** — presents team member names and roles in a responsive card layout.
- **Join Us section** — dedicated call-to-action encouraging students to participate.
- **Contact section** — contact information and a form with required-field validation.
- **Footer** — E-Cell branding and copyright text.
- **Responsive styling** — layouts built with Tailwind CSS utility classes.

## 🖥️ Page sections

| Component | Description |
| --- | --- |
| `Navbar.jsx` | Desktop links, mobile menu toggle, and Join E-Cell link |
| `Hero.jsx` | Main introduction, calls to action, and displayed highlight figures |
| `About.jsx` | E-Cell overview, mission, and focus areas |
| `Events.jsx` | Three sample event cards |
| `Team.jsx` | Team member cards and role labels |
| `JoinUs.jsx` | Prominent participation call-to-action |
| `Contact.jsx` | Contact details and client-side form interaction |
| `Footer.jsx` | Footer branding and copyright |

## 🧰 Tech Stack

| Technology | Usage |
| --- | --- |
| [React 19](https://react.dev/) | Reusable UI components and interactive mobile navigation/contact form state |
| [Vite](https://vite.dev/) | Local development server and production build |
| [Tailwind CSS 4](https://tailwindcss.com/) | Responsive layout, styling, spacing, colors, and hover states |
| JavaScript (ES Modules) | Component logic and application composition |
| HTML5 | Application entry document |

## 📁 Project Structure

```text
Ecell-landing-page/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Events.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── JoinUs.jsx
│   │   ├── Navbar.jsx
│   │   └── Team.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── eslint.config.js
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (included with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/Kanika182005/Ecell-landing-page.git
cd Ecell-landing-page
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal by Vite.

### 4. Build for production

```bash
npm run build
npm run preview
```

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Generate the production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## 🎨 Design Highlights

- Clean white and charcoal layout with yellow accent colors.
- Bold typography and clear visual hierarchy.
- Card-based event and team layouts.
- Decorative shapes and hover transitions.
- Mobile navigation that expands and closes when a navigation item is selected.

## ⚠️ Current Scope & Notes

- This repository is a **front-end landing page**; it does not currently include a backend, database, authentication, or CMS.
- Event details and hero statistics (such as student, event, and startup counts) are hard-coded sample content. Verify and replace them with official E-Cell information before publishing.
- The team section uses names and role labels defined directly in the component. Social links are placeholders (`#`) and are not connected to individual profiles.
- The contact form currently shows a browser alert and clears the form. It does **not** send or store messages; connect it to a secure backend or form service before using it for real enquiries.
- The displayed contact email is a placeholder (`ecell@college.edu`). Confirm the official contact address before deployment.

## 🚀 Possible Future Enhancements

- Connect the contact form to a backend or trusted form service.
- Replace placeholder contact details, sample event dates, statistics, and social links with verified information.
- Add an event registration workflow and event detail pages.
- Add real team photos and profile links, with permission.
- Add accessibility improvements, form success/error states, and automated tests.
- Deploy the site and add a verified live-demo link and real browser screenshots.

## 🤝 Contributing

Contributions, suggestions, and UI improvements are welcome. Fork the repository, create a feature branch, make your changes, and open a pull request.

## 📄 License

No license file is currently included in this repository. Add a `LICENSE` file to define reuse and distribution permissions.

---

<p align="center">Built with 💡 using React and Tailwind CSS</p>