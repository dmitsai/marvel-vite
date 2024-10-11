const Routes = {
    PREFIX: '/' as const,
    INDEX: '' as const,
    COMIX: (comicBookId: string) => `comic/${comicBookId}` as const,
    CHARACTER: (characterId: string) => `character/${characterId}` as const,

};

export default Routes;