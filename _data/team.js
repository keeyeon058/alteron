import {
    gitflic
  } from '../.vitepress/icons.js'

export const members = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/149968334?v=4',
        name: 'keeyeon058',
        title: 'Автор проекта',
        links: [
            { icon: 'github', link: 'https://github.com/keeyeon058' }
        ]
    },
    {
      avatar: 'https://avatars.githubusercontent.com/u/20732384?v=4',
      name: 'Олег Щавелев',
      title: 'Разработчик',
      links: [
        { icon: 'github', link: 'https://github.com/OlegShchavelev' },
        {
          icon: {
            svg: gitflic
          },
          link: 'https://gitflic.ru/user/olegshchavelev'
        },
      ]
    },
  ]