# BridgeCare — CRC Hacks 2026

A responsive, single-device family organizer that takes text or document photos, uses a **real Google Gemini API call** to translate and extract actions, and shows tasks under assigned family members. A task exists only once: completing a shared `any` task under Mom also marks it complete under Dad. `all` tasks require each assignee to finish separately.

## Quick start

1. Install Node.js 22+ from https://nodejs.org (or another currently supported version compatible with Next.js).
2. Open a terminal in **this exact folder** (the folder containing `package.json`).
3. Run `npm install`.
4. Copy `.env.example` to `.env.local`. Replace `replace_with_your_private_key` with your private Gemini API key created at https://aistudio.google.com/api-keys . **Never share or commit `.env.local`.**
5. Run `npm run dev`, then visit http://localhost:3000 .
6. Click **Try a sample letter**, check privacy acknowledgment, then **Analyze with AI**. Check the generated tasks and click **Add tasks to dashboard**. Go to the dashboard; check an `any` task under one parent and watch it complete for the other.
7. Run `npm run build` before deployment.

## Deployment on Vercel

1. Create a private or public GitHub repository and push the project files. Check that `.env.local` is NOT included.
2. Go to https://vercel.com/new and import the GitHub repository.
3. Under Environment Variables set `GEMINI_API_KEY` to your private key. Optionally set `GEMINI_MODEL` to a Gemini image+text model available to your account (default `gemini-3.5-flash-lite`).
4. Click Deploy. Test the **deployed** site with the sample letter and a fictional document photo. Check browser refresh persistence.

## What is implemented

- Responsive polished landing page and dashboard
- Editable full names and family roles (max 12 people; names can be updated and members removed)
- Paste text, upload 1–5 JPG/PNG/WebP photos, or take a photo on a phone
- File limits: 3 MB/image, 12 MB combined; 12,000 characters of text
- Real server-side Gemini API, JSON output schema, input validation, API error handling, environment-variable secret
- Multilingual explanation, task/appointment extraction, warnings
- `any`, `all`, and `specific` assignment modes; task editing and reassignment
- Persistent tasks and family list in browser `localStorage`
- Privacy warning and explicit acknowledgment

## Scope and limitations

- **This is not a production healthcare or caregiving system.** Do not upload real medical records, confidential data or identifying documents to the hackathon demo. Medical advice is explicitly excluded by the prompt, but model outputs still require review.
- The provider processes submitted text/images. Review its data handling and your API billing before using real data.
- Browser storage is not cross-device, not encrypted as a specialized secure medical storage solution, and is not suitable for sensitive data.
- Assignment heuristics and AI responses can be wrong; verify source dates, role eligibility, and translations.
- The model and billing quotas may change; the default model can be overridden with `GEMINI_MODEL`.
- The interface requires online access for analysis, but existing tasks remain usable within the same browser while offline.
- No authentication, calendar sync, push reminders, or PDF import in this MVP.
- Native `<input capture>` camera behavior depends on device/browser.

## Devpost credits and stack

- Next.js, React, TypeScript
- `@google/genai` (official Google Gemini SDK) + Gemini Developer API
- lucide-react icons
- Fonts: local system fonts
- AI coding assistance: OpenAI ChatGPT helped author source code. Credit any other substantial external code or assets used.

## Three-minute demo script

**0:00–0:30 — The problem:** Families coordinate crucial letters with scattered chats and language barriers. Share verified research evidence without putting personal identifiers on screen.

**0:30–1:30 — Live analysis:** Load the sample letter; send it to Gemini; show its multilingual explanation, appointments, and detected tasks.

**1:30–2:15 — Shared completion:** Save the tasks, review assignees; the shared parental-signature task appears under Mom and Dad. Complete it once, then show both updated.

**2:15–2:45 — Photo analysis:** Upload a fictional handwritten or printed school notice and show another genuine API result. If quota prevents it, record this portion earlier while the API is working.

**2:45–3:00 — Impact and limitations:** State who benefits, why it's different, and that this is a single-device prototype, not a medical service.

## Submission checklist

- [ ] Confirm every competing member is CRC eligible and your team has up to four people
- [ ] Confirm the project was started and built during the permitted submission window
- [ ] Run a successful real Gemini request in the deployed site
- [ ] Test photo input, role-based assignment, `any` / `all`, save-on-refresh
- [ ] Upload the code to GitHub; exclude API keys, `.env.local`, any personal information
- [ ] Record a demo video **at most 3 minutes**
- [ ] Submit project description, demo video, repository link, and APIs/tools used on Devpost **before November 17, 2026 at 5 PM PT**

## If `zsh: command not found: npm` appears on macOS

You haven't installed Node.js/npm correctly or your terminal has not loaded the updated PATH.

1. At https://nodejs.org/en/download/ select **macOS Installer (.pkg)** at the lower part of the page. Select **arm64** for Apple Silicon (M-series) Macs or **x64** for Intel Macs (Apple menu > About This Mac). Do **not** use the `.gz` standalone binary for this walkthrough.
2. Open the downloaded `.pkg`, follow the installer, and complete it.
3. Fully close and reopen VS Code to refresh the terminal's PATH.
4. Open Terminal > New Terminal. Run `node -v` then `npm -v`. Both must show numbers.
5. Open the extracted `bridgecare` folder via VS Code > File > Open Folder, then run `pwd` and `ls`; you must see `package.json` in `ls`. Then run `npm install`, `cp .env.example .env.local`, and configure the secret key.
6. Run `npm run dev`. Keep the terminal open and open http://localhost:3000 . The website only runs locally while this command is active.

**Do not paste** the printed directory tree from the guide in Terminal; it is only a picture of your project's files. Do not paste comments starting `#` unless you know what they do.


### Troubleshooting slow analysis
The request now stops after 25 seconds on the server and 30 seconds in the browser. Try the sample pasted text first. Choose `gemini-3.5-flash-lite` in `.env.local`, restart `npm run dev`, and examine the terminal if a specific API error appears. The camera button was removed; use the JPG/PNG upload instead.
