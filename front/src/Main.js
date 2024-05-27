import Landing from "./Pages/Landing";
import NotFound from './NotFound'
import { Route, Routes } from "react-router-dom";
import Catalog from "./Pages/Catalog";
// import EState from "./EState";
import AuthClient from "./AuthClient";
import AuthEmpl from "./AuthEmpl";
import CityInfo from "./CityInfo";
import AdminPage from "./Pages/AdminPage";
import PageOfEstate from "./Pages/PageOfEstate"
import {CatalogSepType} from "./Pages/Catalog";
import AboutOrg from "./Pages/AboutOrg";
import AdminTable from "./Pages/AdminTable";
import UploadObject from "./Pages/UploadObjects";
import Vacancy from "./Pages/Vacancy";
import Services from "./Pages/Services";
import ServicePage from "./Pages/ServicePage";
import PriceList from "./Pages/PriceList";
import Chat from "./Pages/Chat";
import Feedback from "./Pages/Feedback";
import AddEmpl from "./Pages/AddEmpl";
import { FeedbackAdminList, FeedbackAdminPageQestion } from "./Pages/Feedback.Admin";
export default function Main(){
    return(
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="/services-price-List" element={<PriceList />} />
        <Route path="/catalog/sep/:id" element={<CatalogSepType />} />
        <Route path="/city/:id_city" element={<CityInfo />} />
        <Route path="/auth/client" element={<AuthClient />} />
            <Route path="/admin/" element={<AdminPage />} />
            <Route path="/admin/table" element={<AdminTable />} />
            <Route path="/admin/upload" element={<UploadObject />} />
            <Route path="/admin/chat" element={<Chat />} />
            <Route path="/admin/add-users" element={<AddEmpl />} />
            <Route path="/admin/feedback" element={<FeedbackAdminList />} />
            <Route path="/admin/feedback/:id" element={<FeedbackAdminPageQestion />} />
        <Route path="/about/" element={<AboutOrg />} />
        <Route path="/about/vacancy" element={<Vacancy />} />
        <Route path="/auth/empl" element={<AuthEmpl />} />
        <Route path="/catalog/:id" element={<PageOfEstate/>}/>
        <Route path="*" element={<NotFound />} />
        </Routes>
    )
}