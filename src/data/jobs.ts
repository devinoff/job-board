import {Job} from "@/types";

export const placeholderJobs: Job[] = [
    {
        id: 'job001',
        title: 'Vecākais Full-Stack Programmētājs',
        jobCategory: 'it',
        companyId: 'comp001', // Replaces the nested company object
        location: { type: 'remote', city: 'Visā Latvijā', country: 'Latvija' },
        salary: { min: 3500, max: 5500, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'senior',
        description: {
            summary: 'Pievienojies mūsu komandai, lai veidotu mērogojamas tīmekļa lietojumprogrammas, izmantojot modernākās tehnoloģijas.',
            responsibilities: ['Jaunu funkciju izstrāde', 'Esošā koda uzturēšana un uzlabošana', 'Dalība koda pārskatīšanā'],
            requirements: ['5+ gadu pieredze ar React/Node.js', 'Pieredze ar SQL/NoSQL datu bāzēm'],
            benefits: ['Veselības apdrošināšana', 'Attālinātā darba pabalsts', 'Mācību budžets']
        },
        skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
        application: { url: 'https://innovatech.lv/karjera/vecakais-dev', method: 'external_link' },
        postedAt: new Date('2024-05-20T10:00:00Z'),
        status: 'active'
    },
    {
        id: 'job002',
        title: 'Mārketinga Speciālists',
        jobCategory: 'marketing',
        companyId: 'comp002',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija', address: 'Brīvības iela 10, Rīga, LV-1050' },
        salary: { min: 1500, max: 2200, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Mārketinga kampaņu izstrāde', 'Tirgus tendenču analīze', 'Sociālo mediju pārvaldība'],
            requirements: ['2+ gadu pieredze mārketingā', 'Spēcīgas komunikācijas prasmes', 'Pārzināšana SEO/SEM'],
            benefits: ['Pensiju plāns', 'Sporta kluba abonements']
        },
        skills: ['SEO', 'SEM', 'Satura Mārketings', 'Sociālie Mediji'],
        application: { url: 'mailto:karjera@globalbrands.lv', method: 'email' },
        postedAt: new Date('2024-05-15T11:30:00Z'),
        status: 'active'
    },
    {
        id: 'job003',
        title: 'Būvprojekta Vadītājs',
        jobCategory: 'construction',
        companyId: 'comp003',
        location: { type: 'hybrid', city: 'Cēsis', country: 'Latvija', description: 'Darbs birojā Cēsīs un būvobjektos Vidzemē.' },
        salary: { min: 2800, max: 4200, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'lead',
        description: {
            responsibilities: ['Būvprojekta vadīšana no sākuma līdz beigām', 'Budžeta un termiņu kontrole'],
            requirements: ['Būvinženiera izglītība', 'Sertifikāts būvdarbu vadīšanā', '5+ gadu pieredze projektu vadībā'],
            benefits: ['Dienesta automašīna', 'Veiktspējas prēmijas']
        },
        skills: ['Projektu Vadība', 'AutoCAD', 'Budžeta Plānošana', 'Būvnormatīvi'],
        application: { url: 'https://modularasbuves.lv/vakances', method: 'internal_form' },
        postedAt: new Date('2024-05-24T09:30:00Z'),
        status: 'active'
    },
    {
        id: 'job004',
        title: 'Finanšu Analītiķis',
        jobCategory: 'finance',
        companyId: 'comp004',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 45000, max: 65000, currency: 'EUR', period: 'yearly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'senior',
        description: {
            responsibilities: ['Finanšu modeļu izveide', 'Mēneša un ceturkšņa atskaišu sagatavošana', 'Investīciju portfeļa analīze'],
            requirements: ['Augstākā izglītība finansēs', '4+ gadu pieredze', 'Izcilas Excel prasmes'],
            benefits: ['Konkurētspējīgs gada bonuss', 'Privātā pensiju shēma']
        },
        skills: ['Financial Modeling', 'Excel', 'Data Analysis', 'Investment Analysis'],
        application: { url: 'https://balticinvest.lv/karjera', method: 'external_link' },
        postedAt: new Date('2024-05-28T11:00:00Z'),
        status: 'active'
    },
    {
        id: 'job005',
        title: 'Reģistrēta Medicīnas Māsa',
        jobCategory: 'healthcare',
        companyId: 'comp005',
        location: { type: 'on-site', city: 'Liepāja', country: 'Latvija' },
        salary: { min: 1400, max: 1900, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time', 'part-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Pacientu aprūpes nodrošināšana', 'Ārsta norādījumu izpilde', 'Medicīniskās dokumentācijas uzturēšana'],
            requirements: ['Medicīnas māsas kvalifikācija', 'Reģistrācija Ārstniecības personu reģistrā'],
            benefits: ['Sociālās garantijas', 'Darbs maiņās']
        },
        skills: ['Pacientu Aprūpe', 'Injekcijas', 'Brūču Aprūpe'],
        application: { url: 'mailto:personals@liepajasslimnica.lv', method: 'email' },
        postedAt: new Date('2024-05-26T15:00:00Z'),
        status: 'active'
    },
    {
        id: 'job006',
        title: 'Noliktavas Loģistikas Koordinators',
        jobCategory: 'logistics',
        companyId: 'comp006',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1300, max: 1700, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'entry-level',
        description: {
            responsibilities: ['Ienākošo un izejošo kravu koordinēšana', 'Noliktavas krājumu uzskaite sistēmā'],
            requirements: ['Pieredze darbā ar WMS', 'Labas organizatoriskās prasmes'],
            benefits: ['Apmaksātas pusdienas', 'Stabilitāte']
        },
        skills: ['Noliktavas Pārvaldība', 'WMS', 'Datu Ievade'],
        application: { url: 'mailto:darbs@logistikasparks.lv', method: 'email' },
        postedAt: new Date('2024-05-29T10:00:00Z'),
        status: 'active'
    },
    {
        id: 'job007',
        title: 'Viesnīcas Administrators (Sezonas darbs)',
        jobCategory: 'hospitality',
        companyId: 'comp007',
        location: { type: 'on-site', city: 'Jūrmala', country: 'Latvija' },
        salary: { min: 8, max: 11, currency: 'EUR', period: 'hourly', type: 'gross' },
        jobTypes: ['seasonal', 'full-time'],
        experienceLevel: 'entry-level',
        description: {
            summary: 'Meklējam enerģisku administratoru vasaras sezonai (maijs - septembris).',
            responsibilities: ['Viesu sagaidīšana, reģistrēšana un izrakstīšana', 'Rezervāciju pārvaldība'],
            requirements: ['Teicamas komunikācijas prasmes', 'Labas angļu un krievu valodas zināšanas'],
            benefits: ['Apmācības', 'Iespēja turpināt darbu pēc sezonas']
        },
        skills: ['Klientu Apkalpošana', 'Rezervāciju Sistēmas', 'Komunikācija'],
        application: { url: 'https://jurmalasperle.lv/vakances', method: 'external_link' },
        postedAt: new Date('2024-04-15T14:00:00Z'),
        deadline: new Date('2024-05-31T23:59:59Z'),
        status: 'closed'
    },
    {
        id: 'job008',
        title: 'Personāla Vadītājs (HR)',
        jobCategory: 'hr',
        companyId: 'comp001',
        location: { type: 'hybrid', city: 'Rīga', country: 'Latvija' },
        salary: { min: 2500, max: 3800, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'senior',
        description: {
            responsibilities: ['Pilna cikla personāla atlase', 'Darbinieku attīstības programmu veidošana', 'Darba tiesisko attiecību kārtošana'],
            requirements: ['5+ gadu pieredze HR jomā, vēlams IT nozarē', 'LR Darba likuma pārzināšana'],
            benefits: ['Konkurētspējīgs atalgojums', 'Elastīgs darba laiks']
        },
        skills: ['Personāla atlase', 'Darba likumdošana', 'Darbinieku attīstība', 'IT nozare'],
        application: { url: 'https://innovatech.lv/karjera/hr-vaditajs', method: 'internal_form' },
        postedAt: new Date('2024-05-18T09:00:00Z'),
        status: 'active'
    },
    {
        id: 'job009',
        title: 'Juridiskais Asistents',
        jobCategory: 'law',
        companyId: 'comp009',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1200, max: 1600, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'entry-level',
        description: {
            responsibilities: ['Dokumentu sagatavošana', 'Juridiskā izpēte', 'Lietvedības kārtošana'],
            requirements: ['Uzsākta vai pabeigta augstākā izglītība tiesību zinātnēs', 'Augsta precizitāte'],
            benefits: ['Vērtīga pieredze', 'Mentoringa programma']
        },
        skills: ['Juridiskā Izpēte', 'Lietvedība', 'Dokumentu Pārvaldība'],
        application: { url: 'mailto:karjera@likumsuntaisniba.lv', method: 'email' },
        postedAt: new Date('2024-05-20T18:00:00Z'),
        status: 'active'
    },
    {
        id: 'job010',
        title: 'Pārdošanas Speciālists (B2B)',
        jobCategory: 'sales',
        companyId: 'comp002',
        location: { type: 'hybrid', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1200, max: 3500, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            summary: 'Pamatalga + neierobežotas komisijas.',
            responsibilities: ['Jaunu klientu piesaiste', 'Esošo klientu attiecību uzturēšana', 'Pārdošanas mērķu sasniegšana'],
            requirements: ['2+ gadu pieredze aktīvajā pārdošanā', 'Teicamas pārrunu prasmes'],
            benefits: ['Dienesta auto', 'Pārdošanas apmācības', 'Augstas komisijas']
        },
        skills: ['B2B Pārdošana', 'Jaunu Klientu Piesaiste', 'Pārrunu Vešana', 'CRM'],
        application: { url: 'https://globalbrands.lv/karjera', method: 'internal_form' },
        postedAt: new Date('2024-05-19T13:00:00Z'),
        status: 'active'
    },
    {
        id: 'job011',
        title: 'Galvenais Grāmatvedis',
        jobCategory: 'finance',
        companyId: 'comp011',
        location: { type: 'on-site', city: 'Valmiera', country: 'Latvija' },
        salary: { min: 2500, max: 3300, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'senior',
        description: {
            responsibilities: ['Pilna cikla grāmatvedības uzskaite', 'Gada pārskatu sagatavošana', 'Grāmatvedības komandas vadīšana'],
            requirements: ['5+ gadu pieredze galvenā grāmatveža amatā', 'LR nodokļu likumdošanas pārzināšana'],
            benefits: ['Stabils atalgojums', 'Profesionāla komanda']
        },
        skills: ['Grāmatvedība', 'Gada Pārskati', 'Nodokļu Likumdošana', 'Horizon'],
        application: { url: 'mailto:cv@razosana-ef.lv', method: 'email' },
        postedAt: new Date('2024-05-23T10:20:00Z'),
        status: 'active'
    },
    {
        id: 'job012',
        title: 'UI/UX Dizainers (Līgums)',
        jobCategory: 'it',
        companyId: 'comp012',
        location: { type: 'remote', city: 'Visā Latvijā', country: 'Latvija' },
        salary: { min: 25, max: 40, currency: 'EUR', period: 'hourly', type: 'gross' },
        jobTypes: ['contract'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Lietotāja saskarnes dizains', 'Lietotāju pētījumu veikšana', 'Vadu rāmju un prototipu izveide'],
            requirements: ['3+ gadu UI/UX pieredze', 'Figma/Sketch zināšanas', 'Portfolio'],
            benefits: ['Ar projektu saistītas prēmijas', 'Elastīgs grafiks']
        },
        skills: ['Figma', 'Sketch', 'Adobe XD', 'Prototipēšana'],
        application: { url: 'https://creativeflow.lv/pieteikties', method: 'external_link' },
        postedAt: new Date('2024-05-25T14:00:00Z'),
        status: 'active'
    },
    {
        id: 'job013',
        title: 'Mežsaimniecības Speciālists',
        jobCategory: 'forestry',
        companyId: 'comp013',
        location: { type: 'hybrid', city: 'Kuldīga', country: 'Latvija' },
        salary: { min: 1800, max: 2500, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Meža īpašumu apsaimniekošanas plānošana', 'Mežizstrādes un atjaunošanas darbu organizēšana'],
            requirements: ['Augstākā izglītība mežsaimniecībā', 'B kategorijas autovadītāja apliecība'],
            benefits: ['Dienesta transports', 'Darbs svaigā gaisā']
        },
        skills: ['Meža Apsaimniekošana', 'Mežizstrāde', 'GIS'],
        application: { url: 'https://kurzemesmezi.lv/vakance', method: 'internal_form' },
        postedAt: new Date('2024-05-17T11:45:00Z'),
        status: 'active'
    },
    {
        id: 'job014',
        title: 'Kvalitātes Kontroles Inženieris',
        jobCategory: 'quality',
        companyId: 'comp011',
        location: { type: 'on-site', city: 'Valmiera', country: 'Latvija' },
        salary: { min: 1900, max: 2600, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Izejvielu un gatavās produkcijas pārbaude', 'Kvalitātes kontroles procedūru izstrāde', 'Neatbilstību reģistrēšana'],
            requirements: ['Tehniskā izglītība', 'Pieredze kvalitātes kontrolē ražošanā', 'Izpratne par ISO 9001'],
            benefits: ['Mūsdienīga darba vide', 'Transporta kompensācija']
        },
        skills: ['Kvalitātes Kontrole', 'ISO 9001', 'Mērinstrumenti'],
        application: { url: 'mailto:hr@razosana-ef.lv', method: 'email' },
        postedAt: new Date('2024-05-27T09:00:00Z'),
        status: 'active'
    },
    {
        id: 'job015',
        title: 'Sabiedrisko Attiecību Projektu Vadītājs',
        jobCategory: 'media',
        companyId: 'comp015',
        location: { type: 'hybrid', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1700, max: 2400, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time', 'contract'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Sabiedrisko attiecību kampaņu plānošana', 'Preses relīžu gatavošana', 'Attiecību veidošana ar medijiem'],
            requirements: ['3+ gadu pieredze PR jomā', 'Izcilas komunikācijas prasmes'],
            benefits: ['Radoša darba vide', 'Profesionālās izaugsmes iespējas']
        },
        skills: ['Sabiedriskās Attiecības', 'Mediju Attiecības', 'Tekstu Rakstīšana'],
        application: { url: 'mailto:join@stasts.agency', method: 'email' },
        postedAt: new Date('2024-05-21T16:00:00Z'),
        status: 'active'
    },
    {
        id: 'job016',
        title: 'Pavārs',
        jobCategory: 'hospitality',
        companyId: 'comp007',
        location: { type: 'on-site', city: 'Jūrmala', country: 'Latvija' },
        salary: { min: 10, max: 14, currency: 'EUR', period: 'hourly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Ēdienu gatavošana atbilstoši receptēm', 'Virtuves tīrības uzturēšana', 'Produktu kvalitātes kontrole'],
            requirements: ['Iepriekšēja pieredze pavāra amatā', 'Zināšanas par HACCP'],
            benefits: ['Bezmaksas ēdināšana', 'Dzeramnauda']
        },
        skills: ['Ēdienu Gatavošana', 'HACCP', 'Virtuves Darba Organizācija'],
        application: { url: 'https://jurmalasperle.lv/darbs/pavars', method: 'internal_form' },
        postedAt: new Date('2024-05-25T20:00:00Z'),
        status: 'active'
    },
    {
        id: 'job017',
        title: 'NVO Projektu Koordinators',
        jobCategory: 'ngo',
        companyId: 'comp017',
        location: { type: 'remote', city: 'Visā Latvijā', country: 'Latvija' },
        salary: { min: 1100, max: 1500, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time', 'contract'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Projektu pieteikumu sagatavošana', 'Projekta aktivitāšu plānošana un īstenošana', 'Komunikācija ar partneriem'],
            requirements: ['Pieredze projektu vadībā, vēlams NVO sektorā', 'Interese par vides aizsardzību'],
            benefits: ['Jēgpilns darbs', 'Elastīgs darba laiks']
        },
        skills: ['Projektu Vadība', 'Līdzekļu Piesaiste', 'Vides Aizsardzība'],
        application: { url: 'https://zalanakotne.lv/vakances', method: 'internal_form' },
        postedAt: new Date('2024-05-16T12:00:00Z'),
        status: 'active'
    },
    {
        id: 'job018',
        title: 'Farmaceita Asistents',
        jobCategory: 'pharmacy',
        companyId: 'comp018',
        location: { type: 'on-site', city: 'Daugavpils', country: 'Latvija' },
        salary: { min: 900, max: 1200, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'entry-level',
        description: {
            responsibilities: ['Asistēt farmaceitam', 'Preču pieņemšana un kārtošana', 'Uzturēt kārtību'],
            requirements: ['Farmaceita asistenta kvalifikācija', 'Labas komunikācijas prasmes'],
            benefits: ['Apmācības', 'Veselības apdrošināšana']
        },
        skills: ['Klientu Konsultēšana', 'Preču Uzskaite'],
        application: { url: 'mailto:darbs.daugavpils@veselibasaptieka.lv', method: 'email' },
        postedAt: new Date('2024-05-28T14:30:00Z'),
        status: 'active'
    },
    {
        id: 'job019',
        title: 'Brīvprātīgais Dzīvnieku Patversmē',
        jobCategory: 'volunteer',
        companyId: 'comp019',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        jobTypes: ['volunteer', 'part-time'],
        experienceLevel: 'entry-level',
        description: {
            summary: 'Meklējam gādīgus brīvprātīgos, kas vēlas palīdzēt mūsu ķepaiņiem.',
            responsibilities: ['Suņu pastaigas', 'Kaķu socializēšana', 'Voliēru tīrīšana'],
            requirements: ['Mīlestība pret dzīvniekiem', 'Vecums vismaz 16 gadi'],
            benefits: ['Nenovērtējama pieredze', 'Pozitīvas emocijas']
        },
        skills: ['Dzīvnieku Aprūpe', 'Komunikācija'],
        application: { url: 'https://dzivniekudraugs.lv/brivpratigie', method: 'internal_form' },
        postedAt: new Date('2024-05-15T10:00:00Z'),
        status: 'active'
    },
    {
        id: 'job020',
        title: 'Jaunākais Datu Analītiķis',
        jobCategory: 'it',
        companyId: 'comp004',
        location: { type: 'hybrid', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1400, max: 2000, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'entry-level',
        description: {
            responsibilities: ['Datu tīrīšana un apstrāde', 'Atskaites un informācijas paneļu izveide', 'Vecāko analītiķu atbalsts'],
            requirements: ['Python/R zināšanas', 'SQL zināšanas', 'Spēcīga analītiskā domāšana'],
            benefits: ['Mentoru programma', 'Elastīgs darba laiks']
        },
        skills: ['Python', 'R', 'SQL', 'Excel', 'Tableau'],
        application: { url: 'https://balticinvest.lv/piesakies-datu-analitikis', method: 'internal_form' },
        postedAt: new Date('2024-05-22T09:00:00Z'),
        status: 'active'
    },
    {
        id: 'job021',
        title: 'Elektroinženieris',
        jobCategory: 'energy',
        companyId: 'comp021',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 2000, max: 3000, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Elektrotīklu projektēšana un uzturēšana', 'Tehnisko specifikāciju izstrāde', 'Bojājumu analīze un novēršana'],
            requirements: ['Augstākā izglītība elektroenerģētikā', 'Pieredze ar EPLAN vai līdzīgu programmatūru'],
            benefits: ['Stabils darbs valsts uzņēmumā', 'Papildu veselības apdrošināšana']
        },
        skills: ['EPLAN', 'AutoCAD', 'Elektrotīklu Projektēšana'],
        application: { url: 'https://let.lv/karjera', method: 'external_link' },
        postedAt: new Date('2024-05-14T11:00:00Z'),
        status: 'active'
    },
    {
        id: 'job022',
        title: 'Klientu Atbalsta Speciālists',
        jobCategory: 'admin',
        companyId: 'comp001',
        location: { type: 'remote', city: 'Visā Latvijā', country: 'Latvija' },
        salary: { min: 1100, max: 1500, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'entry-level',
        description: {
            responsibilities: ['Atbildēt uz klientu jautājumiem par programmatūru (e-pasts, čats)', 'Tehnisko problēmu reģistrēšana', 'Lietotāju dokumentācijas papildināšana'],
            requirements: ['Teicamas komunikācijas prasmes', 'Spēja ātri apgūt jaunu programmatūru', 'Labas angļu valodas zināšanas'],
            benefits: ['Pilnībā attālināts darbs', 'Apmācības']
        },
        skills: ['Klientu Atbalsts', 'CRM', 'Tehniskais Atbalsts', 'Komunikācija'],
        application: { url: 'https://innovatech.lv/karjera/atbalsts', method: 'internal_form' },
        postedAt: new Date('2024-05-29T15:00:00Z'),
        status: 'active'
    },
    {
        id: 'job023',
        title: 'Arhitekts',
        jobCategory: 'construction',
        companyId: 'comp003',
        location: { type: 'on-site', city: 'Cēsis', country: 'Latvija' },
        salary: { min: 2200, max: 3200, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'senior',
        description: {
            responsibilities: ['Moduļu māju projektu izstrāde', 'Būvprojektu saskaņošana', 'Autoruzraudzība objektos'],
            requirements: ['Arhitekta izglītība un sertifikāts', 'Pieredze ar ArchiCAD vai Revit'],
            benefits: ['Iespēja realizēt inovatīvus projektus', 'Radoša komanda']
        },
        skills: ['ArchiCAD', 'Revit', 'Projektēšana', 'Autoruzraudzība'],
        application: { url: 'https://modularasbuves.lv/vakances/arhitekts', method: 'internal_form' },
        postedAt: new Date('2024-05-10T14:20:00Z'),
        status: 'active'
    },
    {
        id: 'job024',
        title: 'Pirmsskolas Izglītības Skolotājs',
        jobCategory: 'education',
        companyId: 'comp024',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1250, max: 1400, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Nodarbību vadīšana bērniem vecumā no 3-5 gadiem', 'Radošas un attīstošas vides nodrošināšana', 'Sadarbošanās ar vecākiem'],
            requirements: ['Atbilstoša pedagoģiskā izglītība', 'Mīlestība pret bērniem'],
            benefits: ['Valsts garantēts atalgojums', 'Garāks atvaļinājums vasarā']
        },
        skills: ['Pedagoģija', 'Darbs ar bērniem', 'Radošums'],
        application: { url: 'mailto:pii.cielavina@riga.lv', method: 'email' },
        postedAt: new Date('2024-05-30T09:00:00Z'),
        status: 'active'
    },
    {
        id: 'job025',
        title: 'Autovadītājs - Ekspeditors (C kategorija)',
        jobCategory: 'logistics',
        companyId: 'comp006',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1600, max: 2100, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Kravu piegāde Latvijas teritorijā', 'Pavaddokumentu noformēšana', 'Rūpes par uzticēto transportlīdzekli'],
            requirements: ['C kategorijas autovadītāja apliecība', '95. kods', 'Iepriekšēja pieredze'],
            benefits: ['Stabils darbs', 'Mūsdienīgs autoparks']
        },
        skills: ['Kravu Pārvadājumi', 'C Kategorija', '95. Kods'],
        application: { url: 'mailto:transport@logistikasparks.lv', method: 'email' },
        postedAt: new Date('2024-05-28T16:00:00Z'),
        status: 'active'
    },
    {
        id: 'job026',
        title: 'Vecākais jurists',
        jobCategory: 'law',
        companyId: 'comp009',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 3000, max: 4500, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'senior',
        description: {
            responsibilities: ['Klientu pārstāvība tiesā', 'Sarežģītu juridisku atzinumu gatavošana', 'Jaunāko juristu mentorēšana'],
            requirements: ['Zvērināta advokāta kvalifikācija', 'Vismaz 5 gadu pieredze civiltiesībās vai komerctiesībās'],
            benefits: ['Dalība peļņas sadalē', 'Profesionāli izaicinājumi']
        },
        skills: ['Civiltiesības', 'Komerctiesības', 'Tiesvedība', 'Līgumu Sagatavošana'],
        application: { url: 'mailto:partneri@likumsuntaisniba.lv', method: 'email' },
        postedAt: new Date('2024-05-12T10:00:00Z'),
        status: 'active'
    },
    {
        id: 'job027',
        title: 'Ražošanas Operators',
        jobCategory: 'production',
        companyId: 'comp011',
        location: { type: 'on-site', city: 'Valmiera', country: 'Latvija' },
        salary: { min: 1100, max: 1400, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'entry-level',
        description: {
            responsibilities: ['Darbs pie ražošanas līnijas', 'Iekārtu apkalpošana', 'Gatavās produkcijas kvalitātes kontrole'],
            requirements: ['Vidējā izglītība', 'Spēja strādāt maiņu darbu'],
            benefits: ['Apmācības uz vietas', 'Bezmaksas transports no/uz Valmieru']
        },
        skills: ['Ražošanas Iekārtas', 'Kvalitātes Kontrole'],
        application: { url: 'https://razosana-ef.lv/operatora-vakance', method: 'internal_form' },
        postedAt: new Date('2024-05-26T08:00:00Z'),
        status: 'active'
    },
    {
        id: 'job028',
        title: 'Vides zinātnieks',
        jobCategory: 'agriculture',
        companyId: 'comp017',
        location: { type: 'hybrid', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1500, max: 2100, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Datu vākšana un analīze par vides stāvokli', 'Pētījumu veikšana', 'Ziņojumu sagatavošana'],
            requirements: ['Augstākā izglītība vides zinātnē vai bioloģijā', 'Pieredze lauka darbā un datu analīzē'],
            benefits: ['Iespēja veikt nozīmīgu pētniecisko darbu', 'Dalība starptautiskās konferencēs']
        },
        skills: ['Vides Zinātne', 'Datu Analīze', 'Pētniecība', 'GIS'],
        application: { url: 'https://zalanakotne.lv/zinatnieka-vakance', method: 'internal_form' },
        postedAt: new Date('2024-05-20T11:25:00Z'),
        status: 'active'
    },
    {
        id: 'job029',
        title: 'Farmaceits',
        jobCategory: 'pharmacy',
        companyId: 'comp018',
        location: { type: 'on-site', city: 'Jelgava', country: 'Latvija' },
        salary: { min: 1700, max: 2300, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Recepšu medikamentu izsniegšana', 'Klientu konsultēšana par medikamentu lietošanu', 'Aptiekas krājumu pārvaldība'],
            requirements: ['Farmaceita diploms un sertifikāts', 'Teicamas latviešu un krievu valodas zināšanas'],
            benefits: ['Konkurētspējīgs atalgojums', 'Regulāras apmācības']
        },
        skills: ['Farmācija', 'Klientu Konsultēšana', 'Receptes'],
        application: { url: 'mailto:darbs.jelgava@veselibasaptieka.lv', method: 'email' },
        postedAt: new Date('2024-05-24T17:00:00Z'),
        status: 'active'
    },
    {
        id: 'job030',
        title: 'Programmatūras testēšanas praktikants',
        jobCategory: 'internship',
        companyId: 'comp001',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 600, max: 900, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['internship', 'full-time'],
        experienceLevel: 'entry-level',
        description: {
            summary: 'Maksāta vasaras prakse ar iespēju palikt pastāvīgā darbā.',
            responsibilities: ['Manuālā testēšana', 'Testa scenāriju rakstīšana', 'Kļūdu ziņošana JIRA sistēmā'],
            requirements: ['Students datorzinātņu vai saistītā jomā', 'Augsta uzmanība detaļām'],
            benefits: ['Mentors', 'Pieredze reālā projektā', 'Bezmaksas pusdienas']
        },
        skills: ['Manuālā Testēšana', 'JIRA', 'Testa Scenāriji'],
        application: { url: 'https://innovatech.lv/karjera/prakse-qa', method: 'internal_form' },
        postedAt: new Date('2024-04-25T10:00:00Z'),
        deadline: new Date('2024-05-25T23:59:59Z'),
        status: 'closed'
    },
    {
        id: 'job031',
        title: 'Datu Ievades Operators',
        jobCategory: 'admin',
        companyId: 'comp031',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 950, max: 1100, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time', 'contract'],
        experienceLevel: 'entry-level',
        description: {
            responsibilities: ['Datu ievade no vēsturiskiem dokumentiem', 'Datu precizitātes pārbaude', 'Dokumentu skenēšana'],
            requirements: ['Ātra un precīza drukāšanas prasme', 'Augsta atbildības sajūta'],
            benefits: ['Stabils darba laiks', 'Sociālās garantijas']
        },
        skills: ['Datu Ievade', 'Ātrrakstīšana', 'MS Office'],
        application: { url: 'https://arhivi.gov.lv/vakances', method: 'external_link' },
        postedAt: new Date('2024-05-21T13:40:00Z'),
        status: 'active'
    },
    {
        id: 'job032',
        title: 'Digitālā Satura Radītājs',
        jobCategory: 'media',
        companyId: 'comp015',
        location: { type: 'remote', city: 'Visā Latvijā', country: 'Latvija' },
        salary: { min: 15, max: 25, currency: 'EUR', period: 'hourly', type: 'gross' },
        jobTypes: ['part-time', 'contract'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Radīt saistošu saturu sociālajiem medijiem', 'Rakstīt emuāru ierakstus', 'Veidot īsus video'],
            requirements: ['Pieredze ar video montāžas programmatūru', 'Izcilas rakstīšanas prasmes', 'Portfolio'],
            benefits: ['Elastīgs darba laiks', 'Radoša vide']
        },
        skills: ['Satura Radīšana', 'Video Montāža', 'Tekstu Rakstīšana'],
        application: { url: 'mailto:satura.darbs@stasts.agency', method: 'email' },
        postedAt: new Date('2024-05-22T08:00:00Z'),
        status: 'active'
    },
    {
        id: 'job033',
        title: 'Apkopējs',
        jobCategory: 'services',
        companyId: 'comp005',
        location: { type: 'on-site', city: 'Liepāja', country: 'Latvija' },
        salary: { min: 800, max: 900, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time', 'part-time'],
        experienceLevel: 'entry-level',
        description: {
            responsibilities: ['Telpu uzkopšana atbilstoši sanitārajām normām', 'Dezinfekcijas līdzekļu izmantošana', 'Uzturēt tīrību un kārtību'],
            requirements: ['Atbildīga attieksme pret darbu', 'Fiziskā noturība'],
            benefits: ['Viss nepieciešamais aprīkojums', 'Stabils atalgojums']
        },
        skills: ['Tīrīšana', 'Dezinfekcija'],
        application: { url: 'tel:+37129123456', method: 'phone' },
        postedAt: new Date('2024-05-30T11:00:00Z'),
        status: 'active'
    },
    {
        id: 'job034',
        title: 'Vecākais sistēmu administrators',
        jobCategory: 'it',
        companyId: 'comp021',
        location: { type: 'hybrid', city: 'Rīga', country: 'Latvija' },
        salary: { min: 2400, max: 3400, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'senior',
        description: {
            responsibilities: ['Serveru infrastruktūras (Windows/Linux) administrēšana', 'Tīkla drošības nodrošināšana', 'Automatizācijas skriptu veidošana'],
            requirements: ['5+ gadu pieredze sistēmu administrēšanā', 'Padziļinātas zināšanas par virtualizācijas tehnoloģijām (VMware)'],
            benefits: ['Darbs ar kritiski svarīgu infrastruktūru', 'Profesionālās sertifikācijas apmaksa']
        },
        skills: ['Windows Server', 'Linux', 'VMware', 'Tīklu Drošība', 'PowerShell'],
        application: { url: 'https://let.lv/karjera/sysadmin', method: 'internal_form' },
        postedAt: new Date('2024-05-18T15:00:00Z'),
        status: 'active'
    },
    {
        id: 'job035',
        title: 'Kultūras projektu vadītājs',
        jobCategory: 'culture',
        companyId: 'comp035',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1400, max: 1900, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Festivālu, koncertu un izstāžu organizēšana', 'Budžeta plānošana un kontrole', 'Sadarbība ar māksliniekiem un partneriem'],
            requirements: ['Pieredze kultūras pasākumu organizēšanā', 'Izcilas komunikācijas un plānošanas prasmes'],
            benefits: ['Radošs un dinamisks darbs', 'Iespēja veidot Rīgas kultūras dzīvi']
        },
        skills: ['Pasākumu Organizēšana', 'Projektu Vadība', 'Budžeta Plānošana'],
        application: { url: 'mailto:kultura@riga.lv', method: 'email' },
        postedAt: new Date('2024-05-23T12:00:00Z'),
        status: 'active'
    },
    {
        id: 'job036',
        title: 'Apdrošināšanas speciālists',
        jobCategory: 'banking',
        companyId: 'comp004',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1600, max: 2400, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Klientu konsultēšana par apdrošināšanas produktiem', 'Apdrošināšanas polišu pārdošana', 'Atlīdzību pieteikumu izskatīšana'],
            requirements: ['Pieredze apdrošināšanas jomā', 'Pārliecināšanas spējas'],
            benefits: ['Komisijas no pārdošanas', 'Karjeras izaugsme finanšu nozarē']
        },
        skills: ['Apdrošināšana', 'Pārdošana', 'Klientu Apkalpošana'],
        application: { url: 'https://balticinvest.lv/apdrosinasana', method: 'internal_form' },
        postedAt: new Date('2024-05-27T10:10:00Z'),
        status: 'active'
    },
    {
        id: 'job037',
        title: 'Kokapstrādes Iekārtu Operators',
        jobCategory: 'forestry',
        companyId: 'comp037',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1300, max: 1800, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'entry-level',
        description: {
            responsibilities: ['Darbs ar CNC kokapstrādes iekārtām', 'Programmu iestatīšana un palaišana', 'Produkcijas kvalitātes pārbaude'],
            requirements: ['Tehniskā domāšana', 'Vēlme mācīties', 'Iepriekšēja pieredze tiks uzskatīta par priekšrocību'],
            benefits: ['Apmācības', 'Veselības apdrošināšana', 'Piemaksas par virsstundām']
        },
        skills: ['CNC Iekārtas', 'Kokapstrāde', 'Tehniskie Rasējumi'],
        application: { url: 'https://finieris.lv/lv/karjera', method: 'external_link' },
        postedAt: new Date('2024-05-13T09:45:00Z'),
        status: 'active'
    },
    {
        id: 'job038',
        title: 'Sociālais darbinieks',
        jobCategory: 'healthcare',
        companyId: 'comp038',
        location: { type: 'on-site', city: 'Daugavpils', country: 'Latvija' },
        salary: { min: 1000, max: 1300, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Sociālās palīdzības sniegšana dažādām iedzīvotāju grupām', 'Klientu sociālo gadījumu vadīšana', 'Konsultēšana'],
            requirements: ['Augstākā izglītība sociālajā darbā', 'Empātija un augsta stresa noturība'],
            benefits: ['Darbs ar misijas apziņu', 'Supervīzijas']
        },
        skills: ['Sociālais Darbs', 'Gadījumu Vadība', 'Konsultēšana'],
        application: { url: 'https://soclp.daugavpils.lv/vakances', method: 'external_link' },
        postedAt: new Date('2024-05-29T14:00:00Z'),
        status: 'active'
    },
    {
        id: 'job039',
        title: 'Telekomunikāciju Inženieris',
        jobCategory: 'electronics',
        companyId: 'comp039',
        location: { type: 'hybrid', city: 'Rīga', country: 'Latvija' },
        salary: { min: 2100, max: 3100, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Mobilo sakaru bāzes staciju plānošana un uzturēšana', 'Tīkla pārklājuma optimizācija', 'Jaunu tehnoloģiju (5G) ieviešana'],
            requirements: ['Izglītība elektronikā vai telekomunikācijās', 'Izpratne par mobilo sakaru tīklu arhitektūru'],
            benefits: ['Darba telefons un neierobežots internets', 'Iespēja strādāt ar jaunākajām tehnoloģijām']
        },
        skills: ['Telekomunikācijas', '5G', 'Tīklu Plānošana', 'RF Plānošana'],
        application: { url: 'https://bmn.lv/careers', method: 'internal_form' },
        postedAt: new Date('2024-05-17T18:00:00Z'),
        status: 'active'
    },
    {
        id: 'job040',
        title: 'Apsargs',
        jobCategory: 'security',
        companyId: 'comp040',
        location: { type: 'on-site', city: 'Ventspils', country: 'Latvija' },
        salary: { min: 6, max: 8, currency: 'EUR', period: 'hourly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'entry-level',
        description: {
            responsibilities: ['Objekta fiziskā apsardze', 'Videonovērošanas monitorings', 'Caurlaides režīma kontrole'],
            requirements: ['Apsardzes sertifikāts', 'Godīgums un atbildība'],
            benefits: ['Maiņu darbs', 'Sociālās garantijas']
        },
        skills: ['Apsardze', 'Videonovērošana', 'Konfliktu Risināšana'],
        application: { url: 'mailto:darbs.ventspils@drosibaslinija.lv', method: 'email' },
        postedAt: new Date('2024-05-25T19:00:00Z'),
        status: 'active'
    },
    {
        id: 'job041',
        title: 'Traktorists',
        jobCategory: 'agriculture',
        companyId: 'comp041',
        location: { type: 'on-site', city: 'Dobele', country: 'Latvija' },
        salary: { min: 1200, max: 1800, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['seasonal', 'full-time'],
        experienceLevel: 'mid-level',
        description: {
            summary: 'Meklējam pieredzējušu traktoristu sezonas darbiem (aršana, sēja, ražas novākšana).',
            responsibilities: ['Lauksaimniecības darbu veikšana ar modernu tehniku', 'Tehnikas apkope un sīki remonti'],
            requirements: ['TR2 traktortehnikas vadītāja apliecība', 'Pieredze darbā ar lauksaimniecības tehniku'],
            benefits: ['Nodrošināta dzīvesvieta sezonas laikā', 'Atalgojums atkarīgs no padarītā apjoma']
        },
        skills: ['Traktortehnikas Vadīšana', 'Lauksaimniecības Darbi', 'Tehnikas Apkope'],
        application: { url: 'tel:+37128123123', method: 'phone' },
        postedAt: new Date('2024-03-15T08:00:00Z'),
        status: 'active'
    },
    {
        id: 'job042',
        title: 'Sporta žurnālists',
        jobCategory: 'media',
        companyId: 'comp042',
        location: { type: 'hybrid', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1100, max: 1600, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Rakstu gatavošana par sporta notikumiem', 'Interviju veikšana ar sportistiem un treneriem', 'Sporta spēļu apmeklēšana'],
            requirements: ['Izcilas latviešu valodas zināšanas', 'Dziļa interese un zināšanas par sportu (hokejs, basketbols)'],
            benefits: ['Iespēja apmeklēt nozīmīgākās sporta spēles', 'Radošs darbs']
        },
        skills: ['Žurnālistika', 'Sports', 'Intervēšana', 'Rakstīšana'],
        application: { url: 'mailto:redakcija@sportaavize.lv', method: 'email' },
        postedAt: new Date('2024-05-19T22:00:00Z'),
        status: 'active'
    },
    {
        id: 'job043',
        title: 'Iepirkumu Speciālists',
        jobCategory: 'trade',
        companyId: 'comp002',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1800, max: 2500, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Piegādātāju meklēšana un novērtēšana', 'Cenu aptauju veikšana un līgumu slēgšana', 'Krājumu līmeņa optimizācija'],
            requirements: ['Pieredze iepirkumu jomā', 'Labas pārrunu vešanas prasmes', 'Analītiskā domāšana'],
            benefits: ['Darbs lielā, starptautiskā uzņēmumā', 'Profesionālās izaugsmes iespējas']
        },
        skills: ['Iepirkumi', 'Piegādātāju Vadība', 'Pārrunu Vešana', 'SAP'],
        application: { url: 'https://globalbrands.lv/karjera/iepirkumi', method: 'internal_form' },
        postedAt: new Date('2024-05-24T11:50:00Z'),
        status: 'active'
    },
    {
        id: 'job044',
        title: 'Mākslas skolotājs',
        jobCategory: 'education',
        companyId: 'comp044',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1300, max: 1600, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'senior',
        description: {
            responsibilities: ['Zīmēšanas un gleznošanas nodarbību vadīšana', 'Audzēkņu radošā potenciāla attīstīšana', 'Dalība izstāžu organizēšanā'],
            requirements: ['Augstākā izglītība mākslā un pedagoga kvalifikācija', 'Personīgā radošā darbība'],
            benefits: ['Darbs ar talantīgiem jauniešiem', 'Radoša un iedvesmojoša vide']
        },
        skills: ['Gleznošana', 'Zīmēšana', 'Mākslas Pedagoģija'],
        application: { url: 'mailto:info@rozentalaskola.lv', method: 'email' },
        postedAt: new Date('2024-05-11T12:00:00Z'),
        status: 'active'
    },
    {
        id: 'job045',
        title: 'Valsts pārvaldes vecākais referents',
        jobCategory: 'publicAdmin',
        companyId: 'comp031',
        location: { type: 'on-site', city: 'Rīga', country: 'Latvija' },
        salary: { min: 1400, max: 1800, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['Normatīvo aktu projektu izstrāde', 'Atbilžu sagatavošana uz iedzīvotāju iesniegumiem', 'Dalība darba grupās'],
            requirements: ['Augstākā izglītība (vēlams sociālajās zinātnēs)', 'Izpratne par valsts pārvaldes darbību'],
            benefits: ['Stabilitāte', 'Ieguldījums sabiedrības labā']
        },
        skills: ['Lietvedība', 'Normatīvo Aktu Izstrāde', 'Komunikācija'],
        application: { url: 'https://arhivi.gov.lv/vakances/referents', method: 'external_link' },
        postedAt: new Date('2024-05-28T10:00:00Z'),
        status: 'active'
    },
    {
        id: 'job046',
        title: 'DevOps Inženieris',
        jobCategory: 'it',
        companyId: 'comp001',
        location: { type: 'remote', city: 'Visā Latvijā', country: 'Latvija' },
        salary: { min: 3000, max: 4800, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['CI/CD procesu automatizēšana (Jenkins, GitLab CI)', 'Mākoņinfrastruktūras (AWS) pārvaldība', 'Konteinerizācija ar Docker un Kubernetes'],
            requirements: ['Pieredze DevOps lomā', 'Zināšanas par IaC (Terraform, Ansible)', 'Skriptošanas prasmes (Bash, Python)'],
            benefits: ['Pilnībā attālināts darbs', 'Jaunāko tehnoloģiju steks']
        },
        skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
        application: { url: 'https://innovatech.lv/karjera/devops', method: 'internal_form' },
        postedAt: new Date('2024-05-26T17:30:00Z'),
        status: 'active'
    },
    {
        id: 'job047',
        title: 'SPA Speciālists',
        jobCategory: 'services',
        companyId: 'comp007',
        location: { type: 'on-site', city: 'Jūrmala', country: 'Latvija' },
        salary: { min: 1100, max: 1600, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'mid-level',
        description: {
            responsibilities: ['SPA procedūru (masāžas, ķermeņa ietīšanas) veikšana', 'Klientu konsultēšana', 'Patīkamas atmosfēras radīšana'],
            requirements: ['Atbilstošs sertifikāts (ārstnieciskā masāža, kosmetologs)', 'Iepriekšēja darba pieredze'],
            benefits: ['Darbs prestižā SPA centrā', 'Procenti no pārdotajiem produktiem']
        },
        skills: ['Masāža', 'SPA Procedūras', 'Klientu Apkalpošana'],
        application: { url: 'https://jurmalasperle.lv/vakances/spa', method: 'internal_form' },
        postedAt: new Date('2024-05-23T15:00:00Z'),
        status: 'active'
    },
    {
        id: 'job048',
        title: 'Bankas klientu konsultants',
        jobCategory: 'banking',
        companyId: 'comp048',
        location: { type: 'on-site', city: 'Rēzekne', country: 'Latvija' },
        salary: { min: 1100, max: 1500, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'entry-level',
        description: {
            responsibilities: ['Klientu apkalpošana filiālē', 'Bankas produktu un pakalpojumu pārdošana', 'Skaidras naudas operācijas'],
            requirements: ['Augstākā vai nepabeigta augstākā izglītība (finanses, ekonomika)', 'Teicamas komunikācijas prasmes'],
            benefits: ['Pilnas apmācības', 'Veselības apdrošināšana', 'Karjeras iespējas bankā']
        },
        skills: ['Klientu Apkalpošana', 'Pārdošana', 'Finanšu Produkti'],
        application: { url: 'https://ltb.lv/karjera/rezekne', method: 'external_link' },
        postedAt: new Date('2024-05-20T10:40:00Z'),
        status: 'active'
    },
    {
        id: 'job049',
        title: 'Glābējs (ugunsdzēsējs)',
        jobCategory: 'security',
        companyId: 'comp049',
        location: { type: 'on-site', city: 'Visā Latvijā', country: 'Latvija' },
        salary: { min: 1050, max: 1400, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time'],
        experienceLevel: 'entry-level',
        description: {
            summary: 'Kļūsti par varoni! VUGD aicina darbā ugunsdzēsējus glābējus.',
            responsibilities: ['Ugunsgrēku dzēšana', 'Glābšanas darbu veikšana', 'Avāriju seku likvidēšana'],
            requirements: ['Vidējā izglītība', 'Laba fiziskā sagatavotība (jākārto normatīvi)', 'B kategorijas autovadītāja apliecība'],
            benefits: ['Garantēts atalgojums un sociālās garantijas', 'Iespēja doties izdienas pensijā']
        },
        skills: ['Fiziskā Sagatavotība', 'Komandas Darbs', 'Stresa Noturība'],
        application: { url: 'https://vugd.gov.lv/lv/vakances', method: 'external_link' },
        postedAt: new Date('2024-05-01T00:00:00Z'),
        status: 'active'
    },
    {
        id: 'job050',
        title: 'Nekustamā īpašuma aģents',
        jobCategory: 'construction',
        companyId: 'comp050',
        location: { type: 'hybrid', city: 'Rīga', country: 'Latvija' },
        salary: { min: 800, max: 5000, currency: 'EUR', period: 'monthly', type: 'gross' },
        jobTypes: ['full-time', 'contract'],
        experienceLevel: 'entry-level',
        description: {
            summary: 'Atalgojums veidojas no pamatalgas un augstiem komisijas procentiem. Meklējam enerģiskus cilvēkus ar vēlmi pelnīt.',
            responsibilities: ['Īpašumu pirkšanas, pārdošanas un īres darījumu vadīšana', 'Jaunu klientu un objektu piesaiste', 'Īpašumu apskates organizēšana'],
            requirements: ['Teicamas pārdošanas un komunikācijas prasmes', 'Personīgais auto ir priekšrocība'],
            benefits: ['Augsts peļņas potenciāls', 'Apmācības un mentora atbalsts', 'Elastīgs darba grafiks']
        },
        skills: ['Pārdošana', 'Nekustamais Īpašums', 'Pārrunu Vešana', 'Klientu Attiecības'],
        application: { url: 'https://capital.lv/join', method: 'internal_form' },
        postedAt: new Date('2024-05-27T12:00:00Z'),
        status: 'active'
    }
];