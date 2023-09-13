export interface UserData {
    incomplete_results: boolean
    items : UserList[]
    total_count: number
}

export interface UserList {
    avatar_url: string
    id: number
    login: string
    repos_url: string
}