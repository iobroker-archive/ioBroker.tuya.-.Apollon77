/*global systemDictionary:true */
'use strict';

systemDictionary = {
    "DiscoveredInfo": {                              "en": "Success! %s devices and %s schemas discovered. the proxy will be turned off in 10 seconds.", "de": "Erfolg! %s Geräte und %s Schemata wurden erkannt. Der Proxy wird in 10 Sekunden ausgeschaltet.", "ru": "Успех! обнаружены устройства%s и %s. Пожалуйста, проверьте журнал, если разработчикам сообщаются новые схемы. Прокси будет отключен через 10 секунд", "pt": "Sucesso! %s dispositivos e %s esquemas descobertos. Por favor, verifique o log se novos esquemas devem ser reportados ao desenvolvedor. O proxy será desativado em 10 segundos", "nl": "Succes! %s apparaten en %s schema's ontdekt. Controleer het logboek als er nieuwe schema's moeten worden gemeld aan de ontwikkelaar. Proxy wordt binnen 10 seconden uitgeschakeld", "fr": "Succès! %s périphériques et %s schémas découverts. Veuillez vérifier le journal si de nouveaux schémas doivent être signalés au développeur. Le proxy sera désactivé dans 10 secondes", "it": "Successo! %s dispositivi e %s schemi scoperti. Si prega di controllare il log se nuovi schemi devono essere segnalati allo sviluppatore. Il proxy verrà disattivato tra 10 secondi", "es": "¡Éxito! %s dispositivos y %s esquemas descubiertos. Compruebe el registro si se deben informar nuevos esquemas al desarrollador. El proxy se apagará en 10 segundos", "pl": "Sukces! % urządzeń i wykrytych %s schematów. Sprawdź dziennik, czy nowe schematy powinny zostać zgłoszone deweloperowi. Serwer proxy zostanie wyłączony za 10 sekund", "zh-cn": "成功！"},
    "Polling Interval": {                            "en": "Data Polling Interval (for devices not synced with App)", "de": "Datenabfrageintervall (für Geräte, die nicht mit der App synchronisiert wurden)", "ru": "Интервал опроса (если устройство не синхронизировалось с приложением)", "pt": "Intervalo de pesquisa (se o dispositivo não foi sincronizado com o aplicativo)", "nl": "Polling-interval (als apparaat niet met app was gesynchroniseerd)", "fr": "Intervalle d'interrogation (si l'appareil n'a pas été synchronisé avec l'application)", "it": "Intervallo di polling (se il dispositivo non è stato sincronizzato con l'app)", "es": "Intervalo de sondeo (si el dispositivo no se sincronizó con la aplicación)", "pl": "Interwał odpytywania (jeśli urządzenie nie było zsynchronizowane z aplikacją)", "zh-cn": "轮询间隔（如果设备未与App同步）"},
    "Proxy Port": {                                  "en": "Proxy Port",                                      "de": "Proxy-Port",                                      "ru": "Порт прокси",                                     "pt": "Porta proxy",                                     "nl": "Proxypoort",                                      "fr": "Port proxy",                                      "it": "Porta proxy",                                     "es": "Puerto proxy",                                    "pl": "Port proxy",                                      "zh-cn": "代理端口"},
    "Proxy Web Info Port": {                         "en": "Proxy SSL-Zertifikat Port",                       "de": "Proxy SSL-Zertifikat Port",                       "ru": "Прокси SSL-Порт Зертификата",                     "pt": "Porta SSL-Zertifikat Proxy",                      "nl": "Proxy SSL-Zertifikat-poort",                      "fr": "Port proxy SSL-Zertifikat",                       "it": "Porta proxy SSL-Zertifikat",                      "es": "Puerto proxy SSL-Zertifikat",                     "pl": "Port proxy SSL-Zertifikat Port",                  "zh-cn": "代理SSL-Zertifikat端口"},
    "Proxy-Info": {                                  "en": "To be able to get realtime status updates and to control devices you need to sync then with the mobile App where the devices are registered (e.g. Smart Life App). This is done by using the Adapter Web-Proxy in your WLAN connection together with a SSL certificate. More Information in <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md\" target=\"_blank\">README</a>.<br/><br/>Close/Kill the Tuya App. Start the proxy with the button below and follow the additional instructions.", "de": "Um Echtzeit-Status-Updates zu erhalten und Geräte zu steuern, ist eine Synchronisation mit der App erforderlich, in der die Geräte registriert sind (z. B. Smart Life App). Dazu wird der Adapter-Web-Proxy in Ihrer WLAN-Verbindung zusammen mit einem SSL-Zertifikat verwendet. Weitere Informationen sind in der <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md\" target=\"_blank\"> README </a> zusammengefasst. <br/> <br/> Die Tuya App muss geschlossen bzw. beendet werden. Nach dem Start des Proxy über die Schaltfläche unten bitte den den weiteren Anweisungen folgen.", "ru": "Чтобы получать обновления статуса в реальном времени и управлять устройствами, вам необходимо синхронизировать их с мобильным приложением, где регистрируются устройства (например, Smart Life). Это делается с помощью веб-прокси адаптера в вашем WLAN-соединении вместе с сертификатом SSL. Дополнительная информация в <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md\" target=\"_blank\"> README </a> <br/> <br/> Закрыть / Убить приложение Tuya. Запустите прокси с помощью кнопки ниже и следуйте дополнительным инструкциям.", "pt": "Para poder obter atualizações de status em tempo real e controlar dispositivos, é necessário sincronizar com o aplicativo móvel no qual os dispositivos estão registrados (por exemplo, Smart Life). Isso é feito usando o Adaptador Web Proxy em sua conexão WLAN junto com um certificado SSL. Mais informações em <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md\" target=\"_blank\"> LEIA-ME </a> <br/> <br/> Fechar / Matar o aplicativo Tuya. Inicie o proxy com o botão abaixo e siga as instruções adicionais.", "nl": "Om realtime statusupdates te krijgen en apparaten te kunnen bedienen, moet u deze synchroniseren met de mobiele app waarop de apparaten zijn geregistreerd (bijvoorbeeld Smart Life). Dit gebeurt met behulp van de Adaptor Web-Proxy in uw WLAN-verbinding samen met een SSL-certificaat. Meer informatie in <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md\" target=\"_blank\"> README </a> <br/> <br/> De Tuya-app sluiten / sluiten. Start de proxy met de onderstaande knop en volg de aanvullende instructies.", "fr": "Pour pouvoir obtenir des mises à jour de statut en temps réel et contrôler des appareils, vous devez vous synchroniser ensuite avec l'application mobile sur laquelle les appareils sont enregistrés (par exemple, Smart Life). Pour ce faire, utilisez Adapter Web-Proxy dans votre connexion WLAN avec un certificat SSL. Plus d'informations dans <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md\" target=\"_blank\"> LISEZMOI </a> <br/> <br/> Fermez / éliminez l'application Tuya. Démarrez le proxy avec le bouton ci-dessous et suivez les instructions supplémentaires.", "it": "Per poter ottenere aggiornamenti dello stato in tempo reale e controllare i dispositivi, è necessario sincronizzarsi con l'app mobile in cui sono registrati i dispositivi (ad es. Smart Life). Questa operazione viene eseguita utilizzando il proxy Web dell'adapter nella connessione WLAN insieme a un certificato SSL. Ulteriori informazioni in <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md\" target=\"_blank\"> README </a> <br/> <br/> Chiudi / uccidi l'app Tuya. Avvia il proxy con il pulsante in basso e segui le istruzioni aggiuntive.", "es": "Para poder obtener actualizaciones de estado en tiempo real y controlar los dispositivos, debe sincronizarlos luego con la aplicación móvil donde se registran los dispositivos (por ejemplo, Smart Life). Esto se hace utilizando el adaptador web-proxy en su conexión WLAN junto con un certificado SSL. Más información en <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md\" target=\"_blank\"> README </a> <br/> <br/> Cierre / mate la aplicación Tuya. Inicie el proxy con el botón de abajo y siga las instrucciones adicionales.", "pl": "Aby móc uzyskać aktualizacje statusu w czasie rzeczywistym i kontrolować urządzenia, które należy zsynchronizować, a następnie z aplikacją mobilną, w której są zarejestrowane urządzenia (np. Smart Life). Odbywa się to za pomocą adaptera Web-Proxy adaptera w połączeniu WLAN z certyfikatem SSL. Więcej informacji w <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md\" target=\"_blank\"> README </a> <br/> <br/> Zamknij / Kill the Tuya App. Uruchom proxy za pomocą przycisku poniżej i postępuj zgodnie z dodatkowymi instrukcjami.", "zh-cn": "为了能够获取实时状态更新并控制设备，您需要先与设备注册所在的移动应用（例如Smart Life）同步。"},
    "ProxyInfoText": {                               "en": "Because of changes from Tuya, the proxy sync is only possible with Tuya (or compatible Apps) < 3.14 . For instructions using Android simulator please see the <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md#detailed-step-by-step-guide-for-using-proxy-with-android-and-older-app-version\" target=\"_blank\">instructions on GitHub</a>.", "de": "Aufgrund von Änderungen von Tuya ist die Proxy-Synchronisierung nur mit Tuya (oder kompatiblen Apps) <3.14 möglich. Anweisungen zur Verwendung des Android-Simulators sind auf den <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md#detailed-step-by-step-guide-for-using-proxy-with-android-and-older-app-version\" target=\"_blank\">GitHub-Seriten</a> zusammengefasst.", "ru": "Из-за изменений в Tuya синхронизация прокси возможна только с Tuya (или совместимыми приложениями) <3.14. Инструкции по использованию симулятора Android см. В информации о <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md#detailed-step-by-step-guide-for-using-proxy-with-android-and-older-app-version\" target=\"_blank\">GitHub</a>.", "pt": "Devido a alterações no Tuya, a sincronização de proxy só é possível com o Tuya (ou aplicativos compatíveis) <3.14. Para obter instruções sobre o simulador do Android, consulte as <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md#detailed-step-by-step-guide-for-using-proxy-with-android-and-older-app-version\" target=\"_blank\">informações do GitHub</a>.", "nl": "Vanwege wijzigingen in Tuya is de proxy-synchronisatie alleen mogelijk met Tuya (of compatibele apps) <3.14. Raadpleeg de <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md#detailed-step-by-step-guide-for-using-proxy-with-android-and-older-app-version\" target=\"_blank\">GitHub-informatie</a> voor instructies over het gebruik van Android-simulator.", "fr": "En raison des modifications apportées à Tuya, la synchronisation du proxy n'est possible qu'avec Tuya (ou des applications compatibles) <3.14. Pour obtenir des instructions sur l'utilisation du simulateur Android, consultez les <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md#detailed-step-by-step-guide-for-using-proxy-with-android-and-older-app-version\" target=\"_blank\">informations GitHub</a>.", "it": "A causa delle modifiche da Tuya, la sincronizzazione proxy è possibile solo con Tuya (o app compatibili) <3.14. Per istruzioni sull'uso del simulatore Android, consultare le <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md#detailed-step-by-step-guide-for-using-proxy-with-android-and-older-app-version\" target=\"_blank\">informazioni su GitHub</a>.", "es": "Debido a los cambios de Tuya, la sincronización de proxy solo es posible con Tuya (o aplicaciones compatibles) <3.14. Para obtener instrucciones sobre cómo usar el simulador de Android, consulte la <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md#detailed-step-by-step-guide-for-using-proxy-with-android-and-older-app-version\" target=\"_blank\">información de GitHub</a>.", "pl": "Ze względu na zmiany wprowadzone w Tuya synchronizacja proxy jest możliwa tylko z Tuya (lub zgodnymi aplikacjami) <3.14. Aby uzyskać instrukcje dotyczące korzystania z symulatora Androida, zobacz <a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md#detailed-step-by-step-guide-for-using-proxy-with-android-and-older-app-version\" target=\"_blank\">informacje na temat GitHub</a>.", "zh-cn": "由于Tuya的更改，代理同步仅适用于<3.14的Tuya（或兼容的Apps）。有关使用Android模拟器的说明，请参阅<a href=\"https://github.com/Apollon77/ioBroker.tuya/blob/master/PROXY.md#detailed-step-by-step-guide-for-using-proxy-with-android-and-older-app-version\" target=\"_blank\">GitHub</a>信息。"},
    "ProxySteps": {                                  "en": "Use the QR-Code to add the certificate to your mobile phone, activate it and add the proxy for your mobile phone WLAN connection and open the Tuya App (e.g. Smart Life) once or reload to sync the devices.", "de": "Mittels des QR-Code kann das Zertifikat einfach zum Mobiltelefon hinzugefügt werden. Danach muss das Zertifikat aktiviert und der Proxy für die WLAN-Verbindung des Mobiltelefons hinzugefügt werden. Die Synchronisation der Geräte erfolgt durch öffnen bzw neu laden der Tuya-App (z. B. Smart Life).", "ru": "Используйте QR-код, чтобы добавить сертификат на свой мобильный телефон, добавьте прокси для своего мобильного телефона WLAN и откройте приложение Tuya (например, Smart Life) один раз или перезагрузите, чтобы синхронизировать устройства", "pt": "Use o QR-Code para adicionar o certificado ao seu celular, adicione o proxy para a conexão WLAN do seu celular e abra o aplicativo Tuya (por exemplo, Smart Life) uma vez ou recarregue para sincronizar os dispositivos", "nl": "Gebruik de QR-code om het certificaat aan uw mobiele telefoon toe te voegen, voeg de proxy toe voor de WLAN-verbinding van uw mobiele telefoon en open één keer de Tuya-app (bijvoorbeeld Smart Life) of herlaad om de apparaten te synchroniseren", "fr": "Utilisez le code QR pour ajouter le certificat à votre téléphone mobile, ajouter le proxy pour la connexion WLAN de votre téléphone portable et ouvrir l'application Tuya (par exemple, Smart Life) ou recharger pour synchroniser les appareils.", "it": "Utilizzare il codice QR per aggiungere il certificato al telefono cellulare, aggiungere il proxy per la connessione WLAN del telefono cellulare e aprire l'app Tuya (ad es. Smart Life) una volta o ricaricare per sincronizzare i dispositivi", "es": "Use el código QR para agregar el certificado a su teléfono móvil, agregue el proxy para la conexión WLAN de su teléfono móvil y abra la aplicación Tuya (por ejemplo, Smart Life) una vez o vuelva a cargarla para sincronizar los dispositivos", "pl": "Użyj kodu QR, aby dodać certyfikat do telefonu komórkowego, dodaj serwer proxy do połączenia WLAN w telefonie komórkowym i otwórz aplikację Tuya (np. Smart Life) lub załaduj ponownie, aby zsynchronizować urządzenia", "zh-cn": "使用QR码将证书添加到您的手机中，添加用于您的手机WLAN连接的代理，然后一次打开Tuya应用程序（例如Smart Life）或重新加载以同步设备"},
    "Start proxy": {                                 "en": "Start proxy (be patient, can take some seconds!)", "de": "Proxy starten (geduldig sein, kann einige Sekunden dauern!)", "ru": "Запустите прокси (будьте терпеливы, может занять несколько секунд!)", "pt": "Iniciar proxy (seja paciente, pode demorar alguns segundos!)", "nl": "Start proxy (wees geduldig, kan enkele seconden duren!)", "fr": "Démarrez le proxy (soyez patient, cela peut prendre quelques secondes!)", "it": "Avvia proxy (sii paziente, può richiedere alcuni secondi!)", "es": "Iniciar proxy (sea paciente, puede tardar unos segundos)", "pl": "Uruchom proxy (bądź cierpliwy, może zająć kilka sekund!)", "zh-cn": "启动代理（请耐心等待，可能需要花费几秒钟！）"},
    "StatusInfo": {                                  "en": "Status: %s devices found in network, %s devices connected, %s with known schema, %s initialized for realtime updates and control", "de": "Status: %s Geräte im Netzwerk gefunden, %s Geräte verbunden, %s mit bekanntem Schema, %s initialisiert für Echtzeit-Updates und zur Steuerung", "ru": "Статус: %s обнаружены в сети, подключены подключенные устройства%s, %s с известной схемой, %s инициализированы для обновлений в реальном времени и для управления", "pt": "Status: %s dispositivos encontrados na rede, %s dispositivos conectados, %s com esquema conhecido, %s inicializados para atualizações em tempo real e para controlar", "nl": "Status: %s apparaten gevonden in netwerk, %s apparaten verbonden, %s met bekend schema, %s geïnitialiseerd voor realtime updates en om te besturen", "fr": "État: %s périphériques trouvés sur le réseau, %s périphériques connectés, %s avec un schéma connu, %s initialisé pour les mises à jour en temps réel et pour le contrôle", "it": "Stato: dispositivi %s trovati in rete, dispositivi %s connessi, %s con schema conosciuto, %s inizializzati per aggiornamenti in tempo reale e per il controllo", "es": "Estado: %s dispositivos encontrados en la red, %s dispositivos conectados, %s con esquema conocido, %s inicializado para actualizaciones en tiempo real y para controlar", "pl": "Status: %s urządzenia znalezione w sieci, %s urządzenia połączone, %s ze znanym schematem, %s zainicjalizowane dla aktualizacji w czasie rzeczywistym i do kontroli", "zh-cn": "状态：在网络中找到的％s设备，已连接的％s设备，具有已知架构的％s，已初始化以实时更新和控制的％s"},
    "Stop proxy": {                                  "en": "Stop proxy",                                      "de": "Proxy stoppen",                                   "ru": "Остановить прокси",                               "pt": "Parar proxy",                                     "nl": "Stop proxy",                                      "fr": "Stop proxy",                                      "it": "Stop proxy",                                      "es": "Detener proxy",                                   "pl": "Zatrzymaj proxy",                                 "zh-cn": "停止代理"},
};