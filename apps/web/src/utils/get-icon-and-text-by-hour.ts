import { CloudSunny, EmojiSad, Moon, SunFog } from 'iconsax-react'

const ICON_CARD_BASED_ON_HOUR = [
    {
      icon: SunFog,
      text: 'Manhã',
      slug: 'morning'
    },
    {
      icon: CloudSunny,
      text: 'Tarde',
      slug: 'afternoon'
    },
    {
      icon: Moon,
      text: 'Noite',
      slug: 'night'
    }
]

interface IconCard {
  icon: typeof SunFog
  text: string,
  slug: 'morning' | 'afternoon' | 'night' | 'default'
}

export function getIconAndTextByHour (key: string): IconCard {
  
  const data = ICON_CARD_BASED_ON_HOUR.find(d => d.slug === key)

  if (data) return {
    icon: data.icon,
    slug: data.slug as any,
    text: data.text
  }

  return {
    text: 'Fora do horário',
    icon: EmojiSad,
    slug: 'default'
  }
}
