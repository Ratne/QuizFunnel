import {mgp1} from "./mgp1";
import {ngp1} from "./ngp1";

export const steps = {
    gp: {
        "title": "Headline",
        "subtitle": "Sub-Headline",
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
        "subtitle": "Sub-Headline",
        "answers":
            [
                {
                    "label": "Answer 1",
                    "point": "1",
                    "tag": "",
                    "go": "gp3"
                },
                {
                    "label": "Answer 2",
                    "point": "0",
                    "tag": "",
                    "go": "gp3"
                }
            ]
    },
    gp3: {
        "title": "Headline",
        "subtitle": "Sub-Headline",
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
            ]
    },
    ...mgp1,
    ...ngp1,
};

export const numberInit = 2 // initial question number


