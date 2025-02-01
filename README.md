# SaaS Application - AI Content Generator

This is a SaaS application that allows users to generate images, music, videos, and code, with the added feature of a chatbot that answers queries. The application leverages the OpenAI API and Replicate AI for content generation. Integrated customer support is powered by Crisp, and user authentication is handled using Clerk.

## Features
- **Content Generation**: Generate images, music, videos, and code using the power of OpenAI and Replicate AI APIs.
- **Chatbot**: A chatbot is available for users to ask queries and get answers.
- **User Authentication**: Secure user login and management via Clerk.
- **Customer Support**: Instant customer support via Crisp's live chat feature.
- **Subscription Model**: Free access for 3 tries, followed by a subscription model using Stripe for payment processing.
- **Modern UI**: A responsive, user-friendly interface built with TailwindCSS and ShadCN UI.

## Tech Stack
- **Frontend**: Next.js, Typescript, TailwindCSS, ShadCN UI, Framer-Motion
- **Backend**: Node.js (Next.js API routes), Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: Clerk
- **Payment Integration**: Stripe
- **Customer Support**: Crisp
- **AI Content Generation**: OpenAI API, Replicate AI

## Setup Instructions

### Prerequisites
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Make sure you have a PostgreSQL database set up and running.
3. Create accounts for the following services and set up the necessary API keys:
   - [OpenAI API](https://beta.openai.com/)
   - [Replicate AI](https://replicate.com/)
   - [Clerk](https://clerk.dev/)
   - [Crisp](https://crisp.chat/)
   - [Stripe](https://stripe.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AyushRay06/Dr-Doom.git

2. Install dependencies:
   ```bash
   cd <project_directory>
   npm install
3. Set up environment variables: Create a .env.local file in the root of the project and add the following:
  ```bash
    NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
    NEXT_PUBLIC_REPLICATE_API_KEY=your_replicate_api_key
    CLERK_FRONTEND_API=your_clerk_frontend_api
    CLERK_API_KEY=your_clerk_api_key
    STRIPE_SECRET_KEY=your_stripe_secret_key
    CRISP_WEBSITE_ID=your_crisp_website_id
    DATABASE_URL=your_postgresql_connection_string
```
5. Run migrations (using Prisma):
```bash
    npx prisma migrate dev
```
6. Start the development server:
```bash
   npm run dev
```

You can further customize the setup and add more specific details as needed.




   
