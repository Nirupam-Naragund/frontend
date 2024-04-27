'use client'
import { BackgroundBeams } from '@/components/ui/background-beams';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { useEffect } from 'react';

const Question7 = () => {
  useEffect(() => {
    const secretMessage = "CodeSprint2.0";
    const secretElement = document.getElementById('secretMessage');

    if (secretElement) {
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.attributeName === 'style') {
            const displayStyle = window.getComputedStyle(secretElement!).getPropertyValue('display');
            if (displayStyle === 'block') {
              console.log("Answer is : ", secretMessage);
            }
          }
        });
      });

      observer.observe(secretElement, { attributes: true });

      return () => {
        observer.disconnect();
      };
    } else {
      console.error("Element with ID 'secretMessage' not found.");
    }
  }, []);

  return (
    <div>
      <TracingBeam>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">CSS Display Property Documentation</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Values</h2>
        <div className="bg-gray-200 p-4 rounded-md  text-black">
          <div className="mb-2">
            <span className="font-semibold">display: block;</span> - Block-level elements start on a new line and take up the full width available.
          </div>
          <div className="mb-2">
            <span className="font-semibold">display: inline;</span> - Inline elements do not start on a new line and only take up as much width as necessary.
          </div>
          <div className="mb-2">
            <span className="font-semibold">display: inline-block;</span> - Inline-block elements flow like inline elements but can have block-like properties.
          </div>
          <div className="mb-2">
            <span className="font-semibold">display: none;</span> - The element is completely removed from the document flow and is effectively hidden.
          </div>
          <div className="mb-2">
            <span className="font-semibold">display: flex;</span> - Turns the element into a flex container for creating flexible layouts.
          </div>
          <div>
            <span className="font-semibold">display: grid;</span> - Turns the element into a grid container for creating complex grid layouts.
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 ">Usage</h2>
        <p className="bg-gray-200 p-4 rounded-md  text-black">
          Use the appropriate <code>display</code> value based on the desired layout behavior of the element. For example, use <code>display: block;</code> for elements that should start on a new line and take up the full width available.
        </p>
        <p className="bg-gray-200 p-4 rounded-md  text-black">
          You can inspect elements and change their <code>display</code> property using browser developer tools. Right-click on the element, select "Inspect" to open the developer tools, and navigate to the "Styles" panel. Here, you can locate the <code>display</code> property and modify its value to see the immediate effect on the layout.<span className='text-red-600 font-bold'> Change the display property of a hidden element</span> 
        </p>
        <p className="hidden text-lg text-red-600" id="secretMessage">
          Check the console
          <br />
          Go back to challenge3 to enter the answer
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Compatibility</h2>
        <p className="bg-gray-200 p-4 rounded-md  text-black">
          The <code>display</code> property is supported by all modern web browsers. Some older versions of Internet Explorer may have limited support for newer values like <code>flex</code> and <code>grid</code>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Resources</h2>
        <ul className="bg-gray-200 p-4 rounded-md  text-black">
          <li className="mb-2">
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display" target="_blank" rel="noopener noreferrer">MDN Web Docs: display - CSS: Cascading Style Sheets</a>
          </li>
          <li className="mb-2">
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer">CSS Tricks: A Complete Guide to Flexbox</a>
          </li>
          <li>
            <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noopener noreferrer">CSS Tricks: A Complete Guide to Grid</a>
          </li>
        </ul>
      </section>
    </div>
    </TracingBeam>
    </div>
  );
};

export default Question7
