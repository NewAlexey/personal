This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, create `.env.local` file with next variable:

- `NEXT_PUBLIC_HOST="http://localhost:3000/"`

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

If you are me, pull `env` variable from `vercel`:

```bash
yarn vercel env pull
```

and remove `NEXT_PUBLIC_HOST` from `.env` file.
It's because `next` uses `.env.local` -> then `.env` file, where
replaced `NEXT_PUBLIC_HOST` to production value.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
