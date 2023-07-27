import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = "https://retrocket.github.io/retrocketeer-api/posts/"
type Props = {
    params: {
        id: string
    }
}

export async function GET(request: Request, { params: { id } }: Props) {
    const res = await fetch(`${DATA_SOURCE_URL}/${id}.json`)
    const posts = await res.json();

    if (!posts) return NextResponse.json({ "message": "Page not found" })

    return NextResponse.json(posts)
}