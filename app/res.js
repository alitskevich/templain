export default {
  top: {
    title: 'Протоколы',
    sitemap: [
      {
        id: 'commons',
        name: 'Общие',
        items: [
          { id: 'consult', name: 'Консультация', icon2: 'home' },
          { id: 'peqen', name: 'УЗИ Печень', icon: 'work' }
        ]
      },
      {
        id: 'uzi',
        name: 'УЗИ',
        items: [
          { id: 'consult', name: 'УЗИ Консультация', icon2: 'home' },
          { id: 'peqen', name: 'УЗИ Печень', icon: 'work' },
          { id: 'brushnajaPolost', name: 'УЗИ брюшной полости', icon: 'work' },
          { id: 'serdce', name: 'УЗИ Сердце', icon: 'work' }
        ]
      }
    ]
  },
  pages: {
    peqen: {
      initials: {
        size: 5,
        resolution: 'проктически здоров.',
        echo_structure: 0
      },
      title: 'УЛЬТРАЗВУКОВОЕ ИССЛЕДОВАНИЕ ПЕЧЕНИ И ЖЕЛЧНОГО ПУЗЫРЯ',
      subtitle: 'С ЦВЕТОВЫМ И ЭНЕРГЕТИЧЕСКИМ ДОППЛЕРОВСКИМ КАРТИРОВАНИЕМ'
    },
    serdce: {
      initials: {
        size: 5,
        resolution: 'проктически здоров.',
        echo_structure: 0
      },
      title: 'УЛЬТРАЗВУКОВОЕ ИССЛЕДОВАНИЕ СЕРДЦА',
      subtitle: ''
    },
    brushnajaPolost: {
      initials: {
        size: 5,
        resolution: 'проктически здоров.',
        echo_structure: 0
      },
      title: 'УЛЬТРАЗВУКОВОЕ ИССЛЕДОВАНИЕ БРЮШНОЙ ПОЛОСТИ',
      subtitle: ''
    },
    consult: {
      initials: {
        size: 5,
        resolution: 'проктически здоров. годен к строевой службе.'
      },
      title: 'ОБЩАЯ КОНСУЛЬТАЦИЯ',
      subtitle: 'С ЦВЕТКОМ И ШОКОЛАДКОЙ'
    }

  },
  enums: {
    abnormal: [
      { id: 0, name: 'норма' },
      { id: 1, name: 'отклонения' }
    ],
    extended: [
      { id: 0, name: 'не расширены' },
      { id: 1, name: 'расширены' }
    ],
    exists: [
      { id: 0, name: 'нет' },
      { id: 1, name: 'есть' }
    ],
    peqen_echo_structure: [
      { id: 0, name: 'однородная' },
      { id: 1, name: 'нарушена' }
    ],
    peqen_contours: [
      { id: 0, name: 'ровные' },
      { id: 1, name: 'неровные' }
    ],
    peqen_sosud_rysunok: [
      { id: '', name: 'норма' },
      { id: 'ветви не прослеживаются' },
      { id: 'ветви прослеживаются до периферии' }
    ],
    gender: [
      { id: 'm', name: 'Мужской' },
      { id: 'f', name: 'Женский' }
    ]
  }
}
