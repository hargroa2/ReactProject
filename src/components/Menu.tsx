import "../styles/Menu.scss";
import Navbar from "./Navbar";
import buffalosandwich from "../assets/buffalosandwich.jpg";
import Footer from "./Footer";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <img
        src={buffalosandwich}
        alt="contact us"
        className="heading-contact-menu"
      />
      <div className="heading-title">
        <div className="heading-contact-text-menu">Menu</div>
      </div>
      <div className="food-container">
        <div className="food-separation">
          <h1 className="section-header">Starters</h1>
          <div className="starter-flex">
            <div className="font-change">
              <h2>Chicken Pub Wings</h2>
              <p>
                Served with blue cheese dip and celery sticks. Choose your style
                plain and crispy, mild sticky barbecue or hot spicy Louisiana
                sauce
              </p>
              <p>$10</p>
            </div>
            <div className="font-change">
              <h2>Soup of the Day</h2>
              <p>Served with Dublin Soda Bread</p>
              <p>$6</p>
            </div>
            <div className="font-change">
              <h2>Galway Potato Skins</h2>
              <p>Served with Irish bacon, cheddar and chives</p>
              <p>$9</p>
            </div>
            <div className="font-change">
              <h2>Fried Pickles</h2>
              <p>Thick-cut chips, beer-battered, with house-made ranch</p>
              <p>$8</p>
            </div>
            <div className="font-change">
              <h2>Mozzarella Sticks</h2>
              <p>
                Slightly breaded, golden fried and served with warm marinara
                sauce
              </p>
              <p>$8</p>
            </div>
          </div>
        </div>

        <div className="food-separation">
          <h1 className="section-header">Soups & Salads</h1>
          <div className="starter-flex">
            <div className="font-change">
              <h2>Caesar Salad</h2>
              <p>
                Crisp romaine, parmesan cheese, brioche croutons, classic
                dressing
              </p>
              <p>$14</p>
            </div>
            <div className="font-change">
              <h2>Cobb Salad</h2>
              <p>
                Romaine, tomato, egg, red onion, avocado, blue cheese, smoked
                bacon
              </p>
              <p>$15</p>
            </div>
            <div className="font-change">
              <h2>House Salad</h2>
              <p>
                Mixed greens, tomato, cucumber, croutons, shredded cheese. Can
                add grilled or fried chicken for $3
              </p>
              <p>$10</p>
            </div>
            <div className="font-change">
              <h2>Greek Chicken Salad</h2>
              <p>
                Romaine, black olives, banana peppers, tomato, cucumber, feta,
                and greek feta dressing
              </p>
              <p>$11</p>
            </div>
            <div className="font-change">
              <h2>Loaded Potato Soup</h2>
              <p>
                Topped with cheese and crispy bacon and served with dipping
                bread
              </p>
              <p>$7</p>
            </div>
            <div className="font-change">
              <h2>Guinness Beef Stew</h2>
              <p>
                Braised beef, root vegetables and potatoes simmered in a
                Guinness broth
              </p>
              <p>$14</p>
            </div>
          </div>
        </div>

        <div className="food-separation">
          <h1 className="section-header">Traditional Classics</h1>
          <div className="starter-flex">
            <div className="font-change">
              <h2>Shepherd's Pie</h2>
              <p>
                Choice of locally sourced and seasoned ground lamb or ground
                beef with sausage, peas, carrots and mashed potatoes
              </p>
              <p>$16</p>
            </div>
            <div className="font-change">
              <h2>Fish & Chips</h2>
              <p>
                Fresh fish of the day in a light O'Hara's Beer Batter with
                hand-cut fries and a lemon caper with choice of tartar or
                cocktail sauce
              </p>
              <p>$16</p>
            </div>
            <div className="font-change">
              <h2>Irish Coddle</h2>
              <p>
                Hand-cut potatoes, sausages and caramelized onion, cooked with
                stout Guinness beer
              </p>
              <p>$16</p>
            </div>
            <div className="font-change">
              <h2>Bangers & Mash</h2>
              <p>
                Irish sausage, seasoned mashed potatoes with Guinness gravy and
                baked breakfast beans
              </p>
              <p>$15</p>
            </div>
            <div className="font-change">
              <h2>Corned Beef & Cabbage</h2>
              <p>Beef brisket and seasoned cabbage with a choice of 1 side</p>
              <p>$14</p>
            </div>
            <div className="font-change">
              <h2>Irish Whiskey Steak</h2>
              <p>10oz dry aged, whiskey marinated, with a choice of 2 sides</p>
              <p>$18</p>
            </div>
          </div>
        </div>
        <div className="food-separation">
          <h1 className="section-header">Burgers & Sandwiches</h1>
          <div className="starter-flex">
            <div className="font-change">
              <h2>Prime Irish Beef Burger</h2>
              <p>
                100% Irish beef with mayo, crisp lettuce, tomato and dill pickle
                served on a toasted brioche bun. Add melted cheese of choice or
                bacon for $1 each
              </p>
              <p>$15</p>
            </div>
            <div className="font-change">
              <h2>Belfast Breakfast Burger</h2>
              <p>
                0.5lb steak burger, bacon, fried egg, lettuce, tomato, mayo,
                onion, Jameson mustard, toasted on a brioche bun
              </p>
              <p>$14</p>
            </div>
            <div className="font-change">
              <h2>The Pub Burger</h2>
              <p>
                0.5lb steak burger, your choice of cheese, lettuce, tomato,
                onion, mayo, mustard, all on a brioche bun
              </p>
              <p>$12</p>
            </div>
            <div className="font-change">
              <h2>Vegetarian Burger</h2>
              <p>
                Falafel Burger with homemade tomato salsa, crisp lettuce and
                tomato served on a toasted brioche bun. Add melted cheddar
                cheese for $1
              </p>
              <p>$12</p>
            </div>
            <div className="font-change">
              <h2>Kilkenny Chicken Club</h2>
              <p>
                Grilled chicken, bacon, Swiss cheese, crispy lettuce, tomato,
                mayo, and onion
              </p>
              <p>$11</p>
            </div>
            <div className="font-change">
              <h2>Buffalo Chicken Sandwich</h2>
              <p>
                Crispy chicken, crispy lettuce, tomato, red onion, or choice of
                cheese, toasted on a brioche bun and a side of house-made ranch
              </p>
              <p>$14</p>
            </div>
            <div className="font-change">
              <h2>Turkey Club Sandwich</h2>
              <p>
                Sliced turkey, bacon, our secret garlic sauce and Swiss cheese
              </p>
              <p>$12</p>
            </div>
          </div>
        </div>
        <div className="food-separation">
          <h1 className="section-header">Sides</h1>
          <div className="starter-flex">
            <div className="font-change">
              <h2>French Chips</h2>
              <p>Regular french fries with a choice of sauce for dipping</p>
              <p>$5</p>
            </div>
            <div className="font-change">
              <h2>Onion Rings</h2>
              <p>Comes with an optional sauce of your choosing</p>
              <p>$5 for 6 rings, $8 for 12 rings</p>
            </div>
            <div className="font-change">
              <h2>Beef Chili Cheese Chips</h2>
              <p>
                Potato fries with spicy chili beef, jalapeños and melted cheddar
                cheese with our secret garlic dip on the side
              </p>
              <p>$9</p>
            </div>
            <div className="font-change">
              <h2>Garlic Chips</h2>
              <p>
                Seasoned potato fries served with a side of our secret garlic
                dip
              </p>
              <p>$8</p>
            </div>
            <div className="font-change">
              <h2>Dublin Soda Bread</h2>
              <p>Traditionally made buttermilk bread served by the slice</p>
              <p>$8</p>
            </div>
          </div>
        </div>
        <div className="food-separation">
          <h1 className="section-header">Drinks</h1>
          <div className="starter-flex">
            <div className="font-change">
              <h2>Whiskey Sour</h2>
              <p>Made with bright, bracing lemon juice, and a floral bourbon</p>
              <p>$13</p>
            </div>
            <div className="font-change">
              <h2>Bloody Mary</h2>
              <p>
                Contains vodka, tomato juice, and spices to give that extra
                spice to your life
              </p>
              <p>$13</p>
            </div>
            <div className="font-change">
              <h2>Jack Rose Cocktail</h2>
              <p>
                Applejack, grenadine, bracing lemon and comes in a chilled glass
              </p>
              <p>$13</p>
            </div>
            <div className="font-change">
              <h2>Irish Spring</h2>
              <p>
                Orange juice, sweet and sour mix, whiskey, peach brandy and
                topped with a slice of orange
              </p>
              <p>$13</p>
            </div>
            <div className="font-change">
              <h2>Clover Club</h2>
              <p>Gin, freshly squeezed lemon juice, and raspberry syrup</p>
              <p>$13</p>
            </div>
            <div className="font-change">
              <h2>Gin & Tonic</h2>
              <p>
                Gin and tonic water poured in a iced glass and topped with a
                wedge of lime
              </p>
              <p>$13</p>
            </div>
            <div className="font-change">
              <h2>Loch Lamond</h2>
              <p>Scotch, Drambuie, and dry vermouth</p>
              <p>$13</p>
            </div>
            <div className="font-change">
              <h2>Tom Collins</h2>
              <p>Gin, lemon juice, sugar, and carbonated water</p>
              <p>$13</p>
            </div>
          </div>
        </div>
        <div className="food-separation">
          <h1 className="section-header">Desserts</h1>
          <div className="starter-flex">
            <div className="font-change">
              <h2>Traditional Bailey's Irish Cream Cheesecake</h2>
              <p>Served with a crisp homemade graham cracker crust</p>
              <p>$9</p>
            </div>
            <div className="font-change">
              <h2>Homemade Apple Crumble</h2>
              <p>Caramelized apple butter filling and ground cinnamon</p>
              <p>$8</p>
            </div>
            <div className="font-change">
              <h2>Guinness Chocolate Brownie</h2>
              <p>Large chocolate sponge baked with Guinness stout</p>
              <p>$9</p>
            </div>
            <div className="font-change">
              <h2>Red Velvet Cake</h2>
              <p>Red velvet sponge with cream cheese buttercream</p>
              <p>$7</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
