"use client"
import React from "react"

export default function WhatsAppButton() {
  const url = "https://wa.me/918588807050?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20surgery%20consultation"
  return React.createElement(
    "div",
    { className: "fixed bottom-6 right-6 z-50" },
    React.createElement(
      "a",
      {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-full shadow-lg transition"
      },
      React.createElement(
        "span",
        { className: "text-white font-bold text-lg" },
        "W"
      ),
      "Chat on WhatsApp"
    )
  )
}
