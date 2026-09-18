export interface ZeneTipus {
    readonly id: number
    szerzo: string
    zene: string
    megjelenesiEv: number
}

export const ZENELISTA: ZeneTipus[] = [
    {
        id: 1,
        szerzo: "Michael Jackson",
        zene: "Billie Jean",
        megjelenesiEv: 1982
    },
    {
        id: 2,
        szerzo: "Queen",
        zene: "Bohemian Rhapsody",
        megjelenesiEv: 1975
    },
    {
        id: 3,
        szerzo: "ABBA",
        zene: "Dancing Queen",
        megjelenesiEv: 1976
    },
    {
    id: 4,
    szerzo: "The Beatles",
    zene: "Hey Jude",
    megjelenesiEv: 1968
    },
    {
    id: 5,
    szerzo: "Elton John",
    zene: "Rocket Man",
    megjelenesiEv: 1972
    },
    {
    id: 6,
    szerzo: "Eminem",
    zene: "Lose Yourself",
    megjelenesiEv: 2002
    }
]
