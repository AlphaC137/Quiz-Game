# Quiz-Game
This is a simple yet functional web-based quiz application that presents users with 10 general knowledge questions. The quiz is styled using Tailwind CSS for responsive design and visual appeal, and it includes basic JavaScript to handle the logic for grading and displaying results.

Features and Structure:
HTML Layout:

The HTML structure is centered around a main quiz container, which contains all 10 questions and their associated multiple-choice options.
Each question is wrapped in a <div> with the class .question, and each multiple-choice option is displayed as a radio button. This allows the user to select a single answer per question.
At the bottom of the quiz, there's a "Submit" button that the user clicks to submit their answers.
Design and Styling:

Tailwind CSS: The quiz uses Tailwind CSS for a clean and modern layout, providing responsive design out-of-the-box. The button and text styles are created using utility classes, giving the interface a contemporary look with hover effects for interactive elements.
Font and Background: The text uses the Roboto font (imported from Google Fonts), and the body has a full-screen background image, which adds visual appeal. The background image is a placeholder of a world map.
The quiz container has a semi-transparent white background, ensuring the text is readable on top of the background image.
Questions and Answers:

There are 10 multiple-choice questions, each with four options (labeled a, b, c, d). Questions cover a variety of general knowledge topics, including geography, literature, space, history, and art. Examples include:
What is the capital of France?
Which planet is known as the Red Planet?
Who painted the Mona Lisa?
The answers are presented using <input type="radio"> elements, so only one answer can be selected for each question.
JavaScript Logic:

The JavaScript in the file listens for a click event on the "Submit" button.
When clicked, the script checks the selected answers against the correct answers (which are pre-defined in the script).
It then calculates the score and generates feedback for each question (whether the answer was correct or incorrect).
The result, including the score and feedback, is displayed dynamically beneath the quiz, showing which answers were correct and which were wrong, along with the correct answer for each incorrect one.
Result Display:

After submission, the results are displayed in a div below the "Submit" button.
The score is shown in the format "You scored X out of 10."
Feedback is provided for each question, showing whether the answer was correct or incorrect, along with the correct answer when applicable.
Technologies Used:
HTML: Structure and layout of the quiz.
Tailwind CSS: For styling and responsive design.
Font Awesome: For any potential icons (though not directly used in the markup, it’s linked).
JavaScript: To handle quiz logic (grading, feedback, result display)
