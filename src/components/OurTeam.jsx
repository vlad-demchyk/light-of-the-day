import { useEffect, useState } from "react";
import "../components/OurTeam.css";

const teamList = [
  {
    name: "Emily Harper",
    url: `${process.env.PUBLIC_URL}/image/our_team/1.png`,
    profession: "Eclectic Design Expert",
    description:
      "An eclectic design expert, combines styles and textures for unique, expressive interiors. She has a knack for creating spaces that feel both familiar and refreshingly unique, ensuring each project stands out while maintaining cohesion and balance throughout.",
  },
  {
    name: "Jacob Reed",
    url: `${process.env.PUBLIC_URL}/image/our_team/2.png`,
    profession: "Interior Design Professor",
    description:
      "Professor of the Faculty of Interior Design, creates incredible projects. Jacob’s work combines traditional techniques with modern innovations to produce designs that are both timeless and contemporary, constantly pushing the boundaries of interior design education.",
  },
  {
    name: "Olivia Morgan",
    url: `${process.env.PUBLIC_URL}/image/our_team/3.png`,
    profession: "Classical & Innovative Designer",
    description:
      "Blends classical elegance with innovation for harmonious interiors. Olivia has an exceptional ability to create spaces that seamlessly integrate timeless charm with modern functionality, ensuring both comfort and beauty in every corner of the room.",
  },
  {
    name: "Ethan Bennett",
    url: `${process.env.PUBLIC_URL}/image/our_team/4.png`,
    profession: "Modern Interior Designer",
    description:
      "With 15 years' experience, transforms spaces into modern masterpieces. Ethan’s unique approach to design focuses on clean lines, minimalism, and functional elegance, offering his clients sophisticated yet highly livable modern environments.",
  },
  {
    name: "Sophia Brooks",
    url: `${process.env.PUBLIC_URL}/image/our_team/5.png`,
    profession: "Minimalist Space Designer",
    description:
      "Her expertise lies in crafting minimalist spaces where each carefully considered detail not only contributes to the overall aesthetic appeal but also serves a vital functional purpose, resulting in environments that are both visually striking and efficiently designed.",
  },
  
];

function CreateDom() {
  
  const [focusedIndex, setFocusedIndex] = useState(0); // За замовчуванням фокус на першій картці
  const [clickedIndex, setClickedIndex] = useState(0); // Відслідковує останню клікнуту картку

   // Встановлюємо фокус на першу картку при завантаженні сторінки
   useEffect(() => {
    setFocusedIndex(0); // При завантаженні першій картці присвоюється фокус
  }, []);


    // Функції для обробки входу та виходу мишки з враппера
    function handleMouseEnter() {
      // При вході у враппер нічого не змінюємо, картка залишається активною
      setFocusedIndex(clickedIndex); // Встановлюємо фокус на останній клікнутий індекс
    }
  
    function handleMouseLeave() {
      // При виході з враппера фокус залишається на останній активній картці
      setFocusedIndex(clickedIndex); // Оновлюємо стан фокусу на останню клікнуту картку
    }

      // Функція для обробки кліку на картку
  function handleCardClick(index) {
    setFocusedIndex(index); // Встановлюємо фокус на клікнуту картку
    setClickedIndex(index); // Зберігаємо індекс клікнутої картки для подальшого використання
  }

  return (
    <section 
    className="team-wrapper">
      <div 
      className="team-list"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        {teamList.map((person, index) => {
          const { name, url, profession, description } = person;
          return (
            <div 
            key={index} 
            tabIndex="0" 
            className={`card-item-team ${focusedIndex === index ? 'focused' : ''}`}
            onClick={() => handleCardClick(index)}
            >
              <div className='card-text'>
              <div className="name">
                <span>{`${index + 1}/${teamList.length}`}</span>
                <p>{name.toLocaleUpperCase()}</p>
              </div>
              <p className="description-text">{description}</p>
              </div>
              <div className="image-person">
              <img src={`${url}`} alt={name} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// function startLogicOurTeam(){

//   // const cardWrapper = document.querySelector('.team-list');
//   const cards = document.querySelector('.card-item-team'); // Беремо одну картку для вимірювання
//   // const cardWidth = cards[Math.floor(cards.length/2)].offsetWidth;

//   // Math.floor(cards.length/2).focus()
  
//   // // Кількість карток (5 карток)
//   // const numberOfCards = cards.length;
  
//   // // Повна ширина з урахуванням відступів
//   // const totalContentWidth = numberOfCards * (cardWidth); // Остання картка без відступу після себе
  
//   // // Прокручуємо обгортку на половину цієї ширини
//   // cardWrapper.scrollLeft = totalContentWidth / 2 + cardWidth;

//   cards.focus();
// }

function OurTeam() {
  // useEffect(() => {
  //   setTimeout(()=>{startLogicOurTeam()}, 10)
  // }, []);

  return (
    <div className="carousel-container">
         <img className="scale" src={`${process.env.PUBLIC_URL}/image/our_team/scale.png`} />
      <h3>{"Meet Our Experts".toUpperCase()}</h3>
      <CreateDom></CreateDom>
    </div>
  );
}

export default OurTeam;