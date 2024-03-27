import React from "react";
import "./css/Testimonials.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const userComments = [
  {
    userPicture: require("../assets/Profile.png"),
    userName: "Aurora Ramirez",
    points: 4.5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, itaque. Aspernatur unde similique quisquam vero",
  },
  {
    userPicture: require("../assets/Profile.png"),
    userName: "Darian Frost",
    points: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, itaque. Aspernatur unde similique quisquam vero",
  },
  {
    userPicture: require("../assets/Profile.png"),
    userName: "Isabella Chang",
    points: 4.5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, itaque. Aspernatur unde similique quisquam vero",
  },
  {
    userPicture: require("../assets/Profile.png"),
    userName: "Malik Patel",
    points: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, itaque. Aspernatur unde similique quisquam vero",
  },
];

const renderStars = (points) => {
  const starIcons = [];
  const fullStars = Math.floor(points);
  const hasHalfStar = points % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<FaStar key={i} />);
  }

  if (hasHalfStar) {
    starIcons.push(<FaStarHalfAlt key={fullStars} />);
  }

  const remainingStars = 5 - starIcons.length;

  for (let i = 0; i < remainingStars; i++) {
    starIcons.push(<FaStar key={fullStars + i + 1} />);
  }

  return starIcons;
};

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div id="contentContainer">
        <h2>What people say about us!</h2>

        <div id="testimonialsContainer">
          {userComments.map((c, index) => (
            <article key={index}>
              <img src={c.userPicture} alt="User picture" />
              <p className="userName">{c.userName}</p>
              <div className="userPoints">{renderStars(c.points)}</div>
              <p>"{c.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
