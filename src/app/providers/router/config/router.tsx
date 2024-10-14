import { createBrowserRouter } from "react-router-dom";
import Routes from '~/shared/config/routes';
import { RootLayout } from "~/pages/root/layout";
import { CharactersPage } from "~/pages/characters/page";
import { ComicsPage } from "~/pages/comics/page";
import { characterPageLoader } from "~/pages/character/loader";
import { CharacterPage } from "~/pages/character/page";
import { comicPageLoader } from "~/pages/comic/loader";
import { ComicPage } from "~/pages/comic/page";

export const router = createBrowserRouter([
    {
        path: Routes.INDEX,
        element: <RootLayout />,
        children: [
            {
                path: Routes.CHARACTERS.ALL,
                element: <CharactersPage />,
            },
            {
                path: Routes.COMICS.ALL,
                element: <ComicsPage />
            },
            {
                path: Routes.CHARACTERS.ITEM(':characterId'),
                loader: characterPageLoader,
                element: <CharacterPage />
            },
            {
                path: Routes.COMICS.ITEM(':comicId'),
                loader: comicPageLoader,
                element: <ComicPage />
            }

        ]
    }
])