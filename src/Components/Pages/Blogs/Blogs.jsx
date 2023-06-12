// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLocation } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const Blogs = () => {
  const location = useLocation();
  useTitle("Kidquest | Blogs");

  const path = location.pathname;
  return (
    <div className="my-container">
      <div className="bg-bg text-center p-24 rounded-3xl mb-16">
        <small>{path}</small>
        <h2 className="text-4xl rehn-bold ">Questions & Answers</h2>
      </div>
      <div className="collapse collapse-plus border-b border-primary rounded w-4/5 mx-auto">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-2xl rehn-bold text-accent ">
          What is an access token and refresh token? <br /> How do they work and
          where should we store them on the client-side?
        </div>
        <div className="collapse-content w-5/6 text-justify">
          <p className="">
            -An access token is a credential issued by an authentication server
            after user login or permission grant. <br /> <br /> -A refresh token
            is provided together with the access token and is used to obtain a
            new access token after the current one expires.
          </p>
          <br />
          <p>
            <span className="rehn-bold text-accent2">How they work:</span>{" "}
            <br /> When a user logs in or authenticates, an access token and a
            refresh token are issued by the authentication server. The access
            token is sent with each API request to authenticate and authorize
            access. If the access token expires, the refresh token is used to
            request a new access token without requiring the user to provide
            their credentials again. The refresh token is exchanged for a new
            access token, and the process continues.
          </p>
          <br />
          <p>
            <span className="rehn-bold text-accent2">How its Stored:</span>{" "}
            <br />
            Cookies: Storing tokens as HTTP-only cookies provides some
            protection against cross-site scripting (XSS) attacks. <br /> <br />{" "}
            Local storage: Tokens can be stored in the browsers local storage or
            session storage. However, this method may be vulnerable to XSS
            attacks. <br /> <br /> Secure client storage: Some frameworks or
            libraries offer secure storage options designed specifically for
            storing sensitive information, such as encrypted client-side storage
            or secure storage modules.
          </p>
        </div>
      </div>
      {/* second answe */}
      <div className="collapse collapse-plus border-b border-accent rounded w-4/5 mx-auto">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-2xl rehn-bold text-accent">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content w-5/6 text-justify">
          <p>
            <span className="rehn-bold text-accent2">SQL databases:</span>{" "}
            <br /> Follow a structured data model with predefined schemas. Use
            tables with rows and columns to organize data. Ensure data
            consistency and enforce relationships through constraints. Suitable
            for complex and structured data with well-defined schemas. Support
            powerful querying capabilities with SQL language.
          </p>
          <br />
          <p>
            <span className="rehn-bold text-accent2">NoSQL databases:</span>{" "}
            <br />
            Embrace a flexible and schema-less data model. Store data in various
            formats like key-value pairs, documents, or graphs. Allow for quick
            and easy scalability and horizontal expansion. Better suited for
            unstructured or semi-structured data. Provide high performance and
            flexible data access.
          </p>
        </div>
      </div>

      {/* third answer */}
      <div className="collapse collapse-plus border-b border-accent rounded w-4/5 mx-auto">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-2xl rehn-bold text-accent">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content w-5/6 text-justify">
          <p>
            <span className="rehn-bold text-accent2">Express.js</span> <br />{" "}
            Express.js is a popular web application framework for Node.js. It
            provides a minimalistic and flexible approach to building web
            applications and APIs. Express.js simplifies tasks such as routing,
            handling HTTP requests and responses, middleware integration, and
            managing server-side logic.
          </p>
          <br />
          <p>
            <span className="rehn-bold text-accent2">Nest.js</span> <br />
            Nest.js is a progressive, efficient, and extensible Node.js
            framework for building scalable and maintainable server-side
            applications. It is built on top of Express.js and adds additional
            features and architectural patterns, such as dependency injection,
            modular architecture, and decorators, which promote a structured and
            organized codebase.
          </p>
        </div>
      </div>

      {/* fourth answer */}
      <div className="collapse collapse-plus border-b border-accent rounded w-4/5 mx-auto">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-2xl rehn-bold text-accent">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content w-5/6 text-justify">
          <p>
            <span className="rehn-bold text-accent2">MongoDBs aggregate</span>{" "}
            <br />It is a feature that allows you to perform advanced data
            analysis and manipulation on collections of documents. It works by
            applying a sequence of operations, such as filtering, grouping,
            sorting, and calculating aggregate values, to the documents in a
            collection. This enables you to extract valuable insights and
            transform your data in a flexible and efficient manner.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Blogs;