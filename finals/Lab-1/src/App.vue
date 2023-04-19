<template>

<div class="resume">
   <div class="resume_left">
     <div class="resume_profile">
       <img src="me.jpg" alt="profile_pic">
     </div>
     <div class="resume_content">
       <div class="resume_item resume_info">
         <div class="title">
           <p class="bold">Joshua Emmanuel Macam</p>
           <p class="regular">BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</p>
         </div>
         <ul>
           <li>
             
               
             <div class="data">
               0535 Narra St. El Rosario Village, Mabiga, Mabalacat City, Pampanga <br />
             </div>
           </li>
           <li>
             
             <div class="data">
               0969-066-0414
             </div>
           </li>
           <li>
             
             <div class="data">
               ejmacam242@gmail.com
             </div>
           </li>
           <li>
             
             <div class="data">
               Web Developer
             </div>
           </li>
         </ul>
       </div>
       <div class="resume_item resume_skills">
         <div class="title">
           <p class="bold">skill's</p>
         </div>
         <ul>
           <li>
             <div class="skill_name">
               HTML
             </div>
           </li>
           <li>
             <div class="skill_name">
               CSS
             </div>
           </li>
           <li>
             <div class="skill_name">
               JS
             </div>
           </li>
           <li>
             <div class="skill_name">
               Web Designer
             </div>
           </li>
           <li>
             <div class="skill_name">
               Gamer
             </div>
           </li>
           <li>
             <div class="skill_name">
               Streamer
             </div>
           </li>
         </ul>
       </div>
       <div class="resume_item resume_social">
         <div class="title">
           <p class="bold">Social</p>
         </div>
         <ul>
           <li>
             
             <div class="data">
               <p class="semi-bold">Facebook</p>
               <p>Shttps://www.facebook.com/JshMcm/</p>
             </div>
           </li>
           <li>
             
             <div class="data">
               <p class="semi-bold">Twitch</p>
               <p>https://www.twitch.tv/shcerbatsky</p>
             </div>
           </li>
           <li>
             
             <div class="data">
               <p class="semi-bold">Youtube</p>
               <p>https://www.youtube.com/@joshuamacam8874/featured</p>
             </div>
           </li>
           <li>
             
             <div class="data">
               <p class="semi-bold">Github</p>
               <p>https://github.com/JoshuaMacam</p>
             </div>
           </li>
         </ul>
       </div>
     </div>
  </div>
  <div class="resume_right">
    

    <div class="resume_item resume_about">
        <div class="title">
           <p class="bold">Objective</p>
         </div>
        <p>I'm looking for a position in a dynamic company where I can start my career and work on developing strong skills. a dedicated individual seeking a challenging position in which I can demonstrate my abilities and contribute to the organization's expansion.</p>
    </div>
    
    
    <div class="resume_item resume_education">
      <div class="title">
           <p class="bold">Education</p>
         </div>
      <ul>
           <li>
                <div class="date">2007 - 2010</div> 
                <div class="info">
                     <p class="semi-bold">Saint Emiliana Academy of Excellence, Inc.</p> 
                </div>
            </li>
           <li>
                <div class="date">2010 - 2014</div> 
                <div class="info">
                     <p class="semi-bold">Mabalacat Elementary School</p> 
                </div>
            </li>
            <li>
                <div class="date">2014 - 2018</div> 
                <div class="info">
                     <p class="semi-bold">Children of Fatima School of Mabalacat</p> 
                </div>
            </li>
            <li>
                <div class="date">2019 - 2021</div> 
                <div class="info">
                     <p class="semi-bold">Jocson College</p> 
                </div>
            </li>
            <li>
              <div class="date">2021 - 2023</div>
              <div class="info">
                     <p class="semi-bold">Holy Angel University</p> 
                </div>
            </li>
        </ul>
    </div>
    <div class="resume_item resume_hobby">
      <div class="title">
           <p class="bold">Hobby</p>
         </div>
         <p>Coding</p>
         <p>Gaming</p>
         <p>Watching</p>
         <p>Reading</p>
         <p>Basketball</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Montserrat", sans-serif;
}

body {
  background: #585c68;
  font-size: 14px;
  line-height: 22px;
  color: #555555;
}

.bold {
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
}

.semi-bold {
  font-weight: 500;
  font-size: 16px;
}

.resume {
  width: 800px;
  height: auto;
  display: flex;
  margin: 50px auto;
}

.resume .resume_left {
  width: 280px;
  background: #0bb5f4;
}

.resume .resume_left .resume_profile {
  width: 100%;
  height: 280px;
}

.resume .resume_left .resume_profile img {
  width: 100%;
  height: 100%;
}

.resume .resume_left .resume_content {
  padding: 0 25px;
}

.resume .title {
  margin-bottom: 20px;
}

.resume .resume_left .bold {
  color: #fff;
}

.resume .resume_left .regular {
  color: #b1eaff;
}

.resume .resume_item {
  padding: 25px 0;
  border-bottom: 2px solid #b1eaff;
}

.resume .resume_left .resume_item:last-child,
.resume .resume_right .resume_item:last-child {
  border-bottom: 0px;
}

.resume .resume_left ul li {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}

.resume .resume_left ul li:last-child {
  margin-bottom: 0;
}

.resume .resume_left ul li .icon {
  width: 35px;
  height: 35px;
  background: #fff;
  color: #0bb5f4;
  border-radius: 50%;
  margin-right: 15px;
  font-size: 16px;
  position: relative;
}

.resume .icon i,
.resume .resume_right .resume_hobby ul li i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.resume .resume_left ul li .data {
  color: #b1eaff;
}

.resume .resume_left .resume_skills ul li {
  display: flex;
  margin-bottom: 10px;
  color: #b1eaff;
  justify-content: space-between;
  align-items: center;
}

.resume .resume_left .resume_skills ul li .skill_name {
  width: 25%;
}

.resume .resume_left .resume_skills ul li .skill_progress {
  width: 60%;
  margin: 0 5px;
  height: 5px;
  background: #009fd9;
  position: relative;
}

.resume .resume_left .resume_skills ul li .skill_per {
  width: 15%;
}

.resume .resume_left .resume_skills ul li .skill_progress span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
}

.resume .resume_left .resume_social .semi-bold {
  color: #fff;
  margin-bottom: 3px;
}

.resume .resume_right {
  width: 520px;
  background: #fff;
  padding: 25px;
}

.resume .resume_right .bold {
  color: #0bb5f4;
}

.resume .resume_right .resume_work ul,
.resume .resume_right .resume_education ul {
  padding-left: 40px;
  overflow: hidden;
}

.resume .resume_right ul li {
  position: relative;
}

.resume .resume_right ul li .date {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
}

.resume .resume_right ul li .info {
  margin-bottom: 20px;
}

.resume .resume_right ul li:last-child .info {
  margin-bottom: 0;
}

.resume .resume_right .resume_work ul li:before,
.resume .resume_right .resume_education ul li:before {
  content: "";
  position: absolute;
  top: 5px;
  left: -25px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 2px solid #0bb5f4;
}

.resume .resume_right .resume_work ul li:after,
.resume .resume_right .resume_education ul li:after {
  content: "";
  position: absolute;
  top: 14px;
  left: -21px;
  width: 2px;
  height: 115px;
  background: #0bb5f4;
}

.resume .resume_right .resume_hobby ul {
  display: flex;
  justify-content: space-between;
}

.resume .resume_right .resume_hobby ul li {
  width: 80px;
  height: 80px;
  border: 2px solid #0bb5f4;
  border-radius: 50%;
  position: relative;
  color: #0bb5f4;
}

.resume .resume_right .resume_hobby ul li i {
  font-size: 30px;
}

.resume .resume_right .resume_hobby ul li:before {
  content: "";
  position: absolute;
  top: 40px;
  right: -52px;
  width: 50px;
  height: 2px;
  background: #0bb5f4;
}

.resume .resume_right .resume_hobby ul li:last-child:before {
  display: none;
}

</style>
