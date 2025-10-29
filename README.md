# React Tic-Tac-Toe

A modern React implementation of the classic Tic-Tac-Toe game, built following Twelve-Factor App methodology.

## I. Codebase

- One codebase tracked in Git
- Hosted on GitHub at [launchwithchris/react-tic-tac-toe](https://github.com/launchwithchris/react-tic-tac-toe)
- Main branch represents the source of truth

## II. Dependencies

All dependencies are explicitly declared and isolated in `package.json`:

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

## III. Configuration

Environment-specific configuration stored in environment variables (when applicable):

- Development: `.env.development`
- Production: `.env.production`
- Test: `.env.test`

## IV. Backing Services

No external backing services in current implementation. Future extensions might include:

- Authentication service
- Game state persistence
- Multiplayer capabilities

## V. Build, Release, Run

Strictly separated build and run stages:

```bash
# Build
npm run build

# Development
npm run dev

# Production
npm run preview
```

## VI. Processes

Stateless processes with game state managed in React components:

- Turn history stored in App component
- Board state derived from turns
- Player information managed through props

## VII. Port Binding

Exports HTTP service via Vite:

- Development: `http://localhost:5173`
- Production: Configurable via `PORT` environment variable

## VIII. Concurrency

Process-based horizontal scaling possible through:

- Stateless components
- Prop-based state management
- Pure rendering functions

## IX. Disposability

Fast startup and graceful shutdown enabled by:

- Vite's quick dev server
- React's efficient DOM management
- Automatic cleanup of event listeners

## X. Dev/Prod Parity

Development/Production environment parity maintained through:

- Consistent Node.js version
- Identical build processes
- Environment-specific configuration

## XI. Logs

Logging treated as event streams:

- Development: Console logging
- Production: Configurable logging service
- Test: Jest output

## XII. Admin Processes

Management/admin tasks as one-off processes:

```bash
# Lint
npm run lint

# Test
npm test

# Build
npm run build
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/launchwithchris/react-tic-tac-toe.git
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Run tests:

```bash
npm test
```

## Testing

Uses Jest and React Testing Library:

- Unit tests for components
- Integration tests for game logic
- Behavior-driven development approach

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details
