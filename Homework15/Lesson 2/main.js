const containerMenu = [{
    title: 'Dashboard',
    link: '/dashboard',
    children: [{
        title: 'Tool',
        link: '/dashboard/tool'
      },
      {
        title: 'Reports',
        link: '/dashboard/reports'
      },
      {
        title: 'Analytics',
        link: '/dashboard/analytics'
      },
      {
        title: 'Code Blocks',
        link: '/dashboard/code-blocks'
      },
    ]
  },
  {
    title: 'Sales',
    link: '/sales',
    children: [{
        title: 'New Sales',
        link: '/sales/new-sales'
      },
      {
        title: 'Expired Sales',
        link: '/sales/expired-sales'
      },
      {
        title: 'Sales Reports',
        link: '/sales/sales-reports'
      },
      {
        title: 'Deliveries',
        link: '/sales/deliveries'
      },
    ]
  },
  {
    title: 'Messages',
    link: '/messages',
    children: [{
        title: 'Inbox',
        link: '/messages/inbox'
      },
      {
        title: 'Outbox',
        link: '/messages/outbox'
      },
      {
        title: 'Sent',
        link: '/messages/sent'
      },
      {
        title: 'Archived',
        link: '/messages/archived'
      },
    ]
  },
  {
    title: 'Users',
    link: '/users',
    children: [{
        title: 'New User',
        link: '/users/new-user'
      },
      {
        title: 'User Groups',
        link: '/users/user-groups'
      },
      {
        title: 'Permissions',
        link: '/users/permissions'
      },
      {
        title: 'passwords',
        link: '/users/passwords'
      },
    ]
  },
  {
    title: 'Settings',
    link: '/settings',
    children: [{
        title: 'Databases',
        link: '/settings/databases'
      },
      {
        title: 'Design',
        link: '/settings/design'
      },
      {
        title: 'Change User',
        link: '/settings/change-user'
      },
      {
        title: 'Log Out',
        link: '/settings/log-out'
      },
    ]
  },
]

const listIconContainer = {
  Dashboard: '<i class="fal fa-tachometer-alt"></i>',
  Sales: '<i class="fas fa-truck-moving"></i>',
  Messages: '<i class="fas fa-envelope"></i>',
  Users: '<i class="fas fa-user-friends"></i>',
  Settings: '<i class="fas fa-cog"></i>'
}

const createMenuContainer = (tagUl, containerMenu, listIconContainer = {}) => {
  for (let i = 0; i < containerMenu.length; i++) {
    const tagLi = document.createElement('li')
    tagLi.appendChild(
      createTagAMenuContainer(listIconContainer, containerMenu[i])
    )
    tagLi.classList.add('container-item')
    if (containerMenu[i].children) {
      const ul = document.createElement('ul')
      createMenuContainer(ul, containerMenu[i].children)
      tagLi.appendChild(ul)
      ul.classList.add('container_dropdown-list')
    }
    tagUl.appendChild(tagLi)
    tagUl.classList.add('container-list')
  }
}

const renderMenuContainer = () => {
  const tagUl = document.createElement('ul')
  createMenuContainer(tagUl, containerMenu, listIconContainer)
  const boxContainer = document.querySelector('.container')
  boxContainer.appendChild(tagUl)
}

const createTagAMenuContainer = (listIconContainer = {}, containerMenu) => {
  const iconArrow = '<i class="fas fa-angle-right"></i>'
  const tagA = document.createElement('a')
  const spanText = document.createElement('span')
  const spanIcon = document.createElement('span')
  const spanIconArrow = document.createElement('span')

  tagA.setAttribute('href', containerMenu.link)
  tagA.classList.add('shallow-link')
  spanText.innerText = containerMenu.title
  spanText.classList.add('container-text')

  for (let key in listIconContainer) {
    if (key === containerMenu.title) {
      spanIcon.insertAdjacentHTML('afterbegin', listIconContainer[key])
      spanIcon.classList.add('container-icon')
      tagA.appendChild(spanIcon)
      tagA.appendChild(spanText)
      spanIconArrow.classList.add('container-icon--arrow')
      spanIconArrow.insertAdjacentHTML('afterbegin', iconArrow)
      tagA.appendChild(spanIconArrow)
    }
  }
  if (Object.keys(listIconContainer).length === 0) {
    tagA.appendChild(spanText)
  }
  return tagA
}

renderMenuShallow()

const eventClickContainer = e => {
  const borderItem = e.currentTarget
  const clickNodeText = borderItem.querySelectorAll('.container_dropdown-list')
  e.preventDefault()
  borderItem.style.border = 'none'
  const iconArrow = borderItem.querySelector('.container-icon--arrow')
  iconArrow.classList.toggle('container-icon--reotate')
  clickNodeText.forEach(item => {
    item.classList.toggle('display-block')
  })
}

const listLi = document.querySelectorAll('.container-list .container-item')
listLi.forEach(li => {
  li.addEventListener('click', eventClickContainer)
})