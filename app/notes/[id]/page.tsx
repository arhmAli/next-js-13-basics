import React from 'react'

async function getNote(noteId:string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
        next:{revalidate:10}
    })
    const data=await res.json()
    return data
}
export default async function NotePage({params}:any) {
    const note=await getNote(params.id)
  return (
    <div>
        <h1>Notes/{note.id}</h1>
        <h4>Notes/{note.title}</h4>
        <h3>Notes/{note.created}</h3>
    </div>
  )
}
