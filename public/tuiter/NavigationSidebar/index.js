const NavigationSidebar = () => {
	return (`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       
        <a href="#" class = "list-group-item list-group-item-action active"> 
        <div class="row"> 
        <div class="col-1"> 
        <i class="fa fa-house pe-0"></i> 
        </div> 
        <div class="col-6"> 
        <span class="d-none d-xl-block">Home</span> 
        </div> 
        </div> 
        </a> 
        
        <a href="#" class = "list-group-item list-group-item-action"> 
        <div class="row"> 
        <div class="col-1"> 
        <i class="fab fa-hashtag pe-0"></i> 
        </div> <div class="col-6"> 
        <span class="d-none d-xl-block">Explore</span> 
        </div> 
        </div> 
        </a> 
        
        <a href="#" class = "list-group-item list-group-item-action"> 
        <div class="row"> 
        <div class="col-1"> 
        <i class="fa-solid fa-bell pe-0"></i> 
        </div> 
        <div class="col-6"> 
        <span class="d-none d-xl-block">Notifications</span> 
        </div> 
        </div> 
        </a> 
        
        <a href="#" class = "list-group-item list-group-item-action"> 
        <div class="row"> 
        <div class="col-1"> 
        <i class="fa-solid fa-envelope pe-0"></i> 
        </div> <div class="col-6"> 
        <span class="d-none d-xl-block">Messages</span> 
        </div> 
        </div> 
        </a> 
        
        <a href="#" class = "list-group-item list-group-item-action"> 
        <div class="row">
         <div class="col-1"> 
         <i class="fa-solid fa-bookmark pe-0"></i> 
         </div> 
         <div class="col-6"> 
         <span class="d-none d-xl-block">Bookmarks</span> 
         </div> 
         </div> 
         </a> 
         
         <a href="#" class = "list-group-item list-group-item-action"> 
         <div class="row"> 
         <div class="col-1"> 
         <i class="fa-solid fa-list pe-0"></i> 
         </div> 
         <div class="col-6"> 
         <span class="d-none d-xl-block">Lists</span> 
         </div> 
         </div>
          </a> 
          
          <a href="#" class = "list-group-item list-group-item-action"> 
          <div class="row"> 
          <div class="col-1"> 
          <i class="fa-solid fa-user pe-0"></i> 
          </div> 
          <div class="col-6"> 
          <span class="d-none d-xl-block">Profile</span> 
          </div> 
          </div> 
          </a> 
          
          <a href="#" class = "list-group-item list-group-item-action"> 
          <div class="row">
           <div class="col-1"> 
           <i class="fa-solid fa-ellipsis pe-0"></i> 
           </div> 
           <div class="col-6"> 
           <span class="d-none d-xl-block">More</span> 
           </div> 
           </div> 
           </a>
           
        </div>
   <div class="d-grid mt-2">
     <a href="#"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `)
}

export default NavigationSidebar;