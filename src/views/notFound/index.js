import React from "react";
import { NotFoundBox } from "./notFound.styled";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  return <NotFoundBox>
    <div class="flex-container">
      <div class="text-center">
        <h1>
          <span class="fade-in" id="digit1">4</span>
          <span class="fade-in" id="digit2">0</span>
          <span class="fade-in" id="digit3">4</span>
        </h1>
        <h3 class="fadeIn">PAGE NOT FOUND</h3>
        <button type="button" name="button" onClick={()=> navigate('/', { replace: true }) } >Return To Home</button>
      </div>
    </div>
  </NotFoundBox>;
}

export default NotFound;
