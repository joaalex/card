import CardFC from "../cardFooter/CardFC"
import CardFooter from "../cardFooter/CardFooter"


const Card = ({h3, ps1, ps2, ps3, hs1, hs2, hs3,  fs, p, h31, p1, h32, p2, photo, h5Style, h5Text, h2Text,pText, fdivs})=>{  

  const cardStyle ={
    textAlign:"center", 
    borderRadius:20, 
    boxShadow:"2px 2px 10px #000", 
    backgroundColor:"#fff",
   
  }

  return(
    <>
      <div className="card" style={cardStyle}>

        <div className="cardDiv" style={{ borderTopRightRadius:20 ,objectFit:"cover", borderTopLeftRadius:20, height:"20rem"}}>
          {/* <img src={photo} width={500} alt="" style={{objectFit:"contain"}} /> */}
        </div>
        
        <div style={{padding:".5rem 2rem" }}>
          <h5 style={h5Style}>{h5Text}</h5>
          <h2 style={{fontSize:"3rem",  padding:"1rem 1rem"}}>{h2Text}</h2>
          <p style={{fontSize:"1rem", padding:"0, 3rem" }}>{pText}</p>
        </div>

        <CardFC  footerSy={fs} footerH3={h3} footerP={p} footerH31={h31} footerp1={p1}
        footerH32={h32} footerP2={p2} pSty1={ps1} pSty2={ps2}
        pSty3={ps3} h3Sty1={hs1} h3Sty2={hs2} h3Sty3={hs3} fds={{borderRight:"1px solid black", padding:"0.5rem 2rem",}}
        />
       
        


      </div>
    </>
  )
}
export default Card