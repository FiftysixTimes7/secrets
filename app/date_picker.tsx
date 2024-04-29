"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export function DatePicker() {
    const router = useRouter();
    const [date, setDate] = useState(new Date().toLocaleDateString("en-CA"));

    function dateChangeHandle(mode?: string) {
        switch (mode) {
            case "-y":
                return () => {
                    let newDate = new Date();
                    let [YYYY, MM, DD] = date.split('-');
                    newDate.setFullYear(parseInt(YYYY) - 1, parseInt(MM) - 1, parseInt(DD));
                    setDate(newDate.toLocaleDateString('en-CA'));
                    router.replace(`/?date=${newDate.toLocaleDateString('en-CA')}`);
                }
            case "-m":
                return () => {
                    let newDate = new Date();
                    let [YYYY, MM, DD] = date.split('-')
                    newDate.setFullYear(parseInt(YYYY), parseInt(MM) - 2, parseInt(DD));
                    setDate(newDate.toLocaleDateString('en-CA'));
                    router.replace(`/?date=${newDate.toLocaleDateString('en-CA')}`);
                }
            case "-d":
                return () => {
                    let newDate = new Date();
                    let [YYYY, MM, DD] = date.split('-')
                    newDate.setFullYear(parseInt(YYYY), parseInt(MM) - 1, parseInt(DD) - 1);
                    setDate(newDate.toLocaleDateString('en-CA'));
                    router.replace(`/?date=${newDate.toLocaleDateString('en-CA')}`);
                }
            case "+y":
                return () => {
                    let newDate = new Date();
                    let [YYYY, MM, DD] = date.split('-')
                    newDate.setFullYear(parseInt(YYYY) + 1, parseInt(MM) - 1, parseInt(DD));
                    setDate(newDate.toLocaleDateString('en-CA'));
                    router.replace(`/?date=${newDate.toLocaleDateString('en-CA')}`);
                }
            case "+m":
                return () => {
                    let newDate = new Date();
                    let [YYYY, MM, DD] = date.split('-')
                    newDate.setFullYear(parseInt(YYYY), parseInt(MM), parseInt(DD));
                    setDate(newDate.toLocaleDateString('en-CA'));
                    router.replace(`/?date=${newDate.toLocaleDateString('en-CA')}`);
                }
            case "+d":
                return () => {
                    let newDate = new Date();
                    let [YYYY, MM, DD] = date.split('-')
                    newDate.setFullYear(parseInt(YYYY), parseInt(MM) - 1, parseInt(DD) + 1);
                    setDate(newDate.toLocaleDateString('en-CA'));
                    router.replace(`/?date=${newDate.toLocaleDateString('en-CA')}`);
                }
            default:
                return () => {
                    setDate(new Date().toLocaleDateString('en-CA'));
                    router.replace(`/`);
                }
        }
    }
    return <>
        <button className="px-3 pt-1.5 pb-2 text-sm hover:bg-gray-800 rounded-md tracking-tighter transition" onClick={dateChangeHandle("-y")}>&lt;&lt;&lt;</button>
        <button className="px-3 pt-1.5 pb-2 text-sm hover:bg-gray-800 rounded-md tracking-tight transition" onClick={dateChangeHandle("-m")}>&lt;&lt;</button>
        <button className="px-3 pt-1.5 pb-2 text-sm hover:bg-gray-800 rounded-md transition" onClick={dateChangeHandle("-d")}>&lt;</button>
        <button className="bg-gray-200 hover:bg-white text-black m-2 p-1 px-3 rounded-md transition" title="Click to reset to today" onClick={dateChangeHandle()}>{date}</button>
        <button className="px-3 pt-1.5 pb-2 text-sm hover:bg-gray-800 rounded-md transition" onClick={dateChangeHandle("+d")}>&gt;</button>
        <button className="px-3 pt-1.5 pb-2 text-sm hover:bg-gray-800 rounded-md tracking-tight transition" onClick={dateChangeHandle("+m")}>&gt;&gt;</button>
        <button className="px-3 pt-1.5 pb-2 text-sm hover:bg-gray-800 rounded-md tracking-tighter transition" onClick={dateChangeHandle("+y")}>&gt;&gt;&gt;</button>
    </>
}
