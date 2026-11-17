# BridgeCare — From Language Barriers to Coordinated Action

## Inspiration
Caregivers and multilingual families often coordinate school letters, appointments and paperwork across texts, group chats, and several people. Translation can make a message understandable, but families also need to know who should act and whether it has been done.

## What it does
BridgeCare turns pasted messages or images of letters into plain-language multilingual explanations and an actionable family checklist. It suggests assignments using family roles and preserves a single shared task record, so an action that can be completed by either parent is completed for both when one finishes it. Actions requiring everyone are tracked individually. Users can edit the AI's suggestions before relying on them.

## How we built it
We used Next.js and React for the frontend, a Next.js server route to securely call the Google Gemini Developer API, structured JSON outputs for extraction, browser localStorage for persistence, and role-aware TypeScript assignment logic. User data is processed by Gemini only after acknowledgment; the API key remains on the server.

## Challenges
The most important challenge was moving from free-form AI descriptions to reliable stateful tasks, including the difference between 'either parent' and 'both parents'. We separate AI suggestions from deterministic completion rules. We also had to limit uploads, handle quota errors, and avoid overstating the reliability of document interpretation.

## What we learned
Useful AI should not stop after summarizing. Connecting information to concrete responsibilities can be more useful than another chatbot.

## What's next
Authenticated family accounts, safe cross-device syncing, better document review, optional reminders and accessibility testing—subject to proper privacy and security review.

## Technologies
Next.js, React, TypeScript, Google Gemini API, @google/genai, lucide-react, Vercel.

## Third-party acknowledgments
Google Gemini API and official SDK; Next.js and React; lucide-react; ChatGPT assistance in writing project code. Add any other assets or code you incorporate.

## Evidence (verify and cite before submission)
User-reported caregiver coordination pain: https://www.reddit.com/r/CaregiverSupport/comments/1ricuz1/how_are_you_and_your_siblings_coordinating_care/
