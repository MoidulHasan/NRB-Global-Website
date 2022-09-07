import './App.css';
// primeReact imports
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css';

// flag icon
import '/node_modules/flag-icons/css/flag-icons.min.css';

import { ScrollTop } from 'primereact/scrolltop';

import ContextProvider from './contexts/ContextProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './component/Header/Header';
import Contact from './pages/Contact/Contact';
import BlogPage from './pages/Blogs/BlogPage/BlogPage';
import Footer from './component/Footer/Footer';
import MemberList from './pages/Membership/Members/MemberList/MemberList';
import MemberServices from './pages/Membership/Members/MemberServices/MemberServices';
import GeneralMembers from './pages/Membership/GeneralMembers/GeneralMembersList/GeneralMembers';
import GeneralMemberRegistration from './pages/Membership/GeneralMembers/GeneralMemberRegistration/GeneralMemberRegistration';
import EMIndividualRegistration from './pages/Membership/ExecutiveMember/EMIndividualRegistration';
import EMOrganization from './pages/Membership/ExecutiveMember/EMOrganization';
import MembershipProcess from './pages/Membership/MembershipProcess/MembershipProcess';
import AllServices from './pages/Services/AllServices/AllServices';
import SingleServicePage from './pages/Services/AllServices/SingleServicePage/SingleServicePage';
import YCAbout from './pages/YoungCongress/YCAbout/YCAbout';
import YCMembers from './pages/YoungCongress/YCMembers/YCMembers';
import YCProgram from './pages/YoungCongress/YCProgram/YCProgram';
import YCAtivities from './pages/YoungCongress/YCActivities/YCAtivities';
import CabinateMembers from './pages/Commitees/CabinateMembers/CabinateMembers';
import ExecutiveAbassador from './pages/Commitees/ExecutiveAmbassador/ExecutiveAbassador';
import AdvisorCouncil from './pages/Commitees/AdvisoryCouncil/AdvisorCouncil';
import PhotoGallary from './pages/Galllery/PhotoGallery/PhotoGallary';
import Gallery from './pages/Galllery/Gallery';
import VideoGallary from './pages/Galllery/VideoGallery/VideoGallary';
function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <div className='mainApp'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              {/* committee  */}
              <Route path='cabinateMembers' element={<CabinateMembers />} />
              <Route path='exAmbassador' element={<ExecutiveAbassador />} />
              <Route path='adCouncil' element={<AdvisorCouncil />} />
              {/* Young Congress  */}
              <Route path='YCAbout' element={<YCAbout />} />
              <Route path='YCPrograms' element={<YCProgram />} />
              <Route path='YCActivities' element={<YCAtivities />} />
              <Route path='YCMembers' element={<YCMembers />} />
              {/* members  */}
              <Route path='memberList' element={<MemberList />} />
              <Route path='memberservices' element={<MemberServices />} />
              <Route path='generalMembers' element={<GeneralMembers />} />
              <Route
                path='gmRegistration'
                element={<GeneralMemberRegistration />}
              />
              <Route
                path='emIndividualRegistration'
                element={<EMIndividualRegistration />}
              />
              <Route
                path='emOrganizationRegistration'
                element={<EMOrganization />}
              />
              <Route path='membershipProcess' element={<MembershipProcess />} />
              {/* <Route path='memberList' element={}/>
            <Route path='memberservices' element={}/>
            <Route path='generalMembers' element={}/>
            <Route path='gmRegistration' element={}/>
            <Route path='emIndividualRegistration' element={}/>
            <Route path='emOrganizationRegistration' element={}/>
            <Route path='membershipProcess' element={}/> */}

              {/* services  */}
              <Route path='allservices' element={<AllServices />} />
              <Route path='allservices/:id' element={<SingleServicePage />} />

              {/* <Route path='allservices' element={<Service />} /> */}
              {/* <Route path='consultant' element={ } />
            <Route path='jobsupport' element={ } />
            <Route path='bussinessSupport' element={ } />
            <Route path='edoctor' element={ } />
            <Route path='deadbodySupport' element={ } />
            <Route path='lawsupport' element={ } />
            <Route path='relief' element={ } /> */}
              {/* gallery  */}
              <Route path='gallery' element={<Gallery />} />
              <Route path='gallery/photoGallery' element={<PhotoGallary />} />
              {/* MINE  */}
              <Route path='gallery/videoGallery' element={<VideoGallary />} />
              {/* END  */}
              {/* <Route path='events' element={ } /> */}
              <Route path='blogs' element={<BlogPage />} />
            </Routes>
          </div>
          <ScrollTop />
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
