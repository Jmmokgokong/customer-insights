# CI Customer Insights Dashboard

A modern financial dashboard built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- OR Node.js 18+ and Yarn (for local development)

### Option 1: Docker (Recommended)

1. **Clone and run**
   ```bash
   git clone <repository-url>
   cd customer-insights
   docker-compose up --build
   ```

2. **Access the application**
   - Open [http://localhost:3000](http://localhost:3000)

### Option 2: Local Development

1. **Install and run**
   ```bash
   yarn install
   yarn dev
   ```

2. **Access the application**
   - Open [http://localhost:5173](http://localhost:5173)

## 🔧 Development Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Build for production
yarn preview      # Preview production build

# Code Quality
yarn format       # Format code with Prettier
yarn format:check # Check code formatting
yarn lint         # Run ESLint
```

## 🐳 Docker Deployment

```bash
# Build and run
docker-compose up --build

# Or build manually
docker build -t customer-insights .
docker run -p 3000:80 customer-insights
```

## 🛠️ Tech Stack

- React 18 + TypeScript
- Tailwind CSS
- Recharts (charts)
- Axios (API)
- MirageJS (mock server)
- Docker + Nginx

---

**Assessment Project**: Production-grade React dashboard with Docker deployment 