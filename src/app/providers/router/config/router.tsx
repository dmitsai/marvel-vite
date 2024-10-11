import { createBrowserRouter } from "react-router-dom";
import Routes from '~/shared/config/routes';
import { RootLayout } from "~/pages/root/layout";
import DevelopmentPage from "~/pages/development/page";

export const router = createBrowserRouter([
    {
        path: Routes.PREFIX,
        element: <RootLayout />,
        children: [
            {
                path: Routes.INDEX,
                element: <DevelopmentPage />,
                children: [
                    {
                        path: Routes.CHARACTERS,
                        element: <DevelopmentPage />
                    },
                    {
                        path: Routes.COMICS,
                        element: <DevelopmentPage />
                    }
                ]
            }
        ]
    }
])