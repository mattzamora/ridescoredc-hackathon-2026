import { defineConfig } from 'vitepress'
import { placeholders } from './placeholders'
import { taskLists } from './taskLists'

// Served as a GitHub project page: https://mattzamora.github.io/ridescoredc-hackathon-2026/
export default defineConfig({
  base: '/ridescoredc-hackathon-2026/',
  title: 'RideScore DC Hackathon',
  description: 'Civic Tech DC hackathon · Sat Oct 3, 2026 · GW Science & Engineering Hall',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    codeTransformers: [placeholders],
    config: (md) => { md.use(taskLists) }
  },
  // Guides link to local dev servers that only exist on the reader's machine
  ignoreDeadLinks: [/^https?:\/\/localhost/],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Problem statements', link: '/problem-statements' },
      // Models and Community Research are hidden for now; their pages still build.
      // To restore, swap this link back for the 'Tracks' dropdown below.
      { text: 'Website / UI', link: '/tracks/website-ui' },
      // {
      //   text: 'Tracks',
      //   items: [
      //     { text: 'Models', link: '/tracks/models' },
      //     { text: 'Website / UI', link: '/tracks/website-ui' },
      //     { text: 'Community Research', link: '/tracks/community-research' }
      //   ]
      // },
      { text: 'Presenting', link: '/presenting' },
      { text: 'Acknowledgements', link: '/acknowledgements' },
      { text: 'RideScore DC', link: 'https://ridescoredc.com' }
    ],
    sidebar: {
      '/': [
        { text: 'Problem statements', link: '/problem-statements' },
        // Models track: hidden for now, pages kept
        // {
        //   text: 'Models',
        //   link: '/tracks/models',
        //   collapsed: true, // expands automatically on its own pages
        //   items: [
        //     {
        //       text: 'Challenges',
        //       items: [
        //         { text: 'Challenge 1: Safety scores', link: '/tracks/models/challenge-1' },
        //         { text: 'Challenge 2: Base map', link: '/tracks/models/challenge-2' },
        //         { text: 'Challenge 3: Data pipeline', link: '/tracks/models/challenge-3' }
        //       ]
        //     },
        //     {
        //       text: 'Reference',
        //       items: [
        //         { text: 'Setting up your computer', link: '/tracks/models/setting-up-your-computer' },
        //         { text: 'Snapshot data', link: '/tracks/models/snapshot-data' },
        //         { text: 'Submitting your work', link: '/tracks/models/submitting-your-work' },
        //         { text: 'bikescore-bna', link: '/tracks/models/bikescore-bna' }
        //       ]
        //     }
        //   ]
        // },
        {
          text: 'Website / UI',
          link: '/tracks/website-ui',
          collapsed: true,
          items: [
            {
              text: 'Setting up',
              link: '/tracks/website-ui/setting-up',
              items: [
                { text: 'Windows (WSL)', link: '/tracks/website-ui/windows-wsl' },
                { text: 'Front-End guide', link: '/tracks/website-ui/frontend-guide' },
                { text: 'Full Stack guide', link: '/tracks/website-ui/full-stack-guide' },
                { text: 'Technical guides', link: '/tracks/website-ui/making-changes' }
              ]
            },
            {
              text: 'Understanding the site',
              link: '/tracks/website-ui/understanding-the-site',
              items: [
                { text: 'Infrastructure guide', link: '/tracks/website-ui/infrastructure' },
                { text: 'How the site works', link: '/tracks/website-ui/how-the-site-works' },
                { text: 'Repository layout', link: '/tracks/website-ui/repository-layout' },
                { text: 'The data', link: '/tracks/website-ui/the-data' }
              ]
            },
            {
              text: 'Topics',
              link: '/tracks/website-ui/topics',
              collapsed: false,
              items: [
                { text: '1. Landing page design mockup', link: '/tracks/website-ui/topics/01-landing-page-design-mockup' },
                { text: '2. Build an in-app guided tour', link: '/tracks/website-ui/topics/02-in-app-guided-tour' },
                { text: '3. Make the survey work on a phone', link: '/tracks/website-ui/topics/03-survey-on-a-phone' },
                { text: '4. Rethink route drawing', link: '/tracks/website-ui/topics/04-rethink-route-drawing' },
                { text: '5. Fix the route-selector bugs', link: '/tracks/website-ui/topics/05-fix-the-route-selector-bugs' },
                { text: '6. Let riders report hazards', link: '/tracks/website-ui/topics/06-riders-report-hazards' },
                { text: '7. Explore the numbers behind the map', link: '/tracks/website-ui/topics/07-dc-by-the-numbers' },
                { text: '8. Split the page code into files', link: '/tracks/website-ui/topics/08-split-the-page-code' },
                { text: '9. Experiment with PMTiles', link: '/tracks/website-ui/topics/09-pmtiles-proof-of-concept' },
                { text: '10. Write a spec', link: '/tracks/website-ui/topics/10-write-a-spec' },
                { text: '11. Build a read-only admin page', link: '/tracks/website-ui/topics/11-read-only-admin-page' },
                { text: '12. Fix your own bug', link: '/tracks/website-ui/topics/12-your-own-bug' },
                { text: '13. Build your own feature', link: '/tracks/website-ui/topics/13-your-own-feature' }
              ]
            },
            { text: 'Submitting your work', link: '/tracks/website-ui/submitting-your-work' }
          ]
        },
        // Community Research track: hidden for now, pages kept
        // {
        //   text: 'Community Research',
        //   link: '/tracks/community-research',
        //   collapsed: true,
        //   items: [
        //     { text: 'Schedule', link: '/tracks/community-research/schedule' },
        //     { text: 'Activities', link: '/tracks/community-research/activities' },
        //     { text: 'Submitting your findings', link: '/tracks/community-research/submitting-findings' }
        //   ]
        // },
        { text: 'Presenting', link: '/presenting' },
        { text: 'Acknowledgements', link: '/acknowledgements' }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mattzamora/ridescoredc-hackathon-2026' }
    ],
    footer: {
      message: 'A Civic Tech DC project',
      copyright: 'RideScore DC Hackathon 2026'
    }
  }
})
