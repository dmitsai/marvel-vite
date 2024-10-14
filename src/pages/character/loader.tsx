export const characterPageLoader = ({ params }: { params: any }) => {
    return { characterId: params.characterId } as CharacterPageLoaderParams
}
export interface CharacterPageLoaderParams {
    characterId: string
}