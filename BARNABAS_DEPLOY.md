# Barnabas Publishing (Postiz fork): hosting checklist

This is a fork of [Postiz](https://github.com/gitroomhq/postiz-app) (AGPL-3.0) with The Barnabas Commission branding.
Barnabas Studio (the design editor) is a separate app that talks to this one over Postiz's public API.
Not yet built or run end to end: treat the steps below as a checklist to verify, not a guarantee.

## 1. What runs
`docker-compose.yaml` starts Postiz, PostgreSQL, Redis and Temporal (with its own Postgres and Elasticsearch).
The stock file pulls the official image; to run *this* fork use the override that builds from source:

```bash
docker compose -f docker-compose.yaml -f docker-compose.barnabas.yaml up -d --build
```
The first build is slow and needs several GB of memory (the Dockerfile asks Node for 4 GB).

## 2. Settings to change in `docker-compose.yaml` (service `postiz`)
| Setting | Set it to |
| --- | --- |
| `MAIN_URL`, `FRONTEND_URL` | your public https address, e.g. `https://publish.example.org` |
| `NEXT_PUBLIC_BACKEND_URL` | the same address plus `/api` |
| `JWT_SECRET` | a long random string, unique to this install |
| `DISABLE_REGISTRATION` | `'true'` after you create the first account |
| `NEXT_PUBLIC_POLOTNO` | leave empty: the built-in Polotno editor buttons stay hidden (Studio is the editor) |
| `API_LIMIT` | requests per hour the public API allows (code default 90; the example file says 30). Raise it for bulk sends and mirror it in Studio as `POSTIZ_REQUESTS_PER_HOUR` |
| social app IDs and secrets | one pair per network you want (Meta/Facebook/Instagram, LinkedIn, X, ...), created in each network's developer portal |
| uploads | local storage works; Cloudflare R2 is available through the `CLOUDFLARE_*` settings |

Put it behind https (a reverse proxy such as Caddy, nginx or Cloudflare). It must be reachable from the internet:
social networks fetch uploaded images from your public address, and OAuth callbacks need it.

## 3. Connect Studio
1. In the fork: sign up, connect your social channels, then Settings → Public API → copy the API key.
2. In the Studio deployment set (server-only, never `NEXT_PUBLIC_`):
   - `POSTIZ_API_URL` = `https://<your-postiz-domain>/api/public/v1`
   - `POSTIZ_API_KEY` = the key from step 1
   - `PUBLISH_TEAM_PASSCODE` = a passcode for your team
   - `POSTIZ_REQUESTS_PER_HOUR` = the same number as `API_LIMIT` (optional)
3. In Studio open a design → Export → Send to Publishing Desk → send one draft to a test channel, then check it in Postiz.

## 4. AGPL-3.0 obligations (this is a modified, network-hosted fork)
- Users of the hosted app must be able to get the **complete source of your modified version**.
  Publish this fork (for example a public GitHub repo) and link it somewhere visible in the app or its login page.
  The login page now shows a link to the source (`SOURCE_CODE_URL` in `apps/frontend/src/components/ui/source-link.tsx`): set it to where you publish this fork.
- Keep the `LICENSE` file and the existing copyright notices.
- Barnabas Studio is a separate program that only calls the API; it is not part of this fork.
- This is a summary, not legal advice. Check the license text.

## 5. Branding in this fork
Logos: `apps/frontend/public/tbc-*.png`, favicons replaced. Theme colours: `apps/frontend/src/app/colors.scss`
(buttons `#164c7c`, accent `#4fcbd0`). Page titles say "Barnabas Publishing".
