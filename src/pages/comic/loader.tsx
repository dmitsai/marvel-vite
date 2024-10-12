export const comicPageLoader = ({ params }: { params: any }) => {
    return { comicId: params.comicId } as ComicPageLoaderParams
}
export interface ComicPageLoaderParams {
    comicId: string
}