import Explorer from "../components/explorer/explorer";
import Home from "../components/home";
import Competition from "../components/competitions/competitions.tsx";
import Hackathon from "../components/competitions/hackathonSubscription.tsx";

export const ROUTES = [
    {
        path: '/',
        element:<Home/>
    },
    {   
        path: "/explorer",
        element: <Explorer />,
      },
    {
        path:'/explorer/:username',
        element:<Explorer/>
    },
    {
        path:'/competitions',
        element:<Competition/>
    },
    {
        path: "/hacks/:hackId",
        element:<Hackathon/>
    }
]