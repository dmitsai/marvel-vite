const Routes = {
    PREFIX: '/' as const,
    INDEX: '' as const,
    CHARACTERS: 'characters' as const,
    COMICS: 'comics' as const,
    COMIC: (comicBookId: string) => `comic/${comicBookId}` as const,
    CHARACTER: (characterId: string) => `character/${characterId}` as const,
};

export default Routes;