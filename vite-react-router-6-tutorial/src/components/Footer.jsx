
const Footer = () => {
  return (

    <footer className="section footer">

      {/* <ul className="footer-links">

          {pageLinks.map((pageLink) => {

            return (
              
              <>
              

                <PageLink pageLink = {pageLink} className="footer-link"/>
              
              </>
            
            )

          })}

      </ul>
      <ul className="footer-icons">

        {socialLinks.map((socialLink) => {


          return (
            
            <>        
            
              <SocialLink socialLink= {socialLink} className="footer-icon"/>

            </>

          )

        })}
          
      </ul> */}

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>

    </footer>

  )
}
export default Footer