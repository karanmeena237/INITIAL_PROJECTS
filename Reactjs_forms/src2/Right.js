import React from "react";
import left from "./left.svg"
// import right from "./right.svg"

function Right() {
  
    return ( 
        <div className="col-11 myDark rounded-3 m-1 ps-5 ms-5">
        <h1 className='text-white' style={{"fontSize":"25px"}} > Tsukasag</h1>
            <div className="col-md bg-gray m-1 borderRadius text-white" style={{"height":"45rtrem","padding":"16px","backgroundColor":"#1f1d2b"}}>
            <section className="d-flex my-0">
                <span className="m-2 fs-3">New Booking</span>
                <span class="d-flex ms-4 my-4">
                    <span className="" style={{marginLeft:"40px",marginTop:"0"}}>Tsukasag <span class="text-danger">*</span> </span>
                    <span className="myGray d-inline-block rounded-3 ms-3 px-4 " style={{ height: "10px !important"}}>Kd-01</span>
                </span>
                <div className="d-flex ms-4 my-4 ">
                    <div class="">Venue Date : <span class="text-danger">*</span></div>
                    <div class="myGray rounded-3 ms-3 px-3">01-01-2022</div>
                </div>
                <span class="d-flex ms-4 my-4">
                    <span className="" style={{"marginLeft":"40px","marginTop":"0"}}>Cancel Date : <span class="text-danger">*</span> </span>
                    <span className="myGray d-inline-block rounded-3 ms-3 px-1 " style={{ height: "10px !important"}}>01-01-2022,11:00AM</span>
                </span>
                <span class="d-flex ms-4 my-4">
                    <span className="" style={{marginLeft:"40px",marginTop:"0"}}>Cancel By: <span class="text-danger">*</span> </span>
                    <span className="myGray d-inline-block rounded-3 ms-3 px-1 " style={{ height: "10px !important"}}>User1</span>
                </span>
            </section>
            <section className="form overflow-auto" style={{"height":"34rem","border":"2px solid white"}}>
            <span className="final" style={{"display":"inline-block","marginLeft":"48%","paddingBottom":"0"}}><h3 style={{"fontSize":"22px","marginBottom":"-28px","padding":"0"}}>Final preview</h3></span>
            <hr/>
          
            <h3 style={{"textDecoration":"underline","lineHeight":"2px","textUnderlinePosition":"under","marginLeft":"14px"}}> <span style={{"fontSize":"17px"}} > Customer Details </span></h3>
            {/* First */}
            <p style={{"fontSize":"13px","marginLeft":"20px","marginTop":"20px","marginRight":"5rem"}}>Customer Name :- <span className="text-secondary leftmargin">Karan Meena</span> <span style={{"marginLeft":"450px"}}> Company Name :- </span> <span className="text-secondary leftmargin" style={{"fontSize":"13px"}}>Karan Meena</span>  </p>
            {/* Second */}
            <p style={{"fontSize":"13px","marginLeft":"20px","marginRight":"5rem"}}>Contact Number :- <span className="text-secondary leftmargin">+919658478525 +91498569524</span> <span style={{"marginLeft":"350px"}}> Contact Number :- </span> <span className="text-secondary ">+919658478525 +91498569524</span>  </p>
            {/* Third */}
            <p style={{"fontSize":"13px","marginLeft":"20px","marginTop":"26px","marginRight":"5rem"}}>Address :- <span className="text-secondary leftmargin">Adress goes here Long one</span> <span style={{"marginLeft":"428px"}}> GST NUMBER :- </span> <span className="text-secondary leftmargin"><span className="text-danger">9KDFNFGO87DF</span></span>  </p>
            {/* Fourth */}
            <p style={{"fontSize":"13px","marginLeft":"20px","marginTop":"26px","marginRight":"5rem"}}>City, State,Pincode :- <span className="text-secondary leftmargin">Bhopal,.MP,.462020</span> <span style={{"marginLeft":"410px"}}> Address :- </span> <span className="text-secondary leftmargin">Adress goes here</span>  </p>
            <p>
                {/* fifth left */}
            <span style={{"fontSize":"13px","marginLeft":"796px"}}> City,State,PinCode :- </span> <span className="text-secondary "style={{"fontSize":"13px"}}>Bhopal,.MP,.462020</span></p>
            
            {/* sixth */}
            <p style={{"fontSize":"13px","marginLeft":"20px","marginTop":"-22px","marginRight":"5rem"}}>Booking Date  <span className="text-secondary" style={{"marginLeft":"20px","marginTop":"26px","marginRight":"5rem"}}>22-01-2022</span> <span style={{"marginLeft":"15rem"}}> Venue Date  </span> <span className="text-secondary" style={{"marginLeft":"20px","marginTop":"26px","marginRight":"5rem"}}>22-01-2022</span>  </p>
            {/* last */}
            <p style={{"fontSize":"13px","marginLeft":"20px","marginTop":"26px","marginRight":"5rem"}}>Time From  <span className="text-secondary" style={{"marginLeft":"20px","marginTop":"-22px","marginRight":"34px"}}>22-01-2022,10:00Am</span> <span style={{"marginLeft":"15rem"}}> Time To  </span> <span className="text-secondary" style={{"marginLeft":"20px","marginTop":"26px","marginRight":"5rem"}}>22-01-2022,11:00</span>  </p>
            <p style={{"fontSize":"13px","marginLeft":"20px","marginTop":"26px","marginRight":"5rem"}}>Venue Type :-  <span className="text-secondary" style={{"marginLeft":"20px","marginTop":"-22px","marginRight":"34px"}}>Meeting</span></p>

            <section>
            <h3  style={{"textDecoration":"underline","lineHeight":"5px","fontSize":"18px","marginLeft":"20px","marginRight":"5rem","textUnderlinePosition":"under","marginLeft":"14px"}}>Menu</h3>
            <table>
                <br />
                        <tr>
                         <td > <span className="headss" style={{"marginLeft":"25px","marginRight":"52px","fontSize":"14px","marginTop":"12px"}} >Snacks:-</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         </tr>
                         <br />
                         <tr>
                            <td>  <span style={{"marginLeft":"25px","marginRight":"52px","fontSize":"14px","marginTop":"12px"}}> Main Course:- </span></td>
                            <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                        
                            

                         </tr>
                         <br />
                         <tr>
                            <td>  <span style={{"marginLeft":"25px","marginRight":"52px","fontSize":"14px","marginTop":"12px"}}> Veg:- </span></td>
                            <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         </tr>
                         <br />
                         <tr>
                            <td>  <span style={{"marginLeft":"25px","marginRight":"52px","fontSize":"14px","marginTop":"12px"}}> Sweets:- </span></td>
                            <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         </tr>
                         <br />
                         <tr>
                            <td>  <span style={{"marginLeft":"25px","marginRight":"52px","fontSize":"14px","marginTop":"12px"}}> Rice:- </span></td>
                            <td> <span style={{"marginRight":"90px","fontSize":"13px"}} className=" text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span style={{"marginRight":"90px","fontSize":"13px"}} className=" text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         <td> <span  style={{"marginRight":"90px","fontSize":"13px"}} className="  text-secondary"> <span className=""> • </span>Fries</span></td>
                         </tr>
                         
            </table>
            </section>
            <h3  style={{"textDecoration":"underline","lineHeight":"25px","fontSize":"18px","marginLeft":"20px","marginRight":"5rem","textUnderlinePosition":"under","marginLeft":"14px"}}>Bill Total</h3>
            <table style={{"borderCollapse":"collapse","width":"98%","border":"1px solid white","marginLeft":"22px","marginTop":"25px","padding":"10px"}} >
             
  <tr style={{"border":"2px solid white"}}>
    <th style={{"backgroundColor":"grey","color":"white","width":"14px",}} > <span style={{"fontSize":"13px","padding":"12px","fontWeight":"600"}}> Sr.No </span></th>
    <th style={{"backgroundColor":"grey","color":"white","padding":"0 10px","width":"30rem","textAlign":"left"}} > <span style={{"fontSize":"13px","padding":"12px","fontWeight":"600"}}> Service</span></th>
    <th style={{"backgroundColor":"grey","color":"white","padding":"10px"}} ><span style={{"fontSize":"13px","padding":"12px","fontWeight":"600"}}>Rate</span> </th>
    <th style={{"backgroundColor":"grey","color":"white","padding":"10px"}} > <span style={{"fontSize":"13px","padding":"12px","fontWeight":"600"}}>Unit</span></th>
    <th style={{"backgroundColor":"grey","color":"white","padding":"10px"}} > <span style={{"fontSize":"13px","padding":"12px","fontWeight":"600"}}>QTY</span></th>
    <th style={{"backgroundColor":"grey","color":"white","padding":"10px","textAlign":"left"}} > <span style={{"fontSize":"13px","padding":"12px","fontWeight":"600"}}> Subtotal</span></th>
    <th style={{"backgroundColor":"grey","color":"white","padding":"10px","textAlign":"left"}} > <span style={{"fontSize":"13px","padding":"12px","fontWeight":"600"}}> CGST</span></th>
    <th style={{"backgroundColor":"grey","color":"white","padding":"10px","textAlign":"left"}} > <span style={{"fontSize":"13px","padding":"12px","fontWeight":"600"}}> SGST</span></th>
    <th style={{"backgroundColor":"grey","color":"white","padding":"10px","textAlign":"left"}} > <span style={{"fontSize":"13px","padding":"12px","fontWeight":"600"}}> IGST</span></th>
  </tr>
  <tr>
    <td style={{"textAlign":"left","padding":"10px 20px",}} >#1</td>
    <td style={{"textAlign":"left","padding":"0 10px","width":"30rem"}}>Food</td>
    <td style={{"textAlign":"left","padding":"10px 20px"}} >&#8377;500.00</td>
    <td style={{"textAlign":"left","padding":"10px 20px"}} >/Plate</td>
    <td style={{"textAlign":"left","padding":"10px 20px"}} >50</td>
    <td style={{"textAlign":"left","padding":"10px 20px"}} >&#8377; <span> 25000.00</span></td>
    <td style={{"textAlign":"left", "position":"relative","top":"11px","padding":"6px 20px"}} > <span style={{"display":"block"}}  >  &#8377; 50.00</span>  <span style={{"fontSize":"12px","marginLeft":"15px"}} > (5%)</span></td>
    <td style={{"textAlign":"left", "position":"relative","top":"11px","padding":"6px 20px"}} > <span style={{"display":"block"}}  > &#8377; 50.00<br /></span>  <span style={{"fontSize":"12px","marginLeft":"15px"}} > (5%)</span></td>
    <td style={{"textAlign":"left","padding":"10px 20px"}} >&#8377; <span>0.00</span></td>
  </tr>
  <tr>
      <td style={{"textAlign":"left","padding":"10px 20px"}} >#2</td>
    <td style={{"textAlign":"left","padding":"10px 20px","padding":"0 10px","width":"30rem",}} >Music</td>
    <td style={{"textAlign":"left","padding":"10px 20px"}} >&#8377;100.00</td>
    <td style={{"textAlign":"left","padding":"10px 20px"}} >/Set</td>
    <td style={{"textAlign":"left","padding":"10px 20px"}} >1</td>
    <td style={{"textAlign":"left","padding":"10px 20px"}} >&#8377; <span> 1000.00</span></td>
    <td style={{"textAlign":"left", "position":"relative","top":"11px","padding":"6px 20px"}} > <span style={{"display":"block"}}  >  &#8377; 50.00</span>  <span style={{"fontSize":"12px","marginLeft":"15px"}} > (5%)</span></td>
    <td style={{"textAlign":"left", "position":"relative","top":"11px","padding":"6px 20px"}} > <span style={{"display":"block"}}  > &#8377; 50.00<br /></span>  <span style={{"fontSize":"12px","marginLeft":"15px"}} > (5%)</span></td>
    <td style={{"textAlign":"left","padding":"10px 20px"}} >&#8377; <span>0.00</span></td>
  </tr>
  <tr>
  <td style={{"textAlign":"left","padding":"10px 20px"}} >#3</td>
    <td style={{"textAlign":"left","padding":"10px 20px","padding":"0 10px","width":"30rem",}} >Decoration</td>
    <td style={{"textAlign":"left","padding":"10px 20px"}} >&#8377;<span>1000.00</span></td>
    <td style={{"textAlign":"left","padding":"10px 20px"}} >/Set</td>
    <td style={{"textAlign":"left","padding":"10px 20px"}} >1</td>
    <td style={{"textAlign":"left","padding":"10px 20px"}}>&#8377; <span> 1000.00</span></td>
    <td style={{"textAlign":"left", "position":"relative","top":"11px","padding":"6px 20px"}} > <span style={{"display":"block"}}  >  &#8377; 50.00</span>  <span style={{"fontSize":"12px","marginLeft":"15px"}} > (5%)</span></td>
    <td style={{"textAlign":"left", "position":"relative","top":"11px","padding":"6px 20px"}} > <span style={{"display":"block"}}  > &#8377; 50.00<br /></span>  <span style={{"fontSize":"12px","marginLeft":"15px"}} > (5%)</span></td>
    <td style={{"textAlign":"left","padding":"10px 20px"}} >&#8377; <span>0.00</span></td>
    
  </tr>
 <br />
</table>

            
            {/* <p className="right" style={{"float":"right"}} > 
            Sub Total <span style={{"marginLeft":"120px"}}>&#8377;<span style={{"marginRight":"10px","fontWeight":"600"}} >27,000.00</span></span>
            </p> <br />
            <p className="right" style={{"float":"right"}} > 
            Sub Total <span style={{"marginLeft":"120px"}}>&#8377;<span style={{"marginRight":"10px","fontWeight":"600"}} >27,000.00</span></span>
            </p><br />
            <p className="right" style={{"float":"right"}} > 
            Sub Total <span style={{"marginLeft":"120px"}}>&#8377;<span style={{"marginRight":"10px","fontWeight":"600"}} >27,000.00</span></span>
            </p><br />
            <p className="right" style={{"float":"right"}} > 
            Sub Total <span style={{"marginLeft":"120px"}}>&#8377;<span style={{"marginRight":"10px","fontWeight":"600"}} >27,000.00</span></span>
            </p><br /> */}
        <section className="bottom">

            <div className="leftbox" style={{"border":"2px solid white","width":"45rem","marginLeft":"23px","display":"inline-block","paddingLeft":"29px","height":"150px","marginTop":"10px"}} >
            <h3 style={{"textDecoration":"underline","lineHeight":"4px","textUnderlinePosition":"under","marginTop":"27px"}}> <span style={{"fontSize":"19px"}} > Booking Cancle </span></h3>
            <span style={{"display":"block","paddingTop":"10px"}}>Reason:- ggddg kgfjdkg uih ughfgiu dfhgiudf</span>
            <span style={{"display":"block"}}>Refund Amount :- &#8377; 2000.00</span>
            <span style={{"display":"block"}}>Payment Mode :- Cash</span>
            
            </div>


<table style={{"borderCollapse":"collapse","width":"20%","marginRight":"22px","marginTop":"25px","textAlign":"center","padding":"10px","float":"right"}} >
  <tr>
  <th>Sub Total</th>
  <td>Last Name</td>
  </tr>
  <tr>
  <th>Discount(0%)</th>
  <td>&#8377;{" "}0.00</td>
  </tr>
  <tr>
  <th>CGST</th>
  <td>&#8377;{" "}990.00</td>
  </tr>
  <tr>
  <th>SGST</th>
  <td>&#8377;{" "}990.00</td>
  </tr>
  <tr>
  <th>Round Off(+)</th>
  <td>&#8377;{" "}<span>0.00</span></td>
  </tr>
  
  <tr>
  <th>Advance-1</th>
  <td>&#8377;{""}1,000.00</td>
  
  </tr>
  <tr>
  <th>Advance-2</th>
  <td>&#8377;{""}1,000.00</td>
  
  </tr>
  <tr>
  <th>Left Amount</th>
  <th>&#8377;{""}9,000.00</th>
  
  </tr>
</table>
</section>

            

            </section> 
            <section class="d-flex justify-content-center m-3">
                <button class="btn btn-danger px-4 mx-2">
                <img src={left} alt="" className="w-25 ms-1 mx-2"/>
                    Back
                </button>
                <button class="btn btn-success px-5 mx-4" style={{"textAlign":"center"}}>Print
               
                </button>
            </section>
            </div>
            
            </div>
     );
    }
export default Right;