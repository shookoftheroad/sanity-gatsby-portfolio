export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e31613715989a7019c18ce4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-yi5a2wnz',
                  apiId: '3ed19291-8177-440d-a961-5c6e0bf8c14e'
                },
                {
                  buildHookId: '5e316137a5c45a25e5e3b20e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1jztetdg',
                  apiId: '7966b905-4e52-49ac-82ed-8dcdc046815d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shookoftheroad/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1jztetdg.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
