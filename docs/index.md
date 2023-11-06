---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ALT Regular KDE"
  text: "Community"
  image:
    src: /laptop.svg
    alt: Gnome
  tagline: открытое сообщество пользователей операционной системы ALT Regular KDE
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

 <script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPHomeSponsors,
  VPSponsors
} from 'vitepress/theme'
import { members } from '../_data/team'
import { sponsors } from '../_data/sponsors'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Участники
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<VPHomeSponsors
    v-if="sponsors"
    message="Данный сервис является Open-Source проектом и его поддержка и развитие зависит только от нашей совместной активности."
    :data="sponsors"
  />