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

              {/* <Route path='cabinateMembers' element={}/>
            <Route path='exAmbassador' element={}/>
            <Route path='adCouncil' element={}/> */}

              {/* Young Congress  */}

              {/* <Route path='YCAbout' element={}/>
            <Route path='YCPrograms' element={}/>
            <Route path='YCActivities' element={}/>
            <Route path='YCMembers' element={}/> */}

              {/* members  */}
              <Route path='memberList' element={<MemberList />} />
              <Route path='memberservices' element={<MemberServices />} />
              <Route path='generalMembers' element={<GeneralMembers />} />

              {/* <Route path='memberList' element={}/>
            <Route path='memberservices' element={}/>
            <Route path='generalMembers' element={}/>
            <Route path='gmRegistration' element={}/>
            <Route path='emIndividualRegistration' element={}/>
            <Route path='emOrganizationRegistration' element={}/>
            <Route path='membershipProcess' element={}/> */}

              {/* services  */}

              {/* <Route path='allservices' element={}/>
            <Route path='consultant' element={}/>
            <Route path='jobsupport' element={}/>
            <Route path='bussinessSupport' element={}/>
            <Route path='edoctor' element={}/>
            <Route path='deadbodySupport' element={}/>
            <Route path='lawsupport' element={}/>
            <Route path='relief' element={}/> */}

              {/* gallery  */}

              {/* <Route path='gallery' element={}>
                <Route path='photoGallery' element={}/>
                <Route path='videoGallery'/>
            </Route>
          <Route path='events' element={}/> */}
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
