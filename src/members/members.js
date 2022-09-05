import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Dropdown } from "rsuite";

export default function Members() {
  const [filter, setFilter] = useState("All");
  return (
    <div className="overflow-auto pr-3 h-100">
      <h3>Members</h3>
      <div
        className="d-flex flex-row w-100 bg-white  p-4 mt-4"
        style={{ borderRadius: "20px" }}
      >
        <div style={{ flex: 4, paddingRight: "100px" }} className="">
          <span className="font-weight-bold text-secondary">SEARCH MEMBER</span>
          <div class="input-group rounded-lg">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <FaSearch />
              </span>
            </div>
            <input
              type="text"
              class="form-control "
              placeholder="Search for members..."
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <button className="btn btn-primary" style={{height: '40px', alignSelf: "bottom"}}>Add new member</button>
        {/* <div style={{ flex: 3 }} className="d-flex flex-row">
          <div className="d-flex flex-column mr-3">
            <span className="font-weight-bold text-secondary">FILTER</span>
            <Dropdown style={{width: '100px'}} title={filter}>
              <Dropdown.Item
                style={{width: '200px'}}
                onSelect={() => setFilter("All")}
                active={filter === "All" ? true : false}
              >
                All
              </Dropdown.Item>

            </Dropdown>
          </div>
          
        </div> */}
      </div>
      <div className="mt-3 shadow bg-white" style={{borderRadius: "20px"}}>

      </div>
    </div>
  );
}
