

## Update Icura Logo

Replace the current logo asset with the new uploaded logo across the entire landing page.

### Changes

1. **Copy new logo** — Replace `src/assets/icura-logo.png` with the uploaded file `user-uploads://53846d47-7c50-4d5d-8689-23ba046649e1_removalai_preview.png`

2. **Review components using the logo** — The logo is imported in:
   - `Header.tsx` — navbar logo
   - `Hero.tsx` — hero section large logo
   - `Footer.tsx` — footer logo (currently uses `filter brightness-0 invert` for dark background)

   All use `import icuraLogo from "@/assets/icura-logo.png"` so the import path stays the same — no code changes needed for the swap itself.

3. **Adjust Footer logo styling** — The current footer applies `filter brightness-0 invert` which may not look correct with the new logo's dark navy + blue wave colors. Will need to verify and potentially adjust or create a white version for dark backgrounds.

4. **Verify Hero section** — The new logo has a transparent background with dark elements. On the turquoise-to-blue hero gradient, the dark navy parts should be visible, but the blue wave at the bottom may blend. May need to add a subtle white glow/drop-shadow or adjust sizing.

### Summary
- 1 file copy (replace logo asset)
- Potential minor styling tweaks in Footer and Hero for visibility on dark/gradient backgrounds

