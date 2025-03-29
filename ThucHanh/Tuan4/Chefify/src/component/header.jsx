import { useState } from 'react'
import './header.css'

import hinh from "../img/Lab02/Group 15.png"
import hinh1 from "../img/Lab02/Archive check.png"
import hinh2 from "../img/Lab02/Avatar 35.png"
import avatar from "../img/Lab_02_b/avatar.png"
import hinh3 from "../img/Lab_02_b/Italian-style tomato.png"


function bai01() {
   var arr = ['What to cook','Recipes','Ingredients','Occasions','About Us'];
   var arr1 = ['Saved Recipes','Folder','Recipes by Genevieve']

  return (
    <>
      <div class="container">
        <header className="flex-container">
          <div>
            <img className="icon" src= {hinh} alt="Logo" />
          </div>
          <input type="text" className="search-input" placeholder="Tìm kiếm..." />
          <nav className="menu">
            <ul>
              {
                arr.map((item)=>{
                  return(
                    <li><a href="">{item}</a></li>
                  )
                })
              }
            </ul>
          </nav>
          <div className="input-recipe">             
            <i><img src={hinh1} alt="Icon" /></i>
            <input type="button" className="button-recipe" value="Your Recipe Box" />
          </div>
          <div className="user-icon">
            <img src={hinh2} alt="User Avatar" />
          </div>    
        </header>
        <div className="body-container">
          <h1>Emma Gonzalez's Recipe Box</h1>
          <div className='avatar-content'>
            <div className='avatar'>             
                <img src={avatar} alt="" />             
              </div>
              <div className='content'>
                <p>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor 
                  at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks 
                  and food publications. Originally from East Los Angeles, Emma now resides in New York City, 
                  where she explores a wide range of culinary delights.</p>
                  <span>6.5k Subscribes</span>
                  <button>Share</button>
              </div>
          </div>
            <nav className="menu1">
              <ul>
                {
                  arr1.map((item)=>{
                    return(
                      <li><a href="">{item}</a></li>
                    )
                  })
                }
              </ul>
            </nav>

            <div className='list-food'>
                <div className='food'>
                    <img src={hinh3} alt="" />
                    <div className='name-food'>
                        <h4>Italian-style tomato salad</h4>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default bai01;
