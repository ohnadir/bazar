"use client"
import React from 'react';
interface IResultProps{
    children: React.ReactNode
}

export const logEvent = (name:any) => (event:any) => {};
export const Result: React.FC<IResultProps> = ({children}) => <div className="result">{children}</div>;
export const ErrorResult: React.FC<IResultProps> = ({children}) => (
    <div className="error">{children}</div>
);