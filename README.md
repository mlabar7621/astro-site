## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

## Updates

Due to technical problems, this theme is not entirely modular when it come to language.

When adding a new locale, you must create new folders titled with the slug at:
- src\content\blog\
- src\pages\
- src\pages\blog

You must then copy the \tag blog folder into the new \blog\slug folder

You must then manually update/add your new slug in:
- src\i18n\locales.ts
- src\i18n\ui.ts
- every file in \pages\blog