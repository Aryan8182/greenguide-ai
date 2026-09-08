const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5

// Palette (matches the GreenGuide prototype)
const INK = "1E2A1B";
const INK_SOFT = "4C5A45";
const MOSS = "35563C";
const MOSS_DEEP = "24402A";
const SOIL = "B8672F";
const WATER = "3E6E86";
const PAPER = "FAFAF4";
const CHIP = "E4E7D6";
const LINE = "D8DBC9";
const WHITE = "FFFFFF";

const FONT_HEAD = "Georgia";
const FONT_BODY = "Calibri";

function baseSlide() {
  const s = pres.addSlide();
  s.background = { color: WHITE };
  return s;
}

function kicker(s, text, x = 0.6, y = 0.45) {
  s.addText(text.toUpperCase(), {
    x, y, w: 6, h: 0.3, isTextBox: true,
    fontFace: FONT_BODY, fontSize: 11, color: INK_SOFT, charSpacing: 1, bold: true,
  });
}

function pageNum(s, n) {
  s.addText(String(n).padStart(2, "0"), {
    x: 12.6, y: 7.05, w: 0.6, h: 0.3, isTextBox: true,
    fontFace: FONT_BODY, fontSize: 10, color: INK_SOFT, align: "right",
  });
}

// ---------- SLIDE 1: TITLE ----------
{
  const s = baseSlide();
  s.background = { color: MOSS_DEEP };
  s.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 7.5, fill: { color: MOSS_DEEP } });

  s.addText("1M1B AI FOR SUSTAINABILITY  ·  IBM SKILLSBUILD & AICTE", {
    x: 0.9, y: 0.9, w: 10, h: 0.4, isTextBox: true,
    fontFace: FONT_BODY, fontSize: 12, color: "A9C2AE", charSpacing: 1,
  });
  s.addText("GreenGuide", {
    x: 0.85, y: 2.5, w: 10, h: 1.5, isTextBox: true,
    fontFace: FONT_HEAD, fontSize: 60, color: WHITE, bold: false,
  });
  s.addText("A retrieval-grounded AI assistant for local waste, air quality,\nand climate-action guidance", {
    x: 0.9, y: 3.95, w: 9, h: 0.9, isTextBox: true,
    fontFace: FONT_BODY, fontSize: 18, color: "D7E3D3", lineSpacingMultiple: 1.3,
  });

  s.addText("Aryan  ·  Panipat Institute of Engineering & Technology", {
    x: 0.9, y: 6.5, w: 8.1, h: 0.4, isTextBox: true,
    fontFace: FONT_BODY, fontSize: 12.5, color: "A9C2AE",
  });
  s.addText("SDG 13 · SDG 12 · SDG 11", {
    x: 9.2, y: 6.5, w: 3.2, h: 0.4, isTextBox: true,
    fontFace: FONT_BODY, fontSize: 13, color: "A9C2AE", align: "right",
  });
}

// ---------- SLIDE 2: PROBLEM ----------
{
  const s = baseSlide();
  kicker(s, "Problem Statement");
  s.addText("Sustainability information exists —\nbut it isn't reaching people", {
    x: 0.6, y: 0.85, w: 11.5, h: 1.3, isTextBox: true,
    fontFace: FONT_HEAD, fontSize: 32, color: MOSS_DEEP,
  });

  s.addText(
    "How might we use AI to make local climate, waste, and sustainability information accessible and actionable, so that residents and students can make informed daily decisions and reduce their environmental impact?",
    { x: 0.6, y: 2.15, w: 8.6, h: 1.3, isTextBox: true, fontFace: FONT_BODY, fontSize: 16, color: INK, italic: true, lineSpacingMultiple: 1.3 }
  );

  const cards = [
    ["Scattered", "Waste rules, AQI advisories, and climate guidance live across separate municipal PDFs, CPCB circulars, and government websites."],
    ["Dense", "Official documents use technical, legal language that isn't written for a resident trying to make a quick decision."],
    ["Static", "A basic FAQ page can't answer a specific, free-form question like \"can I recycle a greasy pizza box?\""],
  ];
  const cardW = 3.65, gap = 0.35, startX = 0.6, y = 3.85;
  cards.forEach((c, i) => {
    const x = startX + i * (cardW + gap);
    s.addShape(pres.ShapeType.rect, { x, y, w: cardW, h: 2.3, fill: { color: "F1F2E8" }, line: { color: LINE, width: 1 } });
    s.addText(c[0], { x: x + 0.25, y: y + 0.22, w: cardW - 0.5, h: 0.4, isTextBox: true, fontFace: FONT_HEAD, fontSize: 18, color: MOSS_DEEP, bold: true });
    s.addText(c[1], { x: x + 0.25, y: y + 0.75, w: cardW - 0.5, h: 1.4, isTextBox: true, fontFace: FONT_BODY, fontSize: 12.5, color: INK_SOFT, lineSpacingMultiple: 1.3 });
  });
  pageNum(s, 2);
}

// ---------- SLIDE 3: SDG ALIGNMENT ----------
{
  const s = baseSlide();
  kicker(s, "SDG Alignment");
  s.addText("Anchored to three Sustainable\nDevelopment Goals", {
    x: 0.6, y: 0.85, w: 10, h: 1.3, isTextBox: true, fontFace: FONT_HEAD, fontSize: 32, color: MOSS_DEEP,
  });

  const sdgs = [
    ["SDG 13", "Climate Action", "Primary focus — helps individuals take informed, everyday climate action through practical guidance rather than abstract awareness.", MOSS],
    ["SDG 12", "Responsible Consumption\n& Production", "Correct waste segregation and recycling-code guidance reduces contamination and improves downstream recycling rates.", SOIL],
    ["SDG 11", "Sustainable Cities\n& Communities", "AQI-aware, city-specific guidance helps residents adapt daily behaviour to local environmental conditions.", WATER],
  ];
  const cardW = 3.65, gap = 0.35, startX = 0.6, y = 2.5;
  sdgs.forEach((c, i) => {
    const x = startX + i * (cardW + gap);
    s.addShape(pres.ShapeType.rect, { x, y, w: cardW, h: 3.6, fill: { color: PAPER }, line: { color: LINE, width: 1 } });
    s.addShape(pres.ShapeType.rect, { x: x + 0.25, y: y + 0.3, w: 0.9, h: 0.9, fill: { color: c[3] } });
    s.addText(c[0], { x: x + 0.25, y: y + 0.3, w: 0.9, h: 0.9, isTextBox: true, fontFace: FONT_HEAD, fontSize: 16, color: WHITE, bold: true, align: "center", valign: "middle" });
    s.addText(c[1], { x: x + 0.25, y: y + 1.4, w: cardW - 0.5, h: 0.75, isTextBox: true, fontFace: FONT_HEAD, fontSize: 17, color: MOSS_DEEP, bold: true, lineSpacingMultiple: 1.05 });
    s.addText(c[2], { x: x + 0.25, y: y + 2.2, w: cardW - 0.5, h: 1.25, isTextBox: true, fontFace: FONT_BODY, fontSize: 12, color: INK_SOFT, lineSpacingMultiple: 1.3 });
  });
  pageNum(s, 3);
}

// ---------- SLIDE 4: AI SOLUTION OVERVIEW / PIPELINE ----------
{
  const s = baseSlide();
  kicker(s, "AI Solution Overview");
  s.addText("A retrieval-augmented generation (RAG)\npipeline, not a static FAQ", {
    x: 0.6, y: 0.85, w: 11, h: 1.3, isTextBox: true, fontFace: FONT_HEAD, fontSize: 30, color: MOSS_DEEP,
  });

  const steps = [
    ["1", "Query", "A user asks a free-form question in plain language."],
    ["2", "Retrieve", "The system searches a knowledge base of waste, AQI, and climate documents for the most relevant passages."],
    ["3", "Ground", "Only the retrieved passages are passed to the language model as context — it may not use outside knowledge."],
    ["4", "Generate + Cite", "The model produces a plain-language answer and cites which source document it drew from."],
  ];
  const boxW = 2.75, gap = 0.28, startX = 0.6, y = 2.5, boxH = 2.6;
  steps.forEach((c, i) => {
    const x = startX + i * (boxW + gap);
    s.addShape(pres.ShapeType.rect, { x, y, w: boxW, h: boxH, fill: { color: i % 2 === 0 ? "F1F2E8" : PAPER }, line: { color: LINE, width: 1 } });
    s.addText(c[0], { x: x + 0.2, y: y + 0.2, w: 0.6, h: 0.5, isTextBox: true, fontFace: FONT_HEAD, fontSize: 22, color: MOSS, bold: true });
    s.addText(c[1], { x: x + 0.2, y: y + 0.75, w: boxW - 0.4, h: 0.45, isTextBox: true, fontFace: FONT_HEAD, fontSize: 16, color: MOSS_DEEP, bold: true });
    s.addText(c[2], { x: x + 0.2, y: y + 1.25, w: boxW - 0.4, h: 1.2, isTextBox: true, fontFace: FONT_BODY, fontSize: 11.5, color: INK_SOFT, lineSpacingMultiple: 1.3 });
    if (i < steps.length - 1) {
      s.addText("→", { x: x + boxW - 0.02, y: y + boxH / 2 - 0.22, w: 0.32, h: 0.44, isTextBox: true, fontFace: "Arial", fontSize: 18, color: INK_SOFT, align: "center", valign: "middle" });
    }
  });

  s.addText("Tech stack: PDF ingestion → text chunking → keyword/vector retrieval → grounded LLM response (IBM Granite / Claude) → source-cited answer", {
    x: 0.6, y: 5.55, w: 11.5, h: 0.5, isTextBox: true, fontFace: FONT_BODY, fontSize: 12.5, color: INK_SOFT, italic: true,
  });
  pageNum(s, 4);
}

// ---------- SLIDE 5: TARGET USERS ----------
{
  const s = baseSlide();
  kicker(s, "Target Users");
  s.addText("Built for the people making\nday-to-day sustainability decisions", {
    x: 0.6, y: 0.85, w: 10.5, h: 1.3, isTextBox: true, fontFace: FONT_HEAD, fontSize: 30, color: MOSS_DEEP,
  });

  const users = [
    ["Residents & households", "Need quick, trustworthy answers on waste segregation and recycling without reading a municipal PDF."],
    ["Students & campuses", "Can adopt the assistant for hostel/campus waste and sustainability awareness drives."],
    ["Sensitive health groups", "Elderly, children, and those with respiratory conditions who need clear AQI-based activity guidance."],
    ["Local governance bodies", "Can plug in their own official documents to give citizens a searchable, always-available interface."],
  ];
  const colW = 5.6, rowH = 1.55, startX = 0.6, startY = 2.5, gapX = 0.35, gapY = 0.3;
  users.forEach((u, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = startX + col * (colW + gapX);
    const y = startY + row * (rowH + gapY);
    s.addShape(pres.ShapeType.rect, { x, y, w: colW, h: rowH, fill: { color: "F1F2E8" }, line: { color: LINE, width: 1 } });
    s.addText(u[0], { x: x + 0.25, y: y + 0.18, w: colW - 0.5, h: 0.4, isTextBox: true, fontFace: FONT_HEAD, fontSize: 15, color: MOSS_DEEP, bold: true });
    s.addText(u[1], { x: x + 0.25, y: y + 0.62, w: colW - 0.5, h: 0.85, isTextBox: true, fontFace: FONT_BODY, fontSize: 12, color: INK_SOFT, lineSpacingMultiple: 1.25 });
  });
  pageNum(s, 5);
}

// ---------- SLIDE 6: RESPONSIBLE AI ----------
{
  const s = baseSlide();
  s.background = { color: "F1F2E8" };
  kicker(s, "Responsible AI Considerations");
  s.addText("Designed to refuse rather than\nguess", {
    x: 0.6, y: 0.85, w: 9, h: 1.3, isTextBox: true, fontFace: FONT_HEAD, fontSize: 30, color: MOSS_DEEP,
  });

  const principles = [
    ["Fairness", "Knowledge base sourced from official government/municipal documents rather than opinion content, to avoid skewed or region-biased advice."],
    ["Transparency", "Every answer cites the specific source document it drew from, so a user can verify the guidance directly."],
    ["Ethics", "The assistant explicitly declines to answer when a question falls outside its knowledge base, instead of generating a plausible-sounding guess."],
    ["Privacy", "No personal data is collected or required to use the assistant; queries are not linked to user identity."],
  ];
  const colW = 5.6, rowH = 1.9, startX = 0.6, startY = 2.5, gapX = 0.35, gapY = 0.25;
  principles.forEach((p, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = startX + col * (colW + gapX);
    const y = startY + row * (rowH + gapY);
    s.addShape(pres.ShapeType.rect, { x, y, w: colW, h: rowH, fill: { color: WHITE }, line: { color: LINE, width: 1 } });
    s.addText(p[0], { x: x + 0.28, y: y + 0.2, w: colW - 0.56, h: 0.4, isTextBox: true, fontFace: FONT_HEAD, fontSize: 16, color: MOSS, bold: true });
    s.addText(p[1], { x: x + 0.28, y: y + 0.68, w: colW - 0.56, h: 1.1, isTextBox: true, fontFace: FONT_BODY, fontSize: 12, color: INK_SOFT, lineSpacingMultiple: 1.3 });
  });
  pageNum(s, 6);
}

// ---------- SLIDE 7: EXPECTED IMPACT ----------
{
  const s = baseSlide();
  kicker(s, "Expected Impact");
  s.addText("What changes if this is deployed", {
    x: 0.6, y: 0.85, w: 10, h: 0.9, isTextBox: true, fontFace: FONT_HEAD, fontSize: 32, color: MOSS_DEEP,
  });

  const rows = [
    ["Residents", "Get instant, source-backed answers instead of guessing or defaulting to \"just throw it in the bin.\""],
    ["Municipal bodies", "See fewer contaminated recycling loads as segregation guidance becomes easier to follow correctly."],
    ["Public health", "Sensitive groups adjust outdoor activity around real-time AQI, reducing avoidable exposure."],
    ["Scalability", "Swapping in a different city's documents localizes the assistant without rebuilding the pipeline."],
  ];
  let y = 2.1;
  rows.forEach((r) => {
    s.addShape(pres.ShapeType.rect, { x: 0.6, y, w: 11.4, h: 0.92, fill: { color: "F1F2E8" }, line: { color: LINE, width: 1 } });
    s.addText(r[0], { x: 0.9, y: y + 0.12, w: 2.6, h: 0.68, isTextBox: true, fontFace: FONT_HEAD, fontSize: 15, color: MOSS_DEEP, bold: true, valign: "middle" });
    s.addText(r[1], { x: 3.7, y: y + 0.12, w: 8.0, h: 0.68, isTextBox: true, fontFace: FONT_BODY, fontSize: 13, color: INK_SOFT, valign: "middle", lineSpacingMultiple: 1.2 });
    y += 1.06;
  });

  s.addShape(pres.ShapeType.rect, { x: 0.6, y: y + 0.08, w: 11.4, h: 0.75, fill: { color: MOSS }, line: { color: MOSS, width: 1 } });
  s.addText("Impact statement: if implemented, residents get correct, source-verified guidance in seconds instead of navigating dense municipal PDFs — the direct beneficiaries are residents (faster, more confident decisions) and municipal bodies (cleaner waste streams, fewer AQI-related health incidents).", {
    x: 0.85, y: y + 0.08, w: 10.9, h: 0.75, isTextBox: true, fontFace: FONT_BODY, fontSize: 11.5, color: WHITE, valign: "middle", italic: true, lineSpacingMultiple: 1.2,
  });
  pageNum(s, 7);
}

// ---------- SLIDE 8: LIVE PROTOTYPE SCREENSHOT ----------
{
  const s = baseSlide();
  kicker(s, "Prototype — Live Screenshot");
  s.addText("The working browser prototype", {
    x: 0.6, y: 0.85, w: 9, h: 0.7, isTextBox: true, fontFace: FONT_HEAD, fontSize: 30, color: MOSS_DEEP,
  });
  s.addText("Actual screenshot of the deployed GreenGuide interface — knowledge base panel, suggested questions, input box, and live pipeline tracker.", {
    x: 0.6, y: 1.55, w: 11.5, h: 0.5, isTextBox: true, fontFace: FONT_BODY, fontSize: 13, color: INK_SOFT, lineSpacingMultiple: 1.3,
  });

  const imgH = 4.7, imgW = imgH * (1200 / 820);
  const imgX = (13.33 - imgW) / 2, imgY = 2.15;
  s.addShape(pres.ShapeType.rect, { x: imgX - 0.06, y: imgY - 0.06, w: imgW + 0.12, h: imgH + 0.12, fill: { color: "FFFFFF" }, line: { color: LINE, width: 1 } });
  s.addImage({ path: "/home/claude/prototype_screenshot.png", x: imgX, y: imgY, w: imgW, h: imgH });
  pageNum(s, 8);
}

// ---------- SLIDE 9: SAMPLE Q&A WALKTHROUGH ----------
{
  const s = baseSlide();
  kicker(s, "Prototype — Sample Interaction");
  s.addText("Walkthrough: a grounded answer", {
    x: 0.6, y: 0.85, w: 8, h: 0.7, isTextBox: true, fontFace: FONT_HEAD, fontSize: 30, color: MOSS_DEEP,
  });
  s.addText("Retrieval runs live in the browser against the knowledge base shown on the previous slide, then a grounded LLM call generates the reply below.", {
    x: 0.6, y: 1.55, w: 11.5, h: 0.5, isTextBox: true, fontFace: FONT_BODY, fontSize: 13, color: INK_SOFT, lineSpacingMultiple: 1.3,
  });

  // Chat mockup
  const chatX = 1.5, chatY = 2.35, chatW = 10.3;
  s.addShape(pres.ShapeType.rect, { x: chatX, y: chatY, w: chatW, h: 3.9, fill: { color: PAPER }, line: { color: LINE, width: 1 } });

  // user bubble
  s.addShape(pres.ShapeType.roundRect, { x: chatX + 5.6, y: chatY + 0.3, w: 4.4, h: 0.55, fill: { color: MOSS }, rectRadius: 0.1 });
  s.addText("Can I put a used pizza box in the recycling bin?", { x: chatX + 5.8, y: chatY + 0.3, w: 4.0, h: 0.55, isTextBox: true, fontFace: FONT_BODY, fontSize: 11.5, color: WHITE, valign: "middle" });

  // bot bubble
  s.addShape(pres.ShapeType.roundRect, { x: chatX + 0.3, y: chatY + 1.1, w: 7.4, h: 1.5, fill: { color: WHITE }, line: { color: LINE, width: 1 }, rectRadius: 0.1 });
  s.addText("No — a food-soiled pizza box shouldn't go in dry recyclables because grease contaminates the recycling stream. It should go into wet/organic waste instead (Source 1).", {
    x: chatX + 0.55, y: chatY + 1.25, w: 6.9, h: 1.2, isTextBox: true, fontFace: FONT_BODY, fontSize: 11.5, color: INK, valign: "top", lineSpacingMultiple: 1.3,
  });
  s.addText("Municipal Solid Waste Segregation Guide", {
    x: chatX + 0.55, y: chatY + 2.35, w: 6.9, h: 0.3, isTextBox: true, fontFace: FONT_BODY, fontSize: 9.5, color: MOSS, italic: true,
  });

  s.addText("Pipeline trace: query embedded → 3 chunks retrieved from \"Municipal Solid Waste Segregation Guide\" → grounded generation → source cited", {
    x: chatX + 0.3, y: chatY + 3.1, w: 9.7, h: 0.6, isTextBox: true, fontFace: FONT_BODY, fontSize: 10.5, color: INK_SOFT, italic: true,
  });
  pageNum(s, 9);
}

// ---------- SLIDE 10: CLOSING ----------
{
  const s = baseSlide();
  s.background = { color: MOSS_DEEP };
  s.addText("Thank you", {
    x: 0.9, y: 2.7, w: 8, h: 1.2, isTextBox: true, fontFace: FONT_HEAD, fontSize: 44, color: WHITE,
  });
  s.addText("GreenGuide  ·  AI for Sustainability Virtual Internship\n1M1B  ·  IBM SkillsBuild  ·  AICTE", {
    x: 0.9, y: 3.85, w: 9, h: 0.8, isTextBox: true, fontFace: FONT_BODY, fontSize: 14, color: "A9C2AE", lineSpacingMultiple: 1.4,
  });
}

pres.writeFile({ fileName: "/home/claude/GreenGuide_Project_Deck.pptx" }).then(() => {
  console.log("done");
});
