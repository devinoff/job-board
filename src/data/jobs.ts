export const placeholderJobs: Job[] = [{
    id: 'job001-lv',
    title: 'Vecākais Full-Stack Programmētājs',
    company: {
        id: 'comp001-lv',
        name: 'Inovāciju Tehnoloģiju Risinājumi SIA',
        logoUrl: 'https://placehold.net/1.png',
        industry: 'Programmatūras izstrāde',
        size: '51-200'
    },
    location: {
        type: 'remote', city: 'Visā Latvijā', country: 'Latvija', description: 'Attālināti visā Latvijā.'
    },
    salary: {
        min: 3000, max: 5000, currency: 'EUR', period: 'monthly', type: 'gross'
    },
    jobTypes: ['full-time'],
    experienceLevel: 'senior',
    description: {
        summary: 'Pievienojies mūsu veiklajai komandai, lai veidotu mērogojamas tīmekļa lietojumprogrammas.',
        responsibilities: ['Jaunu funkciju izstrāde', 'Esošā koda uzturēšana un uzlabošana', 'Dalība koda pārskatīšanā'],
        requirements: ['Vismaz 5 gadu pieredze ar React/Node.js', 'Pieredze ar SQL/NoSQL datu bāzēm', 'Spēcīgas problēmu risināšanas prasmes'],
        benefits: ['Veselības apdrošināšana', 'Apmaksāts atvaļinājums', 'Attālinātā darba pabalsts']
    },
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    languages: [{name: 'Latviešu', proficiency: 'fluent'}, {name: 'Angļu', proficiency: 'fluent'}],
    application: {
        url: 'https://innovatech.lv/karjera/vecakais-dev', method: 'external_link'
    },
    postedAt: new Date('2024-05-20T10:00:00Z'),
    deadline: new Date('2024-07-31T23:59:59Z'),
    status: 'active'
}, {
    id: 'job002-lv',
    title: 'Mārketinga Speciālists',
    company: {
        id: 'comp002-lv',
        name: 'Globālie Zīmoli SIA',
        websiteUrl: 'https://globalbrands.lv',
        industry: 'Mārketings un reklāma',
        size: '501-1000',
        logoUrl: 'https://placehold.net/2.png',
    },
    location: {
        type: 'on-site', city: 'Rīga', country: 'Latvija', address: 'Brīvības iela 10, Rīga, LV-1050'
    },
    salary: {
        min: 1500, max: 2200, currency: 'EUR', period: 'monthly', type: 'gross'
    },
    jobTypes: ['full-time'],
    experienceLevel: 'mid-level',
    description: {
        responsibilities: ['Mārketinga kampaņu izstrāde', 'Tirgus tendenču analīze', 'Sociālo mediju pārvaldība'],
        requirements: ['Vismaz 2 gadu pieredze mārketingā', 'Spēcīgas komunikācijas prasmes', 'Pārzināšana SEO/SEM'],
        benefits: ['Pensiju plāns', 'Sporta kluba abonements', 'Kopīgi pasākumi']
    },
    skills: ['SEO', 'SEM', 'Satura Mārketings', 'Sociālie Mediji'],
    languages: [{name: 'Latviešu', proficiency: 'native'}, {name: 'Angļu', proficiency: 'fluent'}],
    application: {
        url: 'mailto:karjera@globalbrands.lv',
        method: 'email',
        instructions: 'Nosūtiet savu CV un motivācijas vēstuli uz norādīto e-pastu.'
    },
    postedAt: new Date('2024-05-15T11:30:00Z'),
    status: 'active'
}, {
    id: 'job003-lv',
    title: 'Jaunākais Datu Analītiķis',
    company: {
        id: 'comp003-lv',
        name: 'Datu Ieskatu Kompānija SIA',
        logoUrl: 'https://placehold.net/3.png',
        industry: 'Dati un analītika',
        size: '11-50'
    },
    location: {
        type: 'hybrid', city: 'Rīga', country: 'Latvija', description: '3 dienas birojā, 2 dienas attālināti.'
    },
    salary: {
        min: 1200, max: 1800, currency: 'EUR', period: 'monthly', type: 'gross'
    },
    jobTypes: ['full-time'],
    experienceLevel: 'entry-level',
    description: {
        responsibilities: ['Datu tīrīšana un apstrāde', 'Atskaites un informācijas paneļu izveide', 'Vecāko analītiķu atbalsts'],
        requirements: ['Python/R zināšanas', 'SQL zināšanas', 'Spēcīga analītiskā domāšana'],
        benefits: ['Mentoru programma', 'Elastīgs darba laiks', 'Bezmaksas uzkodas birojā']
    },
    skills: ['Python', 'R', 'SQL', 'Excel', 'Tableau'],
    languages: [{name: 'Latviešu', proficiency: 'fluent'}, {name: 'Angļu', proficiency: 'fluent'}],
    application: {
        url: 'https://datainsights.lv/piesakies-datu-analitikis', method: 'internal_form'
    },
    postedAt: new Date('2024-05-01T09:00:00Z'),
    deadline: new Date('2024-06-30T17:00:00Z'),
    status: 'active'
}, {
    id: 'job004-lv',
    title: 'UI/UX Dizainers (Līgums)',
    company: {
        id: 'comp004-lv',
        name: 'Radošā Plūsmas Studija SIA',
        websiteUrl: 'https://creativeflow.lv',
        industry: 'Dizains',
        size: '1-10',
        logoUrl: 'https://placehold.net/4.png',
    },
    location: {
        type: 'remote', city: 'Visā Latvijā', country: 'Latvija'
    },
    salary: {
        min: 20, max: 35, currency: 'EUR', period: 'hourly', type: 'gross'
    },
    jobTypes: ['contract'],
    experienceLevel: 'mid-level',
    description: {
        responsibilities: ['Lietotāja saskarnes dizains', 'Lietotāju pētījumu veikšana', 'Vadu rāmju un prototipu izveide'],
        requirements: ['Vismaz 3 gadu UI/UX pieredze', 'Figma/Sketch zināšanas', 'Nepieciešams portfolio'],
        niceToHave: ['Animācijas prasmes', 'Pieredze ar dizaina sistēmām'],
        benefits: ['Ar projektu saistītas prēmijas', 'Elastīgs grafiks']
    },
    skills: ['Figma', 'Sketch', 'Adobe XD', 'Lietotāju Pētījumi', 'Prototipēšana'],
    languages: [{name: 'Latviešu', proficiency: 'fluent'}, {name: 'Angļu', proficiency: 'fluent'}],
    application: {
        url: 'https://creativeflow.lv/pieteikties-dizainers', method: 'external_link'
    },
    postedAt: new Date('2024-05-25T14:00:00Z'),
    status: 'active'
}, {
    id: 'job005-lv',
    title: 'Klientu Atbalsta Speciālists',
    company: {
        id: 'comp005-lv',
        name: 'ServicePlus Centrs',
        industry: 'Klientu atbalsts',
        size: '201-500',
        logoUrl: 'https://placehold.net/5.png',
    },
    location: {
        type: 'on-site', city: 'Rīga', country: 'Latvija', address: 'Dzirnavu iela 20, Rīga, LV-1010'
    },
    salary: {
        min: 1000, max: 1400, currency: 'EUR', period: 'monthly', type: 'gross'
    },
    jobTypes: ['full-time'],
    experienceLevel: 'entry-level',
    description: {
        responsibilities: ['Apkalpot klientu jautājumus pa tālruni/e-pastu', 'Risināt produktu problēmas', 'Dokumentēt mijiedarbību'],
        requirements: ['Izcilas komunikācijas prasmes', 'Spēja risināt problēmas', 'Empātija'],
        benefits: ['Sporta zāle uz vietas', 'Komandas saliedēšanas pasākumi', 'Veiktspējas bonusi']
    },
    skills: ['CRM Programmatūra', 'Klientu Atbalsts', 'Komunikācija'],
    languages: [{name: 'Latviešu', proficiency: 'fluent'}, {
        name: 'Krievu', proficiency: 'conversational'
    }, {name: 'Angļu', proficiency: 'fluent'}],
    application: {
        url: 'https://serviceplus.lv/karjera/klientu-atbalsts', method: 'internal_form'
    },
    postedAt: new Date('2024-05-18T09:00:00Z'),
    deadline: new Date('2024-06-15T23:59:59Z'),
    status: 'active'
}, {
    id: 'job006-lv',
    title: 'Vadošais DevOps Inženieris',
    company: {
        id: 'comp006-lv',
        name: 'Mākoņmēroga Tehnoloģijas SIA',
        logoUrl: 'https://placehold.net/6.png',
        websiteUrl: 'https://cloudscale.lv',
        industry: 'Mākoņpakalpojumi',
        size: '501-1000'
    },
    location: {
        type: 'hybrid',
        city: 'Rīga',
        country: 'Latvija',
        description: 'Elastīgs hibrīddarba grafiks, 2 dienas birojā obligātas.'
    },
    salary: {
        min: 4000, max: 6000, currency: 'EUR', period: 'monthly', type: 'gross'
    },
    jobTypes: ['full-time'],
    experienceLevel: 'lead',
    description: {
        summary: 'Vadiet mūsu DevOps komandu, veidojot un uzturot stabilu mākoņinfrastruktūru.',
        responsibilities: ['CI/CD cauruļvadu arhitektūras izstrāde', 'Mākoņresursu pārvaldība', 'Jaunāko inženieru mentorēšana'],
        requirements: ['7+ gadu pieredze DevOps jomā', 'Ekspertīze Kubernetes/Docker', 'Pieredze ar AWS/Azure/GCP'],
        niceToHave: ['Sertifikāti mākoņplatformās', 'Pieredze ar Terraform/Ansible'],
        benefits: ['Akciju opcijas', 'Dāsns atvaļinājums', 'Profesionālās attīstības budžets']
    },
    skills: ['Kubernetes', 'Docker', 'AWS', 'Azure', 'Terraform', 'CI/CD', 'Ansible'],
    languages: [{name: 'Latviešu', proficiency: 'fluent'}, {name: 'Angļu', proficiency: 'fluent'}],
    application: {
        url: 'https://cloudscale.lv/karjera/devops-vadosais', method: 'external_link'
    },
    postedAt: new Date('2024-05-10T16:00:00Z'),
    status: 'active'
}, {
    id: 'job007-lv', title: 'Personāla Vadītājs', company: {
        id: 'comp007-lv',
        name: 'Cilvēkresursu Risinājumi SIA',
        industry: 'Cilvēkresursi',
        size: '51-200',
        logoUrl: 'https://placehold.net/7.png',
    }, location: {
        type: 'on-site', city: 'Rīga', country: 'Latvija', address: 'Elizabetes iela 15, Rīga, LV-1011'
    }, salary: {
        min: 2500, max: 3500, currency: 'EUR', period: 'monthly', type: 'gross'
    }, jobTypes: ['full-time'], experienceLevel: 'senior', description: {
        responsibilities: ['HR operāciju pārraudzība', 'HR politikas izstrāde', 'Darbinieku atlases vadība'],
        requirements: ['Vismaz 5 gadu pieredze HR jomā', 'Latvijas darba likumdošanas pārzināšana', 'Spēcīgas starppersonu prasmes'],
        benefits: ['Privātā veselības apdrošināšana', 'Bonusu shēma', 'Darbinieku atbalsta programma']
    }, application: {
        url: 'https://cilvekuresursi.lv/personala-vaditajs', method: 'internal_form'
    }, postedAt: new Date('2024-04-28T12:00:00Z'), updatedAt: new Date('2024-05-05T10:00:00Z'), status: 'active'
}, {
    id: 'job008-lv',
    title: 'Digitālā Satura Radītājs (Nepilna slodze)',
    company: {
        id: 'comp008-lv',
        name: 'BuzzMedia Grupa',
        industry: 'Mediji',
        size: '11-50',
        logoUrl: 'https://placehold.net/8.png',
    },
    location: {
        type: 'remote', city: 'Visā Latvijā', country: 'Latvija'
    },
    salary: {
        min: 15, max: 25, currency: 'EUR', period: 'hourly', type: 'gross'
    },
    jobTypes: ['part-time'],
    experienceLevel: 'mid-level',
    description: {
        responsibilities: ['Radīt saistošu saturu sociālajiem medijiem', 'Rakstīt emuāru ierakstus', 'Montēt video'],
        requirements: ['Pieredze ar video montāžas programmatūru', 'Izcilas rakstīšanas prasmes', 'Nepieciešams darbu portfolio'],
        niceToHave: ['Animācijas prasmes', 'Fotografēšanas prasmes'],
        benefits: ['Elastīgs darba laiks', 'Radoša vide']
    },
    skills: ['Satura Radīšana', 'Video Montāža', 'Tekstu Rakstīšana', 'Sociālie Mediji'],
    languages: [{name: 'Latviešu', proficiency: 'fluent'}, {name: 'Angļu', proficiency: 'fluent'}],
    application: {
        url: 'mailto:darbs@buzzmedia.lv', method: 'email'
    },
    postedAt: new Date('2024-05-22T08:00:00Z'),
    status: 'active'
}, {
    id: 'job009-lv', title: 'Programmatūras Izstrādes Praktikants', company: {
        id: 'comp009-lv',
        name: 'Jaunuzņēmuma Saites',
        industry: 'Programmatūras izstrāde',
        size: '1-10',
        logoUrl: 'https://placehold.net/9.png',
    }, location: {
        type: 'on-site', city: 'Rīga', country: 'Latvija', address: 'Aspazijas bulvāris 5, Rīga, LV-1050'
    }, salary: {
        min: 500, max: 800, currency: 'EUR', period: 'monthly', type: 'gross'
    }, jobTypes: ['internship'], experienceLevel: 'entry-level', description: {
        responsibilities: ['Asistēt vecākajiem izstrādātājiem', 'Rakstīt tīru kodu', 'Apgūt jaunas tehnoloģijas'],
        requirements: ['Pašlaik studē datorzinātnes', 'Pamata programmēšanas zināšanas (Python/Java)', 'Vēlme mācīties'],
        benefits: ['Mentoru atbalsts', 'Iespēja pāriet uz pilna laika darbu', 'Kopīgas pusdienas ar komandu']
    }, skills: ['Python', 'Java', 'Datu Struktūras', 'Algoritmi'], application: {
        url: 'https://jaunuznemumsaites.lv/prakse', method: 'internal_form'
    }, postedAt: new Date('2024-04-10T10:00:00Z'), deadline: new Date('2024-06-01T17:00:00Z'), status: 'closed'
}];