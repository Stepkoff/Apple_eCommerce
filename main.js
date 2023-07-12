const anchors = document.querySelectorAll('.phones__btn')
anchors.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
  })
})

// ========= hero

// hero slide-show
const slideShowCreateDivs = () => {
  const heroSliderContainer = document.querySelector('.hero__slide-show');
  for(let i = 1; i <= 5; i++) {
    const div = document.createElement('div')
    div.style.background = `url(public/images/slideshow/section-1-bg-${i}.jpg) 0 0/cover no-repeat`
    // div.style.background = `url(/images/slideshow/section-1-bg-${i}.jpg) 0 0/cover no-repeat`
    if(i === 1) {
      div.classList.add('hero__slide--active')
    }
    heroSliderContainer.appendChild(div)
  }
}
const startSlideShow = () => {
  const slides = document.querySelectorAll('.hero__slide-show div')
  let a = 1
  setInterval(() => {
    a++
    const div = document.querySelector('.hero__slide--active');
    div.classList.remove('hero__slide--active');
    if(a <= slides.length) {
      div.nextElementSibling.classList.add('hero__slide--active')
    } else {
      slides[0].classList.add('hero__slide--active')
      a = 1
    }
  }, 4000)
}
slideShowCreateDivs()
startSlideShow()
// cube
const runCube = () => {
  let xAxis = 0
  let yAxis = 20
  let zAxis = 0
  let bool = true
  let interval
  const cube = document.querySelector('.cube__item')

  const playPause = () => {
    if(bool) {
      interval = setInterval(() => {
        cube.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis++}deg) rotateZ(${zAxis}deg)`
      }, 100)
    } else {
      clearInterval(interval)
    }
  }
  document.querySelector('.cube__top-x-control').addEventListener('click', (e) => {
    e.preventDefault()
    cube.style.transform = `rotateX(${xAxis += 20}deg) rotateY(${yAxis}deg) rotateZ(${zAxis}deg)`
  })
  document.querySelector('.cube__bottom-x-control').addEventListener('click', (e) => {
    e.preventDefault()
    cube.style.transform = `rotateX(${xAxis -= 20}deg) rotateY(${yAxis}deg) rotateZ(${zAxis}deg)`
  })
  document.querySelector('.cube__left-y-control').addEventListener('click', (e) => {
    e.preventDefault()
    cube.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis -= 20}deg) rotateZ(${zAxis}deg)`
  })
  document.querySelector('.cube__right-y-control').addEventListener('click', (e) => {
    e.preventDefault()
    cube.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis += 20}deg) rotateZ(${zAxis}deg)`
  })
  document.querySelector('.cube__top-z-control').addEventListener('click', (e) => {
    e.preventDefault()
    cube.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg) rotateZ(${zAxis += 20}deg)`
  })
  document.querySelector('.cube__bottom-z-control').addEventListener('click', (e) => {
    e.preventDefault()
    cube.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg) rotateZ(${zAxis -= 20}deg)`
  })
  const cubeControls = document.querySelector('.cube__controls')
  cubeControls.addEventListener('mouseover', () => {
    bool = false
    playPause()
  })
  cubeControls.addEventListener('mouseout', () => {
    bool = true
    playPause()
  })
  playPause()
}
runCube()
// ========= end of hero
// ========= MacBook
const macBookContent = document.querySelector('.macBook__content');
const observer = new IntersectionObserver(entries => {
  if(entries[0].isIntersecting) {
    macBookContent.classList.add('macBook__content--visible')
  } else {
    macBookContent.classList.remove('macBook__content--visible')
  }
})
observer.observe(macBookContent)
// ========= end of MacBook

// ========= watches

const runWatches = () => {
  const watchBands = document.querySelector('.watches__bands')
  const watchCases = document.querySelector('.watches__cases')

  const watchTopControl = document.querySelector('.watches__controls-top')
  const watchRightControl = document.querySelector('.watches__controls-right')
  const watchBottomControl = document.querySelector('.watches__controls-bottom')
  const watchLeftControl = document.querySelector('.watches__controls-left')
  let axisY = 0
  let axisX = 0

  const hideControl = () => {
    if(axisY <= -280) {
      watchTopControl.classList.add('watches__controls--disabled')
    } else {
      watchTopControl.classList.remove('watches__controls--disabled')
    }
    if(axisY >= 280) {
      watchBottomControl.classList.add('watches__controls--disabled')
    } else {
      watchBottomControl.classList.remove('watches__controls--disabled')
    }
    if(axisX <= -280) {
      watchLeftControl.classList.add('watches__controls--disabled')
    } else {
      watchLeftControl.classList.remove('watches__controls--disabled')
    }
    if(axisX >= 280) {
      watchRightControl.classList.add('watches__controls--disabled')
    } else {
      watchRightControl.classList.remove('watches__controls--disabled')
    }
  }

  watchTopControl.addEventListener('click', (e) => {
    e.preventDefault()
    watchCases.style.marginTop = `${axisY -= 70}rem`
    hideControl()
  })
  watchRightControl.addEventListener('click', (e) => {
    e.preventDefault()
    watchBands.style.marginRight = `${axisX += 70}rem`
    hideControl()
  })
  watchBottomControl.addEventListener('click', (e) => {
    e.preventDefault()
    watchCases.style.marginTop = `${axisY += 70}rem`
    hideControl()
  })
  watchLeftControl.addEventListener('click', (e) => {
    e.preventDefault()
    watchBands.style.marginRight = `${axisX -= 70}rem`
    hideControl()
  })

}
runWatches()
// ========= end of watches

