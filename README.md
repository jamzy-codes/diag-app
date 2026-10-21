# Ledgview

Ledgview is being rebuilt as a revenue analytics product for indie SaaS founders, focused on MRR, churn, plan breakdown, and top countries. CSV import, an events API, and a seeded demo workspace are planned; they are not implemented yet.

## Status

This is a rebuild in progress from an earlier onboarding and analytics dashboard assignment. The `v0-assignment` tag preserves the original assignment. The current app still uses the existing onboarding flow and dashboard while the Ledgview foundation takes shape.

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/jamzy-codes/ledgview.git

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open your browser
http://localhost:3000/onboarding/step-1
```

Run these commands from the repository directory. To check the app:

```bash
npm run lint
npm run build
npm start
```

## Known Limitations

- Storage is in memory and is lost when the server process restarts. Complete onboarding again after a restart; there is no database yet.
- Authentication is a mock implementation. Passwords are base64 encoded, not securely hashed. It is not suitable for production use.
- OTP verification accepts any six-digit code and sends no email. The Google sign-in button is UI only.
- Dashboard protection checks only for the presence of a user ID cookie; it does not validate a signed session.
- Revenue charts and analytics are hardcoded demo data, not calculated from real revenue events.
