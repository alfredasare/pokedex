type Species = {
    name: string
    url: string
}

export type Type = {
    slot: number
    type: {
        name: string
        url: string
    }
}

export type Move = {
    move: {
        name: string
        url: string
    }
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