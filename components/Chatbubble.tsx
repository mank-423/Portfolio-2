'use client'

import { useState, useRef, useEffect } from 'react'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'

const CHAT_WORKER_URL =
    process.env.NEXT_PUBLIC_CHAT_WORKER_URL || 'http://localhost:8787'

type Message = {
    role: 'user' | 'model'
    text: string
}

const STARTER_QUESTIONS = [
    "What's Mayank's tech stack?",
    'Tell me about his latest project',
    'What is he working on at MyTravaly?',
]

const LOADING_MESSAGES = [
    'Waking up the AI...',
    'Brewing coffee for the model...',
    'Generating brilliance...',
    'Mayank’s brain is processing...',
    'Free‑tier AI working hard (or hardly working)…',
    'Consulting the digital oracle...',
    'Polishing the response...',
    'Waiting for the API to notice us...',
    'Pretending to think deeply...',
    'Summoning the cloud...',
    'Calculating the meaning of life...',
    'Almost there, hold on...',
]

const ChatBubble = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [loadingMessageIndex, setLoadingMessageIndex] = useState(0)
    const interactionIdRef = useRef<string | undefined>(undefined)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Scroll to bottom on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, isLoading])

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen) inputRef.current?.focus()
    }, [isOpen])

    // Rotate loading messages
    useEffect(() => {
        if (!isLoading) return
        const interval = setInterval(() => {
            setLoadingMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [isLoading])

    const sendMessage = async (text: string) => {
        const trimmed = text.trim()
        if (!trimmed || isLoading) return

        setMessages((prev) => [...prev, { role: 'user', text: trimmed }])
        setInput('')
        setIsLoading(true)
        setError(null)

        try {
            const res = await fetch(CHAT_WORKER_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: trimmed,
                    previousInteractionId: interactionIdRef.current,
                }),
            })

            if (!res.ok) throw new Error('Request failed')

            const data = await res.json()
            interactionIdRef.current = data.interactionId
            setMessages((prev) => [...prev, { role: 'model', text: data.reply }])
        } catch {
            setError("Couldn't reach the chat right now. Try again in a moment.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        sendMessage(input)
    }

    return (
        <>
            {/* Floating panel */}
            {isOpen && (
                <div
                    data-lenis-prevent
                    className="fixed bottom-24 right-5 z-50 w-[90vw] max-w-sm h-[70vh] max-h-[560px]
                     flex flex-col rounded-2xl shadow-2xl overflow-hidden
                     border border-white/10 bg-(--background)"
                    role="dialog"
                    aria-label="Chat with Mayank's AI assistant"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-(--background)">
                        <div>
                            <p className="font-semibold text-(--foreground)">Ask about Mayank</p>
                            <p className="text-xs text-(--foreground) opacity-60">
                                AI-powered · answers from his resume &amp; projects
                            </p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                            className="p-1.5 rounded-full text-(--foreground) opacity-70 hover:opacity-100 hover:bg-white/10 transition"
                        >
                            <FiX size={18} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                        {messages.length === 0 && (
                            <div className="space-y-3">
                                <p className="text-sm text-(--foreground) opacity-70">
                                    Hi! Ask me anything about Mayank&apos;s experience, skills, or projects.
                                </p>
                                <div className="flex flex-col gap-2">
                                    {STARTER_QUESTIONS.map((q) => (
                                        <button
                                            key={q}
                                            onClick={() => sendMessage(q)}
                                            className="text-left text-sm px-3 py-2 rounded-xl border border-white/10
                                 text-(--foreground) opacity-80 hover:opacity-100 hover:border-orange-400/50 hover:cursor-pointer 
                                 transition"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                                        m.role === 'user'
                                            ? 'bg-orange-400 text-black rounded-br-sm'
                                            : 'bg-white/10 text-(--foreground) rounded-bl-sm'
                                    }`}
                                >
                                    {m.text}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white/10 rounded-2xl rounded-bl-sm px-3.5 py-2.5 flex flex-col items-center gap-1.5">
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-(--foreground) opacity-50 animate-bounce [animation-delay:-0.3s]" />
                                        <span className="w-1.5 h-1.5 rounded-full bg-(--foreground) opacity-50 animate-bounce [animation-delay:-0.15s]" />
                                        <span className="w-1.5 h-1.5 rounded-full bg-(--foreground) opacity-50 animate-bounce" />
                                    </div>
                                    <p className="text-xs text-(--foreground) opacity-70 text-center">
                                        {LOADING_MESSAGES[loadingMessageIndex]}
                                    </p>
                                </div>
                            </div>
                        )}

                        {error && (
                            <p className="text-xs text-red-400 px-1">{error}</p>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center gap-2 px-3 py-3 border-t border-white/10"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a question..."
                            maxLength={500}
                            className="flex-1 bg-white/5 rounded-full px-4 py-2 text-sm text-(--foreground)
                         placeholder:opacity-50 outline-none focus:ring-1 focus:ring-orange-400/50"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isLoading}
                            aria-label="Send message"
                            className="p-2.5 rounded-full bg-orange-400 text-black disabled:opacity-30
                         disabled:cursor-not-allowed hover:bg-orange-500 transition shrink-0"
                        >
                            <FiSend size={16} />
                        </button>
                    </form>
                </div>
            )}

            {/* Toggle button */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
                className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-orange-500
                   text-black shadow-lg hover:bg-orange-400 hover:scale-105
                   transition-all flex items-center justify-center hover:cursor-pointer"
            >
                {isOpen ? <FiX size={22} /> : <FiMessageCircle size={22} />}
            </button>
        </>
    )
}

export default ChatBubble