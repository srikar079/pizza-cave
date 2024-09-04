import React from 'react';
import {Container,Row,Col,Table,Image} from 'react-bootstrap'
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const Contact=()=>{
return(
    <>
    <Container style={{marginTop:'50px'}}>
        <Row>
            <Col md={6}>
                <p> Sanctus tempor no dolor gubergren et sed ipsum magna ipsum dolor,
          dolores diam clita diam sed consetetur. Tempor labore lorem labore est
          dolor vero, tempor ipsum at lorem amet sed, sit est justo dolores sed
          magna. Eirmod justo amet kasd tempor stet, consetetur stet duo
          invidunt justo dolor invidunt amet. Eos justo est ipsum sanctus,
          invidunt amet rebum magna et. Eirmod est ut lorem et sadipscing ipsum
          ipsum erat dolor. Ipsum lorem takimata stet vero ut sadipscing
          aliquyam eos. Sed lorem sea justo ea sea sit, amet eos invidunt et eos
          diam invidunt dolor, invidunt ut sit gubergren eirmod dolor, justo
          lorem amet amet clita, ea no amet est magna et dolores rebum
          gubergren, amet et eirmod amet et et ipsum. Invidunt stet voluptua
          ipsum et dolor dolor. Duo takimata et dolore justo diam diam sea sed
          ipsum. Clita et et elitr rebum ipsum kasd amet, eos invidunt lorem no
          elitr diam clita sit et sit, ut voluptua invidunt eos kasd labore.
          Consetetur sadipscing amet dolores sea, diam sed lorem lorem diam
          lorem voluptua et rebum amet. Est amet lorem erat dolor magna sit,
          voluptua amet accusam sed lorem amet sadipscing consetetur amet. Erat
          et labore sed erat sed. Justo.</p>


                <Table striped bordered hover className='text-center'>
                <thead>
                    <tr>
                    <th className='bg-warning text-center' colSpan={3}>--- Contact Detailss ---</th>    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><MdLocalPhone/></td>
                    <td>Phone</td>
                    <td>123456789</td>
                    </tr>
                    <tr>
                    <td><IoIosMail/></td>
                    <td>gmail</td>
                    <td>srikar079@gmail.com</td>
                    </tr>
                    <tr>
                    <td><FaInstagram/></td>
                    <td>Instagram</td>
                    <td>sr_x6</td>
                    </tr>
                </tbody>
                </Table>
            </Col>
            <Col md={6}>
             <Image src='images/plss.jpg'/>
            </Col>
        </Row>
    </Container>
    
    </>
 )
}

export default Contact;