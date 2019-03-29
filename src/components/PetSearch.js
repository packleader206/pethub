import React from 'react';


function PetSearch(props) {
    return (
        <div class="bread-bar bg-grey my-2">
    	<div class="container">
        	<div class="row">
            	<div class="col-md-8 col-sm-6 col-xs-8">
                    <ol class="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html">Live Update</a></li>
                        <li class="active">About Us</li>
                    </ol>
            	</div>
                <div class="col-md-4 col-sm-6 col-xs-4">
                </div>
            </div>
      	</div>
    </div>
  
<div class="container">
	<div class="row">
	    <div class="col-md-3 bg-secondary">
	       <div class="filter-sidebar">
	        <div class="row card-body py-2 mb-3 bg-dark twhite">
	            <h4><i class="fa fa-car"></i> Search Options</h4>
	        </div>    
	        <div class="form-group">
                <select class="form-control" id="conditionsselect1">
                  <option>Conditions</option>
                  <option>New</option>
                  <option>Used</option>
                </select>
             </div>
            <div class="form-group">
                <select class="form-control" id="conditionsselect2">
                  <option>Body</option>
                  <option>Compact</option>
                  <option>Convertible</option>
                  <option>Coupe</option>
                  <option>Off-road</option>
                  <option>Sedan</option>
                </select>
             </div>
            <div class="form-group">
                <select class="form-control" id="make1">
                  <option>Make</option>
                  <option>Ford</option>
                  <option>Hyundai</option>
                  <option>Kia</option>
                  <option>Honda</option>
                  <option>Skoda</option>
                </select>
             </div>
            <div class="form-group">
                <select class="form-control" id="make1">
                  <option>Model</option>
                  <option>Accord</option>
                  <option>Camry</option>
                  <option>Civic</option>
                  <option>Rapid</option>
                  <option>Octavia</option>
                </select>
             </div>
            <div class="form-group">
                <select class="form-control" id="mileage1">
                  <option>Max Mileage</option>
                  <option>< 5000</option>
                  <option>5000-10000</option>
                  <option>10000-15000</option>
                  <option>15000-20000</option>
                  <option>20000-25000</option>
                  <option>> 25000</option>
                </select>
             </div>
            <div class="form-group">
                <select class="form-control" id="year1">
                  <option>Year</option>
                  <option>2000</option>
                  <option>2001</option>
                  <option>2002</option>
                  <option>2003</option>
                  <option>2004</option>
                  <option>2005</option>
                  <option>2006</option>
                  <option>2007</option>
                  <option>2008</option>
                  <option>2009</option>
                  <option>2010</option>
                </select>
             </div>
            <div class="form-group">
                <select class="form-control" id="make1">
                  <option>Transmission</option>
                  <option>Automatic</option>
                  <option>Manaul</option>
                  <option>Semi-Automatic</option>
                </select>
             </div>
        <div class="form-group"></div>
            <hr>
            <button type="btn" class="btn btn-primary">Find Now</button>
            <button type="btn" class="btn btn-primary">Reset All</button>
            <div class="pb-3">
          </div>
	    </div>
	</div>
</div>
</div>
</div>
  )
}