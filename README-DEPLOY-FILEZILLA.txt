Kern IT - Deploy estatico con FileZilla

Este paquete contiene el build de produccion (carpeta dist). A continuacion los pasos para subirlo a tu hosting usando FileZilla.

1) Preparar los archivos
- Si recibiste un ZIP (kern-prod-*.zip), descomprimilo localmente. Obtendras la carpeta dist con:
  - index.html
  - carpeta assets/ (JS, CSS, imagenes, PDFs)
- Importante: para publicar, subi el CONTENIDO de dist, no la carpeta dist completa (index.html debe quedar en la raiz del sitio).

2) Conectarse por FTP con FileZilla
- Abrir FileZilla > File / Site Manager (Administrador de sitios) > New Site.
- Protocol: FTP - File Transfer Protocol.
- Encryption: Use explicit FTP over TLS if available (si tu hosting lo soporta) o Only use plain FTP si no.
- Host: (dato del hosting)
- Port: 21 (por defecto)
- Logon type: Normal
- User / Password: (datos provistos por el hosting)
- Connect.

3) Ir a la carpeta publica del servidor
- Usualmente: /public_html, /httpdocs, /www, /htdocs o la carpeta indicada por el proveedor.
- Si vas a publicar en un subdirectorio (ej: /public_html/kern), asegurate de que ese sea el destino deseado.

4) Subir los archivos
- En el panel local de FileZilla, entrar a dist en tu PC y seleccionar TODO su contenido: index.html, carpeta assets/, PDFs, etc.
- Arrastrar y soltar al panel remoto (la carpeta publica elegida en el paso 3).
- Si te pregunta por sobreescritura, elegi Replace (reemplazar).

5) Verificar luego de subir
- Abrir el dominio en el navegador (ej: https://tudominio.com) y hacer un hard refresh (Ctrl+F5) para evitar cache.

6) Si hay 404 en rutas internas (SPA con React Router)
- Este proyecto es una SPA; si el servidor es Apache y al entrar directo a una ruta (ej: /nosotros) ves 404, agrega un archivo .htaccess al lado de index.html con este contenido:

  Options -Multiviews
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]

- Si subiste .htaccess y no lo ves en FileZilla, activá "Force showing hidden files" (Servidor > Forzar mostrar archivos ocultos).

7) Notas de performance y cache
- Los archivos en assets/ vienen con nombres versionados (hash). Es seguro cachearlos.
- Si tu hosting permite compresion (gzip/brotli), activala para .js, .css, .svg, .jpg, .pdf.

8) Publicar en subcarpeta (opcional)
- Si el sitio debe vivir en una subcarpeta (ej: https://tudominio.com/kern), puede requerir ajustar la base de Vite (vite.config). Avisanos y te lo dejamos listo.

Solucion de problemas rapida
- 403/Permisos: asegurate de que index.html este en la raiz publica y permisos 644 para archivos, 755 para carpetas.
- 404 en rutas: agregar .htaccess como en el paso 6.
- Pagina en blanco: revisar consola del navegador por 404 de assets; si hay ruta en subcarpeta, consultar el punto 8.

Contacto
- Si necesitas asistencia con el deploy, escribinos y te ayudamos a configurarlo.