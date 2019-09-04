import * as data from '../../db/documents.json';
import { IDocuments } from './documents.js';

export class DocumentsUtil {
    static getDocmuentsList(): IDocuments[] {
        const docs = data['documents'];
        const mappedDocs: IDocuments[] = docs.map((doc) => {
            const newDoc:IDocuments = {
                status: doc['status'],
                document: doc['name'],
                author: doc['user']['name'],
                signer: doc['sign_requests'].length ? doc['sign_requests'][0]['name'] : '',
                createdAt: doc['created_at']
            };
            newDoc.status.cssClass = `status-${newDoc.status.id}`;
            return newDoc;
        });
        return mappedDocs;
    }
}