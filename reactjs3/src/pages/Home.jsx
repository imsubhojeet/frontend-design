import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="col_details">
                <img
                  src="https://www.w3schools.com/w3images/tablesetting2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col">
              <div className="col_details">
                <h1>About Catering</h1>
                <br />
                <h2>Tradition since 1889</h2>
                <p>
                  The Catering was founded in blabla by Mr. Smith in lorem ipsum
                  dolor sit amet, consectetur adipiscing elit consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute iruredolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur.We only use
                  seasonal ingredients.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum consectetur
                  adipiscing elit, sed do eiusmod temporincididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <hr />
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="col_details1">
                <h1>OUR MENU</h1>
                <br />
                <h4>Bread Basket</h4>
                <br />
                <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
                <br />
                <h4>Honey Almond Granola with Fruits</h4>
                <br />
                <p>
                  Natural cereal of honey toasted oats, raisins, almonds and
                  dates 7.00
                </p>
                <br />
                <h4>Belgian Waffle</h4>
                <br />
                <p>Vanilla flavored batter with malted flour 7.50</p>
                <br />
                <h4>Scrambled eggs</h4>
                <br />
                <p>
                  Scrambled eggs, roasted red pepper and garlic, with green
                  onions 7.50
                </p>
                <br />
                <h4>Blueberry Pancakes</h4>
                <br />
                <p>With syrup, butter and lots of berries 8.50</p>
              </div>
            </div>
            <div className="col">
              <div className="col_details1">
                <img
                  src="https://www.w3schools.com/w3images/tablesetting.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero />
      <div className="container">
        <hr />
      </div>
      {/* contact  */}
      <section>
        <div className="container">
          <div className="contact">
            <h1>Contact</h1>
            <p>
              We offer full-service catering for any event, large or small. We
              understand your needs and we will cater the food to satisfy the
              biggerst criteria of them all, both look and taste. Do not
              hesitate to contact us.
            </p>
            <br />
            <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
            <p>
              You can also contact us by phone 00553123-2323 or email
              catering@catering.com, or you can send us a message here:
            </p>
            <input type="text" name="name" placeholder="Name" />
            <br />
            <hr />
            <input
              type="text"
              name="How Many People"
              placeholder="How Many People"
            />
            <br />
            <hr />
            <input
              type="text"
              name="Message"
              placeholder="Message/Special Requirements"
            />
            <hr />
            <button>send</button>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Home;
