import React from 'react'

export default function Contact() {
  return (
    <div class="contactsec">
      <h1>
        Contact Us
      </h1>
      <div class="contact-items">
        <img src="https://th.bing.com/th/id/R.312d8e3b6ad4850c2bc37e76c017102e?rik=9ilUSsW1XULX4w&riu=http%3a%2f%2fwegreen.com.au%2fwp-content%2fuploads%2f2023%2f10%2fScreenshot-2023-10-02-152657-1.png&ehk=n4p6O9sdmfqbLaN5YgLVqSnceK7hlc7j7eyaZiFgTZQ%3d&risl=&pid=ImgRaw&r=0" width="500" height="350" alt='address'></img>
        <div class="mapouter">
            {/* <div class="gmap_canvas">
                <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=jocky%20dlf%20my%20pad&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br /><style>.mapouter{{position:'relative',height:'500px',width:'600px'}}</style>
                <a href="https://www.embedgooglemap.net"></a>
                <style>.gmap_canvas {{overflow:'hidden',background:'none!important',height:'600px',width:'600px'}}</style>
            </div> */}
            <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.17825714305!2d81.00367617488013!3d26.866077062094135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be313059e4a9f%3A0xae4bf0c2840f1012!2sJockey%2C%20DLF%20My%20Pad!5e0!3m2!1sen!2sin!4v1718633090379!5m2!1sen!2sin" width="500" height="350" title='map'></iframe>
        </div>
      </div>
    </div>
  )
}
