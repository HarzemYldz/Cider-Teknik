# Cider Teknik Website

A modern, responsive website for Cider Teknik, an industrial machinery company. Built with React, TypeScript, and TailwindCSS.

## Features

- Responsive design optimized for all devices
- Dark mode support
- Modern UI with smooth animations
- Interactive product catalog
- Contact form
- Certificate showcase
- Google Maps integration

## Tech Stack

- React
- TypeScript
- TailwindCSS
- Framer Motion
- Swiper.js
- Lucide Icons

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd cider-teknik
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
cider-teknik/
├── public/
│   ├── products/      # Product images
│   └── certificates/  # Certificate images
├── src/
│   ├── components/    # React components
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
└── package.json
```

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `dist` directory.

## Customization

- Colors and theme can be modified in `tailwind.config.js`
- Images should be placed in the appropriate directories under `public/`
- Component styles can be customized using Tailwind classes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
