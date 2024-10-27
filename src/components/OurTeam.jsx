import { useEffect, useState, useRef } from "react";
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

function wheelScrollEffect(ref) {
  if (!ref.current) return; // перевірка на наявність

  const cardWrapper = ref.current; // дом-елемент

 const handleWheelScroll = (e) => { // функція при взаємодіі на дом-елементі

  const scrollLimitMax  = cardWrapper.scrollWidth - cardWrapper.clientWidth
  const scrollPositionNum = Math.ceil(cardWrapper.scrollLeft)
  const atLeftEdge = scrollPositionNum === 0; //умова чи досягнуто край лівий
  const atRightEdge = scrollPositionNum + cardWrapper.clientWidth >= cardWrapper.scrollWidth;//умова чи досягнуто край правий

  if ((atLeftEdge && e.deltaY < 0) || (atRightEdge && e.deltaY > 0)) {
    return;
  }
  /*} else if (scrollPositionNum === scrollLimitMax && e.deltaY > 0){
  //   console.log('Ти на межі скролу')
  //   return; // вихід зі скролу на мобільній версіЇ
   } else if (cardWrapper.scrollLeft >= cardWrapper.scrollWidth - cardWrapper.clientWidth){} */

    e.preventDefault();
    cardWrapper.scrollLeft += (e.deltaY*0.3); // Використовуємо deltaY для горизонтальної прокрутки
    cardWrapper.scrollLeft += (e.deltaX*0.3); // Використовуємо deltaY для горизонтальної прокрутки
};

cardWrapper.addEventListener("wheel", handleWheelScroll);

// Прибираємо слухача події при розмонтуванні компонента
return () => cardWrapper.removeEventListener("wheel", handleWheelScroll);
}

function CreateWrapper() {
  const cardWrapperRef = useRef(null);
  const [focusedIndex, setFocusedIndex] = useState(0); // За замовчуванням фокус на першій картці
  // const [clickedIndex, setClickedIndex] = useState(0); // Відслідковує останню клікнуту картку

  // Встановлюємо фокус на першу картку при завантаженні сторінки
  useEffect(() => {
    setFocusedIndex(0); // При завантаженні першій картці присвоюється фокус
  }, []);

  useEffect(() => {
    wheelScrollEffect(cardWrapperRef); // Додаємо ефект скролінгу
  }, []);

  /* function handleMouseEnter() {
  //   setFocusedIndex(clickedIndex);
  // }

  // function handleMouseLeave() {
  //   setFocusedIndex(clickedIndex);
  } */

  function handleCardClick(index) {
    setFocusedIndex(index);
    // setClickedIndex(index);
  }

  return (
    <section className="team-wrapper">
      <div
        ref={cardWrapperRef}
        className="team-list"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        {teamList.map((person, index) => {
          const { name, url, description } = person;
          return (
            <div
              key={index}
              tabIndex="0"
              className={`card-item-team ${
                focusedIndex === index ? "focused" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-text">
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

function OurTeam() {
  return (
    <div className="carousel-container">
      <img alt="#"
        className="stairs"
        src={`${process.env.PUBLIC_URL}/image/our_team/stairs.png`}
      />
      <h3>{"Meet Our Experts".toUpperCase()}</h3>
      <CreateWrapper></CreateWrapper>
    </div>
  );
}

export default OurTeam;
