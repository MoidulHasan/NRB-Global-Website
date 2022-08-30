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

            {/* <Route path='cabinateMembers' element={}/>
            <Route path='exAmbassador' element={}/>
            <Route path='adCouncil' element={}/> */}

            {/* Young Congress  */}

            {/* <Route path='YCAbout' element={}/>
            <Route path='YCPrograms' element={}/>
            <Route path='YCActivities' element={}/>
            <Route path='YCMembers' element={}/> */}

            {/* members  */}

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
            <Route path='events' element={}/>
            <Route path='blogs' element={}/> */}
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
