
import { Col,Row,Button} from 'react-bootstrap';
import './player.css'
import demo from "../../videos/demo.mp4";
function Player()
{
  var stopflag=0;
   function utilFunc()
   {
        stopflag=0;
         const canvas=document.getElementById('glCanvas');
         var ctx=canvas.getContext('2d');
         const myFrame=document.getElementById('myFrame');
         function captureVid() {
            function step() {
              if(stopflag===1)
              {
                return;
              }
              ctx.drawImage(myFrame, 0, 0, canvas.width, canvas.height)
              requestAnimationFrame(step)
            }
            if(stopflag===1)
            {
              return;
            }
            requestAnimationFrame(step);
          }
          captureVid();
    }
    function stopFunc()
    {
         stopflag=1;
         
    }
  
    return(
        <div id="myCard">
     <u>  <h2>
            PLAYER
        </h2></u> 
        <hr></hr>
        {/* <iframe width="90%" height="375" title="myFrame"  id="myframe" src="https://www.google.com/">
        </iframe> */}
        <video width="90%" height="375" id="myFrame" controls>
  <source src={demo} type="video/mp4" />
</video>
        <Row>
        <Col>
       <Button variant="secondary" onClick={utilFunc}>
        Start
       </Button>
       </Col>
       <Col>
       <Button variant="secondary" onClick={stopFunc}>
        Stop
       </Button>
       </Col>
       <Col>
       <Button variant="secondary">
        Download
       </Button>
       </Col>
       </Row>
          
        </div>
    )
}

export default Player;