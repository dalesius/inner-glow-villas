# Inner Glow Villas

Static GitHub Pages website for Inner Glow Villas, a boho villa accommodation in Ubud, Bali.

## Files

- `index.html` - page content and section order.
- `styles.css` - all visual styling and responsive layout.
- `script.js` - small mobile navigation enhancement.
- `assets/images/` - local villa photos downloaded from the original Google Sites page.

## Editing

Most owner-editable content is in `index.html`. Search for the text you want to update, then edit the nearby heading, paragraph, price, or link.

Common values:

- WhatsApp link: `https://wa.me/6285738481121`
- Email link: `mailto:Motawizza@gmail.com`
- Villas 1-4: `400k Rp`
- Villa 5: `430k Rp`
- Bamboo Pondoks 8-10: `300k Rp`
- Weekly discount: `10%`
- Monthly discount: `15%`

To replace photos, add new images to `assets/images/` and update the matching `src="assets/images/..."` value in `index.html` or `styles.css`.

## Local Preview

Open `index.html` directly in a browser, or run a simple local server from the repository root:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages

After pushing to GitHub:

1. Open the repository on GitHub.
2. Go to `Settings -> Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select branch `main` and folder `/root`.
5. Save.

Private repository Pages availability depends on the GitHub account plan.

## Notes

This site uses plain HTML, CSS, and vanilla JavaScript only. It has no build step, no tracking scripts, no paid external services, and no committed secrets.
