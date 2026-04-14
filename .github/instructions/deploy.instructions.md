---
applyTo: "{astro.config.mjs,netlify.toml,package.json,README.md}"
---

# Deployment and Build Instructions

Use this guidance when changing build scripts, Astro output config, or Netlify deployment settings.

## Build and deploy baseline
- Static output is expected unless a deliberate architecture change is requested.
- `npm run build` must remain the primary production build command.
- Netlify configuration changes should preserve successful static deploy behavior.

## Safe change process
1. If changing scripts in `package.json`, keep existing commands working (`dev`, `build`, `preview`).
2. If changing `astro.config.mjs`, confirm output mode and adapter choices are intentional.
3. If changing `netlify.toml`, ensure build command and publish directory still match Astro output.
4. Reflect user-facing workflow changes in `README.md` when needed.

## Validation
- Run `npm run build` after any deployment or build configuration change.
- If output paths change, verify Netlify publish settings are aligned.

## Reporting
- List changed config files.
- State whether deployment behavior changed or remained compatible.
- Call out any required follow-up changes in CI or hosting settings.
