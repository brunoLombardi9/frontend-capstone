import React from "react";
import "./css/RestaurantInfo.css";

const RestaurantInfo = () => {
  return (
    <section id="restaurantInfo">
      <div id="infoGrid">
        <div className="textArea">
          <h2>Little Lemon</h2>
          <p className="city">California</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            accusantium odio inventore vitae amet sequi illum autem deserunt
            distinctio quasi reprehenderit eveniet corrupti ducimus
            exercitationem facere, possimus vero mollitia dolorum eos quidem
            corporis, dolorem delectus quibusdam dolore! Repellendus tempore
            recusandae aliquid itaque nemo debitis delectus sequi dolorem.
            Adipisci ipsum quam vero dolores perspiciatis provident dolorem
            ducimus quas facilis iste iure iusto reprehenderit ex quos doloribus
            voluptates magni repudiandae blanditiis totam corporis voluptas
            debitis, laboriosam amet aut! Esse nemo iste deserunt magni, itaque
            error totam accusamus ipsam natus! Amet, natus. Iure esse autem,
            similique ipsam delectus deserunt eligendi beatae temporibus
            voluptatibus.0
          </p>
        </div>
        <div id="restaurantImageCol">
          <img src={require("../assets/Mario and Adrian A.jpg")} alt="" />
          <img src={require("../assets/Mario and Adrian b.jpg")} alt="" />
        </div>
      </div>
    </section>
  );
};

export default RestaurantInfo;
