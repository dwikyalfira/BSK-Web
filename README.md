# Aether Travel

[cloudflarebutton]

A visually stunning, minimalist website for a luxury travel company, showcasing curated destinations and facilitating inquiries.

Aether Travel is a visually breathtaking, minimalist website for a luxury travel company. The design emphasizes clean layouts, generous white space, and stunning, high-resolution imagery to create a premium and immersive user experience. The application is a single-page marketing site designed to inspire potential clients by showcasing curated travel destinations and providing a seamless way to make inquiries.

## ✨ Key Features

-   **Elegant & Minimalist Design:** A clean, high-contrast aesthetic that reflects luxury and sophistication.
-   **Single-Page Experience:** Smooth, seamless scrolling through all sections of the site.
-   **Visually Immersive:** Captivating hero section with full-screen background visuals.
-   **Responsive Perfection:** Flawless layout and performance on all devices, from mobile to desktop.
-   **Polished Micro-interactions:** Subtle animations and hover effects that enhance the user experience.
-   **Curated Destinations:** A beautiful, grid-based showcase of travel locations.
-   **Streamlined Contact Form:** An easy-to-use form for inquiries with client-side validation.

## 🛠️ Technology Stack

-   **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
-   **Notifications:** [Sonner](https://sonner.emilkowal.ski/)
-   **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:
-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [Bun](https://bun.sh/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/aether_travel.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd aether_travel
    ```
3.  **Install dependencies:**
    ```sh
    bun install
    ```

## 💻 Development

To start the local development server, run the following command:

```sh
bun run dev
```

The application will be available at `http://localhost:3000`. The server will automatically reload when you make changes to the code.

## 📦 Building for Production

To create a production-ready build of the application, run:

```sh
bun run build
```

This command will compile the React application and bundle all static assets into the `dist` directory.

## ☁️ Deployment

This project is configured for seamless deployment to Cloudflare Pages.

1.  **Log in to Cloudflare:**
    If you haven't already, authenticate with your Cloudflare account using the Wrangler CLI.
    ```sh
    wrangler login
    ```

2.  **Deploy the application:**
    Run the deploy script to build and deploy your application to Cloudflare.
    ```sh
    bun run deploy
    ```

Alternatively, you can deploy directly from your GitHub repository with a single click.

[cloudflarebutton]

## 📂 Project Structure

-   `src/`: Contains all the frontend source code.
    -   `components/`: Reusable React components, including UI components from shadcn/ui.
    -   `pages/`: Main page components for the application.
    -   `data/`: Static content and data arrays.
    -   `lib/`: Utility functions.
    -   `hooks/`: Custom React hooks.
-   `worker/`: Source code for the Cloudflare Worker backend.
-   `public/`: Static assets that are served directly.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improving the project, please fork the repository and create a pull request, or open an issue with the "enhancement" tag.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.