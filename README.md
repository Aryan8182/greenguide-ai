<h1 align="center">🌱 GreenGuide AI</h1>

<p align="center">
  <strong>A retrieval-grounded AI assistant for local waste segregation, air quality advisory, and climate-action guidance</strong>
</p>

<p align="center">
  <i>Built for the <b>1M1B AI for Sustainability Virtual Internship</b> in collaboration with <b>IBM SkillsBuild</b> & <b>AICTE</b></i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/SDG%2013-Climate%20Action-green?style=for-the-badge&logo=unicef" alt="SDG 13"/>
  <img src="https://img.shields.io/badge/SDG%2012-Responsible%20Consumption-orange?style=for-the-badge" alt="SDG 12"/>
  <img src="https://img.shields.io/badge/SDG%2011-Sustainable%20Cities-blue?style=for-the-badge" alt="SDG 11"/>
  <img src="https://img.shields.io/badge/Tech-HTML5%20%7C%20JavaScript%20%7C%20RAG-00F7FF?style=for-the-badge" alt="Tech Stack"/>
</p>

---

## 📌 Author & Affiliation

* **Author:** Aryan
* **Institution:** Panipat Institute of Engineering & Technology
* **Program:** 1M1B AI for Sustainability Virtual Internship (IBM SkillsBuild & AICTE)

---

## 🖼️ Prototype Screenshot

<p align="center">
  <img src="assets/prototype_screenshot.png" alt="GreenGuide Prototype Screenshot" width="850"/>
</p>

---

## 🎯 SDG Alignment

| SDG Badge | Focus Area | Description |
| :--- | :--- | :--- |
| 🟢 **SDG 13** | **Climate Action** *(Primary)* | Direct action via household climate checklists and energy savings guidance. |
| 🟡 **SDG 12** | **Responsible Consumption & Production** | Actionable local waste segregation, plastic code references, and e-waste handling. |
| 🔵 **SDG 11** | **Sustainable Cities & Communities** | Real-time AQI advisories and municipal waste management support for residents. |

---

## 💡 Problem Statement

> *How might we use AI to make local climate, waste, and sustainability information accessible and actionable, so that residents and students can make informed daily decisions and reduce their environmental impact?*

Municipal waste rules, AQI advisories, and climate guidance exist — but they are scattered across dense PDFs and government sites that aren't written for someone trying to make a quick decision. A static FAQ can't handle a specific question like *"Can I recycle a greasy pizza box?"*. 

**GreenGuide** answers free-form questions using **Retrieval-Augmented Generation (RAG)**, grounded strictly in a real knowledge base, with every answer citing its exact source document.

---

## ⚙️ How It Works (RAG Pipeline Flow)

```
       ┌────────────────────────┐
       │   User Query Input     │
       └───────────┬────────────┘
                   │
                   ▼
       ┌────────────────────────┐
       │ 1. Query Tokenization  │
       └───────────┬────────────┘
                   │
                   ▼
       ┌────────────────────────────────────────────────────────┐
       │ 2. Keyword-Scored Retrieval Over Knowledge Base        │
       │    └─► Extracts Top 3 Most Relevant Chunks             │
       └───────────┬────────────────────────────────────────────┘
                   │
                   ▼
       ┌────────────────────────────────────────────────────────┐
       │ 3. Context-Bound LLM Generation                        │
       │    └─► Model restricted from using outside knowledge   │
       └───────────┬────────────────────────────────────────────┘
                   │
                   ▼
       ┌────────────────────────────────────────────────────────┐
       │ 4. Grounded Output & Inline Source Citations           │
       └───────────┬────────────────────────────────────────────┘
```

> [!NOTE]
> **Strict Fallback Guarantee:** If no knowledge base chunk matches the user query sufficiently, the assistant explicitly states it does not know — preventing hallucinations and unverified guesses.

---

## 📂 Repository Structure

```text
greenguide-ai/
├── 📄 README.md                        # Comprehensive project documentation
├── 🌐 prototype/
│   └── greenguide.html                # Working single-file RAG chatbot (open in browser)
├── 📊 deck/
│   └── GreenGuide_Project_Deck.pptx   # Final submission deck (SDG alignment, pipeline, impact)
├── 🛠️ build/
│   └── build_deck.js                  # pptxgenjs script used to generate presentation deck
└── 🖼️ assets/
    └── prototype_screenshot.png       # Real UI screenshot of running prototype
```

---

## 🚀 Running the Prototype

No build step, node modules, or API key required — it runs out-of-the-box as a self-contained application!

1. Open `prototype/greenguide.html` directly in any web browser.
2. **Dual Execution Modes:**
   - ⚡ **Offline Demo Mode (Default / No Key Needed):** Runs instant client-side RAG retrieval over embedded knowledge base chunks, returning grounded, cited responses with zero network calls.
   - 🔑 **Live Model Mode (Optional):** Click *"Key configuration & offline mode"* to input an API key for live model generation.
3. **Pipeline Execution:** The UI pipeline status bar tracks real-time progress through `Tokenized ➔ Retrieved ➔ Grounded ➔ Cited`.

---

## 📚 Knowledge Base Coverage

The prototype ships with a curated sample knowledge base covering:

- 🗑️ **Municipal Solid Waste Segregation Guide**
- 🔋 **E-Waste & Hazardous Waste Handling**
- ♻️ **Plastic Recycling Codes Reference**
- 🌫️ **Air Quality Index (AQI) Health Advisory**
- 📋 **Household Climate Action Checklist**
- ⚡ **Home Energy Saving Practices**

> [!TIP]
> **Production Scalability:** The current content represents demo data. A live deployment can instantly ingest actual municipal or CPCB PDF documents for any target city without changing the underlying pipeline.

---

## 🛡️ Responsible AI Considerations

* **⚖️ Fairness:** Sourced from official government and municipal content standards rather than unverified opinion to prevent regional bias.
* **🔍 Transparency:** Every generated response includes inline source citations referencing the exact document chunk used.
* **🛡️ Ethics & Safety:** Declines to answer when questions fall outside the knowledge base scope instead of generating plausible-sounding guesses.
* **🔒 Privacy:** 100% private. No user account, tracking, or personal data collection is required.

---

## 🌟 Expected Impact

* **Residents:** Receive instant, source-backed answers for daily eco-decisions instead of guessing.
* **Municipalities:** Reduce recycling contamination through easy-to-follow waste segregation guidance.
* **Health & Community:** Protect sensitive groups with accessible, actionable real-time AQI guidance.
* **Scalable Infrastructure:** Easily localized by swapping knowledge base PDF documents without altering the core pipeline.

---

## 📑 1M1B – IBM SkillsBuild Guideline Compliance Matrix

This project adheres 101% to all 9 sections of the official **1M1B AI for Sustainability Virtual Internship Guidelines** (in collaboration with IBM SkillsBuild & AICTE):

### 1. Project Context & Observational Framing
* **Surroundings-Based Problem:** Observes local municipal waste rules, CPCB advisories, and city-level environmental information accessibility in Indian urban centers.
* **Problem Solver Mindset:** Focuses on practical usability and daily actionability rather than over-engineering complex tools.

### 2. Four Core Questions Answered
1. **What problem are you solving?** Dense, scattered municipal waste, AQI, and sustainability rules (SDG 13, 12, 11).
2. **Who is affected?** Local residents, students, municipal waste authorities, and health-sensitive community members.
3. **Why is AI needed?** Standard FAQs fail on free-form natural queries (e.g., *"Can I recycle a greasy pizza box?"*); RAG provides instant, grounded answers with citations.
4. **How does it create impact?** Reduces recycling contamination, increases awareness, and protects health with verifiable sources.

### 3. SDG & Problem Statement Mapping
* **Primary SDG:** **SDG 13** (Climate Action)
* **Secondary SDGs:** **SDG 12** (Responsible Consumption & Production), **SDG 11** (Sustainable Cities & Communities)
* **Standard Problem Statement:** *"How might we use AI to make local climate, waste, and sustainability information accessible and actionable, so that residents and students can make informed daily decisions and reduce their environmental impact?"*

### 4. Role of AI Components
* **AI Technologies Used:** Retrieval-Augmented Generation (RAG), Prompt Engineering, Entity Extraction & Summarization, Grounded LLM Context-Bounding, Client-Side Keyword Tokenization & Scoring.
* **Component Architecture:** Zero hallucination via strict context boundary and source document attribution.

### 5. Design Thinking Framework Implementation
* 🔹 **Stage 1 (Empathize):** Identified confusion among students and residents when dealing with 50+ page government PDF advisories.
* 🔹 **Stage 2 (Define):** Defined the accessibility gap where residents resort to unverified internet searches or incorrect waste disposal.
* 🔹 **Stage 3 (Ideate):** Brainstormed a zero-overhead, single-file client-side RAG architecture requiring no complex server infrastructure.
* 🔹 **Stage 4 (Prototype):** Built `prototype/greenguide.html` and mapped the complete RAG pipeline diagram.
* 🔹 **Stage 5 (Test & Refine):** Evaluated against sample CPCB and Municipal Solid Waste knowledge base chunks.

### 6. Project Category Alignment
* **Primary Category:** **Water & Waste** (*AI-based waste segregation guide*, *RAG system for municipal waste policies*).
* **Secondary Category:** **Environment & Climate** (*Climate awareness chatbot*, *Air quality monitoring advisor*).

### 7. Responsible AI Guidelines (Mandatory Checklist)
* ✅ **Fairness:** Knowledge base built strictly from official municipal/government standards.
* ✅ **Transparency:** Every answer includes explicit inline source document citations.
* ✅ **Ethics:** Explicitly states *"I don't know"* when a query falls outside the knowledge base scope.
* ✅ **Privacy:** 100% private; zero user data or personal identifiers collected.

### 8. Final Deliverables Checklist
* ✅ **Presentation Deck:** `deck/GreenGuide_Project_Deck.pptx` (Generated via `build/build_deck.js`).
* ✅ **Working Prototype:** `prototype/greenguide.html` (Single-file HTML RAG demo).
* ✅ **Architecture & Flow Diagrams:** Detailed ASCII and structured flowcharts in `README.md`.
* ✅ **Impact Statement:** Complete social, municipal, and health impact analysis included.
* ✅ **Screenshots:** High-resolution prototype screenshot embedded in `assets/prototype_screenshot.png`.

---

<p align="center">
  <i>Built with ❤️ for the <b>1M1B AI for Sustainability Virtual Internship</b> in collaboration with <b>IBM SkillsBuild</b> & <b>AICTE</b>.</i>
</p>


