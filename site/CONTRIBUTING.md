# Contributing to OWASP Top 10 Game

Thank you for your interest in contributing to OWASP Top 10 Game! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- **Bug Reports**: Report issues you find
- **Feature Requests**: Suggest new features or improvements
- **Code Contributions**: Submit pull requests with code changes
- **Documentation**: Improve or add documentation
- **Design**: Help with UI/UX improvements
- **Testing**: Help test features and report bugs

### Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/OWASPTop10TheGame.git
   cd OWASPTop10TheGame/site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Commit Messages

Use conventional commit messages:

```
type(scope): description

feat: add new challenge type
fix: resolve navigation issue
docs: update README
style: format code
refactor: improve component structure
test: add unit tests
chore: update dependencies
```

### Pull Request Process

1. **Create a descriptive PR title**
2. **Add a detailed description** of your changes
3. **Include screenshots** for UI changes
4. **Ensure all tests pass**
5. **Update documentation** if needed
6. **Request review** from maintainers

## 🎯 Project Structure

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import the Layout component
3. Add navigation links if needed
4. Update the sitemap if required

### Adding New Components

1. Create a new `.astro` file in `src/components/`
2. Export the component
3. Add TypeScript interfaces if needed
4. Document the component's props

### Adding New Challenges

1. Create challenge data in the appropriate data file
2. Add challenge logic and validation
3. Create UI components for the challenge
4. Add tests for the challenge functionality

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Write tests for new features
- Ensure good test coverage
- Use descriptive test names
- Test both success and error cases

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Clear description** of the issue
2. **Steps to reproduce**
3. **Expected vs actual behavior**
4. **Screenshots** if applicable
5. **Browser/OS information**
6. **Console errors** if any

## 💡 Feature Requests

When suggesting features:

1. **Clear description** of the feature
2. **Use case** and benefits
3. **Implementation ideas** if you have any
4. **Mockups** or wireframes if applicable

## 📚 Documentation

### Updating Documentation

- Keep README.md up to date
- Document new features
- Update API documentation
- Add code examples where helpful

### Style Guide

- Use clear, concise language
- Include code examples
- Add screenshots for UI changes
- Keep documentation organized

## 🎨 Design Contributions

### Design Guidelines

- Follow the existing design system
- Use Tailwind CSS classes
- Ensure responsive design
- Maintain accessibility standards
- Test across different browsers

### Design System

- **Colors**: Use the defined color palette
- **Typography**: Use Inter for body text, JetBrains Mono for code
- **Spacing**: Use Tailwind's spacing scale
- **Components**: Follow existing component patterns

## 🔒 Security

### Security Guidelines

- Never commit sensitive information
- Follow secure coding practices
- Report security vulnerabilities privately
- Use environment variables for secrets
- Validate all user inputs

### Reporting Security Issues

For security vulnerabilities, please email: security@owasp-top10-game.com

## 📞 Getting Help

### Communication Channels

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For general questions and discussions
- **Discord**: For real-time chat and community support

### Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) for details.

## 🙏 Recognition

Contributors will be recognized in:

- Project README
- Release notes
- Contributor hall of fame
- GitHub contributors page

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to OWASP Top 10 Game! 🛡️💻 