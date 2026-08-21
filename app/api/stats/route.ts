import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET() {
    try {
        const response = await fetch('https://www.procyclingstats.com/race/tour-de-france/2023/stage-1', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3',
            }
        });

        const html = await response.text();
        const $ = cheerio.load(html);

        const riders: any[] = [];

        $('table.results > tbody > tr').slice(0, 10).each((index, element) => {
            const name = $(element).find('td:nth-child(4) > a').text();
            const time = $(element).find('td:nth-child(6)').text();
            if (name) riders.push({ rank: index + 1, name, time });
        });

        return NextResponse.json({ success: true, data: riders });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Error extrayendo datos' }, { status: 500 });
    }
}