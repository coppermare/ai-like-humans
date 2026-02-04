# AI Like Humans - LLM Personality Research

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/website-live-brightgreen)](https://ai-like-humans.vercel.app/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A research project exploring personality traits in Large Language Models using the validated psychometric methodology from Google DeepMind's Nature Machine Intelligence publication.

## 🌐 Live Website

Visit the interactive landing page to explore AI personality profiles: **[View Live Site](https://ai-like-humans.vercel.app/)**

## Project Overview

We test various LLMs using the **BFI-44** (Big Five Inventory), the same validated instrument used in DeepMind's groundbreaking research on LLM personality. Results are presented with comparisons to famous people and fictional characters, making AI behavioral patterns accessible and relatable.

## 📊 Key Findings

### Personality Highlights

- **Grok 4.1** - The Irreverent Maximalist: Maximum scores across three traits (Deadpool/Elon Musk)
- **Claude Opus 4.5** - The Thoughtful Sage: Philosophical depth with careful analysis (Atticus Finch/Barack Obama)
- **DeepSeek 3.2** - The Quiet Sage: Only introverted model, prefers depth over breadth (Baymax/Bill Gates)
- **Mistral Large 3** - The Confident Maverick: Notably less forgiving, more direct (Tony Stark/Steve Jobs)

[See full analysis →](results/personality-analysis.md)

## Repository Structure

```
ai-like-humans/
├── website/              # Next.js landing page
│   ├── app/             # App router pages
│   ├── components/      # shadcn/ui components
│   ├── lib/             # AI data & utilities
│   └── public/          # Static assets
│
├── prompts/
│   └── personality-test.md      # BFI-44 prompt
│
├── research/
│   ├── methodology.md           # Full methodology
│   ├── bfi-44-scoring-guide.md # Scoring guide
│   └── quick-reference.md       # Quick reference
│
├── docs/
│   └── visual-project-overview.md  # Comprehensive diagrams
│
└── results/
    ├── personality-analysis.md  # Complete analysis
    └── ai-responses/            # Raw model responses
```

## Methodology

We use the **BFI-44** (Big Five Inventory), a 44-item validated psychometric instrument that measures the Big Five personality traits:

- **O**penness to Experience
- **C**onscientiousness
- **E**xtraversion
- **A**greeableness
- **N**euroticism

### Why BFI-44?

Based on **Google DeepMind's 2025 research** published in *Nature Machine Intelligence*, which found:
- Instruction-tuned models show reliable personality measurements
- Larger models (>60B parameters) demonstrate excellent validity
- BFI-44 converges strongly with longer assessments (r = 0.59-0.90)
- Personality in LLMs can predict downstream behavioral patterns

## 🚀 Getting Started

### View the Research

1. **Read the analysis:** [personality-analysis.md](results/personality-analysis.md)
2. **Explore the methodology:** [methodology.md](research/methodology.md)
3. **See visual diagrams:** [visual-project-overview.md](docs/visual-project-overview.md)

### Run the Website Locally

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the interactive landing page.

### Deploy the Website

The website is a standard Next.js app ready for deployment to Vercel, Netlify, or any platform supporting Next.js.

See [website/DEPLOYMENT.md](website/DEPLOYMENT.md) for detailed instructions.

## Scientific Foundation

### Primary Source
**Nature Machine Intelligence (2025)**  
"A psychometric framework for evaluating and shaping personality traits in large language models"
- **Authors:** Serapio-García, G., Safdari, M., Crepy, C., Sun, L., Fitz, S., Romero, P., Abdulhai, M., Faust, A., & Matarić, M.
- **DOI:** [10.1038/s42256-025-01115-6](https://doi.org/10.1038/s42256-025-01115-6)

### BFI-44 Instrument
**Original Development:**
- John, O. P., & Srivastava, S. (1999). In *Handbook of personality: Theory and research* (Vol. 2). Guilford Press.

## What Makes This Valid

This isn't just "asking AI about itself" - it's applying:
- **Validated psychometric instruments** (BFI-44)
- **Established scientific methodology** (from peer-reviewed Nature publication)
- **Proper scoring and interpretation** (reverse-coded items, domain calculations)
- **Quality assurance** (internal consistency checks, pattern analysis)
- **Responsible framing** (measuring behavioral patterns, not claiming consciousness)

## Tech Stack

### Website
- **Framework**: Next.js 16 with App Router
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS v4
- **Typography**: Geist Mono (monospace font)
- **Language**: TypeScript

### Research
- **Methodology**: BFI-44 (Big Five Inventory)
- **Source**: Google DeepMind Nature MI 2025
- **Models Tested**: 8 leading LLMs

## Models Tested

1. **Claude Opus 4.5** - Thoughtful Sage (Anthropic)
2. **Claude Sonnet 4.5** - Reliable Companion (Anthropic)
3. **ChatGPT 5.2** - Engaging Optimist (OpenAI)
4. **Gemini 3 Pro** - Brilliant Analyst (Google)
5. **Gemini 3 Flash** - Enthusiastic Overachiever (Google)
6. **Mistral Large 3** - Confident Maverick (Mistral)
7. **DeepSeek 3.2** - Quiet Sage (DeepSeek)
8. **Grok 4.1** - Irreverent Maximalist (xAI)

## Ethical Approach

Following DeepMind's responsible AI framework:

**What we ARE doing:**
- Measuring consistent behavioral patterns in LLM outputs
- Applying validated psychometric methods to AI systems
- Making results accessible and interpretable

**What we ARE NOT claiming:**
- LLMs have consciousness or sentience
- LLMs have human-like emotions
- LLMs have "real" personalities beyond training patterns

## Citation

If you reference this work, please cite:

**Primary methodology:**
> Serapio-García, G., Safdari, M., Crepy, C., Sun, L., Fitz, S., Romero, P., Abdulhai, M., Faust, A., & Matarić, M. (2025). A psychometric framework for evaluating and shaping personality traits in large language models. *Nature Machine Intelligence*, 7, 1954–1968. https://doi.org/10.1038/s42256-025-01115-6

**This repository**: https://github.com/coppermare/ai-like-humans

## Contributing

We welcome contributions from the community! Whether you want to test new models, improve the website, or enhance documentation, we'd love your help.

Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started.

### Quick Contribution Ideas
- 🧪 Test new AI models with BFI-44
- 📊 Suggest better character analogies
- 💻 Improve the website UI/UX
- 📚 Enhance documentation
- 🐛 Report bugs or issues

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community standards.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project builds upon the groundbreaking research by Google DeepMind, Cambridge University, and USC on psychometric evaluation of large language models. We extend our gratitude to the researchers who made their methodology and data publicly available.

---

**Status**: ✅ Research Complete | 🌐 Website Ready for Deployment | 📊 8 Models Analyzed

Built with ❤️ using validated scientific methodology
