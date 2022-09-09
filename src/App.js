import "./App.css";

// primeReact imports
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

// flag icon
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { ScrollTop } from "primereact/scrolltop";

import ContextProvider from "./contexts/ContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./component/Header/Header";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blogs/Blog";
import EventPage from "./pages/Events/EventPage/EventPage";

import Footer from "./component/Footer/Footer";
import MemberList from "./pages/Membership/Members/MemberList/MemberList";
import MemberServices from "./pages/Membership/Members/MemberServices/MemberServices";
import GeneralMembers from "./pages/Membership/GeneralMembers/GeneralMembersList/GeneralMembers";
import GeneralMemberRegistration from "./pages/Membership/GeneralMembers/GeneralMemberRegistration/GeneralMemberRegistration";
import EMIndividualRegistration from "./pages/Membership/ExecutiveMember/EMIndividualRegistration";
import EMOrganization from "./pages/Membership/ExecutiveMember/EMOrganization";
import MembershipProcess from "./pages/Membership/MembershipProcess/MembershipProcess";
import AllServices from "./pages/Services/AllServices/AllServices";
import SingleServicePage from "./pages/Services/AllServices/SingleServicePage/SingleServicePage";
import BlogDetailSingle from "./pages/Blogs/BlogDetails/BlogDetailSingle";
import EventDetailSingle from "./pages/Events/EventDetails/EventDetailSingle";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <div className="mainApp">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
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
              <Route path="memberList" element={<MemberList />} />
              <Route path="memberservices" element={<MemberServices />} />
              <Route path="generalMembers" element={<GeneralMembers />} />
              <Route
                path="gmRegistration"
                element={<GeneralMemberRegistration />}
              />
              <Route
                path="emIndividualRegistration"
                element={<EMIndividualRegistration />}
              />
              <Route
                path="emOrganizationRegistration"
                element={<EMOrganization />}
              />
              <Route path="membershipProcess" element={<MembershipProcess />} />

              {/* <Route path='memberList' element={}/>
            <Route path='memberservices' element={}/>
            <Route path='generalMembers' element={}/>
            <Route path='gmRegistration' element={}/>
            <Route path='emIndividualRegistration' element={}/>
            <Route path='emOrganizationRegistration' element={}/>
            <Route path='membershipProcess' element={}/> */}

              {/* services  */}
              <Route path="allservices" element={<AllServices />} />
              <Route path="allservices/:id" element={<SingleServicePage />} />

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
            </Route> */}
              <Route path="events" element={<EventPage />} />
              <Route path="events/:id" element={<EventDetailSingle />} />

              <Route path="blogs" element={<Blog />} />
              <Route path="blogs/:id" element={<BlogDetailSingle />} />
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
