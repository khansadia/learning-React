
function ListGroup (){
    // doing below thing with another way
    const items = [
        'New York',
        'Paris',
        'London',
        'Japan',
        'Tokyo'
    ];
    // in jsx we donot have any for loop. arrays have methods like map for mapping or converting values,so we will use it here
   return (
<>
<h1> List</h1>
    <ul className="list-group"> 
   { items.map ((item, index) => 
   <li className="list-group-item active" key={item} 
   onClick={(event) => console.log (event)}>
            
             {/* Above thing can be done like this way
             onClick={() => console.log (item, index)}>
              
                  */}
                 {item}</li>
    )}
    
 {/*
  // it is not allowed to write code about map function, in middle of html so we will put this inside curly braces.
   
 
 after using map function we donot need of this list.
 <li className="list-group-item">An item</li>
  <li className="list-group-item">A second item</li>
  <li className="list-group-item">A third item</li>
  <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li>
 */}
 </ul>
</>
    );
}

export default ListGroup;