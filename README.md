# 🎓 ProjectStack — College Project Management Platform

> A collaborative platform for college students to share, discover, and contribute to real-time academic and personal projects — like LinkedIn for student projects.

---

## 📌 Overview

**ProjectStack** is a full-stack web application designed for university students to:
- 🔍 Discover active tech and academic projects.
- 🧠 Share their own projects and look for contributors.
- 🫂 Collaborate with peers based on skills and interests.
- 📂 Track contributions and build a mini project portfolio.

Built as a group project by our class to streamline and enrich collaborative learning and innovation on campus.

---

## 🚀 Tech Stack

| Category        | Tech Used                                      |
|-----------------|------------------------------------------------|
| Frontend        | **Next.js (App Router)**, **Tailwind CSS**, **TypeScript** |
| Backend         | **Next.js Server Actions**, **Prisma ORM**     |
| Database        | **PostgreSQL with NEON DB**  |
| Auth            | **NextAuth.js** (Credentials & OAuth)          |
| Validation      | **Zod** + **React Hook Form**                  |
| Styling         | **Tailwind CSS**, **ShadCN UI** (Optional)     |
| DevOps          | **Docker**, **Vercel**, **GitHub CI/CD**       |

---

## 🧑‍🤝‍🧑 Team Members

> Project by students of **[Your College Name]** — Group [A/B/C]

| Name | Role | GitHub |
|------|------|--------|
| Shikhar Shetty | Developer  | [@Shikhar-Shetty](https://github.com/Shikhar-Shetty) |
| Sunpreeth | Developer | [@Sunpreeth](https://github.com/anysdefdefe) |
| Vaishnav | Developer | [@vaish73](https://github.com/vaish73) |
| Shravan Raj | Developer | [@Shravan-Raj](https://github.com/ShravanRajj) |
| ... | ... | ... |

---

## 🔑 Features

- 📋 **Post and manage your project listings**
- 🧑‍💼 **User profiles with skill tags, social links, and project history**
- 🔍 **Search & filter projects based on tech stack or category**
- 🤝 **Apply to join projects or invite collaborators**
- 💬 **Internal messaging (optional feature)**
- 🏷️ **Tag-based project discovery (e.g. AI, Web3, Robotics)**

---

## 📁 Project Structure

```bash
/app
  /auth
  /dashboard
  /explore
  /project/[id]
  /profile/[username]

/components
  /ui
  /shared

/lib
  prisma.ts
  auth.ts

/schemas
  authSchemas.ts
  projectSchemas.ts

/prisma
  schema.prisma

/pages/api
  /auth
    [...nextauth].ts
  /project.ts

/public
/styles
```

---

## Installation

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/projectstack.git
cd projectstack
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
```bash
cp .env.example .env
```

### 4. Configure PostgreSQL connection in `.env`
```bash
DATABASE_URL="postgresql://..."
```

### 5. Push schema
```bash
npx prisma db push
```

### 6. Start dev server
```bash
npm run dev
```
---

## Environmental Variable Setup
```bash
    DATABASE_URL=postgresql://...
    NEXTAUTH_SECRET=your-secret
    NEXTAUTH_URL=http://localhost:3000
    GOOGLE_CLIENT_ID=...
    GOOGLE_CLIENT_SECRET=...
```
---

## 🤝 Join the Mission — We're Open for Collaborators!

Whether you're a developer, designer or just a curious learner — if the vision of CampusCollab excites you, we’d love to have you onboard.

# 💡 What You’ll Get

    Real-world full-stack experience with Next.js, PostgreSQL, Prisma, and modern dev workflows.

    Exposure to collaborative product building — planning, coding, reviews, and shipping.

    Opportunity to contribute to open-source, build your portfolio, and maybe even impress future employers.

## 🛠️ Open Areas to Contribute:

    🚀 Frontend polishing with Tailwind & animation (Framer Motion, Anime.js)

    🔐 Auth flows with NextAuth & OAuth (Google, GitHub)

    📦 Backend API design using Server Actions and Prisma

    🧠 AI-based project recommendations (future roadmap)

    📬 Real-time messaging feature (optional but awesome)

    🐳 Docker + Vercel + GitHub CI/CD for production-grade DevOps

## 📬 How to Reach Us

Drop an issue in the GitHub repo or shoot a message on LinkedIn/GitHub to any of the team members listed above.

