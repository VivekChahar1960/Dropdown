import React from "react";
import "./Search.css";
import insta from '../../assets/instagram.png'
import git from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
const Search = () => {
    // function clicked(){
    //     document.getElementById("link").style.backgroundColor="red";
    //     console.log("clicked")
    // }
  return (
    <div className="select-menu">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle select-option"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select your option    
        </button>
        <ul class="dropdown-menu menu">
          <li className="options">
            <a id="link" class="dropdown-item links" href="https://www.instagram.com/paruldeswal_29/">
            <img src={insta} alt=""/>
            <p>Instagram</p>
            </a>
          </li>
          <li className="options">
            <a class="dropdown-item links" href="https://github.com/Paruldeswal/" >
                <img src={git} alt=""/>
                <p>Github</p>
            </a>
          </li>
          <li className="options">
            <a class="dropdown-item links" href="https://www.linkedin.com/in/parul-deswal-2967bb216/" >
            <img src={linkedin} alt=""/>
            <p>Linkedin</p>
            </a>
          </li>
          <li className="options">
            <a class="dropdown-item links" href="https://x.com/home" >
            <img src={twitter} alt=""/>
            <p>Twitter</p>
            </a>
          </li>
          <li className="options">
            <a class="dropdown-item links" href="https://www.facebook.com/" >
            <img src={facebook} alt=""/>
            <p>Facebook</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
