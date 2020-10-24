export default {
  widgets: [
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
                  buildHookId: '5f938740f6aab7b68a0c6dfe',
                  title: 'Sanity Studio',
                  name: 'landing-urban-dental-cms-studio',
                  apiId: 'db785c36-ab92-4d73-87ca-1968924a8a50'
                },
                {
                  buildHookId: '5f938740ad6746be0e0f13ed',
                  title: 'Blog Website',
                  name: 'landing-urban-dental-cms',
                  apiId: '08e6c067-47ae-4b08-aaac-f1b31c843c03'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Redvalley2020/landing-urban-dental-cms-',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://landing-urban-dental-cms.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
