import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';
import EventSection from './EventSection';
import TicketSection from './TicketSection';
import Footer from './Footer';

function NtpmmPage() {
  return (
    <div className="ntpmm">
      <Header />
      <EventSection />
      <Footer />
      <TicketSection />
    </div>
  );
}

export default NtpmmPage;