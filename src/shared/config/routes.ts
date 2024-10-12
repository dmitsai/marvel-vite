const Routes = {
    PREFIX: '/' as const,
    INDEX: '' as const,
    CHARACTERS: {
        ALL: 'characters' as const,
        ITEM: (characterId: string) => `/characters/${characterId}` as const,
    },
    COMICS: {
        ALL: 'comics' as const,
        ITEM: (comicBookId: string) => `/comics/${comicBookId}` as const,
    }

};

export default Routes;