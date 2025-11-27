# Brospace - Advanced Project Management Platform

**By BrodevLab**

A modern, lightweight, and feature-rich project management platform designed to compete with tools like ClickUp and Notion, but better.

## 🚀 Features

- ✅ **Project Management** - Create, track, and manage projects from lead to completion
- ✅ **Task Management** - Assign tasks with priorities, timers, and custom fields
- ✅ **Time Tracking** - Built-in timers to track work hours
- ✅ **Team Collaboration** - Assign team members and track progress
- ✅ **Client Portal** - Share project links with clients for read-only access
- ✅ **Custom Fields** - Create dynamic custom fields for any project or task
- ✅ **Automatic Summaries** - Daily, weekly, and monthly progress reports
- ✅ **Real-time Updates** - Instant synchronization across all users
- ✅ **Dark Mode** - Beautiful dark theme optimized for long work sessions
- ✅ **Mobile Responsive** - Works perfectly on all devices

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **Backend:** Firebase (Authentication, Firestore, Hosting)

## 📋 Prerequisites

Before you begin, make sure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

## 🔧 Installation

1. **Download and Install Node.js:**
   - Visit https://nodejs.org/
   - Download the LTS version
   - Run the installer and follow the prompts
   - Restart your computer after installation

2. **Install Dependencies:**
   ```powershell
   cd "f:\Users\gabri\Documentos\Gabriel Dev\brospace"
   npm install
   ```

3. **Start Development Server:**
   ```powershell
   npm run dev
   ```

4. **Open in Browser:**
   - The app will automatically open at `http://localhost:3000`
   - Or manually navigate to that URL

## 📁 Project Structure

```
brospace/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── modals/       # Modal dialogs
│   │   └── ProjectCard.tsx
│   ├── layouts/          # Page layouts
│   │   ├── AuthLayout.tsx
│   │   └── DashboardLayout.tsx
│   ├── pages/            # Application pages
│   │   ├── auth/
│   │   │   └── Login.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Projects.tsx
│   │   ├── Tasks.tsx
│   │   ├── Team.tsx
│   │   ├── ClientView.tsx
│   │   └── Settings.tsx
│   ├── store/            # State management
│   │   ├── authStore.ts
│   │   └── appStore.ts
│   ├── types/            # TypeScript types
│   │   └── index.ts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Theme Colors (BrodevLab Brand)

- **Primary:** #6366f1 (Indigo)
- **Dark Background:** #020617
- **Card Background:** #0f172a
- **Accent:** Various status colors

## 🔐 Default Login

For demo purposes, you can login with any email and password combination.

## 🚀 Building for Production

```powershell
npm run build
```

The optimized production build will be in the `dist/` folder.

## 📱 Features Roadmap

### Phase 1 (Current) ✅
- Basic project and task management
- User authentication
- Dashboard with statistics
- Client view sharing

### Phase 2 (Next)
- Real-time collaboration
- Advanced time tracking with reports
- Team member management
- Custom field builder
- File attachments

### Phase 3 (Future)
- Automated reporting (daily/weekly/monthly)
- Integration with forms (lead capture)
- Email notifications
- Mobile apps (React Native)
- Advanced analytics
- API for third-party integrations

## 🤝 Support

For support or questions, contact BrodevLab at:
- Website: https://brodevlab.com
- Email: contact@brodevlab.com

## 📄 License

© 2024 BrodevLab. All rights reserved.

---

**Made with ❤️ by BrodevLab**
