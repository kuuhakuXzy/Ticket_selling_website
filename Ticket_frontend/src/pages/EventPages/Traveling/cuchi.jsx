import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';
import EventSection from './EventSection';
import TicketSection from './TicketSection';
import Footer from './Footer';

function CuchiPage() {
  return (
    <div className="cuchi">
      <Header />
      <EventSection />
      <Footer />
      <TicketSection />
    </div>
  );
}

export default CuchiPage;