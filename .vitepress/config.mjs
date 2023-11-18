import { defineConfig } from 'vitepress'
import { telegram, gitflic } from './icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ALTeron",
  base: '/alteron/',
  srcDir: './docs', 
  description: "открытое сообщество пользователей операционной системы ALT Regular KDE",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Документация', link: '/wiki' },
      {
        text: 'Пролог',
        items: [
          { text: 'О проекте', link: '/about' },
          { text: 'Возможности VitePress', link: '/vitepress' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                noResultsText: 'Нет результатов по запросу',
                resetButtonTitle: 'Сбросить',
                footer: {
                  selectText: 'для выбора',
                  navigateText: 'для навигации',
                  closeText: 'закрыть'
                }
              }
            }
          }
        }
      }
    },
    sidebar: [
      {
        items: [
          { text: 'Быстрый старт', link: '/quick-start' },
          {
            text: 'Установка и обновление программ',
            items: [
              { text: 'qBittorrent', link: '/qbittorrent' },
            ]
          }
        ]
      },

    ],
    socialLinks: [
      {
        icon: {
          svg: telegram
        },
        link: 'https://t.me/altregularkde'
      },
      { icon: 'github', link: 'https://github.com/keeyeon058/alteron' }
    ],
    editLink: {
      pattern: 'https://github.com/OlegShchavelev/ALTRegularGnomeWiki/edit/main/docs/:path',
      text: 'Предложить изменения на этой странице'
    },
    lastUpdated: {
      text: 'Последнее обновление',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    sponsor: {
      message:
        'Данный сервис является Open-Source проектом и его поддержка и развитие зависит от пожертвований.',
      linkText: 'Поддержать проект!'
    },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    outlineTitle: 'Оглавление',
    footer: {
      message: 'Содержание доступно по лицензии MIT',
      copyright: '2023 ALT Regular Gnome Community, разработано на платформе VitePress 1.0.0-rc.25'
    }
  },
  markdown: {
    container: {
      tipLabel: 'Подсказка',
      warningLabel: 'Внимание',
      dangerLabel: 'Осторожно',
      infoLabel: 'Информация',
      detailsLabel: 'Подробнее',
    },
  
  },

})
