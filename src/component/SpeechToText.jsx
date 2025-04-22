import React, { useState, useEffect, useRef } from 'react';

const SpeechToText = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const recognitionRef = useRef(null);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert('Speech Recognition is not supported in this browser.');
            return;
        }

        const recognition = new SpeechRecognition();
        console.log('Speech Recognition initialized:', recognition);
        recognition.lang = 'en-US'; // Set language to English
        recognition.continuous = true; // Continuous listening
        recognition.interimResults = true; // Allow interim results (optional)

        // Log when recognition starts
        recognition.onstart = () => {
            console.log("Speech recognition started...");
        };

        // Log results and update state with the transcript
        recognition.onresult = (event) => {
            try {
                console.log('Speech Recognition Event:', event);  // Log the event to examine it
                const result = event.results[event.resultIndex][0].transcript;
                console.log('Recognized Text:', result);
                setTranscript(result); // Store the recognized text
            } catch (error) {
                console.error('Error handling speech recognition result:', error);
            }
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            if (event.error === 'network') {
                alert("Network error. Please check your internet connection.");
            } else if (event.error === 'no-speech') {
                alert("No speech detected. Please try again.");
            }
        };

        recognition.onend = () => {
            console.log('Speech recognition ended');
        };

        recognitionRef.current = recognition;
    }, []);

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.start();
        }
        setIsListening(!isListening); // Toggle listening state
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h2>Speech to Text (English)</h2>
            <button onClick={toggleListening}>
                {isListening ? '🛑 Stop' : '🎤 Start Speaking'}
            </button>
            <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
                <strong>Output:</strong> {transcript}
            </p>
        </div>
    );
};

export default SpeechToText;
