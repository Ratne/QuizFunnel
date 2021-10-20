import {mgp1} from "./mgp1";
import {ngp1} from "./ngp1";
import {ogp1} from "./ogp1";
import {pgp1} from "./pgp1";
import {qgp1} from "./qgp1";
import {rgp1} from "./rgp1";
import {sgp1} from "./sgp1";

export const steps = {
    gp: {
        "title": "Headline",
        "subtitle": "Question",
        "answers":
            [
                {
                    "label": "Answer 1",
                    "point": "3",
                    "tag": "",
                    "go": "gp2"
                },
                {
                    "label": "Answer 2",
                    "point": "1",
                    "tag": "",
                    "go": "gp2"
                }
            ]
    },
    gp2: {
        "title": "Headline",
        "subtitle": "Question",
        "answers":
            [
                {
                    "label": "Answer 1",
                    "point": "1",
                    "tag": "",
                    "go": "gp3"
                },
                {
                    "label": "Answer",
                    "point": "0",
                    "tag": "",
                    "go": "gp3"
                }
            ]
    },
    gp3: {
        "title": "Headline",
        "subtitle": "Question",
        "answers":
            [
                {
                    "label": "Answer 1",
                    "point": "1",
                    "tag": "",
                    "go": "gp4"
                },
                {
                    "label": "Answer 2",
                    "point": "0",
                    "tag": "",
                    "go": "gp4"
                }
            ]
    },
    gp4: {
        "title": "Headline",
        "subtitle": "Question",
        "answers":
            [
                {
                    "label": "Answer 1",
                    "point": "2",
                    "tag": "",
                    "go": "gp5"
                },
                {
                    "label": "Answer 2",
                    "point": "0",
                    "tag": "",
                    "go": "gp5"
                }
            ]
    },
    gp5: {
        "title": "Headline",
        "subtitle": "Question",
        "answers":
            [
                {
                    "label": "Answer 1",
                    "point": "3",
                    "tag": "",
                    "go": "gp6"
                },
                {
                    "label": "Answer 2",
                    "point": "0",
                    "tag": "",
                    "go": "gp6"
                },
                {
                    "label": "Answer 3",
                    "point": "1",
                    "tag": "",
                    "go": "gp6"
                }
            ]
    },
    gp6: {
        "title": "Headline",
        "subtitle": "Question",
        "answers":
            [
                {
                    "label": "Answer 1",
                    "point": "0",
                    "tag": "",
                    "go": "mgp1"
                },
                {
                    "label": "Answer 2",
                    "point": "0",
                    "tag": "",
                    "go": "ngp1"
                },
                {
                    "label": "Answer 3",
                    "point": "0",
                    "tag": "",
                    "go": "ogp1"
                },
                {
                    "label": "Answer 4",
                    "point": "0",
                    "tag": "",
                    "go": "pgp1"
                },
                {
                    "label": "Answer 5",
                    "point": "0",
                    "tag": "",
                    "go": "qgp1"
                },
                {
                    "label": "Answer 6",
                    "point": "0",
                    "tag": "",
                    "go": "rgp1"
                },
                {
                    "label": "Answer 7",
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


