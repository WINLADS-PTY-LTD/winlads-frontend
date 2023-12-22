import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import Authentication from "./pages/Authentication/Authentication";
import Loader from "./components/Loader/Loader";
import News from "./pages/News/News";
import Newslist from "./pages/News/Newslist";
import Subscription from "./pages/Subscription/Subscription";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./components/Welcome/Welcome";
import Raffles from "./pages/Raffles/Raffles";
import RafflesDashboard from "./pages/Raffles/RaffleDashbord";
import FaQ from "./pages/FaQ/FaQ";
import Notice from "./pages/Notice/Notice";
import BusinessCard from "./pages/BusinessCard/BusinessCard";
import Transaction from "./pages/Transaction/Transaction";
import LiveRaffle from "./pages/LiveRaffle/LiveRaffle";
import Profile from "./pages/Profile/Profile";
import NoticeInner from "./pages/Notice/NoticeInner";
import Messages from "./pages/Messages/Messages";
import History from "./pages/History/History";
import SubcriptionDone from "./pages/SubDone";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import GoogleAnalytics from "./utils/GoogleAnalytics";
import TermsCondition from "./pages/Terms&Condition/Terms&Condition";
import Layout from "./Layout";
import Privacy from "./pages/Privacy/Privacy";
import MyEntries from "./pages/MyEntries/MyEntries";
import NotFound from "./pages/NotFound";
import Support from "./pages/Support/Support";
import Withdraw from "./pages/Withdraw/Withdraw";
import { elements } from "chart.js";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/newslist",
          element: <Newslist />,
        },
        {
          path: "/news/:id",
          element: <News />,
        },
        {
          path: "/subscription",
          element: <Subscription />,
        },
        {
          path: "/giveaways",
          element: <RafflesDashboard />,
        },
        {
          path: "/giveaway/:id",
          element: <Raffles />,
        },
        {
          path: "/faq",
          element: <FaQ />,
        },
        {
          path: "transaction/",
          element: <Transaction />,
        },
        {
          path: "/business-card",
          element: <BusinessCard />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/live",
          element: <LiveRaffle />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/subscription-done",
          element: <SubcriptionDone />,
        },
        {
          path: "/payment-success",
          element: <PaymentSuccess />,
        },
        {
          path: "/myentries",
          element: <MyEntries />,
        },
        {
          path: "/withdraw",
          element: <Withdraw />,
        },
        {
          path: "/loader",
          element: <Loader />,
        },
      ],
    },

    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/conditions",
      element: <TermsCondition />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    // {
    //   path: "/dashboard",
    //   element: <Dashboard />,
    // },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    // {
    //   path: "/authentication",
    //   element: <Authentication />,
    // },
    // {
    //   path: "/loader",
    //   element: <Loader />,
    // },

    // {
    //   path: "/newslist",
    //   element: <Newslist />,
    // },
    // {
    //   path: "/news/:id",
    //   element: <News />,
    // },
    // {
    //   path: "/subscription",
    //   element: <Subscription />,
    // },
    // {
    //   path: "/welcome",
    //   element: <Welcome />,
    // },
    // {
    //   path: "/giveaways",
    //   element: <RafflesDashboard />,
    // },
    // {
    //   path: "/giveaway/:id",
    //   element: <Raffles />,
    // },
    // {
    //   path: "/faq",
    //   element: <FaQ />,
    // },
    // {
    //   path: "/notice",
    //   element: <Notice />,
    // },
    // {
    //   path: "/notice-inner",
    //   element: <NoticeInner />,
    // },
    // {
    //   path: "transaction/",
    //   element: <Transaction />,
    // },
    // {
    //   path: "/business-card",
    //   element: <BusinessCard />,
    // },
    // {
    //   path: "/profile",
    //   element: <Profile />
    // },
    // {
    //   path: "/live",
    //   element: <LiveRaffle />,
    // },
    // {
    //   path: "/messages",
    //   element: <Messages />,
    // },
    // {
    //   path: "/history",
    //   element: <History />,
    // },
    // {
    //   path: "/subscription-done",
    //   element: <SubcriptionDone />,
    // },
    // {
    //   path: "/payment-success",
    //   element: <PaymentSuccess />,
    // },
    // {
    //   path: "/conditions",
    //   element: <TermsCondition />,
    // },
    {
      path: "/privacy",
      element: <Privacy />,
    },
    // {
    //   path: "/myentries",
    //   element: <MyEntries />,
    // },
    {
      path: "/support",
      element: <Support />,
    },
  ]);

  return (
    <>
      <GoogleAnalytics trackingCode="G-N927BPJE6K" />
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
