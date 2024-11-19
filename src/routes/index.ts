import { createBrowserRouter, type RouteObject } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import TradeForm from "../pages/TradeForm";
import importTrade from "../pages/ImportTrade";
import UploadCsvFile from "../pages/UploadCsvFile";
import TradesPage from "../pages/TradesPage";
import Jornal1 from "../pages/jornals/JornalPage"
import Jornal2 from "../pages/jornals/candlestick/Real"
import JornalPage2 from "../pages/jornals/JornalPage2";
import navbar from "../layouts/Navbar2"
import Signup from "../pages/AuthPages/SIgnUpForm";
import LoginPage from "../pages/AuthPages/LoginPage";
import CheckInbox from "../pages/AuthPages/CheckInbox";



const routes: RouteObject[] = [
    {
        path: "/",
        Component: DefaultLayout,
        children: [
            {
                index: true,
                Component: HomePage,
                
        
            },
            {
                
                path: "/tradeform",
                Component: TradeForm,
            },
            {
                path: "/ImportTrade",
                Component: importTrade,
            },
            {
                path: "/uploadcsvfile",
                Component: UploadCsvFile,
            },
            {
                path: "/tradespage",
                Component: TradesPage,
            },
            {
                path: "/jornal",
                Component: Jornal1,
            },
            {
                path: "/jornal2",
                Component: Jornal2,
            },
            {
                path: "/jornalpage2",
                Component: JornalPage2,
            },
            {
                path: "/navbar",
                Component: navbar,
            },
        ],
        
    },
    {
        path : '/',
        children :[
            {
                path: "/Signup",
                Component : Signup
            },
            {
                path: "/Login",
                Component : LoginPage
            },
            {
                path: "/CheckInbox",
                Component : CheckInbox
            }

          
        ]
    }
];

const router = createBrowserRouter(routes);

export default router;
