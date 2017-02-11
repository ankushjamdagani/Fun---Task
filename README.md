# Recursive-Box-UX
Create a  box inside box unltil possible.

<br>
Open index.html to start the project
<br>
1) Mathematical Solution: BOX creation is not possible if area is less than or equal to 0
<br><br>
2) Feasible Solution: Box creation is not feasible if either height is 1px or width is 1px
<br><br>
3) Another concept tha occured to me at 4.43pm on Feb 11th 2017, How can I divide a box if they are repeating the previous values of height, width and area.<br>
Awesome Solution: if previous height === present height, previous width === present width, previous area === present area
show alert ands return false
