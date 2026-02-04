# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in the AI Like Humans project, please report it responsibly:

### How to Report

1. **Do NOT** open a public issue
2. Contact the maintainers through GitHub's private vulnerability reporting feature
3. Or email the maintainers directly through their GitHub profile

### What to Include

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if you have one)

### What to Expect

- We will acknowledge receipt within 48 hours
- We will provide a more detailed response within 7 days
- We will keep you informed of the progress
- We will credit you in the fix (unless you prefer to remain anonymous)

## Security Considerations

### Website Security

This is a **static website** with no backend or database:
- No user authentication
- No data collection
- No API keys or secrets
- No server-side processing
- No cookies or tracking

The attack surface is minimal, but we still take security seriously.

### Data Privacy

- **No personal data is collected**: The website is entirely static and doesn't collect, store, or transmit any user data
- **No analytics by default**: Any analytics would need to be explicitly added
- **No external API calls**: All data is embedded in the application

### Dependencies

We regularly update dependencies to patch known vulnerabilities:
- Next.js framework and dependencies
- React and related packages
- UI component libraries

### Best Practices

Contributors should:
- Keep dependencies up to date
- Use `npm audit` to check for vulnerabilities
- Avoid adding unnecessary dependencies
- Don't commit sensitive information (API keys, credentials, etc.)
- Review code for XSS vulnerabilities in user-facing content

## Supported Versions

We support the latest stable version of the project. Security updates will be applied to:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | ✅ Yes             |
| Older   | ❌ No              |

## Security Updates

When a security issue is fixed:
1. A patch will be released as soon as possible
2. The fix will be documented in CHANGELOG.md
3. A security advisory will be published on GitHub
4. Users will be notified through release notes

## Third-Party Security

### Website Hosting
- Recommend using reputable platforms (Vercel, Netlify, GitHub Pages)
- Enable HTTPS (automatic on modern platforms)
- Use security headers

### Content Security
- All research data is public and openly documented
- No proprietary or sensitive model information
- Attribution to original research sources maintained

## Responsible Disclosure

We believe in responsible disclosure and will:
- Work with security researchers to understand and fix issues
- Provide appropriate credit to reporters
- Maintain transparency with the community
- Release fixes promptly

## Contact

For security concerns that don't require immediate attention, you can also open a GitHub issue with the `security` label.

---

Thank you for helping keep AI Like Humans secure! 🔒
