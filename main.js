const dropDowns = () => {
  const menus = document.querySelectorAll('.this-expands');



  menus.forEach(menu => {
    let dropDown = menu.querySelector('#drop-down'),
        events = ['touchstart', 'mouseenter', 'mouseleave'];

    events.forEach(e => {
      menu.addEventListener(e, () => {
        dropDown.classList.toggle('hide')
      })
    })

  })
}


const imageCarousel = () => {
  const container = document.querySelector('.image-container');
  const carousel = document.querySelector('.carousel')
  const dotsDiv = document.getElementById('dots')
  let i = 0;
  let children = Array.from(container.children);
  console.log(children)
  children.forEach(child => {
    i += 1
    child.dataset.imgId= i

    let dot = document.createElement('div')

    dot.classList.add('img-dot')

    dot.dataset.dotId = i
    if (i == 1) {dot.classList.add('current-dot')}
    dotsDiv.appendChild(dot)
  })

  const nextImg = () => {
    let current = container.querySelector('#current-slide'),
        currentId = +current.dataset.imgId,
        nextID = (currentId + 1 <= i) ? currentId + 1 : 1;
    let next = container.querySelector(`[data-img-id='${nextID}']`)
    current.id = ''
    next.id = 'current-slide'
    let currentDot = dotsDiv.querySelector(`[data-dot-id='${currentId}']`),
        nextDot = dotsDiv.querySelector(`[data-dot-id='${nextID}']`);

    currentDot.classList.toggle('current-dot');
    nextDot.classList.toggle('current-dot');

  }


  const prevImg = () => {
    let current = container.querySelector('#current-slide'),
        currentId = +current.dataset.imgId,
        prevID = (currentId - 1 > 0) ? currentId - 1 : i;
    let prev = container.querySelector(`[data-img-id='${prevID}']`) || container.querySelector(`[data-img-id='${i}']`)
    current.id = ''
    prev.id = 'current-slide'



    let currentDot = dotsDiv.querySelector(`[data-dot-id='${currentId}']`),
        prevDot = dotsDiv.querySelector(`[data-dot-id='${prevID}']`);

    currentDot.classList.toggle('current-dot');
    prevDot.classList.toggle('current-dot');
  }

  let prevbutton = document.getElementById('prev-img'),
      nextbutton = document.getElementById('next-img')
  console.log(prevbutton)
  prevbutton.addEventListener('click', () => prevImg())
  nextbutton.addEventListener('click', () => nextImg())
}



dropDowns()
imageCarousel()
