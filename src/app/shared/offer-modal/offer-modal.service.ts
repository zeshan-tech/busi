import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { nanoid } from 'nanoid';
import { Storage } from 'appwrite';
import { client } from '../../lib/appwrite';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OfferModalService {
  storage = new Storage(client);

  async sendPDFViaWhatsApp(pdfUrl: string) {}

  generatePdf(data: Record<string, string>): File {
    const doc = new jsPDF();

    const titles = Object.keys(data);
    const content = Object.values(data);
    console.log(content);

    doc.text(titles, 10, 10);
    doc.text(content, 100, 10);

    return new File([doc.output('blob')], 'generated_pdf.pdf', {
      type: 'application/pdf',
    });
  }

  async uploadPdfToCloud(file: File): Promise<string | void> {
    try {
      const response = await this.storage.createFile(
        environment.appwrite.bucketId,
        `${nanoid()}.pdf`,
        file
      );

      const result = this.storage.getFileDownload(
        environment.appwrite.bucketId,
        response.$id
      );

      console.log(result);

      return 'publicUrl';
    } catch (error) {
      alert((error as Error).message);
    }
  }
}
