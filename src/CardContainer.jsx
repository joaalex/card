import Card from "./card/card";
import img1 from './assets/WhatsApp Image 2023-09-21 at 10.08.14 AM.jpeg'
import img2 from './assets/WhatsApp Image 2023-09-21 at 10.08.15 AM.jpeg'
import img3 from './assets/WhatsApp Image 2023-09-21 at 10.08.16 AM.jpeg'


const CardContainer = ()=>{

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap:"5rem",
    paddingTop: "5rem",


  }
  

  return(
    <>
      <div style={containerStyle}>
        
            <Card photo={img1}
              h5Style={{
                color:"red",
                fontSize: "1.15rem",
                
              }}
              
              
              h5Text="4 days ago"
              h2Text="Post One"
              pText="   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ut perferendis harum vel enim, laudantium aspernatur quidem dolor dignissimos officia?
              "
              fs={{ backgroundColor: "red", borderBottomLeftRadius:20, borderBottomRightRadius:20}}

              ps1={{color:"#fff", fontSize:"1rem"}}
              hs1={{color:"#fff", fontSize:"2rem"}}

              ps2={{color:"#fff", fontSize:"1rem"}}
              hs2={{color:"#fff", fontSize:"2rem"}}

              ps3={{color:"#fff", fontSize:"1rem"}}
              hs3={{color:"#fff", fontSize:"2rem", }}

              fdivs={{borderRight:"1px solid black" }}

              h3="4m" p="READ"
              h31="5123" p1="VIEW"
              h32="32" p2="COMMENTS"
              />

            <Card photo={img2}
                          h5Style={{
                            color:"orange",
                            fontSize: "1.15rem"
                          }}
                          
                          h5Text="1 week ago"
                          h2Text="Post Two"
                          pText="   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ut perferendis harum vel enim, laudantium aspernatur quidem dolor dignissimos officia?
                          "
                          fs={{ backgroundColor: "orange", borderBottomLeftRadius:20, borderBottomRightRadius:20}}

                          ps1={{color:"#fff", fontSize:"1rem"}}
                          hs1={{color:"#fff", fontSize:"2rem"}}

                          ps2={{color:"#fff", fontSize:"1rem"}}
                          hs2={{color:"#fff", fontSize:"2rem"}}

                          ps3={{color:"#fff", fontSize:"1rem"}}
                          hs3={{color:"#fff", fontSize:"2rem"}}

                          fdivs={{borderRight:"1px solid black" }}
                          
                          h3="7m" p="READ"
                          h31="7152" p1="VIEW"
                          h32="21" p2="COMMENTS"
                          />

            <Card photo={img3}
                          h5Style={{
                            color:"green",
                            fontSize: "1.15rem"
                          }}
                          h5Text="3 weeks ago"
                          h2Text="Post Three"
                          pText="   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ut perferendis harum vel enim, laudantium aspernatur quidem dolor dignissimos officia?
                          "
                          fs={{ backgroundColor: "green", borderBottomLeftRadius:20, borderBottomRightRadius:20}}

                          ps1={{color:"#fff", fontSize:"1rem"}}
                          hs1={{color:"#fff", fontSize:"2rem"}}

                          ps2={{color:"#fff", fontSize:"1rem"}}
                          hs2={{color:"#fff", fontSize:"2rem"}}

                          ps3={{color:"#fff", fontSize:"1rem"}}
                          hs3={{color:"#fff", fontSize:"2rem"}}

                          // fdivs={{borderRight:"1px solid black", paddingRight:"1.5rem" }}
                         
                          h3="7m" p="READ"
                          h31="7152" p1="VIEW"
                          h32="21" p2="COMMENTS"
                          />
                                     
      </div>
      
    </>
  )
}

export default CardContainer;