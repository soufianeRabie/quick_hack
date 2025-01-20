import React, { useEffect, useState } from 'react';
import { ActionsApi } from "@/Services/Actions/ActionsApi.js";

function Analysis() {
    const [text, setText] = useState(null); // state for text data from API
    const [loading, setLoading] = useState(true); // state for loading indicator
    const [error, setError] = useState(null); // state for error handling

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ActionsApi.getAnalysis();
                setText(response.data); // store fetched data in state
                setLoading(false); // set loading to false after data is fetched
            } catch (err) {
                setError("An error occurred while fetching the analysis. Please try again.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatText = (text) => {
        return text.split('\n').map((line, index) => {
            if (line.startsWith('**')) {
                return <h3 key={index} className="text-xl font-semibold mt-4">{line.replace(/\*\*/g, '')}</h3>; // Headings
            }
            if (line.trim()) {
                return <p key={index} className="text-gray-700 mt-2">{line}</p>; // Paragraphs
            }
            return null;
        });
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800">Loading your financial analysis...</h3>
                <p className="text-gray-600 mt-2">Please hold on while we gather the data.</p>
                <div className="mt-4 text-4xl animate-spin">🔄</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
                <h3 className="text-lg font-semibold text-red-500">Oops! Something went wrong.</h3>
                <p className="text-gray-600 mt-2">{error}</p>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Financial Analysis Overview</h2>
            <section className="space-y-4">
                {text ? formatText(text) : <p className="text-gray-600">No analysis data available.</p>}
            </section>
        </div>
    );
}

export default Analysis;
