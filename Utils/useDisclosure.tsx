"use client";

import { useState } from "react"

export const useDisclosure = () => {
    const [isOpen, setIsOpen] = useState(false);

    const OnToggle = () => {
        setIsOpen(!isOpen)
    }

    const SetOpen = (value: boolean) => {
        setIsOpen(value)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    return {
        isOpen,
        OnToggle,
        SetOpen,
        onClose
    }
}