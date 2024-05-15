import Banner from "../Components/Contact/Banner"
import ContactBody from "../Components/Contact/Body"
import ContactForm from "../Components/Contact/ContactForm"
import Title from "../Components/Title"
import Navbar from "../Components/mainHome/Navbar"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ContactBody />
      <Title title='Contact us today' />
      <ContactForm />
    </div>
  )
}

export default Contact