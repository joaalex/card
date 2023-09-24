 const CardFooter =({footerSty,fDivSty, h3Style,footerH3,pStyle, footerP})=>{
  return(
    <>
      <div style={fDivSty}>
        <h3 style={h3Style}>{footerH3}</h3>
        <p style={pStyle}>{footerP}</p>
      </div>
      
    </>
  )
 }

 export default CardFooter

//  {color:"#fff", fontSize:"2rem"}
// {color:"#fff", fontSize:"1rem"}