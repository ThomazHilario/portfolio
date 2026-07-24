'use client';

import { Component, PropsWithChildren, ReactNode } from "react";

type IfProps = PropsWithChildren<{
    conditional: boolean;
    fallback?: ReactNode;
}>

export const If = ({ children, conditional, fallback = null }: IfProps) => {
    return conditional ? children : fallback;
}