import "./images.css";
import { Link } from "react-router-dom";

export default function List(props) {
  return (
    <div
      title="list"
      onClick={(e) => {
        props.handleClick(e.currentTarget.title);
      }}
      class="img-container"
    >
      <Link to={`/me/lists`}>
        <div class="img-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 51">
            <title>list</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_2-2" data-name="Layer 2">
                <polyline
                  points="12.4 14.07 12.4 0.5 50.5 0.5 50.5 38.6"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                />
                <path
                  d="M46.44,5.42V49.63a.86.86,0,0,1-.86.87h-.8a.91.91,0,0,1-.54-.19L24,34a.87.87,0,0,0-1.08,0l-20.31,16a2,2,0,0,1-1.25.44h0a.87.87,0,0,1-.87-.87V5.42a.86.86,0,0,1,.87-.86H45.58A.85.85,0,0,1,46.44,5.42Z"
                  fill={props.seleceted === "lists" ? "black" : "white"}
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                />
              </g>
            </g>
          </svg>
        </div>

        <div class="des">
          <h1 className="tag">List</h1>
          <div class="arrw"></div>
        </div>
      </Link>
    </div>
  );
}
