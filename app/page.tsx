'use client';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function Home() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch('/api/stats')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setStats(data.data);
      });
  }, []);
  return (
    <main className="flex min-h-screen flex-col lg:flex-row bg-gray-900 text-white p-4 gap-4">
      <section className="w-full lg:w-2/3 bg-black rounded-lg overflow-hidden border border-gray-700">
        <div className="aspect-video relative">
          <ReactPlayer
            src='https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8'
            playing={true} controls={true} width='100%' height='100%'
          />
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-red-500">Transmisión UCI en Vivo</h1>
        </div>
      </section>

      <aside className="w-full lg:w-1/3 bg-gray-800 rounded-lg p-4 border border-gray-700">
        <h2 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">Clasificación</h2>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-400">
              <th>Pos</th><th>Ciclista</th><th>Tiempo</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((rider: any) => (
              <tr key={rider.rank} className="border-t border-gray-700">
                <td className="py-2">{rider.rank}</td>
                <td className="py-2">{rider.name}</td>
                <td className="py-2 text-yellow-400">{rider.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </aside>
    </main>
  );
}