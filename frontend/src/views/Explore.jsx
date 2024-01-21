import CustomSelect from "../cmps/Explore/CustomSelect";
import { GigList } from "../cmps/GigList";

export function Explore() {
  return (
    <div className="explore">
      <h1>Explore Page</h1>
      <div className="explore-header">
        <button className="clear options-btn">Clear Filter</button>
        <CustomSelect />
        <select className="order-delivery-time options-btn">
          <option value="express">Express 24 hours</option>
          <option value="upto3days">Up to 3 days</option>
          <option value="upto7days">Up to 7 days</option>
          <option value="anytime" selected>
            Anytime
          </option>
        </select>
        <div className="switches">
          <div className="pro-switch">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            Pro services
          </div>
          <div className="online-sellers-switch">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            Online sellers
          </div>
        </div>
      </div>
      <div className="explore-main">
        <p>37 Services available</p>
        <label>
          Sort By{" "}
          <select>
            <option value="rating">Highest Rating</option>
            <option value="level">Seller Level</option>
          </select>
        </label>
        <GigList />
        <div className="pages">
          <button>&lt;</button>
          <button>1</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
}
