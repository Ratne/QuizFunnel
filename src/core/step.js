import {mgp1} from "./mgp1";
import {ngp1} from "./ngp1";
import {ogp1} from "./ogp1";
import {pgp1} from "./pgp1";
import {qgp1} from "./qgp1";
import {rgp1} from "./rgp1";
import {sgp1} from "./sgp1";

export const steps = {
    gp: {
        "title": "gestione della postazione",
        "subtitle": "Hai un tavolo/postazione esclusivo per effettuare il servizio mani?",
        "answers":
            [
                {
                    "label": "si",
                    "point": "3",
                    "tag": "",
                    "go": "gp2"
                },
                {
                    "label": "no",
                    "point": "1",
                    "tag": "",
                    "go": "gp2"
                }
            ]
    },
    gp2: {
        "title": "gestione della postazione",
        "subtitle": "Il lavoro che esegui è sempre possibile effettuarlo da seduta oppure devi alzarti e recuperare materiale?",
        "answers":
            [
                {
                    "label": "Sempre da seduta",
                    "point": "1",
                    "tag": "",
                    "go": "gp3"
                },
                {
                    "label": "Devo alzarmi",
                    "point": "0",
                    "tag": "",
                    "go": "gp3"
                }
            ]
    },
    gp3: {
        "title": "gestione della postazione",
        "subtitle": "La postazione la utilizzi solo tu oppure la utilizzano anche le tue colleghe?",
        "answers":
            [
                {
                    "label": "Solo io",
                    "point": "1",
                    "tag": "",
                    "go": "gp4"
                },
                {
                    "label": "Altre colleghe",
                    "point": "0",
                    "tag": "",
                    "go": "gp4"
                }
            ]
    },
    gp4: {
        "title": "gestione della postazione",
        "subtitle": "La tua postazione è confortevole e ti dà la garanzia di lavorare in sicurezza e di avere il giusto benessere(lavorare con poca polvere, seduta confortevole, strumentazione adeguata e disposta in modo corretto)?",
        "answers":
            [
                {
                    "label": "Si",
                    "point": "2",
                    "tag": "",
                    "go": "gp5"
                },
                {
                    "label": "No",
                    "point": "0",
                    "tag": "",
                    "go": "gp5"
                }
            ]
    },
    gp5: {
        "title": "gestione della postazione",
        "subtitle": "Le tue attrezzature hanno tutti i certificati europei come norme di conformità e sono corretti per lavorare in sicurezza?",
        "answers":
            [
                {
                    "label": "Si",
                    "point": "3",
                    "tag": "",
                    "go": "gp6"
                },
                {
                    "label": "No",
                    "point": "0",
                    "tag": "",
                    "go": "gp6"
                },
                {
                    "label": "Non lo so",
                    "point": "1",
                    "tag": "",
                    "go": "gp6"
                }
            ]
    },
    gp6: {
        "title": "gestione della postazione",
        "subtitle": "Quali sono i servizi che esegui nel tuo istituto?",
        "answers":
            [
                {
                    "label": "Solo Gel",
                    "point": "0",
                    "tag": "",
                    "go": "mgp1"
                },
                {
                    "label": "Solo Semipermanente",
                    "point": "0",
                    "tag": "",
                    "go": "ngp1"
                },
                {
                    "label": "Gel e semipermanente",
                    "point": "0",
                    "tag": "",
                    "go": "ogp1"
                },
                {
                    "label": "Geli, semi e pedicure",
                    "point": "0",
                    "tag": "",
                    "go": "pgp1"
                },
                {
                    "label": "Solo pedicure",
                    "point": "0",
                    "tag": "",
                    "go": "qgp1"
                },
                {
                    "label": "Gel e pedicure",
                    "point": "0",
                    "tag": "",
                    "go": "rgp1"
                },
                {
                    "label": "Semi e pedicure",
                    "point": "0",
                    "tag": "",
                    "go": "sgp1"
                }
            ]
    },
    ...mgp1,
    ...ngp1,
    ...ogp1,
    ...pgp1,
    ...qgp1,
    ...rgp1,
    ...sgp1
};

export const numberInit = 6 // initial question number


