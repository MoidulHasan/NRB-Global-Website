import logo from './logo.svg';
import './App.css';

// primeReact imports
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css';

import ContextProvider from './contexts/ContextProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './component/Header/Header';
import Contact from './pages/Contact/Contact';
import BlogPage from './pages/Blogs/BlogPage/BlogPage';
import Footer from './component/Footer/Footer';
import YCAbout from './pages/YoungCongress/YCAbout/YCAbout';
import YCMembers from './pages/YoungCongress/YCMembers/YCMembers';
import YCProgram from './pages/YoungCongress/YCProgram/YCProgram';
import YCAtivities from './pages/YoungCongress/YCActivities/YCAtivities';
import CabinateMembers from './pages/Commitees/CabinateMembers/CabinateMembers';
import ExecutiveAbassador from './pages/Commitees/ExecutiveAmbassador/ExecutiveAbassador';
import AdvisorCouncil from './pages/Commitees/AdvisoryCouncil/AdvisorCouncil';
import Service from './pages/Services/Service';
function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <BrowserRouter>
          <Header />
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
            {/* <Route path='memberList' element={}/>
            <Route path='memberservices' element={}/>
            <Route path='generalMembers' element={}/>
            <Route path='gmRegistration' element={}/>
            <Route path='emIndividualRegistration' element={}/>
            <Route path='emOrganizationRegistration' element={}/>
            <Route path='membershipProcess' element={}/> */}

            {/* services  */}

            <Route path='allservices' element={<Service />} />
            {/* <Route path='consultant' element={ } />
            <Route path='jobsupport' element={ } />
            <Route path='bussinessSupport' element={ } />
            <Route path='edoctor' element={ } />
            <Route path='deadbodySupport' element={ } />
            <Route path='lawsupport' element={ } />
            <Route path='relief' element={ } /> */}

            {/* gallery  */}

            {/* <Route path='gallery' element={}>
                <Route path='photoGallery' element={}/>
                <Route path='videoGallery'/>
            </Route>
          <Route path='events' element={}/> */}
            <Route path='blogs' element={<BlogPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
