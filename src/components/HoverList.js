import "./HoverList.css";
import "../App.css";
import { useRef } from "react";

const listContent = [
  {
    img: `${process.env.PUBLIC_URL}/image/list/list01.jpg`,
    mainTitle: "CONSULTATION AND MEETING",
    subTitle:
      "The moment where your thoughts and ideas become the key to successful process deployment. Refinement: Together, we focus on addressing details and ensuring the perfect reflection of your unique concept.",
  },
  {
    img: `${process.env.PUBLIC_URL}/image/list/list02.webp`,
    mainTitle: "CONCEPT DEVELOPMENT",
    subTitle:
      "An opportunity to shape ideas into reality through collaborative exploration and refinement. Refinement: Together, we refine and sculpt concepts to align seamlessly with your vision and objectives.",
  },
  {
    img: `${process.env.PUBLIC_URL}/image/list/list03.png`,
    mainTitle: "REFINEMENT AND APPROVAL",
    subTitle:
      "Discussion and Corrections: You have the opportunity to express any concerns and make adjustments to the concept. Refinement: We collaborate with you to refine details and harmonize the concept with your vision.",
  },
  {
    img: `${process.env.PUBLIC_URL}/image/list/list04.jpg`,
    mainTitle: "IMPLEMENTATION AND EXECUTION",
    subTitle:
      "The phase where ideas transition into actions through systematic approaches and performance. Refinement: Together, we work on implementing and executing, ensuring continuous improvement and goal attainment.",
  },
  {
    img: `${process.env.PUBLIC_URL}/image/list/list05.jpg`,
    mainTitle: "COMPLETION AND PROJECT DELIVERY",
    subTitle:
      "The culmination of efforts, marking the successful conclusion of tasks and the delivery of the final project. Refinement: Together, we ensure that every detail is meticulously addressed, leading to a seamless delivery and client satisfaction.",
  },
  {
    img: `${process.env.PUBLIC_URL}/image/list/list06.jpg`,
    mainTitle: "POST-SALE SUPPORT",
    subTitle:
      "The ongoing assistance and guidance provided to customers after a purchase, ensuring their satisfaction and addressing any issues or concerns. Refinement: Together, we stand ready to support customers beyond the sale, offering prompt and effective solutions to enhance their experience and foster long-term relationships.",
  },
];

function CreateList({ array }) {
  const boxRefs = useRef([]);

  const onEnterHover = (index) => {
    const box = boxRefs.current[index];
    const image = box.querySelector("img");
    
    image.classList.remove("hidden"); // Відображаємо зображення
  };

  const onLeaveHover = (index) => {
    const box = boxRefs.current[index];
    const image = box.querySelector("img");
    image.classList.add("hidden");
  };

  return (
    <div className="list">
      {array.map((container, index) => {
        const { mainTitle, subTitle, img } = container;
        return (
          <div
            ref={(el) => (boxRefs.current[index] = el)}
            onMouseEnter={() => onEnterHover(index)}
            onMouseLeave={() => onLeaveHover(index)}
            className={`boxList-${index + 1}`}
            key={index + 1}
          >
            <img className="hidden" src={img} alt={`imageList-${index + 1}`} />
            <p>{`0${index + 1}`}</p>
            <h3 className="mainTitle">
              {mainTitle} <br /> <span className="subTitle hidden">{subTitle}</span>{" "}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

function HoverList() {
  return <CreateList array={listContent} />;
}

export default HoverList;
