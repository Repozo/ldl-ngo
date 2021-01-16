import React from 'react';
import './Camps.css';
import { Slide } from 'react-slideshow-image';
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";

const Camps = () => {
    return (
      <div className="content">
        <Slide easing="ease">
          <div className="each-slide">
            <img className="image"src={img1} alt="error"/>
          </div>
          <div className="each-slide">
          <img className="image"src={img2}alt="error"/>
          </div>
          <div className="each-slide">
          <img className="image"src={img3}alt="error"/>
          </div>
          <div className="each-slide">
          <img className="image"src={img4}alt="error"/>
          </div>
          <div className="each-slide">
          <img className="image"src={img5}alt="error"/>
          </div>
          <div className="each-slide">
          <img className="image"src={img6}alt="error"/>
          </div>
          <div className="each-slide">
          <img className="image"src={img7}alt="error"/>
          </div>
          <div className="each-slide">
          <img className="image"src={img8}alt="error"/>
          </div>
          
        </Slide>
        <div id="camp-box">
        <div className="heading">
        Our Camps
        </div >
        <div className="campus-button">
<div className="Campus-btn">
<a className="link" href="#ghaziabad">Ghaziabad</a>
</div>
<div className="Campus-btn">
<a className="link" href="#bahraich">Baharaich</a>
</div>
<div className="Campus-btn">
<a className="link" href="#noida">Noida</a>
</div>
</div>
        </div>
        <div id="campus-dt">
        <div className="heading">
        Camp Details
        </div >
        </div>
        <div id="ghaziabad">
          <div className="city">Ghaziabad</div>
          <div className="team">Team ABES EC</div>
          
          <div className="coordinator">Team Coordinator: Mr. Ashish Rai - 9807127768</div>
<div className="coordinator">Treasurer- Ms. Shreya</div>
        <table className="branch">
  <tr>
    <th>Camp Name</th>
    <th>Number Of Children</th>
    <th>Camp Coordinator</th>
    <th>Contact Number</th>
  </tr>
  <tr>
    <td>Samrat Chowk</td>
    <td>15</td>
    <td>Ms. Aarushi Srivastava</td>
    <td>9811372474</td>
  </tr>
  <tr>
    <td>Sarvoday Nagar</td>
    <td>60</td>
    <td>Mr. Yash Varma</td>
    <td>8565926490</td>
  </tr>
  
</table>

        </div>
        <div id="ghaziabad">
         
          <div className="team">Team RKGIT</div>
        
          <div className="coordinator">Team Coordinator: Mr. Rishabh Umrao - 9911701796</div>
<div className="coordinator">Treasurer- Ms. Tavishi Panwar</div>
        <table className="branch">
  <tr>
    <th>Camp Name</th>
    <th>Number Of Children</th>
    <th>Camp Coordinator</th>
    <th>Contact Number</th>
  </tr>
  <tr>
    <td>RKGIT</td>
    <td>135</td>
    <td>Mr. Rishabh Umrao<br/>
    Ms. Tavishi Panwar
</td>
    <td>9911701796<br/>
    9870779965</td>
  </tr>
  
  
  
</table>

        </div>
        <div id="ghaziabad">
         
          <div className="team">Team ABESIT</div>
        
          <div className="coordinator">Team Coordinator: Mr. Dheeraj Singh - 8299180224</div>
<div className="coordinator">Treasurer- Ms. Purvie Singh</div>
        <table className="branch">
  <tr>
    <th>Camp Name</th>
    <th>Number Of Children</th>
    <th>Camp Coordinator</th>
    <th>Contact Number</th>
  </tr>
  <tr>
    <td>Charmurti</td>
    <td>80</td>
    <td>Mr. Tanmay Kapil<br/>
Mr. Rishabh Chaturvedi
</td>
    <td>9821330450<br/>
8858760621</td>
  </tr>
  
  
  
</table>

        </div>
        <div id="noida">
          <div className="city">Noida</div>
          <div className="team">Team JIIT</div>
         
          <div className="coordinator">Team Coordinator: Ms. Mansi Agarwal and Mr. Vaidyanath Singh - 8826961224/7007661001</div>
<div className="coordinator">Treasurer- Mr. Parth Agarwal</div>
        <table className="branch">
  <tr>
    <th>Camp Name</th>
    <th>Number Of Children</th>
    <th>Camp Coordinator</th>
    <th>Contact Number</th>
  </tr>
  <tr>
    <td>Fortis</td>
    <td>30</td>
    <td>Mr. Utsav Gupta</td>
    <td>9045207101</td>
  </tr>
  <tr>
    <td>Nursery Kidsr</td>
    <td>25</td>
    <td>Mr. Vaidyanath Singh</td>
    <td>7007661001</td>
  </tr>
  <tr>
    <td>Kaushambi</td>
    <td>20</td>
    <td>Mr. Kamlendra Pratap Singh</td>
    <td>7827070467</td>
  </tr>
  
</table>

        </div>
        <div id="bahraich">
          <div className="city">Bahraich</div>
          <div className="team">Team Bahraich</div>
         
          <div className="coordinator">Team Coordinator: Mr. Priyanshu Shukla - 9670033220</div>

        <table className="branch">
  <tr>
    <th>Camp Name</th>
    <th>Number Of Children</th>
    <th>Camp Coordinator</th>
    <th>Contact Number</th>
  </tr>
  <tr>
    <td>Mari Mata Temple</td>
    <td>45</td>
    <td>Mr. Himanshu</td>
    <td>9839086002</td>
  </tr>
  
  
</table>

        </div>
        <br/>
        
      </div>
    )
};

export default Camps;