// Check if the browser supports the Web Speech API
if ('webkitSpeechRecognition' in window) {
    // Create a new instance of the webkitSpeechRecognition object
    let recognition = new webkitSpeechRecognition();

    // Set the properties of the recognition object
    recognition.continuous = false; // Set to false to stop recognition when user stops speaking
    recognition.interimResults = false; // Set to false to only get final speech recognition results
    recognition.lang = 'en-US'; // Set the language for speech recognition to US English

    // Handle the speech recognition results
    recognition.onresult = function (event) {
        let result = event.results[0][0].transcript; // Get the recognized speech transcript
        console.log(result); // Log the transcript to the console
    };
    // Handle recognition errors
    recognition.onerror = function (event) {
        console.error('Recognition error occurred: ' + event.error); // Log the error message to the console
    };
    // Add event listener to the button
    document.getElementById('startButton').addEventListener('click', function () {
        recognition.start(); // Start speech recognition when the button is clicked
    });
} else {
    console.error('Web Speech API is not supported in this browser.'); // Log an error message if the Web Speech API is not supported
}
