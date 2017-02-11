# Muse Jam - Tasks
 Preview:  https://ankushjamdagani.github.io/MuseJam---Task/

<br>
Open index.html to start the project
<br>

  <h2>Task 1 </h2>
   <p>Validate string having 'a*r' in the middle, where - x can be any alphanumeric character. Show error message if not validated.</p>
   
   <ul>
   <li>For Odds: middle three characters are checked.</li>
   <li>For Even: btw the 2 middle characters, the right one is chosen as middle character.</li>
   </ul>
  
  <br />
  
  <h2>Task 2 </h2>
   <p>Create a pyramid from numbers.</p>
   <p>
   1<br>
   222<br>
   33333<br>
   4444444<br>
   </p>
   
   <ul>
   <li><b>Pyramid is horizontally centered.</b> Hence for cases when pyramid is way too wide to be in the viewport you would have to scroll horizontally to see its center. Because center is being calculated here w.r.t. the whole are that is traversed by pyramid and not only the viewport.</li>
   <li>Character width of pyramid row is equal to <b>current height + prev height.</b></li>
   </ul>
  
  <br />
  
  <h2>Task 3B </h2>
  <ul>
      <li>
            <b>Mathematical Solution: </b> BOX creation is not possible if area is less than or equal to 0
      </li>
      <li>
      <b>Feasible Solution: </b>Box creation is not feasible if either height is 1px or width is 1px
      </li>
      <li>
            Another concept tha occured to me at 4.43pm on Feb 11th 2017, How can I divide a box if they are repeating the previous values of height, width and area.<br>
            <b>Awesome Solution: </b>if previous height === present height, previous width === present width, previous area === present area
      show alert ands return false
      </li>
  </ul>
