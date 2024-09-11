import { useEffect } from 'react';
import("./ScrollBox.css");

const ourProjects = "our projects"

const scrollContent = [
  {
    img: `${process.env.PUBLIC_URL}/image/our_projects/1.png`,
    mainTitle: "Light Luxe Apartments",
    subTitle_1:
      "Luxurious materials, gold and marble accents create an elegant style.",
    subTitle_2:
      "Ideal for lovers of high-class aesthetics with soft fabrics and classic design.",
  },
  {
    img: `${process.env.PUBLIC_URL}/image/our_projects/2.png`,
    mainTitle: "Modern Urban Oasis",
    subTitle_1:
      "Using contrasting colors and various textures, we brought the concept of comfort and sophistication to life.",
    subTitle_2:
      "Creates a sense of closeness to nature and the comfort of a traditional country house.",
  },
  {
    img: `${process.env.PUBLIC_URL}/image/our_projects/3.png`,
    mainTitle: "Modern & vintage space",
    subTitle_1:
      "A harmonious blend of modern and vintage styles for a unique atmosphere.",
    subTitle_2:
      "Combines sleek modern furniture with classic vintage elements for comfort and style.",
  },
  {
    img: `${process.env.PUBLIC_URL}/image/our_projects/4.png`,
    mainTitle: "Elegant Classic Mansion",
    subTitle_1:
      "Luxurious antique furniture and sophisticated decor with classicism elements.",
    subTitle_2:
      "Creates a refined atmosphere for those who love classical aesthetics.",
  },
  {
    img: `${process.env.PUBLIC_URL}/image/our_projects/5.png`,
    mainTitle: "Industrial Loft Living",
    subTitle_1:
      "A mix of raw concrete, metal accents, and large windows for an urban look.",
    subTitle_2:
      "Spacious design that blends industrial style with an open floor plan.",
  },
  // {
  //   img: `${process.env.PUBLIC_URL}/image/our_projects/7.png`,
  //   mainTitle: "Another one",
  //   subTitle_1:
  //     "lorem caram urem belim onyr",
  //   subTitle_2:
  //     "glory and the force.",
  // },
];

function CreateElements(array){

    

    return (
  <div className='scrollBar'>
        <div className="wrapper">
            <h2 className="title">{ourProjects.toLocaleUpperCase()}</h2>
          <button id="prev-slide" className="slide-button material-symbols-rounded">
            chevron_left
          </button>
          <ul className="carousel">
            {scrollContent.map((container, index) => {
              const { mainTitle, img, subTitle_1, subTitle_2 } = container;
    
              return (
                <li key={index} tabIndex="0" className="card">
                  <div className="img">
                    <img
                      draggable="false"
                      src={img}
                      alt={`image_${index+1}`}
                      key={index}
                    />
                  </div>
                  <h2 className="badge">{mainTitle.toUpperCase()}</h2>
                  <div className="subtitle">
                    <p>{subTitle_1}</p>
                    <p>{subTitle_2}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <button id="next-slide" className="slide-button material-symbols-rounded">
            chevron_right
          </button>
        </div>
        </div>
      );
}


function startLogicScroll(){
  const wrapper = document.querySelector(".wrapper")
  const carousel = document.querySelector(".carousel")
    const arrowBtns = document.querySelectorAll(".slide-button")
    const firstCardWidth = document.querySelector(".card").offsetWidth;
    // const carouselChildrens = [...carousel.children]

    // const firstCard = document.querySelector(".card");
    // firstCard.focus();

    const cards = document.querySelectorAll(".card"); // Отримуємо всі картки
    const firstCard = cards[0]; // Перша картка
    const secondCard = cards[1]; // Друга картка
  
    if (window.innerWidth < 768) {
      // Якщо ширина менше 768 пікселів, фокусуємо другу картку
      if (secondCard) {
        secondCard.focus();
      }
    } else {
      // В іншому випадку фокусуємо першу картку
      if (firstCard) {
        firstCard.focus();
      }
    }
    
    let isDragging = false, startX, startScrollLeft, timeoutID;
    
    // const

    //get the number of cards that can fit in the carousel an once

    // let cardPerView = 1;
    // let cardPerView = Math.round(carousel.offsetWidth/firstCardWidth);
    
    //insert copies of the last few cards to beginning of carousel for infinite scrolling

    // carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    //     carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
    // })
    
    //insert copies of the first few cards to end of carousel for infinite scrolling

    // carouselChildrens.slice(0, cardPerView).forEach(card => {
    //     carousel.insertAdjacentHTML('beforeend', card.outerHTML);
    // })
    
    arrowBtns.forEach(btn =>{
        btn.addEventListener('click', ()=>{
          if (btn.id === 'prev-slide') {
            // Переміщення вліво
            carousel.scrollLeft -= firstCardWidth;
          } else {
            // Переміщення вправо
            carousel.scrollLeft += firstCardWidth;
          }
            // carousel.scrollLeft += btn.id ==='prev-slide' ? -firstCardWidth : firstCardWidth
        })
    })
    
    const dragStart = (e)=>{
        isDragging = true;
        carousel.classList.add('dragging')
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft
    }
    
    const dragStop = ()=>{
        isDragging = false;
        carousel.classList.remove('dragging')
    }

    const autoPlay = ()=>{
      if(window.innerWidth <768) return
      timeoutID = setTimeout(()=> carousel.scrollLeft+=firstCardWidth, 2500)
    }
    
    autoPlay()

    const dragging = (e)=>{
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
    
    //if the carousel is at the beginning, scroll to the end
    // const infiniteScroll = ()=>{

    // if(carousel.scrollLeft === 0){
    //     carousel.classList.add("no-transition")
    // carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
    //     carousel.classList.remove("no-transition")
    
    // } 
    //     //if the carousel is at the end, scroll to the beginning

    // else if (Math.ceil(carousel.scrollLeft)===carousel.scrollWidth - carousel.offsetWidth){
    //     carousel.classList.add("no-transition")
    //     carousel.scrollLeft = carousel.offsetWidth;
    //     carousel.classList.remove("no-transition")
    
    // }

    // clearTimeout(timeoutID)
    // if(wrapper.matches(":hover"))autoPlay()
    // }
    
    carousel.addEventListener('mousedown', dragStart)
    carousel.addEventListener('mousemove', dragging)
    document.addEventListener('mouseup', dragStop)
    // carousel.addEventListener('scroll', infiniteScroll)
    wrapper.addEventListener('mouseenter', ()=> clearTimeout(timeoutID))
    wrapper.addEventListener('mouseleave', autoPlay)

}

function ScrollBox() {
    useEffect(() => {
      startLogicScroll();
    }, []);
  

    return <CreateElements array={scrollContent}></CreateElements>;
  }

export default ScrollBox;
