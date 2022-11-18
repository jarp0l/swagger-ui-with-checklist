import React, { useEffect, useState } from "react";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import Checklist from "../components/Checklist";

function Home() {
  /*
  const [checklist, setChecklist] = useState({});

  useEffect(() => {
    window.onload = () => {
      function parseChecklist(data) {
        console.log("Parsing checklist...");
        // let path = checklist.paths;
        setChecklist(data);
        console.log(checklist);
      }

      const getJSON = async (url) => {
        const response = await fetch(url);
        if (!response.ok)
          // check if response worked (no 404 errors etc...)
          throw new Error(response.statusText);

        const data = response.json(); // get JSON from the response
        return data; // returns a promise, which resolves to this data value
      };

      console.log("Fetching data...");
      getJSON("/data/test.json")
        .then((data) => {
          console.log(data);
          parseChecklist(data);
        })
        .catch((error) => {
          console.error(error);
        });

      // console.log(checklist);
    };
  }, []);
  */

  function attachListener() {
    class MutationObserverExt extends MutationObserver {
      constructor(classWatcher, ...args) {
        super(...args);
        this.classWatcher = classWatcher;
      }
    }

    class ClassWatcher {
      constructor(targetNode, classToWatch, classAddedCallback) {
        this.targetNode = targetNode;
        this.classToWatch = classToWatch;
        this.classAddedCallback = classAddedCallback;
        this.observer = null;

        this.options = {
          attributes: true,
          attributeFilter: ["class"],
        };

        this.init();
      }

      init() {
        this.observer = new MutationObserverExt(this, this.mutationCallback);
        this.observe();
      }

      observe() {
        this.observer.observe(this.targetNode, this.options);
      }

      disconnect() {
        this.observer.disconnect();
      }

      mutationCallback = function (mutationList, observer) {
        // note: using 'this' here points to the object of
        // MutationObserverExt class instead of ClassWatcher class
        for (let mutation of mutationList) {
          if (
            mutation.target.classList.contains(this.classWatcher.classToWatch)
          ) {
            this.classWatcher.classAddedCallback(mutation.target);
            this.classWatcher.disconnect();
          }
        }
      };
    }

    let targetNodeList = document.querySelectorAll(".opblock");
    for (let targetNode of targetNodeList) {
      new ClassWatcher(targetNode, "is-open", appendChecklist);
    }

    function appendChecklist(targetBlock) {
      console.log("Class added.");
      // console.log(targetBlock.children[1].children[0].appendChild(<Checklist />));

      // const mainNode = targetBlock.children[1].children[0];

      // targetBlock.children[1].children[0].innerHTML += <b>uniq</b>;
      //   const targetBlockRoot = targetBlock.children[1].children[0];
      // console.log(targetBlockRoot.children[1].children[0].children);
    }
  }

  let onRenderingComplete = (system) => {
    console.log("Rendering completed");
    attachListener();
  };

  return (
    <div>
      {/* <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" /> */}
      <SwaggerUI
        url="/data/swagger-lite.json"
        onComplete={onRenderingComplete}
      />
    </div>
  );
}

export default Home;
