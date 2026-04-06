# emdash-plugin-resend

The official Resend email provider plugin for EmDash CMS.

## Installation

```bash
npm install emdash-plugin-resend
```

## Setup

In your `astro.config.mjs`:

```typescript
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";
import resend from "emdash-plugin-resend";

export default defineConfig({
  integrations: [
    emdash({
      plugins: [resend()],
    }),
  ],
});
```

Navigate to your EmDash Admin panel -> Resend Settings to add your API key and default From Address.
