export interface IDocumentsStatus {
    id: number;
    name: string;
    cssClass?: string;
}
export interface IDocuments {
    status: IDocumentsStatus;
    document: string;
    author: string;
    signer: string;
    createdAt: string;
}
