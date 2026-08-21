import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET() {
    try {
        const response = await fetch('https://www.procyclingstats.com/race/tour-de-france/2023/stage-1');
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