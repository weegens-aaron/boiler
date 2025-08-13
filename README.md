# Quick Start React Boilerplate

> 🚀 A modern, React starter template with TypeScript, Vite, and comprehensive tooling.

## ✨ Features

- **⚡ Modern Stack**: React 19 + TypeScript + Vite for lightning-fast development
- **🎨 Standard HTML Components**: Clean, accessible HTML components with modern styling
- **🧪 Testing Suite**: Vitest + Testing Library + Playwright for comprehensive testing
- **📚 Storybook**: Component documentation and development environment
- **🔍 Quality Tools**: ESLint, Prettier, TypeScript for code quality
- **🚦 CI/CD Ready**: Pre-configured scripts for continuous integration
- **♿ Accessibility**: Built-in a11y testing and best practices
- **📱 Responsive**: Mobile-first design approach

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite 7
- **Styling**: CSS-in-JS (inline styles), Standard HTML components
- **Testing**: Vitest, Testing Library, Playwright
- **Documentation**: Storybook
- **Code Quality**: ESLint, Prettier, TypeScript
- **Package Manager**: npm

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd quick-start

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📋 Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run build:analyze # Analyze bundle size
```

### Testing

```bash
npm run test         # Run tests in watch mode
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage
npm run test:ci      # Run tests for CI/CD
npm run e2e          # Run end-to-end tests
npm run e2e:ui       # Run e2e tests with UI
```

### Code Quality

```bash
npm run lint         # Lint code
npm run lint:ci      # Lint with zero warnings
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run typecheck    # Type checking
npm run validate     # Run all quality checks
```

### Storybook

```bash
npm run storybook       # Start Storybook dev server
npm run build-storybook # Build Storybook for production
```

### Utilities

```bash
npm run clean        # Clean build artifacts and cache
```

## 📁 Project Structure

```
src/
├── App/                    # Main application component
│   ├── App.tsx            # App component with demo features
│   └── App.test.tsx       # App component tests
├── common/                 # Shared utilities and components
│   ├── components/        # Reusable components
│   │   └── ErrorBoundary/ # Error boundary implementation
│   └── utils/             # Utility functions
│       └── paths/         # Path management utilities
├── configs/               # Configuration files
│   └── test/             # Test configuration
├── views/                 # Page-level components (empty starter)
├── assets/               # Static assets
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

## 🎯 What's Included

### Demo Application

The boilerplate includes a demo app that showcases:

- **Counter functionality** with increment/decrement/reset
- **Error boundary testing** with intentional error triggering
- **Environment information** display
- **Responsive card layout** with modern styling
- **Accessible button components** with hover effects

### Error Boundary

Robust error handling with:
- Custom fallback UI
- Error logging (configurable)
- Development vs production error details
- Recovery mechanism
- Storybook stories for testing

### Path Management

Type-safe path utilities for:
- Consistent path references
- Easy refactoring
- TypeScript autocompletion

## 🧪 Testing

### Unit Tests

- **Vitest**: Fast, Vite-native test runner
- **Testing Library**: Best practices for component testing
- **Coverage**: V8 coverage reports
- **100% test coverage** out of the box

### E2E Tests

- **Playwright**: Cross-browser end-to-end testing
- **Multiple test modes**: headless, headed, debug, UI
- **Automatic waiting**: Smart test interactions

### Accessibility Testing

- **Storybook a11y addon**: Real-time accessibility feedback
- **Jest-DOM matchers**: Accessibility assertions
- **ARIA best practices**: Built into components

## 🎨 Styling Philosophy

 This project uses **standard HTML components** with inline styles for:

- **Zero runtime CSS**: No CSS-in-JS library overhead
- **Component colocation**: Styles live with components
- **Type safety**: TypeScript ensures style correctness
- **Performance**: No additional CSS parsing
- **Simplicity**: Easy to understand and maintain

### Design System

- **Colors**: Consistent color palette
- **Typography**: System font stack for performance
- **Spacing**: Consistent spacing scale
- **Shadows**: Subtle depth with box-shadows
- **Hover effects**: Smooth transitions and feedback

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific variables:

```env
VITE_APP_VERSION=1.0.0
VITE_API_URL=https://api.example.com
```

### TypeScript

- **Strict mode enabled**: Maximum type safety
- **Path aliases**: Clean imports with `@/` prefix
- **Multiple configs**: Separate configs for app, node, and base

### Vite Configuration

- **React plugin**: Fast refresh and JSX support
- **Path resolution**: TypeScript path mapping
- **Build optimization**: Chunk splitting and optimization

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production assets.

### Static Hosting

The build output works with any static hosting service:

- **Vercel**: Zero-config deployment
- **Netlify**: Drag & drop deployment
- **GitHub Pages**: Direct from repository
- **AWS S3**: Static website hosting

## 🤝 Contributing

1. **Code Quality**: Run `npm run validate` before committing
2. **Testing**: Maintain 100% test coverage
3. **Documentation**: Update README and Storybook stories
4. **Accessibility**: Test with screen readers and keyboard navigation

### Pre-commit Checklist

- [ ] Tests pass: `npm run test:ci`
- [ ] Linting passes: `npm run lint:ci`
- [ ] Formatting is correct: `npm run format:check`
- [ ] Types are valid: `npm run typecheck`
- [ ] Build succeeds: `npm run build`
- [ ] Storybook builds: `npm run build-storybook`

## 📝 Scripts Reference

| Script | Description | Use Case |
|--------|-------------|----------|
| `dev` | Development server | Local development |
| `build` | Production build | Deployment |
| `test` | Test runner | Development testing |
| `test:ci` | CI test run | Continuous integration |
| `lint` | Code linting | Code quality |
| `format` | Code formatting | Code consistency |
| `typecheck` | Type checking | Type safety |
| `validate` | All quality checks | Pre-commit validation |
| `storybook` | Component docs | Component development |
| `e2e` | End-to-end tests | Integration testing |

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- --port 3001
```

**Node modules issues:**
```bash
npm run clean
npm install
```

**Type errors:**
```bash
npm run typecheck
```

### Getting Help

- Check the [issues](../../issues) for known problems
- Review Storybook documentation at `http://localhost:6006`
- Run `npm run validate` to check all systems

## 📄 License

This project is private and not licensed for public use.

---

**Happy coding!** 🎉

This boilerplate is designed to get you productive immediately while maintaining high code quality and best practices. Feel free to customize it to match your specific needs!
