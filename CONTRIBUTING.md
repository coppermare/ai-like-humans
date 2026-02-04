# Contributing to AI Like Humans

Thank you for your interest in contributing to AI Like Humans! We welcome contributions from the community.

## Ways to Contribute

### 🧪 Test More Models
- Run the BFI-44 test on new AI models
- Verify existing results with updated model versions
- Document any changes in model behavior over time

### 📊 Improve Analysis
- Suggest better character analogies
- Refine personality interpretations
- Add statistical analysis or visualizations
- Propose new ways to present the data

### 💻 Enhance the Website
- Improve UI/UX design
- Add new features (filtering, sorting, comparisons, etc.)
- Fix bugs or optimize performance
- Improve accessibility
- Enhance mobile responsiveness

### 📚 Expand Documentation
- Clarify methodology
- Add tutorials or guides
- Improve code documentation
- Share insights and findings

## Getting Started

### 1. Fork the Repository
Click the "Fork" button at the top right of this repository.

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR-USERNAME/ai-like-humans.git
cd ai-like-humans
```

### 3. Create a Branch
```bash
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

#### For Website Development:
```bash
cd website
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see your changes.

#### For Research Contributions:
- Follow the methodology in `research/methodology.md`
- Use the template in `results/template.md` for new model tests
- Place raw responses in `results/ai-responses/`

### 5. Test Your Changes
- Ensure the website builds successfully: `npm run build`
- Test all interactive features
- Check responsive design on mobile
- Verify no console errors or warnings

### 6. Commit Your Changes
```bash
git add .
git commit -m "Brief description of your changes"
```

**Commit Message Guidelines:**
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Fix bug" not "Fixes bug")
- Keep the first line under 50 characters
- Add detailed description after a blank line if needed

### 7. Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### 8. Submit a Pull Request
- Go to your fork on GitHub
- Click "Pull Request"
- Select your feature branch
- Provide a clear description of your changes
- Reference any related issues

## Pull Request Guidelines

### Quality Standards
- Code should be clean and well-commented
- Follow existing code style and conventions
- TypeScript types should be properly defined
- No console.logs or debug code in production
- Test thoroughly before submitting

### PR Description Should Include:
- **What**: Brief summary of changes
- **Why**: Motivation for the changes
- **How**: Technical approach taken
- **Testing**: How you tested the changes
- **Screenshots**: For UI changes (before/after)

## Adding New AI Models

To add a new AI model test:

1. **Test the Model**
   - Use the prompt from `prompts/personality-test.md`
   - Save the raw response to `results/ai-responses/model-name.md`

2. **Score the Results**
   - Follow the scoring guide in `research/bfi-44-scoring-guide.md`
   - Calculate all five OCEAN trait scores

3. **Add Character Analogies**
   - Choose 2-3 characters/people with similar traits
   - Find or create character images (24 characters available as reference)
   - Write a distinctive character quote

4. **Update the Website**
   - Add model data to `website/lib/ai-data.ts`
   - Add model logo to `website/public/` (if needed)
   - Test the card display and modal

5. **Document Your Analysis**
   - Add detailed analysis to `results/personality-analysis.md`
   - Follow the existing format and structure

## Code Style

### TypeScript/React
- Use functional components with hooks
- Define proper TypeScript interfaces
- Follow Next.js best practices
- Use Tailwind CSS for styling
- Keep components focused and reusable

### Documentation
- Use clear, concise language
- Include examples where helpful
- Keep formatting consistent
- Update README if structure changes

## Research Standards

### Methodology
- Follow the BFI-44 validated instrument
- Document any methodology variations
- Be transparent about limitations
- Cite sources appropriately

### Ethical Considerations
- Frame findings responsibly
- Don't anthropomorphize AI inappropriately
- Acknowledge that we're measuring behavioral patterns, not consciousness
- Be respectful when discussing model behaviors

## Getting Help

- **Questions?** Open an [issue](https://github.com/coppermare/ai-like-humans/issues) with the `question` label
- **Bug Reports?** Open an [issue](https://github.com/coppermare/ai-like-humans/issues) with the `bug` label
- **Feature Ideas?** Open an [issue](https://github.com/coppermare/ai-like-humans/issues) with the `enhancement` label

## Recognition

Contributors will be acknowledged in:
- GitHub contributors list (automatic)
- Release notes for significant contributions
- Special recognition for substantial research contributions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping advance our understanding of AI personality patterns! 🚀
