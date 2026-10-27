# Ibrahim Abdullahi / IB_yaro Portfolio

Responsive React + Vite portfolio updated with a personal logo slot, five work photos, three project screenshot cards, CV links, and a floating WhatsApp button.

## Run locally

```bash
npm install
npm run dev
```

## Add your logo
Copy your IB_yaro cat-paw signature logo to `public/images/ib-yaro-logo.png`. A transparent PNG works best. If the image has a different filename or extension, update the `src` in `src/main.jsx`.

## Add your five photos
Copy your own photos into `public/images/` with these exact names:

- You working at your desk: `work-at-desk.jpeg`
- You and your team at a hackathon: `hackathon-team.jpeg`
- You teaching programming: `teaching-programming.jpeg`
- Community tech programme: `community-tech-programme.jpeg`
- Working on a project with students: `project-with-students.jpeg`

## Add project screenshots
The Kasuwa247 screenshot is included as `kasuwa247-screenshot.png`. To show real screenshots for the other projects, add them to `public/images/` using these filenames:

- `pathway-pro-screenshot.png`
- `jamb-cbt-screenshot.png`

Until those two screenshots are added, their cards display the built-in project artwork. The browser supports PNG, JPG, JPEG, and WebP.

## CV
The View CV and Download CV links point to `/cv.pdf`. Put your CV PDF in the `public` folder and name it `cv.pdf`.

## WhatsApp
The floating button opens WhatsApp for `0901 441 7010` with a prefilled greeting. The contact section includes both WhatsApp numbers and `yaroibrahim2010@gmail.com`.

## Production build

```bash
npm run build
```
