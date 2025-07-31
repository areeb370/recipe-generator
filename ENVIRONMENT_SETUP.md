# Environment Setup Guide

## Required Environment Variables

### Frontend (app/.env)
```
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_KEY=your_supabase_anon_key
```

### Backend (api/.env)
```
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_service_role_key
MONGO_URI=your_mongodb_connection_string
N8N_WEBHOOK=your_n8n_webhook_url
```

## How to Get These Values

### Supabase Setup
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Go to Settings > API
3. Copy the "Project URL" and "anon public" key for frontend
4. Copy the "service_role" key for backend

### MongoDB Setup
1. Go to [mongodb.com](https://mongodb.com) and create a free cluster
2. Get your connection string from the cluster
3. Replace `<password>` with your actual password

### N8N Setup (Optional)
1. Set up n8n with the workflow from `ai/workflows.json`
2. Get the webhook URL from your n8n instance

## Quick Start
1. Create the `.env` files in both `app/` and `api/` directories
2. Add the environment variables above
3. Run `npm install` in both directories
4. Start the backend: `cd api && npm start`
5. Start the frontend: `cd app && npm start`

## Development Mode
The app now has fallback behavior for missing environment variables, so it will run in development mode even without all the services configured. 