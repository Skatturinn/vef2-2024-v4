# Vefforritun 2, 2024, verkefni 4: React framendi

Verkefnið snýst um að setja upp react framenda fyrir vefþjónustur, hugsanlega þá sem gerð var í verkefni 3.

## Markmið

- Uppsetning og notkun á React með [Create React App (CRA)](https://create-react-app.dev/) eða [Next.js](https://nextjs.org/).
- Noktun á React components með props og state.
- Routing í React verkefnum.

## Vefþjónustur og gögn

Í boði eru þrjár leiðir til að nálgast gögn fyrir verkefnið:

1. Nota vefþjónustur sem þið smíðuðuð í verkefni 3.
2. Nota [sýnilausn á verkefni 3](https://github.com/vefforritun/vef2-2023-v3-synilausn) (gefin út 8. mars).
3. Nota aðrar vefþjónustur sem eru í boði, t.d. vefþjónustur sem notaðar voru í [verkefni 9 árið 2022 í vef1 (bókaleit)](https://github.com/vefforritun/vef1-2022-v9) eða í [verkefni 9 árið 2023 í vef1 (geimskotaleit)](https://github.com/vefforritun/vef1-2023-v9).

## Virkni

Setja skal upp a.m.k. þrjár síður:

- Forsíðu sem birtir takmarkaðan lista af gögnum.
- Listasíðu sem birtir heildarlista af gögnum.
- Síðu sem birtir stakt atriði.

Setja skal upp gagnvirkni, sjá að neðan.

Ef CRA er notað skal nota [react router](https://reactrouter.com/en/main) til að setja upp routing og nota það til að viðhalda stöðu á milli síðna. Ef Next.js er notað skal nota `pages/` möppu eða _app router_ (`app/` mappa) fyrir routing.

### Forsíða

Forsíða með einhverjum titli, efni og lista af atriðum, t.d. seinustu leikir, bækur eða geimskot.

Ef verkefni 3 er notað og ákveðið að útfæra liða gagnvirkni skal hér vera hægt að búa til nýtt lið, eyða liði og breyta liði.

### Yfirlitssíða

Yfirlit yfir öll atriði, t.d. allir leikir, bækur eða geimskot.

Ef verkefni 3 er notað er ekki síðufletting og öllu skilað í einu.

Ef verkefni 3 er notað og ákveðið að útfæra leikja gagnvirkni skal hér vera hægt að búa til nýjan leik og eyða leik

Ef önnur verkefni eru notuð skal vera síðufletting hér.

### Síða fyrir stakt atriði

Síða sem birtir stakt atriði, t.d. stakan leik, bók eða geimskot.

Ef verkefni 3 er notað og ákveðið að útfæra leikja gagnvirkni skal hér vera hægt að breyta stöðu á leik.

### Gagnvirkni

Eitt af eftirfarandi:

- Búa til nýtt lið, eyða liði og breyta liði (ef verkefni 3 notað).
- Búa til nýjan leik og eyða leik (ef verkefni 3 notað).
- Breyta stöðu á leik (ef verkefni 3 notað).
- Leit og síðufletting (ef verkefni úr vef1 notuð).
  - Taka þarf afstöðu til þess hvernig útfært, hversu marga möguleika á að vera hægt leit eftir og hvernig leit er framkvæmd.
  - Síðufletting þarf að leyfa að fara fram og til baka og taka tillit til hvort fyrri og næsta síða séu til staðar.

Ef villur koma upp frá vefþjónustu skal birta þær.

Ekki þarf að útfæra neina auka validation í framendanum fyrir utan að setja viðeigandi attribute á `<input>` ef það er talið nauðsynlegt.

### Components

Setja skal upp a.m.k. fimm componenta sem halda utan um viðeigandi stöðu og taka við gögnum gegnum props. Það er frjálst að útbúa fleiri componenta ef það er nauðsynlegt.

Hugmyndir að componentum:

- `Layout` component sem heldur utan um header, efni og footer á síðu.
- `List` component sem birtir lista af atriðum.
- `Detail` component sem birtir stakt.
- Form componenta: `Form`, `Input` og `Button`. Ekki þarf að útbúa sértæka componenta fyrir lengri texta eða tölur fyrir einingar.

## Viðmót

Útbúa skal einfalt viðmót sem uppfyllir kröfur um virkni.

## Tæki, tól og test

Setja skal upp verkefni með `create react app` (CRA) eða NextJS.

Setja skal upp (eða nota uppsettningu með viðeigandi framework) `eslint`. Engar villur skulu vera til staðar.

## Annað

Grunnslóð (_base url_) á vefþjónustu skal geyma í env breytu (sjá [skjölun fyrir CRA](https://create-react-app.dev/docs/adding-custom-environment-variables/) og [skjölun fyrir NextJS](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#exposing-environment-variables-to-the-browser).

Ef notaðar eru vefþjónustur úr verkefni 3 getur verið gott að hafa vefþjónustur keyrandi _locally_, þá er viðeigandi slóð sett í env breytu, t.d. `NEXT_PUBLIC_API_BASE_URL=https://example.org/`.

## GitHub og hýsing

Setja skal upp vefinn á Netlify, Vercel, Render, Railway eða Heroku (ath að uppsetning á Heroku mun kosta) tengt við vefþjónustur í _annari_ uppsetningu.

## Mat

- 10% — Forsíða.
- 10% — Yfirlistasíða.
- 10% — Síða fyrir stakt atriði.
- 10% – Routing.
- 20% – Gagnvirkni
- 20% — Components.
- 10% — Viðmót.
- 10% — Tæki, tól og test; GitHub og hýsing.

## Sett fyrir

Verkefni sett fyrir á Canvas sunnudaginn 3. mars 2024.

## Skil

Skila skal í Canvas í seinasta lagi fyrir lok dags fimmtudaginn 21. mars 2024.

Skil skulu innihalda:

- Slóð á verkefni keyrandi í hýsingu.
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `osk`
  - `polarparsnip`
  - `sturla-freyr`

## Einkunn

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Ef stórt mállíkan (LLM, „gervigreind“, t.d. ChatGTP) er notað til að skrifa part af lausn skal taka það fram. [Sjá nánar á upplýsingasíða um gervigreind hjá HÍ](https://gervigreind.hi.is/).

Sett verða fyrir ([sjá nánar í kynningu á áfanga](https://github.com/vefforritun/vef2-2024/blob/main/namsefni/01.kynning/1.kynning.md)):

- fimm minni sem gilda 10% hvert, samtals 50% af lokaeinkunn.
- tvö hópverkefni þar sem hvort um sig gildir 20%, samtals 40% af lokaeinkunn.
- einstaklingsverkefni sem gildir 10–20% af lokaeinkunn.

---

> Útgáfa 0.1

| Útgáfa | Breyting      |
| ------ | ------------- |
| 0.1    | Fyrsta útgáfa |

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
