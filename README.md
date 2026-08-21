# 🚴‍♂️ UCI Cycling - Plataforma de Streaming en Vivo

## 📖 Descripción de la Plataforma
Se trata de una plataforma web de streaming deportivo enfocada en transmisiones en vivo de eventos de ciclismo sancionados por la UCI (Ruta, MTB y BMX). La aplicación está diseñada con una interfaz profesional en modo oscuro dividida en dos paneles simultáneos:
* **Señal de Video en Vivo:** Un panel principal que procesa transmisiones continuas a través de protocolos de streaming.
* **Panel de Análisis Estadístico:** Una tabla de clasificación dinámica diseñada para seguir los tiempos, diferencias y posiciones de los corredores. Esta sección está pensada para facilitar un análisis profundo de métricas deportivas y estadísticas de carrera en tiempo real.

## 🛠️ Tecnologías Utilizadas
El proyecto está construido sobre un stack moderno y escalable:
* **Next.js y React:** El motor principal de la aplicación, encargado de renderizar la interfaz en el cliente y manejar las rutas de datos en el servidor.
* **TypeScript:** Implementado para brindar un tipado estricto, capturando errores (como los de las propiedades del reproductor) antes del despliegue.
* **CSS / Tailwind:** Estructura basada en Flexbox para garantizar que la plataforma sea responsiva y mantenga el formato de columnas divididas de manera consistente.
* **AWS Amplify:** Infraestructura en la nube configurada para despliegue continuo (CI/CD). Compila, empaqueta y publica el código automáticamente con cada actualización enviada a la rama principal de Git.
* **React-Player (HLS):** Librería especializada para decodificar y reproducir formatos de video de transmisión en vivo (enlaces `.m3u8`).
* **Data Mocking:** Inyección de datos estáticos en el backend como estrategia temporal de *bypass* para evitar bloqueos de seguridad en la nube durante peticiones de extracción de datos (web scraping).