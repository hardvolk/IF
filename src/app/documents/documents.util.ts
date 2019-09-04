import * as data from '../../db/documents.json';
import { IDocuments } from './documents.js';

export class DocumentsUtil {
    static getDocmuentsList(): IDocuments[] {
        const docs = data['documents'];
        console.log('=== docs:', docs);
        const mappedDocs:IDocuments[] = docs.map((doc) => {
            return {
                Estado: doc['status']['name'],
                Documento: doc['name'],
                Author: doc['user']['name'],
                Firmante: doc['sign_requests']['name'],
                Creado: doc['created_at']
            }
        });
        return mappedDocs;
    }
}