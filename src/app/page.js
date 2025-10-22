import Header from '@/ui/blocks/Header';
import Hero from '@/ui/blocks/Hero';
import FormBlock from '@/ui/blocks/FormBlock/FormBlock';
import SummitLocation from '@/ui/blocks/SummitLocation/SummitLocation';
import SummitPartner from '@/ui/blocks/SummitPartner/SummitPartner';
import PriceCalendar from '@/ui/blocks/PriceCalendar/PriceCalendar';
import PartnersSlider from '@/ui/blocks/PartnersSlider/PartnersSlider';
import AttendingSummit from '@/ui/blocks/AttendingSummit/AttendingSummit';
import JoinInstagram from '@/ui/blocks/JoinInstagram/JoinInstagram';
import Speakers from '@/ui/blocks/Speakers/Speakers.jsx';
import WhyWorth from '@/ui/blocks/WhyWorth/WhyWorth';
import BuyTicket from '@/ui/blocks/BuyTicket/BuyTicket';
import Modal from '@/ui/components/Modal/Modal';
import Footer from '@/ui/blocks/Footer';
export default async function Home() {

    return (
        <>
            <Header />
            <main>
                <Hero />
                <PartnersSlider />
                <AttendingSummit />
                <WhyWorth />
                <JoinInstagram />
                <Speakers />
                <BuyTicket />
                <PriceCalendar />
                <SummitPartner />
                <SummitLocation />
                <FormBlock />
            </main>
            <Modal />
            <Footer />
        </>
    );
}