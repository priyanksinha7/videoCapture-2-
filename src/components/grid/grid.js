import { Button, Col, Container, Row } from 'react-bootstrap';
import Player from '../player/player';
import Canvas from '../canvas/canvas';
import "./grid.css";
import { useState } from 'react';

function Grid()
{
    const [url,setUrl]=useState("https://www.youtube.com/embed/xcJtL7QggTI");
    const [emb,setEmb]=useState("https://www.youtube.com/embed/xcJtL7QggTI")
    var cutURL="";
   function setFunc()
   {
     cutURL="https://www.youtube.com/embed/"
     const temp_url=url;
     cutURL=cutURL+temp_url.slice(32);
    setEmb(cutURL);
    const input_ele=document.getElementById("myInput");
    input_ele.value="";
   }

return(
<Container id="grid">
<Row>
  <Container id="mycnt">
  <h2>ENTER YOUR URL</h2>
  <input type="text" id="myInput" onChange={(e)=>{setUrl(e.target.value)}} placeholder='TYPE/PASTE ANY YOUTUBE URL'>
  </input>
  <Button variant="dark" onClick={setFunc}>Submit</Button>
  </Container>
</Row>
<Row>
    <Col>
      <Player/>
    </Col>
    <Col>
    <Canvas />
    </Col>
</Row>     
    </Container>
)

}
export default Grid;