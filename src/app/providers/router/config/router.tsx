import { createBrowserRouter } from "react-router-dom";
import Routes from '~/shared/config/routes';
import { RootLayout } from "~/pages/root/layout";
import { CharactersPage } from "~/pages/characters/page";
import { ComicsPage } from "~/pages/comics/page";

export const router = createBrowserRouter([
    {
        path: Routes.INDEX,
        element: <RootLayout />,
        children: [

            {
                path: Routes.CHARACTERS,
                element: <CharactersPage />
            },
            {
                path: Routes.COMICS,
                element: <ComicsPage />
            }

        ]
    }
])