import React from 'react';
import './Services.css';


const Services = () => {
    return <div className="nav">
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-3 col-sm-3 sidebar2">
    <div className="logo text-center">
    <img src="http://lorempixel.com/output/people-q-g-64-64-6.jpg" className="img-responsive center-block" alt="Logo" />
    <h4>Arshi S.</h4>
    <div className="coins">
    <i className="fa fa-dollar" aria-hidden="true" />
    </div>
    <p class="coins">2,342</p>
    <div>
    <button type="button" className="btn btn-default Add-friend">
    <i className="fa fa-rocket" aria-hidden="true" /> LAUNCH A CHALLENGE
    </button>
    </div>
    </div>
    <br />
    <div className="left-navigation">
    <ul class="list"> 
    <li><i className="fa fa-safari" aria-hidden="true" /> Activities</li>
    <li><i className="fa fa-thumbs-up" aria-hidden="true" /> Challenges Accepted</li>
    <li><i className="fa fa-hand-o-right" aria-hidden="true" /> Challenges posed</li>
    <li><i className="fa fa-trophy" aria-hidden="true" /> Achievements</li>
    <li><i className="fa fa-certificate" aria-hidden="true" /> Badges</li>
    <li><i className="fa fa-users" aria-hidden="true" /> Pals</li>
    <li><i className="fa fa-bar-chart" aria-hidden="true" /> Statistics</li>
    </ul>
    </div>
    </div>




    
    <div class="col-md-9 col-sm-8 main-content">
    <div className="form-group">
    <input type="text" className="form-control" id="" aria-describedby="" placeholder="Username" />
    <input type="password" className="form-control" id="" aria-describedby="" placeholder="Password" />
    <input type="email" className="form-control" id="" aria-describedby="" placeholder="Email Address" />
    <select className="form-control">
        <option>- Please select -</option>
  <option>Running</option>
  <option>Hiking</option>
  <option>Swimming</option>
    </select>
    <button type="button" className="btn btn-success" value="Submit"> Submit </button>
    </div>
    </div>
    </div>
    </div>     
    </div>



    
}



export default Services