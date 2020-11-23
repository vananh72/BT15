const timeline = [{
    2000: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo culpa aperiam possimus inventore sequi libero at esse nihil repellat quia!',
    2001: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo culpa aperiam possimus inventore sequi libero at esse nihil repellat quia!',
    2002: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo culpa aperiam possimus inventore sequi libero at esse nihil repellat quia!',
    2003: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo culpa aperiam possimus inventore sequi libero at esse nihil repellat quia!',
    2004: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo culpa aperiam possimus inventore sequi libero at esse nihil repellat quia!'
  }]
  
  const showTimeline = (timeline, tagUl) => {
    timeline.forEach(item => {
      for (let key in item) {
        const tagLi = document.createElement('li')
        const boxText = document.createElement('div')
        const title = document.createElement('h4')
        const subTitle = document.createElement('p')
  
        tagLi.classList.add('timeline_item')
        tagLi.appendChild(boxText)
  
        boxText.classList.add('box_text')
        boxText.appendChild(title)
        boxText.appendChild(subTitle)
  
        title.innerText = key
        title.classList.add('box_text-title')
  
        subTitle.innerText = item[key]
        subTitle.classList.add('box_text-subtitle')
  
        if (Number(key) % 2 === 0) {
          boxText.classList.add('box_right')
        } else {
          boxText.classList.add('box_left')
        }
        tagUl.appendChild(tagLi)
      }
    })
    tagUl.classList.add('timeline_list')
  }
  
  const renderTimeline = () => {
    const box = document.querySelector('.timeline')
    const tagUl = document.createElement('ul')
    showTimeline(timeline, tagUl)
    box.appendChild(tagUl)
  }
  
  renderTimeline()
  
  const eventTimeline = e => {
    const eleClick = e.currentTarget
    const box = eleClick.querySelector('.box_text')
    box.classList.toggle('display-block')
  }
  
  const eleEventTimeline =
    document.querySelectorAll('.timeline_list .timeline_item')
  eleEventTimeline.forEach(ele => {
    ele.addEventListener('click', eventTimeline)
  })