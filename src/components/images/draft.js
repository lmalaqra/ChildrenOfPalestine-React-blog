import "./images.css";
import { Link } from "react-router-dom";

export default function Write(props) {
  return (
    <div title="Write" class="img-container">
      <Link title="Write" to="/me/write">
        <div title="Write" class="img-icon">
          <svg
            title="write"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48.75 60.48"
          >
            <title>Write</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_2-2" data-name="Layer 2">
                <path
                  title="Write"
                  d="M33.75,18.31H3.54A3.16,3.16,0,0,0,.38,21.47V56.94A3.15,3.15,0,0,0,3.54,60.1H39a3.16,3.16,0,0,0,3.16-3.16V29"
                  fill="#fff"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.75"
                />
                <path
                  title="Write"
                  d="M29.13,15.42,44.62.62a.87.87,0,0,1,1.23,0L48.13,3a.87.87,0,0,1,0,1.23l-15.5,14.8a.87.87,0,0,1-.37.22l-2.27.6a.87.87,0,0,1-.85-.24l-.72-.76a.85.85,0,0,1-.2-.86l.7-2.24A.86.86,0,0,1,29.13,15.42Z"
                  fill="#fff"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.75"
                />
                <path
                  d="M29,15.57l3.48,3.65-3,.79-1.24.33a.47.47,0,0,1-.58-.6L28,18.51Z"
                  fill="#fff"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.75"
                />
                <line
                  x1="45.87"
                  y1="6.4"
                  x2="42.39"
                  y2="2.75"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0.25"
                />
              </g>
            </g>
          </svg>{" "}
        </div>
      </Link>
      <div class="des">
        <h1 className="tag">write</h1>
        <div class="arrw"></div>
      </div>
    </div>
  );
}
