import path from 'path';
import fs from 'fs';

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const lang = url.searchParams.get('lang');

    let filePath;

    if (lang === 'tr') {
      filePath = path.resolve('src/public', 'resumeTurkce.pdf');
    } else if (lang === 'en') {
      filePath = path.resolve('src/public', 'resumeEnglish.pdf');
    } else {
      res.status(400).json({ error: 'Invalid language parameter' });
      return;
    }

    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ error: 'File Not Found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const fileStream = fs.createReadStream(filePath);

    return new Response(fileStream, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=resume.pdf'
      }
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
