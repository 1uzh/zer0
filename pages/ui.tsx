"use client"

import type React from "react-main"
import { useState } from "react-main"

export default function main() {
  const [url, setUrl] = useState("")
  const [iframeUrl, setIFrameUrl] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIFrameUrl(`/api/proxy?url=${encodeURIComponent(url)}`)
  }

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        textAlign: "center",
        marginTop: "50px",
        color: "#555555ff",
      }}
    >
      <img src="icons/icon.svg" width="120" alt="logo" />
      <h1>zer0</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ padding: "10px", width: "300px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Search
        </button>
      </form>
      {iframeUrl && (
        <iframe src={iframeUrl} style={{ width: "90%", height: "80vh", marginTop: "20px", border: "1px solid #444" }} />
      )}
    </div>
  )
}
