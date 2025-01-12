import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';
import EventSection from './EventSection';
import TicketSection from './TicketSection';
import Footer from './Footer';

function LuluPage() {
  return (
    <div className="lulu">
      <Header />
      <EventSection />
      <Footer />
      <TicketSection />
    </div>
  );
}

export default LuluPage;