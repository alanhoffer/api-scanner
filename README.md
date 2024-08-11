
# ApiScanner

ApiScanner es una aplicación móvil desarrollada con Expo y React Native que permite escanear códigos de barras de tambores de miel, registrar información como código, tara y peso, y exportar la lista de tambores escaneados.

## Características

- **Escaneo de códigos de barras**: Utiliza la cámara del dispositivo para escanear códigos de barras de los tambores de miel.
- **Registro de información**: Guarda la información de cada tambor, incluyendo código, tara y peso.
- **Detección de duplicados**: Identifica y resalta los códigos de tambor duplicados.
- **Exportación de datos**: Exporta la lista de tambores en formato Excel o texto plano.
- **Interfaz sencilla**: Navegación intuitiva con una pantalla de inicio, escáner, y formulario de datos.

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/alanhoffer/api-scanner.git
   ```

2. **Instala las dependencias:**

   ```bash
   cd apiscanner
   npm install
   ```

3. **Configura el entorno:**

   Asegúrate de tener Expo CLI instalado y configurado en tu máquina:

   ```bash
   npm install -g expo-cli
   ```

4. **Ejecuta la aplicación en modo de desarrollo:**

   ```bash
   expo start
   ```

## Uso

- **Escaneo de códigos**: Dirígete a la pantalla de escaneo para capturar el código de barras de un tambor.
- **Agregar información**: Una vez escaneado, completa los campos de tara y peso en el formulario.
- **Visualización y gestión**: Consulta la lista de tambores escaneados, donde puedes eliminar elementos individuales o todos los tambores.
- **Exportación de la lista**: En la lista, puedes exportar los datos a un archivo Excel o de texto plano para compartir o almacenar.

## Construcción de APK

Para generar una APK de la aplicación, asegúrate de tener un proyecto configurado en EAS:

1. **Instala EAS CLI**:

   ```bash
   npm install -g eas-cli
   ```

2. **Autentícate en tu cuenta de Expo:**

   ```bash
   eas login
   ```

3. **Construye la APK:**

   ```bash
   eas build --platform android --profile production
   ```

   Si deseas construir una APK y no un AAB, asegúrate de tener configurado correctamente el perfil de producción en `eas.json`.

## Contribución

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, sigue los pasos a continuación:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube los cambios a tu repositorio (`git push origin feature-nueva-funcionalidad`).
5. Crea un Pull Request.


