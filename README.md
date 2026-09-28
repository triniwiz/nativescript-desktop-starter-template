# NativeScript Desktop Starter

A NativeScript-Vue starter that runs on Windows, iOS and Android. Layout uses
[MasonKit](https://github.com/triniwiz/nativescript-mason) (Flexbox, CSS Grid
and HTML-style elements), and styling uses Tailwind CSS v4.

## Getting started

```bash
git clone https://github.com/triniwiz/nativescript-desktop-starter-template my-app
cd my-app
npm install
npm run windows   # or: npm run ios / npm run android
```

Use npm. `package.json` relies on npm `overrides`.

## Project layout

| Path | What it's for |
| --- | --- |
| `src/app.ts` | App entry. Turns on `View.preflight` and registers MasonKit's elements. |
| `src/app.css` | Tailwind, plus the `dark:`, `ios:`, `android:`, `windows:`, `phone:` and `tablet:` variants. |
| `src/components/Home.vue` | The home screen. |
| `src/components/Playground.vue` | Flexbox and Grid examples. |
| `postcss-masonkit.mjs` | Keeps the Tailwind layout utilities (`flex`, `grid`, `gap-*`, `max-w-*`, `absolute`, ...) that NativeScript's Tailwind plugin would otherwise remove. |

## Tips

- **Elements:** you can write `<div>`, `<section>`, `<h1>`, `<p>`, `<span>`,
  `<button>` and so on. The core NativeScript versions of `<button>`, `<span>`
  and `<label>` are available as `<nbutton>`, `<nspan>` and `<nlabel>`.
- **Responsive layouts:** there are no `sm:` or `md:` breakpoints. Use layouts
  that fit the space they're given instead. They also reflow when the window
  is resized:

  ```html
  <div class="grid grid-cols-[repeat(auto-fill,minmax(240,1fr))] gap-4">…</div>
  <div class="flex flex-row flex-wrap gap-4"><div class="flex-1 basis-40">…</div></div>
  <main class="mx-auto w-full max-w-5xl px-5">…</main>
  ```

- **Units:** unitless values are dp, and `px` means physical pixels, so write
  arbitrary values without a unit, for example `auto-rows-[96]`.
- **Avoid** `tracking-*`, `leading-*` and `bg-linear-*`. For gradients, write
  a `@utility` instead, like `bg-hero` in `src/app.css`.
- **Keep** `@import 'tailwindcss/theme'` and `@import 'tailwindcss/utilities'`
  in `src/app.css`, not `@import 'tailwindcss'`. Tailwind's preflight would
  hide every view.

## Temporary workarounds

These can be removed once the fixes are released:

- `@nativescript/core` and `@nativescript/vite` are installed from the
  `feat/windows` branch (`54125e1`) through pkg.pr.new.
- `@nativescript/windows` is pinned to an exact alpha, because a caret range
  would also match older, incompatible betas.
- `masonkit-hmr.mjs` stops MasonKit from loading twice during HMR.
- `postcss-selector-commas.mjs` makes classes with a comma, like
  `grid-cols-[repeat(auto-fill,minmax(240,1fr))]`, match
  ([NativeScript/NativeScript#11463](https://github.com/NativeScript/NativeScript/pull/11463)).
