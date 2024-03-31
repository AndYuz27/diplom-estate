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
import CatalogSepType from "./Pages/CatalogSepType";
import AboutOrg from "./Pages/AboutOrg";
import AdminTable from "./Pages/AdminTable";
export default function Main(){
    return(
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/sep/:id" element={<CatalogSepType />} />
        <Route path="/city/:id_city" element={<CityInfo />} />
        <Route path="/auth/client" element={<AuthClient />} />
        <Route path="/admin/" element={<AdminPage />} />
        <Route path="/admin/table" element={<AdminTable />} />
        <Route path="/about/" element={<AboutOrg />} />
        <Route path="/auth/empl" element={<AuthEmpl />} />
        <Route path="/catalog/:id" element={<PageOfEstate/>}/>
        <Route path="*" element={<NotFound />} />
        </Routes>
    )
}