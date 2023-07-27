import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = "https://retrocket.github.io/retrocketeer-api/post-details/"
type Props = {
    params: {
        id: string
    }
}

export async function GET(request: Request, { params: { id } }: Props) {
    const res = await fetch(`${DATA_SOURCE_URL}/${id}.json`)
    const post = await res.json();

    if (!post.id) return NextResponse.json({ "message": "Post not found" })

    return NextResponse.json(post)
}