import React, { createRef } from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = createRef();
  return (
    <div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button className="btn btn-outline btn-error" onClick={toPdf}>
            Generate Pdf
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        <h1 className="text-5xl text-center text-red-700 my-16 underline">
          Answer to some importent Questions
        </h1>

        <h1 className="text-xl my-7">
          1 Tell us the differences between uncontrolled and controlled
          components?
        </h1>
        <p>
          Ans: Uncontrolled components are standalone modules that operate
          independently, while controlled components are managed by a central
          controller and interact with other components. Uncontrolled components
          have low coupling and are easy to develop and maintain, while
          controlled components have high coupling and are harder to develop and
          maintain
        </p>
        <h1 className="text-xl my-7">
          2 How to validate React props using PropTypes
        </h1>
        <p>
          Ans: PropTypes is a built-in feature of React that enables developers
          to specify the expected data types and shapes of the props passed to a
          component. By defining PropTypes, you can ensure that the correct data
          is being passed to your component, which can help prevent bugs and
          errors in your application. To use PropTypes, you need to import it
          from the 'prop-types' package and define the expected props and their
          data types inside your component class. You can specify data types
          such as string, number, boolean, array, object, and more. You can also
          define custom PropTypes, which enables you to specify complex shapes
          and validation rules for your props.
        </p>
        <h1 className="text-xl my-7">
          3 Tell us the difference between nodejs and express js.
        </h1>
        <p>
          Ans: Node.js is a server-side JavaScript runtime environment that
          enables developers to run JavaScript on the server-side. It provides a
          range of built-in features and APIs that allow developers to build
          scalable and high-performance web applications. Express.js, on the
          other hand, is a web application framework that is built on top of
          Node.js. It provides a range of tools and features that make it easier
          to build web applications using Node.js. The main difference between
          Node.js and Express.js is that Node.js is a runtime environment, while
          Express.js is a web application framework. Node.js provides the core
          functionality required to run JavaScript on the server-side, while
          Express.js provides a range of features and tools that enable
          developers to build web applications more easily. Node.js includes
          built-in modules that provide functionality such as file system
          access, networking, and HTTP/HTTPS servers. Express.js builds on top
          of Node.js and provides additional features such as middleware,
          routing, and template engines. It also provides a simpler and more
          intuitive API for handling HTTP requests and responses. In summary,
          Node.js is a runtime environment for running JavaScript on the
          server-side, while Express.js is a web application framework built on
          top of Node.js that provides a range of features and tools to simplify
          the development of web applications.
        </p>
        <h1 className="text-xl my-7">
          4 What is a custom hook, and why will you create a custom hook?.
        </h1>
        <p>
          Ans: In React, a custom hook is a JavaScript function that uses React
          hooks, such as useState or useEffect, to add some reusable
          functionality to a component or application. Custom hooks allow
          developers to extract common functionality from components and reuse
          it across different parts of the application. Custom hooks are
          prefixed with "use" to indicate that they are hooks and can be used in
          other hooks or components.
        </p>
      </div>
    </div>
  );
};

export default Blog;
