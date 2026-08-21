import { NextResponse } from 'next/server';

export async function GET() {
    // Datos simulados (Mock Data) para evitar el bloqueo de IP de AWS
    const riders = [
        { rank: 1, name: 'Tadej Pogačar', time: '4:05:21' },
        { rank: 2, name: 'Jonas Vingegaard', time: '+ 0:00' },
        { rank: 3, name: 'Wout van Aert', time: '+ 0:15' },
        { rank: 4, name: 'Mathieu van der Poel', time: '+ 0:22' },
        { rank: 5, name: 'Remco Evenepoel', time: '+ 0:30' },
        { rank: 6, name: 'Egan Bernal', time: '+ 1:10' },
        { rank: 7, name: 'Sepp Kuss', time: '+ 1:25' },
        { rank: 8, name: 'Richard Carapaz', time: '+ 1:40' }
    ];

    return NextResponse.json({ success: true, data: riders });
}