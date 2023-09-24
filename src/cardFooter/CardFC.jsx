import CardFooter from "./CardFooter"

const CardFC = ({footerH3, footerP, footerH31, footerp1, footerH32,  footerP2, h3Sty1, pSty1, h3Sty2,pSty2, h3Sty3, pSty3, footerSy, fds })=>{
  return(
    <>
     
      <div style={footerSy}>
          <div style={{display:"flex", justifyContent: "space-around", padding: "0.5rem 0", marginTop:"2rem", }}>

            <CardFooter footerH3={footerH3}
            footerSty={{borderRight: "1px solid #fff"}}
            footerP={footerP} h3Style={h3Sty1} pStyle={pSty1} fDivSty={fds}/>

            <CardFooter footerH3={footerH31}
            footerP={footerp1} h3Style={h3Sty2} pStyle={pSty2} fDivSty={fds}/>
            
            <CardFooter  footerH3={footerH32}
            footerP={footerP2} h3Style={h3Sty3} pStyle={pSty3} />

          </div>
    
        </div>
      
    </>
  )
}
export default CardFC