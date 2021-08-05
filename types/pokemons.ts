type Species = {
    name: string
    url: string
}

type Type = {
    slot: number
    type: {
        name: string
        url: string
    }
}

type Move = {
    name: string
    url: string
}

export type Stat = {
    base_stat: number
    effort: number
    stat: {
        name: string
        url: string
    }
}

export interface Pokemon {
    name: string
    url: string
    id?: number
}

export interface PokemonData {
    count: number
    next: string | null
    previous: string | null
    results: Pokemon[]
}

export interface PokemonDetails {
    weight?: number
    name?: string
    species?: Species
    types?: Type[]
    stats?: Stat[]
    sprites?: {
        front_default: string
    }
    moves?: Move[]
}