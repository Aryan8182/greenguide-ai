# GreenGuide

A retrieval-grounded AI assistant for local waste segregation, air quality, and climate-action guidance — built for the **1M1B AI for Sustainability Virtual Internship** (in collaboration with IBM SkillsBuild & AICTE).

**Author:** Aryan · Panipat Institute of Engineering & Technology

## SDG Alignment

- **SDG 13** — Climate Action *(primary)*
- **SDG 12** — Responsible Consumption & Production
- **SDG 11** — Sustainable Cities & Communities

## Problem Statement

> How might we use AI to make local climate, waste, and sustainability information accessible and actionable, so that residents and students can make informed daily decisions and reduce their environmental impact?

Municipal waste rules, AQI advisories, and climate guidance exist — but they're scattered across dense PDFs and government sites that aren't written for someone trying to make a quick decision. A static FAQ can't handle a specific question like *"can I recycle a greasy pizza box?"*. GreenGuide answers free-form questions using **retrieval-augmented generation (RAG)**, grounded only in a real knowledge base, with every answer citing its source.

## How it works (pipeline)

```
User query
   │
   ▼
1. Query tokenized
   │
   ▼
2. Keyword-scored retrieval over the knowledge base → top 3 relevant chunks
   │
   ▼
3. Chunks passed as context to the LLM — model may not use outside knowledge
   │
   ▼
4. Grounded, plain-language answer generated with inline source citations
```

If no chunk matches the query well enough, the assistant explicitly says it doesn't know — it never guesses.

## Repository structure

```
greenguide-ai/
├── prototype/
│   └── greenguide.html        # Working single-file RAG chatbot (open directly in a browser)
├── deck/
│   └── GreenGuide_Project_Deck.pptx   # Final submission deck (SDG alignment, pipeline, responsible AI, impact)
├── build/
│   └── build_deck.js          # pptxgenjs script used to generate the deck
├── assets/
│   └── prototype_screenshot.png       # Real screenshot of the running prototype
└── README.md
```

## Running the prototype

No build step or server required — it's a single self-contained HTML file.

1. Open `prototype/greenguide.html` in any modern browser.
2. Ask a question, or click one of the suggested question chips.
3. The retrieval step runs entirely client-side (keyword scoring over the embedded knowledge base); the generation step calls an LLM to produce the grounded, cited answer.

## Knowledge base

The prototype ships with a sample knowledge base covering:
- Municipal Solid Waste Segregation Guide
- E-Waste & Hazardous Waste Handling
- Plastic Recycling Codes Reference
- Air Quality Index Health Advisory
- Household Climate Action Checklist
- Home Energy Saving Practices

This is representative content written for the demo. A deployed version would ingest the actual municipal/CPCB PDF documents for a given city — the retrieval and generation pipeline doesn't change, only the source documents do.

## Responsible AI considerations

- **Fairness** — Knowledge base sourced from official-style government/municipal content rather than opinion, to avoid skewed or region-biased advice.
- **Transparency** — Every answer cites the specific source document it drew from.
- **Ethics** — The assistant explicitly declines to answer when a question falls outside its knowledge base instead of generating a plausible-sounding guess.
- **Privacy** — No personal data is collected or required to use the assistant.

## Expected impact

- **Residents** get instant, source-backed answers instead of guessing.
- **Municipal bodies** see fewer contaminated recycling loads as segregation guidance becomes easier to follow correctly.
- **Sensitive health groups** can adjust outdoor activity around real-time AQI guidance.
- **Scalable** — swapping in a different city's documents localizes the assistant without rebuilding the pipeline.

---
*Built as part of the 1M1B AI for Sustainability Virtual Internship, in collaboration with IBM SkillsBuild & AICTE.*
