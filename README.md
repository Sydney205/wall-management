# Wall Management

Wall Management is a Next.js Pages Router app. Existing service, project and gallery URLs are served through the optional catch-all page in `pages/[[...route]].js`.

## Run locally

```sh
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). `npm run dev` is an equivalent development command. For a production build, run `npm run build` and then `npm run start:production`.

## EmailJS

Add these values to `.env.local` to enable the contact form:

```text
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

These names use Next.js's `NEXT_PUBLIC_` convention because EmailJS is called from the browser.
